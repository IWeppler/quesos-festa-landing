"use client";

import { useState } from "react";
import type { CategoriaOption, AdminProducto } from "@/lib/admin/queries";
import { DeleteButton } from "@/components/admin/DeleteButton";
import { ProductoForm } from "./ProductoForm";
import { createProducto, deleteProducto, updateProducto } from "./actions";

type ProductoWithPublicImage = AdminProducto & {
  publicImageUrl: string | null;
};

type ModalState =
  | { type: "new" }
  | { type: "edit"; producto: ProductoWithPublicImage }
  | null;

export function ProductosClient({
  productos,
  categorias,
}: {
  productos: ProductoWithPublicImage[];
  categorias: CategoriaOption[];
}) {
  const [modal, setModal] = useState<ModalState>(null);

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-5">
      <div className="flex items-center justify-between gap-4">
        <h1 className="m-0 font-sans text-xl font-semibold text-text-heading">
          Productos
        </h1>
        <button
          type="button"
          onClick={() => setModal({ type: "new" })}
          className="rounded-md bg-festa-navy-800 px-4 py-2 font-sans text-sm font-medium uppercase tracking-[0.08em] text-white transition-colors duration-150 hover:bg-festa-navy-700"
        >
          Nuevo producto
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border-subtle bg-surface-card">
        <table className="w-full border-collapse font-sans text-sm">
          <thead>
            <tr className="border-b border-border-subtle text-left text-xs font-medium uppercase tracking-[0.06em] text-text-muted">
              <th className="px-4 py-3"></th>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Categoría</th>
              <th className="px-4 py-3">Envase / Peso</th>
              <th className="px-4 py-3">Novedades</th>
              <th className="px-4 py-3">Orden</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p) => (
              <tr
                key={p.id}
                className="border-b border-border-subtle last:border-0"
              >
                <td className="px-4 py-3">
                  {p.publicImageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.publicImageUrl}
                      alt=""
                      className="h-10 w-10 rounded-md object-cover"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-md bg-surface-sunken" />
                  )}
                </td>
                <td className="px-4 py-3 text-text-heading">{p.nombre}</td>
                <td className="px-4 py-3 text-text-body">
                  {p.categorias?.nombre ?? "—"}
                </td>
                <td className="px-4 py-3 text-text-body">
                  {[p.envase, p.peso].filter(Boolean).join(" · ") || "—"}
                </td>
                <td className="px-4 py-3">
                  {p.destacado ? (
                    <span className="rounded-full bg-rule-gold/15 px-2.5 py-1 font-sans text-xs font-medium text-festa-navy-800">
                      Sí
                    </span>
                  ) : (
                    <span className="font-sans text-xs text-text-muted">No</span>
                  )}
                </td>
                <td className="px-4 py-3 text-text-body">{p.orden}</td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setModal({ type: "edit", producto: p })}
                      className="rounded-md border border-border-subtle px-3 py-1.5 font-sans text-xs font-medium uppercase tracking-[0.06em] text-text-body transition-colors duration-150 hover:bg-surface-sunken"
                    >
                      Editar
                    </button>
                    <DeleteButton
                      onDelete={deleteProducto.bind(null, p.id)}
                      confirmMessage={`¿Eliminar "${p.nombre}"? Esta acción no se puede deshacer.`}
                    />
                  </div>
                </td>
              </tr>
            ))}
            {productos.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-8 text-center text-text-muted"
                >
                  No hay productos cargados todavía.
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
          aria-labelledby="producto-modal-title"
        >
          <div className="w-full max-w-160 rounded-2xl bg-white p-4 shadow-festa-lg sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2
                id="producto-modal-title"
                className="m-0 font-sans text-lg font-semibold text-text-heading"
              >
                {modal.type === "new" ? "Nuevo producto" : "Editar producto"}
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
              <ProductoForm
                action={createProducto}
                categorias={categorias}
                onCancel={() => setModal(null)}
              />
            ) : (
              <ProductoForm
                action={updateProducto.bind(null, modal.producto.id)}
                categorias={categorias}
                initial={modal.producto}
                currentImageUrl={modal.producto.publicImageUrl}
                onCancel={() => setModal(null)}
              />
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
