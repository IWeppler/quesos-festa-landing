"use client";

import { useActionState, useState } from "react";
import { MAX_UPLOAD_MB, MAX_UPLOAD_BYTES } from "@/lib/upload-limits";
import type { ContenidoFormState } from "@/app/admin/contenido/actions";

type Action = (
  state: ContenidoFormState,
  formData: FormData,
) => Promise<ContenidoFormState>;

export function ContenidoImagenForm({
  action,
  titulo,
  descripcion,
  currentImageUrl,
}: {
  action: Action;
  titulo: string;
  descripcion?: string;
  currentImageUrl: string;
}) {
  const [state, formAction, pending] = useActionState(action, undefined);
  const [fileError, setFileError] = useState<string | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) {
      setFileError(null);
      return;
    }
    if (file.size > MAX_UPLOAD_BYTES) {
      setFileError(
        `La imagen pesa demasiado. Probá con una de menos de ${MAX_UPLOAD_MB} MB, idealmente en formato WebP.`,
      );
      e.target.value = "";
      return;
    }
    setFileError(null);
  }

  return (
    <form
      action={formAction}
      className="flex flex-col gap-3 rounded-xl border border-border-subtle bg-surface-card p-5 font-sans"
    >
      <div>
        <h2 className="m-0 font-sans text-sm font-semibold text-text-heading">{titulo}</h2>
        {descripcion ? (
          <p className="m-0 mt-0.5 font-sans text-xs text-text-muted">{descripcion}</p>
        ) : null}
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={currentImageUrl} alt="" className="h-32 w-full rounded-md object-cover" />

      <input
        name="imagen"
        type="file"
        accept="image/*"
        required
        onChange={handleFileChange}
        className="w-full rounded-md border border-border-subtle bg-surface-page px-3 py-2 font-sans text-sm text-text-body outline-none focus:border-festa-navy-800"
      />
      <p className="m-0 font-sans text-xs text-text-muted">Máximo {MAX_UPLOAD_MB} MB.</p>

      {fileError ? <p className="m-0 font-sans text-xs text-danger">{fileError}</p> : null}
      {state && "error" in state ? (
        <p className="m-0 font-sans text-xs text-danger">{state.error}</p>
      ) : null}
      {state && "ok" in state ? (
        <p className="m-0 font-sans text-xs text-success">Imagen actualizada.</p>
      ) : null}

      <button
        type="submit"
        disabled={pending || !!fileError}
        className="self-start rounded-md bg-festa-navy-800 px-4 py-2 font-sans text-sm font-medium uppercase tracking-[0.08em] text-white transition-colors duration-150 hover:bg-festa-navy-700 disabled:opacity-60 cursor-pointer"
      >
        {pending ? "Subiendo..." : "Reemplazar imagen"}
      </button>
    </form>
  );
}
