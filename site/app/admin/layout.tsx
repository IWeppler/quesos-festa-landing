import type { Metadata } from "next";
import Link from "next/link";
import { getUser } from "@/lib/auth";
import { logout } from "@/lib/actions/auth";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser();

  if (!user) {
    return children;
  }

  return (
    <div className="min-h-screen bg-surface-page font-sans">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle bg-surface-card px-6 py-4">
        <div className="flex flex-wrap items-center gap-6">
          <span className="font-sans text-base font-semibold text-text-heading">
            Panel Quesos Festa
          </span>
          <nav className="flex gap-4">
            <Link
              href="/admin"
              className="font-sans text-sm text-text-body transition-colors duration-150 hover:text-festa-navy-800"
            >
              Inicio
            </Link>
            <Link
              href="/admin/productos"
              className="font-sans text-sm text-text-body transition-colors duration-150 hover:text-festa-navy-800"
            >
              Productos
            </Link>
            <Link
              href="/admin/puntos-venta"
              className="font-sans text-sm text-text-body transition-colors duration-150 hover:text-festa-navy-800"
            >
              Puntos de venta
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-sans text-sm text-text-muted">{user.email}</span>
          <form action={logout}>
            <button
              type="submit"
              className="rounded-md border border-border-subtle px-3 py-1.5 font-sans text-xs font-medium uppercase tracking-[0.08em] text-text-body transition-colors duration-150 hover:bg-surface-sunken"
            >
              Cerrar sesión
            </button>
          </form>
        </div>
      </header>
      <main className="px-6 py-8">{children}</main>
    </div>
  );
}
