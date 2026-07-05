"use client";

import { useActionState } from "react";
import Link from "next/link";
import type { CategoriaOption, AdminProducto } from "@/lib/admin/queries";
import type { ProductoFormState } from "./actions";

type Action = (
  state: ProductoFormState,
  formData: FormData,
) => Promise<ProductoFormState>;

export function ProductoForm({
  action,
  categorias,
  initial,
  currentImageUrl,
  onCancel,
}: {
  action: Action;
  categorias: CategoriaOption[];
  initial?: AdminProducto;
  currentImageUrl?: string | null;
  onCancel?: () => void;
}) {
  const [state, formAction, pending] = useActionState(action, undefined);

  return (
    <form action={formAction} className="flex max-w-140 flex-col gap-4 font-sans">
      <Field label="Nombre">
        <input
          name="nombre"
          type="text"
          required
          defaultValue={initial?.nombre}
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

      <Field label="Categoría">
        <select
          name="categoria_id"
          required
          defaultValue={initial?.categoria_id ?? ""}
          className={inputClass}
        >
          <option value="" disabled>
            Elegí una categoría
          </option>
          {categorias.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nombre}
            </option>
          ))}
        </select>
      </Field>

      <div className="flex gap-4">
        <Field label="Envase" className="flex-1">
          <input
            name="envase"
            type="text"
            defaultValue={initial?.envase ?? ""}
            className={inputClass}
          />
        </Field>
        <Field label="Peso" className="flex-1">
          <input
            name="peso"
            type="text"
            defaultValue={initial?.peso ?? ""}
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Imagen">
        {currentImageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={currentImageUrl}
            alt=""
            className="mb-2 h-24 w-24 rounded-md object-cover"
          />
        ) : null}
        <input
          name="imagen"
          type="file"
          accept="image/*"
          className={inputClass}
        />
        {currentImageUrl ? (
          <p className="mt-1 font-sans text-xs text-text-muted">
            Subí un archivo solo si querés reemplazar la imagen actual.
          </p>
        ) : null}
      </Field>

      <div className="flex flex-wrap items-center gap-6">
        <Field label="Orden" className="w-28">
          <input
            name="orden"
            type="number"
            defaultValue={initial?.orden ?? 0}
            className={inputClass}
          />
        </Field>
        <label className="mt-6 inline-flex items-center gap-2 font-sans text-sm text-text-body">
          <input
            name="destacado"
            type="checkbox"
            defaultChecked={initial?.destacado ?? false}
            className="h-4 w-4 rounded border-border-subtle accent-festa-navy-800"
          />
          Mostrar en novedades
        </label>
      </div>

      {state?.error ? (
        <p className="font-sans text-sm text-danger">{state.error}</p>
      ) : null}

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-festa-navy-800 px-4 py-2.5 font-sans text-sm font-medium uppercase tracking-[0.08em] text-white transition-colors duration-150 hover:bg-festa-navy-700 disabled:opacity-60"
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
            href="/admin/productos"
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
