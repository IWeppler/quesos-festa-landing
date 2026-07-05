"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { friendlyError } from "@/lib/errors";
import { uploadImage, deleteImage, storageErrorMessage } from "@/lib/storage";

export type ProductoFormState = { error: string } | undefined;

type ParsedProducto = {
  error: string | null;
  data: {
    nombre: string;
    categoria_id: number;
    descripcion: string | null;
    envase: string | null;
    peso: string | null;
    destacado: boolean;
    orden: number;
  } | null;
};

function parseProductoForm(formData: FormData): ParsedProducto {
  const nombre = String(formData.get("nombre") ?? "").trim();
  const categoriaIdRaw = String(formData.get("categoria_id") ?? "");
  const categoria_id = Number(categoriaIdRaw);
  const descripcion = String(formData.get("descripcion") ?? "").trim() || null;
  const envase = String(formData.get("envase") ?? "").trim() || null;
  const peso = String(formData.get("peso") ?? "").trim() || null;
  const destacado = formData.get("destacado") === "on";
  const orden = Number(formData.get("orden") ?? 0) || 0;

  if (!nombre) return { error: "El nombre es obligatorio.", data: null };
  if (!categoriaIdRaw || Number.isNaN(categoria_id)) {
    return { error: "Elegí una categoría.", data: null };
  }

  return {
    error: null,
    data: { nombre, categoria_id, descripcion, envase, peso, destacado, orden },
  };
}

async function handleImageUpload(formData: FormData): Promise<string | undefined> {
  const file = formData.get("imagen");
  if (!(file instanceof File) || file.size === 0) return undefined;
  return uploadImage("productos", file);
}

export async function createProducto(
  _prevState: ProductoFormState,
  formData: FormData,
): Promise<ProductoFormState> {
  await requireUser();

  const parsed = parseProductoForm(formData);
  if (parsed.error) return { error: parsed.error };

  let imagen_url: string | null = null;
  try {
    imagen_url = (await handleImageUpload(formData)) ?? null;
  } catch (error) {
    console.error("Product image upload failed", error);
    return { error: storageErrorMessage(error) };
  }

  const admin = await createAdminClient();
  const { error } = await admin.from("productos").insert({ ...parsed.data, imagen_url });

  if (error) return { error: friendlyError(error) };

  revalidatePath("/admin/productos");
  revalidatePath("/");
  redirect("/admin/productos");
}

export async function updateProducto(
  id: number,
  _prevState: ProductoFormState,
  formData: FormData,
): Promise<ProductoFormState> {
  await requireUser();

  const parsed = parseProductoForm(formData);
  if (parsed.error) return { error: parsed.error };

  const admin = await createAdminClient();

  let newImagePath: string | undefined;
  try {
    newImagePath = await handleImageUpload(formData);
  } catch (error) {
    console.error("Product image upload failed", error);
    return { error: storageErrorMessage(error) };
  }

  const updatePayload: Record<string, unknown> = { ...parsed.data };
  let oldImagePath: string | null = null;

  if (newImagePath) {
    const { data: existing } = await admin
      .from("productos")
      .select("imagen_url")
      .eq("id", id)
      .single();
    oldImagePath = existing?.imagen_url ?? null;
    updatePayload.imagen_url = newImagePath;
  }

  const { error } = await admin.from("productos").update(updatePayload).eq("id", id);

  if (error) return { error: friendlyError(error) };

  if (newImagePath && oldImagePath) {
    await deleteImage(oldImagePath).catch(() => {});
  }

  revalidatePath("/admin/productos");
  revalidatePath("/");
  redirect("/admin/productos");
}

export async function deleteProducto(id: number) {
  await requireUser();
  const admin = await createAdminClient();

  const { data: existing } = await admin
    .from("productos")
    .select("imagen_url")
    .eq("id", id)
    .single();

  const { error } = await admin.from("productos").delete().eq("id", id);
  if (error) throw new Error(friendlyError(error));

  await deleteImage(existing?.imagen_url ?? null).catch(() => {});

  revalidatePath("/admin/productos");
  revalidatePath("/");
}
