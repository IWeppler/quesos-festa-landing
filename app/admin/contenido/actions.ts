"use server";

import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { uploadImage, deleteImage, storageErrorMessage } from "@/lib/storage";
import type { ContenidoSitioClave } from "@/lib/admin/queries";

export type ContenidoFormState = { error: string } | { ok: true } | undefined;

const CLAVES: ContenidoSitioClave[] = ["hero_desktop", "hero_mobile", "historia"];

export async function updateContenidoImagen(
  clave: ContenidoSitioClave,
  _prevState: ContenidoFormState,
  formData: FormData,
): Promise<ContenidoFormState> {
  await requireUser();

  if (!CLAVES.includes(clave)) return { error: "Sección inválida." };

  const file = formData.get("imagen");
  if (!(file instanceof File) || file.size === 0) {
    return { error: "Elegí una imagen para subir." };
  }

  let path: string;
  try {
    path = await uploadImage("sitio", file);
  } catch (error) {
    console.error("Contenido sitio image upload failed", error);
    return { error: storageErrorMessage(error) };
  }

  const admin = await createAdminClient();

  const { data: existing } = await admin
    .from("contenido_sitio")
    .select("imagen_url")
    .eq("clave", clave)
    .single();

  const { error } = await admin
    .from("contenido_sitio")
    .update({ imagen_url: path, updated_at: new Date().toISOString() })
    .eq("clave", clave);

  if (error) {
    await deleteImage(path).catch(() => {});
    return { error: "No se pudo guardar la imagen. Intentá de nuevo." };
  }

  await deleteImage(existing?.imagen_url ?? null).catch(() => {});

  revalidatePath("/admin/contenido");
  revalidatePath("/");
  return { ok: true };
}
