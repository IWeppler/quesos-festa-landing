import Link from "next/link";
import { requireUser } from "@/lib/auth";
import {
  listAdminProductos,
  listAdminPuntosVenta,
  listAdminConsultas,
  listCategoriasOptions,
  type AdminConsulta,
} from "@/lib/admin/queries";
import { QuickActions } from "./QuickActions";

const TIPO_LABELS: Record<AdminConsulta["tipo_comercio"], string> = {
  supermercado: "Supermercado",
  almacen_fiambreria: "Almacén / fiambrería",
  distribuidor: "Distribuidor",
  otro: "Otro",
};

function formatFecha(iso: string) {
  return new Date(iso).toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatFechaCompleta(date: Date) {
  const texto = new Intl.DateTimeFormat("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

type ActividadItem = {
  id: string;
  tipo: "producto" | "punto_venta";
  label: string;
  created_at: string;
  href: string;
};

export default async function AdminPage() {
  const user = await requireUser();
  const [productos, puntosVenta, consultas, categorias] = await Promise.all([
    listAdminProductos(),
    listAdminPuntosVenta(),
    listAdminConsultas(),
    listCategoriasOptions(),
  ]);

  const pendientes = consultas.filter((c) => !c.atendida).length;
  const recientes = consultas.slice(0, 5);

  const actividad: ActividadItem[] = [
    ...productos.map((p) => ({
      id: `producto-${p.id}`,
      tipo: "producto" as const,
      label: p.nombre,
      created_at: p.created_at,
      href: "/admin/productos",
    })),
    ...puntosVenta.map((pv) => ({
      id: `punto_venta-${pv.id}`,
      tipo: "punto_venta" as const,
      label: pv.nombre_comercio,
      created_at: pv.created_at,
      href: "/admin/puntos-venta",
    })),
  ]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 5);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="m-0 font-sans text-xs font-medium uppercase tracking-[0.1em] text-text-muted">
            {formatFechaCompleta(new Date())}
          </p>
          <h1 className="m-0 mt-1 font-sans text-2xl font-semibold text-text-heading">
            Hola, {user.email}
          </h1>
        </div>
        <QuickActions categorias={categorias} />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <StatCard
          href="/admin/productos"
          label="Productos"
          value={productos.length}
          icon={<PackageIcon />}
        />
        <StatCard
          href="/admin/puntos-venta"
          label="Puntos de venta"
          value={puntosVenta.length}
          icon={<MapPinIcon />}
        />
        <StatCard
          href="/admin/consultas"
          label="Consultas pendientes"
          value={pendientes}
          icon={<InboxIcon />}
          alert={pendientes > 0}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border-subtle bg-surface-card p-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="m-0 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-text-muted">
              Consultas recientes
            </h2>
            <Link
              href="/admin/consultas"
              className="font-sans text-xs font-medium uppercase tracking-[0.06em] text-festa-navy-800 hover:underline"
            >
              Ver todas
            </Link>
          </div>

          {recientes.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-6 text-center">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface-sunken text-text-muted">
                <MailIcon />
              </span>
              <p className="m-0 font-sans text-sm text-text-body">
                Todavía no llegaron consultas.
              </p>
              <p className="m-0 font-sans text-xs text-text-muted">
                Te avisamos por mail apenas llegue una consulta nueva.
              </p>
            </div>
          ) : (
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {recientes.map((c) => (
                <li
                  key={c.id}
                  className="flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle pb-3 last:border-0 last:pb-0"
                >
                  <div>
                    <div className="font-sans text-sm font-medium text-text-heading">
                      {c.nombre_comercio}
                    </div>
                    <div className="font-sans text-xs text-text-muted">
                      {c.nombre} · {TIPO_LABELS[c.tipo_comercio] ?? c.tipo_comercio} ·{" "}
                      {formatFecha(c.created_at)}
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-1 font-sans text-xs font-medium uppercase tracking-[0.06em] ${
                      c.atendida
                        ? "bg-success/15 text-success"
                        : "bg-rule-gold/15 text-festa-navy-800"
                    }`}
                  >
                    {c.atendida ? "Atendida" : "Pendiente"}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="rounded-xl border border-border-subtle bg-surface-card p-6">
          <h2 className="m-0 mb-4 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-text-muted">
            Agregado recientemente
          </h2>

          {actividad.length === 0 ? (
            <p className="m-0 font-sans text-sm text-text-muted">
              Todavía no cargaste productos ni puntos de venta.
            </p>
          ) : (
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {actividad.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between gap-3 border-b border-border-subtle pb-3 text-inherit no-underline last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-sunken text-festa-navy-800">
                        {item.tipo === "producto" ? (
                          <PackageIcon size={14} />
                        ) : (
                          <MapPinIcon size={14} />
                        )}
                      </span>
                      <div>
                        <div className="font-sans text-sm font-medium text-text-heading">
                          {item.label}
                        </div>
                        <div className="font-sans text-xs text-text-muted">
                          {item.tipo === "producto" ? "Producto" : "Punto de venta"}
                        </div>
                      </div>
                    </div>
                    <span className="shrink-0 font-sans text-xs text-text-muted">
                      {formatFecha(item.created_at)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  href,
  label,
  value,
  icon,
  alert,
}: {
  href: string;
  label: string;
  value: number;
  icon: React.ReactNode;
  alert?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex-1 rounded-xl border p-6 transition-colors duration-150 ${
        alert
          ? "border-rule-gold/50 bg-rule-gold/8 hover:bg-rule-gold/15"
          : "border-border-subtle bg-surface-card hover:bg-surface-sunken"
      }`}
    >
      <div className="flex items-center gap-3.5">
        <span
          className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
            alert ? "bg-rule-gold/25 text-festa-navy-800" : "bg-surface-sunken text-festa-navy-800"
          }`}
        >
          {icon}
        </span>
        <div>
          <div className="font-sans text-sm text-text-muted">{label}</div>
          <div className="mt-0.5 font-sans text-3xl font-semibold text-text-heading">
            {value}
          </div>
        </div>
      </div>
      {alert ? (
        <div className="mt-3 inline-flex items-center gap-1.5 font-sans text-xs font-medium uppercase tracking-[0.06em] text-festa-navy-800">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-rule-gold" />
          Necesita atención
        </div>
      ) : null}
    </Link>
  );
}

function iconProps(size: number) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
}

function PackageIcon({ size = 20 }: { size?: number }) {
  return (
    <svg {...iconProps(size)}>
      <path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z" />
      <polyline points="2.32 6.16 12 11 21.68 6.16" />
      <line x1="12" y1="22.76" x2="12" y2="11" />
    </svg>
  );
}

function MapPinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg {...iconProps(size)}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function InboxIcon({ size = 20 }: { size?: number }) {
  return (
    <svg {...iconProps(size)}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function MailIcon({ size = 20 }: { size?: number }) {
  return (
    <svg {...iconProps(size)}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}
