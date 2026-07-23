"use client";

import { useState } from "react";
import type { AdminPremio } from "@/lib/admin/queries";
import { DeleteButton } from "@/components/admin/DeleteButton";
import { PremioForm } from "./PremioForm";
import { createPremio, deletePremio, updatePremio } from "./actions";

type ModalState = { type: "new" } | { type: "edit"; premio: AdminPremio } | null;

export function PremiosClient({ premios }: { premios: AdminPremio[] }) {
  const [modal, setModal] = useState<ModalState>(null);

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-5">
      <div className="flex items-center justify-between gap-4">
        <h1 className="m-0 font-sans text-xl font-semibold text-text-heading">Premios</h1>
        <button
          type="button"
          onClick={() => setModal({ type: "new" })}
          className="rounded-md bg-festa-navy-800 px-4 py-2 font-sans text-sm font-medium uppercase tracking-[0.08em] text-white transition-colors duration-150 hover:bg-festa-navy-700"
        >
          Nuevo premio
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border-subtle bg-surface-card">
        <table className="w-full border-collapse font-sans text-sm">
          <thead>
            <tr className="border-b border-border-subtle text-left text-xs font-medium uppercase tracking-[0.06em] text-text-muted">
              <th className="px-4 py-3">Año</th>
              <th className="px-4 py-3">Título</th>
              <th className="px-4 py-3">Descripción</th>
              <th className="px-4 py-3">Orden</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {premios.map((p) => (
              <tr key={p.id} className="border-b border-border-subtle last:border-0">
                <td className="px-4 py-3 text-text-heading">{p.anio}</td>
                <td className="px-4 py-3 text-text-heading">{p.titulo}</td>
                <td className="px-4 py-3 max-w-100 text-text-body">
                  {p.descripcion || "—"}
                </td>
                <td className="px-4 py-3 text-text-body">{p.orden}</td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setModal({ type: "edit", premio: p })}
                      className="rounded-md border border-border-subtle px-3 py-1.5 font-sans text-xs font-medium uppercase tracking-[0.06em] text-text-body transition-colors duration-150 hover:bg-surface-sunken"
                    >
                      Editar
                    </button>
                    <DeleteButton
                      onDelete={deletePremio.bind(null, p.id)}
                      confirmMessage={`¿Eliminar "${p.titulo}"? Esta acción no se puede deshacer.`}
                    />
                  </div>
                </td>
              </tr>
            ))}
            {premios.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-text-muted">
                  No hay premios cargados todavía.
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
          aria-labelledby="premio-modal-title"
        >
          <div className="w-full max-w-160 rounded-2xl bg-white p-4 shadow-festa-lg sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2
                id="premio-modal-title"
                className="m-0 font-sans text-lg font-semibold text-text-heading"
              >
                {modal.type === "new" ? "Nuevo premio" : "Editar premio"}
              </h2>
              <button
                type="button"
                onClick={() => setModal(null)}
                className="rounded-md bg-red-500 px-3 py-1.5 font-sans text-xs font-medium uppercase tracking-[0.06em] text-white transition-colors duration-150 hover:bg-red-600"
              >
                Cerrar
              </button>
            </div>

            {modal.type === "new" ? (
              <PremioForm action={createPremio} onCancel={() => setModal(null)} />
            ) : (
              <PremioForm
                action={updatePremio.bind(null, modal.premio.id)}
                initial={modal.premio}
                onCancel={() => setModal(null)}
              />
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
