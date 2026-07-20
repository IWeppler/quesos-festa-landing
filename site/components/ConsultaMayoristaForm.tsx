"use client";

import { useActionState } from "react";
import {
  createConsulta,
  type ConsultaFormState,
} from "@/app/actions/consultas";

const inputClass =
  "w-full rounded-md border border-white/30 bg-white/10 px-3 py-2.5 font-sans text-sm text-white outline-none placeholder:text-white/50 focus:border-white";

export function ConsultaMayoristaForm() {
  const [state, formAction, pending] = useActionState<
    ConsultaFormState,
    FormData
  >(createConsulta, undefined);

  if (state?.success) {
    return (
      <p
        data-reveal
        role="status"
        className="rounded-lg border border-white/25 bg-white/10 px-5 py-4 font-sans text-sm leading-relaxed text-white"
      >
        Recibimos tu consulta, te contactamos a la brevedad.
      </p>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-3.5">
      <div className="grid gap-3.5 sm:grid-cols-2">
        <Field label="Nombre">
          <input name="nombre" type="text" required className={inputClass} />
        </Field>
        <Field label="Nombre del comercio">
          <input
            name="nombre_comercio"
            type="text"
            required
            className={inputClass}
          />
        </Field>
        <Field label="Email">
          <input name="email" type="email" required className={inputClass} />
        </Field>
        <Field label="Teléfono">
          <input name="telefono" type="tel" required className={inputClass} />
        </Field>
      </div>

      <Field label="Tipo de comercio">
        <select
          name="tipo_comercio"
          required
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            Elegí una opción
          </option>
          <option value="supermercado" className="text-festa-navy-800">
            Supermercado
          </option>
          <option value="almacen_fiambreria" className="text-festa-navy-800">
            Almacén / fiambrería
          </option>
          <option value="distribuidor" className="text-festa-navy-800">
            Distribuidor
          </option>
          <option value="otro" className="text-festa-navy-800">
            Otro
          </option>
        </select>
      </Field>

      <Field label="Mensaje (opcional)">
        <textarea name="mensaje" rows={3} className={inputClass} />
      </Field>

      {state?.error ? (
        <p className="font-sans text-sm text-red-300">{state.error}</p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="mt-1 self-start rounded-md bg-white px-5 py-2.5 font-sans text-sm font-medium uppercase tracking-[0.08em] text-festa-green-800 transition-colors duration-150 hover:bg-white/90 disabled:opacity-60 cursor-pointer"
      >
        {pending ? "Enviando..." : "Enviar consulta"}
      </button>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block font-sans text-xs font-medium uppercase tracking-[0.16em] text-white/62">
        {label}
      </span>
      {children}
    </label>
  );
}
