"use server";

import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { friendlyError } from "@/lib/errors";

export async function setConsultaAtendida(id: number, atendida: boolean) {
  await requireUser();

  const admin = await createAdminClient();
  const { error } = await admin.from("consultas").update({ atendida }).eq("id", id);
  if (error) throw new Error(friendlyError(error));

  revalidatePath("/admin/consultas");
  revalidatePath("/admin");
}
