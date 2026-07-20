"use client";

import { useState } from "react";
import type { AdminPuntoVenta } from "@/lib/admin/queries";
import { DeleteButton } from "@/components/admin/DeleteButton";
import { PuntoVentaForm } from "./PuntoVentaForm";
import {
  createPuntoVenta,
  deletePuntoVenta,
  updatePuntoVenta,
} from "./actions";

type ModalState =
  | { type: "new" }
  | { type: "edit"; puntoVenta: AdminPuntoVenta }
  | { type: "upload_csv" }
  | null;

function formatLocation(pv: AdminPuntoVenta) {
  if (pv.tipo === "cadena") return "—";
  return [pv.direccion, pv.region].filter(Boolean).join(", ") || "—";
}

function formatProvince(pv: AdminPuntoVenta) {
  if (pv.tipo === "cadena") return "—";
  return pv.provincia || "—";
}

export function PuntosVentaClient({
  puntosVenta,
}: {
  puntosVenta: AdminPuntoVenta[];
}) {
  const [modal, setModal] = useState<ModalState>(null);

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-5">
      <div className="flex items-center justify-between gap-4">
        <h1 className="m-0 font-sans text-xl font-semibold text-text-heading">
          Puntos de venta
        </h1>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setModal({ type: "upload_csv" })}
            className="rounded-md border border-festa-navy-800 px-4 py-2 font-sans text-sm font-medium uppercase tracking-[0.08em] text-festa-navy-800 transition-colors duration-150 hover:bg-festa-navy-50"
          >
            Subir CSV
          </button>
          <button
            type="button"
            onClick={() => setModal({ type: "new" })}
            className="rounded-md bg-festa-navy-800 px-4 py-2 font-sans text-sm font-medium uppercase tracking-[0.08em] text-white transition-colors duration-150 hover:bg-festa-navy-700 cursor-pointer"
          >
            Nuevo punto de venta
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border-subtle bg-surface-card">
        <table className="w-full border-collapse font-sans text-sm">
          <thead>
            <tr className="border-b border-border-subtle text-left text-xs font-medium uppercase tracking-[0.06em] text-text-muted">
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Tipo</th>
              <th className="px-4 py-3">Provincia</th>
              <th className="px-4 py-3">Ubicación</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {puntosVenta.map((pv) => (
              <tr
                key={pv.id}
                className="border-b border-border-subtle last:border-0"
              >
                <td className="px-4 py-3 text-text-heading">
                  {pv.nombre_comercio}
                </td>
                <td className="px-4 py-3 text-text-body capitalize">
                  {pv.tipo}
                </td>
                <td className="px-4 py-3 text-text-body">
                  {formatProvince(pv)}
                </td>
                <td className="px-4 py-3 text-text-body">
                  {formatLocation(pv)}
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setModal({ type: "edit", puntoVenta: pv })}
                      className="rounded-md border border-border-subtle px-3 py-1.5 font-sans text-xs font-medium uppercase tracking-[0.06em] text-text-body transition-colors duration-150 hover:bg-surface-sunken"
                    >
                      Editar
                    </button>
                    <DeleteButton
                      onDelete={deletePuntoVenta.bind(null, pv.id)}
                      confirmMessage={`¿Eliminar "${pv.nombre_comercio}"? Esta acción no se puede deshacer.`}
                    />
                  </div>
                </td>
              </tr>
            ))}
            {puntosVenta.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-8 text-center text-text-muted"
                >
                  No hay puntos de venta cargados todavía.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      {modal ? (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/45 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="punto-venta-modal-title"
        >
          <div className="w-full max-w-160 rounded-2xl bg-white p-4 shadow-festa-lg sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2
                id="punto-venta-modal-title"
                className="m-0 font-sans text-lg font-semibold text-text-heading"
              >
                {modal.type === "new"
                  ? "Nuevo punto de venta"
                  : modal.type === "edit"
                    ? "Editar punto de venta"
                    : "Subir ubicaciones por CSV"}
              </h2>
              <button
                type="button"
                onClick={() => setModal(null)}
                className="cursor-pointer rounded-md bg-red-500 px-3 py-1.5 font-sans text-xs font-medium uppercase tracking-[0.06em] text-white transition-colors duration-150 hover:bg-red-600"
              >
                Cerrar
              </button>
            </div>

            {modal.type === "new" ? (
              <PuntoVentaForm
                action={createPuntoVenta}
                onCancel={() => setModal(null)}
              />
            ) : modal.type === "edit" ? (
              <PuntoVentaForm
                action={updatePuntoVenta.bind(null, modal.puntoVenta.id)}
                initial={modal.puntoVenta}
                onCancel={() => setModal(null)}
              />
            ) : (
              /* FORMULARIO DE SUBIDA DE CSV */
              <form
                // action={uploadCsvAction} // TODO: Aquí debes colocar tu Server Action para procesar el archivo
                className="flex flex-col gap-5 mt-2"
              >
                <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-900 border border-blue-100">
                  <p className="mb-2 font-semibold">Formato requerido:</p>
                  <p className="mb-2">
                    El archivo debe estar separado por punto y coma (<b>;</b>) y
                    contener la siguiente cabecera exacta en la primera fila:
                  </p>
                  <code className="block bg-white p-2 rounded border border-blue-200 text-xs font-mono mb-2">
                    nombre;tipo;direccion;provincia;region;latitud;longitud
                  </code>
                  <p className="text-xs opacity-80">
                    * Las columnas latitud y longitud son opcionales pero deben
                    figurar en la cabecera.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="csv_file"
                    className="text-sm font-medium text-text-heading"
                  >
                    Archivo CSV
                  </label>
                  <input
                    type="file"
                    id="csv_file"
                    name="file"
                    accept=".csv"
                    required
                    className="block w-full text-sm text-text-body border border-border-subtle rounded-md cursor-pointer focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:text-sm file:font-medium file:bg-surface-sunken file:text-text-heading hover:file:bg-border-subtle/50"
                  />
                </div>

                <div className="mt-2 flex justify-end gap-3 pt-4 border-t border-border-subtle">
                  <button
                    type="button"
                    onClick={() => setModal(null)}
                    className="rounded-md border border-border-subtle px-4 py-2 font-sans text-sm font-medium text-text-body transition-colors hover:bg-surface-sunken"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-festa-navy-800 px-4 py-2 font-sans text-sm font-medium text-white transition-colors hover:bg-festa-navy-700"
                  >
                    Procesar e importar
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
