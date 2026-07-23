"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { friendlyError } from "@/lib/errors";

export type PremioFormState = { error: string } | undefined;

type ParsedPremio = {
  error: string | null;
  data: {
    anio: number;
    titulo: string;
    descripcion: string | null;
    orden: number;
  } | null;
};

function parsePremioForm(formData: FormData): ParsedPremio {
  const anioRaw = String(formData.get("anio") ?? "");
  const anio = Number(anioRaw);
  const titulo = String(formData.get("titulo") ?? "").trim();
  const descripcion = String(formData.get("descripcion") ?? "").trim() || null;
  const orden = Number(formData.get("orden") ?? 0) || 0;

  if (!anioRaw || Number.isNaN(anio)) {
    return { error: "Ingresá un año válido.", data: null };
  }
  if (!titulo) return { error: "El título es obligatorio.", data: null };

  return { error: null, data: { anio, titulo, descripcion, orden } };
}

export async function createPremio(
  _prevState: PremioFormState,
  formData: FormData,
): Promise<PremioFormState> {
  await requireUser();

  const parsed = parsePremioForm(formData);
  if (parsed.error) return { error: parsed.error };
  if (!parsed.data) return { error: "Revisá los datos ingresados." };

  const admin = await createAdminClient();
  const { error } = await admin.from("premios").insert(parsed.data);

  if (error) return { error: friendlyError(error) };

  revalidatePath("/admin/premios");
  revalidatePath("/");
  redirect("/admin/premios");
}

export async function updatePremio(
  id: number,
  _prevState: PremioFormState,
  formData: FormData,
): Promise<PremioFormState> {
  await requireUser();

  const parsed = parsePremioForm(formData);
  if (parsed.error) return { error: parsed.error };
  if (!parsed.data) return { error: "Revisá los datos ingresados." };

  const admin = await createAdminClient();
  const { error } = await admin.from("premios").update(parsed.data).eq("id", id);

  if (error) return { error: friendlyError(error) };

  revalidatePath("/admin/premios");
  revalidatePath("/");
  redirect("/admin/premios");
}

export async function deletePremio(id: number) {
  await requireUser();
  const admin = await createAdminClient();

  const { error } = await admin.from("premios").delete().eq("id", id);
  if (error) throw new Error(friendlyError(error));

  revalidatePath("/admin/premios");
  revalidatePath("/");
}
