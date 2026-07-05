"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { friendlyError } from "@/lib/errors";

export type PuntoVentaFormState = { error: string } | undefined;

type ParsedPuntoVenta = {
  error: string | null;
  data: {
    nombre_comercio: string;
    tipo: "cadena" | "barrio";
    direccion: string | null;
    provincia: string | null;
    region: string | null;
  } | null;
};

function parsePuntoVentaForm(formData: FormData): ParsedPuntoVenta {
  const nombre_comercio = String(formData.get("nombre_comercio") ?? "").trim();
  const tipoRaw = String(formData.get("tipo") ?? "");
  const direccion = String(formData.get("direccion") ?? "").trim() || null;
  const provincia = String(formData.get("provincia") ?? "").trim() || null;
  const region = String(formData.get("region") ?? "").trim() || null;

  if (!nombre_comercio) {
    return { error: "El nombre del comercio es obligatorio.", data: null };
  }
  if (tipoRaw !== "cadena" && tipoRaw !== "barrio") {
    return { error: 'El tipo debe ser "cadena" o "barrio".', data: null };
  }
  const tipo: "cadena" | "barrio" = tipoRaw;

  const data =
    tipo === "cadena"
      ? { nombre_comercio, tipo, direccion: null, provincia: null, region: null }
      : { nombre_comercio, tipo, direccion, provincia, region };

  return { error: null, data };
}

export async function createPuntoVenta(
  _prevState: PuntoVentaFormState,
  formData: FormData,
): Promise<PuntoVentaFormState> {
  await requireUser();

  const parsed = parsePuntoVentaForm(formData);
  if (parsed.error) return { error: parsed.error };
  if (!parsed.data) return { error: "Revisá los datos ingresados." };

  const admin = await createAdminClient();
  const { error } = await admin.from("puntos_venta").insert(parsed.data);

  if (error) return { error: friendlyError(error) };

  revalidatePath("/admin/puntos-venta");
  revalidatePath("/");
  redirect("/admin/puntos-venta");
}

export async function updatePuntoVenta(
  id: number,
  _prevState: PuntoVentaFormState,
  formData: FormData,
): Promise<PuntoVentaFormState> {
  await requireUser();

  const parsed = parsePuntoVentaForm(formData);
  if (parsed.error) return { error: parsed.error };
  if (!parsed.data) return { error: "Revisá los datos ingresados." };

  const admin = await createAdminClient();
  const { error } = await admin.from("puntos_venta").update(parsed.data).eq("id", id);

  if (error) return { error: friendlyError(error) };

  revalidatePath("/admin/puntos-venta");
  revalidatePath("/");
  redirect("/admin/puntos-venta");
}

export async function deletePuntoVenta(id: number) {
  await requireUser();
  const admin = await createAdminClient();

  const { error } = await admin.from("puntos_venta").delete().eq("id", id);
  if (error) throw new Error(friendlyError(error));

  revalidatePath("/admin/puntos-venta");
  revalidatePath("/");
}
