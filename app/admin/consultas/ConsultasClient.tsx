"use client";

import { useTransition } from "react";
import type { AdminConsulta } from "@/lib/admin/queries";
import { setConsultaAtendida } from "./actions";

const TIPO_LABELS: Record<AdminConsulta["tipo_comercio"], string> = {
  supermercado: "Supermercado",
  almacen_fiambreria: "Almacén / fiambrería",
  distribuidor: "Distribuidor",
  otro: "Otro",
};

function formatFecha(iso: string) {
  return new Date(iso).toLocaleString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function ConsultasClient({ consultas }: { consultas: AdminConsulta[] }) {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-5">
      <h1 className="m-0 font-sans text-xl font-semibold text-text-heading">
        Consultas mayoristas
      </h1>

      <div className="overflow-x-auto rounded-xl border border-border-subtle bg-surface-card">
        <table className="w-full border-collapse font-sans text-sm">
          <thead>
            <tr className="border-b border-border-subtle text-left text-xs font-medium uppercase tracking-[0.06em] text-text-muted">
              <th className="px-4 py-3">Comercio</th>
              <th className="px-4 py-3">Contacto</th>
              <th className="px-4 py-3">Tipo</th>
              <th className="px-4 py-3">Fecha</th>
              <th className="px-4 py-3">Mensaje</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {consultas.map((c) => (
              <tr key={c.id} className="border-b border-border-subtle align-top last:border-0">
                <td className="px-4 py-3 text-text-heading">{c.nombre_comercio}</td>
                <td className="px-4 py-3 text-text-body">
                  <div>{c.nombre}</div>
                  <div className="text-xs text-text-muted">{c.email}</div>
                  <div className="text-xs text-text-muted">{c.telefono}</div>
                </td>
                <td className="px-4 py-3 text-text-body">
                  {TIPO_LABELS[c.tipo_comercio] ?? c.tipo_comercio}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-text-body">
                  {formatFecha(c.created_at)}
                </td>
                <td className="max-w-80 px-4 py-3 text-text-body">
                  {c.mensaje || <span className="text-text-muted">—</span>}
                </td>
                <td className="px-4 py-3">
                  <EstadoToggle id={c.id} atendida={c.atendida} />
                </td>
              </tr>
            ))}
            {consultas.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-text-muted">
                  Todavía no llegaron consultas.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EstadoToggle({ id, atendida }: { id: number; atendida: boolean }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          try {
            await setConsultaAtendida(id, !atendida);
          } catch (err) {
            window.alert(err instanceof Error ? err.message : "Ocurrió un error.");
          }
        })
      }
      className={`rounded-full px-3 py-1.5 font-sans text-xs font-medium uppercase tracking-[0.06em] transition-colors duration-150 disabled:opacity-60 ${
        atendida
          ? "bg-success/15 text-success hover:bg-success/25"
          : "bg-rule-gold/15 text-festa-navy-800 hover:bg-rule-gold/25"
      }`}
    >
      {isPending ? "..." : atendida ? "Atendida" : "Pendiente"}
    </button>
  );
}
