import "server-only";

import { supabase } from "@/lib/supabase";
import { createAdminClient } from "@/lib/supabase/admin";
import { MAX_UPLOAD_MB, MAX_UPLOAD_BYTES } from "@/lib/upload-limits";

const BUCKET = "media";

export class FileTooLargeError extends Error {
  constructor() {
    super(`El archivo supera el límite de ${MAX_UPLOAD_MB} MB.`);
    this.name = "FileTooLargeError";
  }
}

export function publicUrl(path: string | null): string | null {
  if (!path) return null;
  return supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;
}

export async function uploadImage(folder: string, file: File): Promise<string> {
  if (file.size > MAX_UPLOAD_BYTES) throw new FileTooLargeError();

  const ext = file.name.includes(".") ? file.name.split(".").pop() : "jpg";
  const path = `${folder}/${crypto.randomUUID()}.${ext}`;

  const admin = await createAdminClient();
  const { error } = await admin.storage.from(BUCKET).upload(path, file, {
    contentType: file.type || undefined,
  });
  if (error) throw error;

  return path;
}

export async function deleteImage(path: string | null) {
  if (!path) return;
  const admin = await createAdminClient();
  await admin.storage.from(BUCKET).remove([path]);
}

export function storageErrorMessage(error: unknown): string {
  if (error instanceof FileTooLargeError) {
    return `La imagen es demasiado pesada. Probá con una de menos de ${MAX_UPLOAD_MB} MB, idealmente en formato WebP.`;
  }

  const message = error instanceof Error ? error.message : String(error);
  const lower = message.toLowerCase();

  if (
    lower.includes("exceeded the maximum allowed size") ||
    lower.includes("payload too large") ||
    lower.includes("entity too large") ||
    lower.includes("maximum size")
  ) {
    return `La imagen es demasiado pesada. Probá con una de menos de ${MAX_UPLOAD_MB} MB, idealmente en formato WebP.`;
  }

  if (
    lower.includes("row-level security") ||
    lower.includes("permission") ||
    lower.includes("not authorized") ||
    lower.includes("unauthorized")
  ) {
    return "No se pudo subir la imagen porque faltan permisos de Storage en Supabase.";
  }

  return `No se pudo subir la imagen. ${message}`;
}
