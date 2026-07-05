import Link from "next/link";
import { requireUser } from "@/lib/auth";
import { listAdminProductos, listAdminPuntosVenta } from "@/lib/admin/queries";

export default async function AdminPage() {
  await requireUser();
  const [productos, puntosVenta] = await Promise.all([
    listAdminProductos(),
    listAdminPuntosVenta(),
  ]);

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Link
        href="/admin/productos"
        className="flex-1 rounded-xl border border-border-subtle bg-surface-card p-6 transition-colors duration-150 hover:bg-surface-sunken"
      >
        <div className="font-sans text-sm text-text-muted">Productos</div>
        <div className="mt-1 font-sans text-3xl font-semibold text-text-heading">
          {productos.length}
        </div>
      </Link>
      <Link
        href="/admin/puntos-venta"
        className="flex-1 rounded-xl border border-border-subtle bg-surface-card p-6 transition-colors duration-150 hover:bg-surface-sunken"
      >
        <div className="font-sans text-sm text-text-muted">Puntos de venta</div>
        <div className="mt-1 font-sans text-3xl font-semibold text-text-heading">
          {puntosVenta.length}
        </div>
      </Link>
    </div>
  );
}
