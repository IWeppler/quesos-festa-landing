"use client";

import { useState } from "react";
import type { CategoriaOption } from "@/lib/admin/queries";
import { ProductoForm } from "./productos/ProductoForm";
import { createProducto } from "./productos/actions";
import { PuntoVentaForm } from "./puntos-venta/PuntoVentaForm";
import { createPuntoVenta } from "./puntos-venta/actions";

type ModalState = "producto" | "punto_venta" | null;

export function QuickActions({ categorias }: { categorias: CategoriaOption[] }) {
  const [modal, setModal] = useState<ModalState>(null);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setModal("producto")}
          className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-festa-navy-800 px-4 py-2.5 font-sans text-sm font-medium uppercase tracking-[0.08em] text-white transition-colors duration-150 hover:bg-festa-navy-700"
        >
          <PlusIcon />
          Agregar producto
        </button>
        <button
          type="button"
          onClick={() => setModal("punto_venta")}
          className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-festa-navy-800 px-4 py-2.5 font-sans text-sm font-medium uppercase tracking-[0.08em] text-festa-navy-800 transition-colors duration-150 hover:bg-festa-navy-50"
        >
          <PlusIcon />
          Agregar punto de venta
        </button>
      </div>

      {modal ? (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/45 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quick-action-modal-title"
        >
          <div className="w-full max-w-160 rounded-2xl bg-white p-4 shadow-festa-lg sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2
                id="quick-action-modal-title"
                className="m-0 font-sans text-lg font-semibold text-text-heading"
              >
                {modal === "producto" ? "Nuevo producto" : "Nuevo punto de venta"}
              </h2>
              <button
                type="button"
                onClick={() => setModal(null)}
                className="cursor-pointer rounded-md bg-red-500 px-3 py-1.5 font-sans text-xs font-medium uppercase tracking-[0.06em] text-white transition-colors duration-150 hover:bg-red-600"
              >
                Cerrar
              </button>
            </div>

            {modal === "producto" ? (
              <ProductoForm
                action={createProducto}
                categorias={categorias}
                onCancel={() => setModal(null)}
              />
            ) : (
              <PuntoVentaForm action={createPuntoVenta} onCancel={() => setModal(null)} />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

function PlusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
