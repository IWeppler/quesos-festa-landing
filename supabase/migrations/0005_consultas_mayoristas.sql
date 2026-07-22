-- =========================================================
-- Quesos Festa — consultas mayoristas
--
-- Nota: a proposito no se agregan policies de anon/authenticated.
-- Los inserts del formulario publico de contacto mayorista pasan
-- por el Server Action usando el cliente service-role
-- (createAdminClient), que bypassea RLS. Sin policies, la tabla
-- queda cerrada a lecturas/escrituras directas via cliente anon
-- o autenticado.
-- =========================================================
create table public.consultas (
  id bigint generated always as identity primary key,
  nombre text not null,
  nombre_comercio text not null,
  email text not null,
  telefono text not null,
  tipo_comercio text not null check (
    tipo_comercio in ('supermercado', 'almacen_fiambreria', 'distribuidor', 'otro')
  ),
  mensaje text,
  created_at timestamptz not null default now()
);

create index consultas_created_at_idx on public.consultas (created_at desc);

alter table public.consultas enable row level security;
