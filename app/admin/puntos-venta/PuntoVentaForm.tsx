"use client";

import { useActionState, useRef, useState, useTransition } from "react";
import Link from "next/link";
import type { AdminPuntoVenta } from "@/lib/admin/queries";
import { geocodePuntoVentaDireccion, type PuntoVentaFormState } from "./actions";

type Action = (state: PuntoVentaFormState, formData: FormData) => Promise<PuntoVentaFormState>;

export function PuntoVentaForm({
  action,
  initial,
  onCancel,
}: {
  action: Action;
  initial?: AdminPuntoVenta;
  onCancel?: () => void;
}) {
  const [state, formAction, pending] = useActionState(action, undefined);
  const [tipo, setTipo] = useState<"cadena" | "barrio">(initial?.tipo ?? "barrio");
  const formRef = useRef<HTMLFormElement>(null);
  const [lat, setLat] = useState(initial?.lat != null ? String(initial.lat) : "");
  const [lng, setLng] = useState(initial?.lng != null ? String(initial.lng) : "");
  const [detectMessage, setDetectMessage] = useState<{ text: string; isError: boolean } | null>(
    null,
  );
  const [isDetecting, startDetecting] = useTransition();

  function handleDetectarCoordenadas() {
    const formEl = formRef.current;
    if (!formEl) return;

    const formData = new FormData(formEl);
    const direccion = String(formData.get("direccion") ?? "").trim();
    const provincia = String(formData.get("provincia") ?? "").trim() || null;

    startDetecting(async () => {
      const resultado = await geocodePuntoVentaDireccion(direccion, provincia);
      if ("error" in resultado) {
        setDetectMessage({ text: resultado.error, isError: true });
        return;
      }
      setLat(String(resultado.lat));
      setLng(String(resultado.lng));
      setDetectMessage({
        text: `Coordenadas detectadas: ${resultado.lat}, ${resultado.lng}`,
        isError: false,
      });
    });
  }

  return (
    <form ref={formRef} action={formAction} className="flex max-w-140 flex-col gap-4 font-sans">
      <Field label="Nombre del comercio">
        <input
          name="nombre_comercio"
          type="text"
          required
          defaultValue={initial?.nombre_comercio}
          className={inputClass}
        />
      </Field>

      <Field label="Tipo">
        <select
          name="tipo"
          required
          value={tipo}
          onChange={(e) => setTipo(e.target.value as "cadena" | "barrio")}
          className={inputClass}
        >
          <option value="barrio">Barrio</option>
          <option value="cadena">Cadena</option>
        </select>
      </Field>

      {tipo === "barrio" ? (
        <>
          <Field label="Dirección">
            <input
              name="direccion"
              type="text"
              defaultValue={initial?.direccion ?? ""}
              className={inputClass}
            />
          </Field>
          <div className="flex gap-4">
            <Field label="Provincia" className="flex-1">
              <input
                name="provincia"
                type="text"
                defaultValue={initial?.provincia ?? ""}
                className={inputClass}
              />
            </Field>
            <Field label="Ubicación" className="flex-1">
              <input
                name="ubicacion"
                type="text"
                defaultValue={initial?.region ?? ""}
                className={inputClass}
              />
            </Field>
          </div>

          <div className="flex items-end gap-3">
            <Field label="Latitud" className="flex-1">
              <input
                name="lat"
                type="number"
                step="any"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Longitud" className="flex-1">
              <input
                name="lng"
                type="number"
                step="any"
                value={lng}
                onChange={(e) => setLng(e.target.value)}
                className={inputClass}
              />
            </Field>
            <button
              type="button"
              onClick={handleDetectarCoordenadas}
              disabled={isDetecting}
              className="h-10.5 shrink-0 rounded-md border border-border-subtle px-3 font-sans text-sm font-medium text-text-body transition-colors duration-150 hover:bg-surface-sunken disabled:opacity-60"
            >
              {isDetecting ? "Detectando..." : "Detectar coordenadas"}
            </button>
          </div>
          {detectMessage ? (
            <p
              className={`font-sans text-xs ${detectMessage.isError ? "text-danger" : "text-text-muted"}`}
            >
              {detectMessage.text}
            </p>
          ) : null}
        </>
      ) : null}

      {state?.error ? <p className="font-sans text-sm text-danger">{state.error}</p> : null}

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-festa-navy-800 px-4 py-2.5 font-sans text-sm font-medium uppercase tracking-[0.08em] text-white transition-colors duration-150 hover:bg-festa-navy-700 disabled:opacity-60 "
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
            href="/admin/puntos-venta"
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
