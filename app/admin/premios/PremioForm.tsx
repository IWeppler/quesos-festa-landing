"use client";

import { useActionState } from "react";
import Link from "next/link";
import type { AdminPremio } from "@/lib/admin/queries";
import type { PremioFormState } from "./actions";

type Action = (
  state: PremioFormState,
  formData: FormData,
) => Promise<PremioFormState>;

export function PremioForm({
  action,
  initial,
  onCancel,
}: {
  action: Action;
  initial?: AdminPremio;
  onCancel?: () => void;
}) {
  const [state, formAction, pending] = useActionState(action, undefined);

  return (
    <form action={formAction} className="flex max-w-140 flex-col gap-4 font-sans">
      <div className="flex gap-4">
        <Field label="Año" className="w-32">
          <input
            name="anio"
            type="number"
            required
            defaultValue={initial?.anio}
            className={inputClass}
          />
        </Field>
        <Field label="Orden" className="w-28">
          <input
            name="orden"
            type="number"
            defaultValue={initial?.orden ?? 0}
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Título">
        <input
          name="titulo"
          type="text"
          required
          defaultValue={initial?.titulo}
          className={inputClass}
        />
      </Field>

      <Field label="Descripción">
        <textarea
          name="descripcion"
          rows={3}
          defaultValue={initial?.descripcion ?? ""}
          className={inputClass}
        />
      </Field>

      {state?.error ? (
        <p className="font-sans text-sm text-danger">{state.error}</p>
      ) : null}

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-festa-navy-800 px-4 py-2.5 font-sans text-sm font-medium uppercase tracking-[0.08em] text-white transition-colors duration-150 hover:bg-festa-navy-700 disabled:opacity-60 cursor-pointer"
        >
          {pending ? "Guardando..." : "Guardar"}
        </button>
        {onCancel ? (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border border-border-subtle px-4 py-2.5 font-sans text-sm font-medium text-text-body transition-colors duration-150 hover:bg-surface-sunken"
          >
            Cancelar
          </button>
        ) : (
          <Link
            href="/admin/premios"
            className="rounded-md border border-border-subtle px-4 py-2.5 font-sans text-sm font-medium text-text-body transition-colors duration-150 hover:bg-surface-sunken"
          >
            Cancelar
          </Link>
        )}
      </div>
    </form>
  );
}

const inputClass =
  "w-full rounded-md border border-border-subtle bg-surface-page px-3 py-2 font-sans text-sm text-text-body outline-none focus:border-festa-navy-800";

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block font-sans text-sm ${className ?? ""}`}>
      <span className="mb-1 block text-xs font-medium uppercase tracking-[0.08em] text-text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}
