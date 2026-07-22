-- =========================================================
-- Quesos Festa — schema inicial
-- =========================================================

-- ---------------------------------------------------------
-- CATEGORIAS
-- ---------------------------------------------------------
create table public.categorias (
  id bigint generated always as identity primary key,
  nombre text not null unique,
  script text,
  blurb text,
  imagen_url text,
  color_acento text check (
    color_acento in ('burrata', 'mascarpone', 'crema', 'descremado', 'quark')
  ),
  orden integer not null default 0,
  created_at timestamptz not null default now()
);

create index categorias_orden_idx on public.categorias (orden);

alter table public.categorias enable row level security;

create policy "categorias_select_public"
  on public.categorias
  for select
  to anon, authenticated
  using (true);

-- ---------------------------------------------------------
-- PRODUCTOS
--
-- Nota: color_acento vive acá (no solo en categorias) porque el
-- color real de cada producto puede diferir del acento por
-- defecto de su categoría (ej.: "Queso Crema" está en la
-- categoría "Cremas y untables" pero usa el acento 'crema', no
-- 'mascarpone').
--
-- Nota UX (pendiente para el panel admin, no es parte del
-- schema): al intentar borrar una categoria con productos
-- asociados, el FK "on delete restrict" hace que Postgres
-- devuelva un error crudo de violación de constraint. El admin
-- panel debe capturar ese error (código 23503) y mostrar un
-- mensaje entendible tipo "No se puede eliminar: hay productos
-- asignados a esta categoría".
-- ---------------------------------------------------------
create table public.productos (
  id bigint generated always as identity primary key,
  categoria_id bigint not null references public.categorias (id) on delete restrict,
  nombre text not null,
  descripcion text,
  envase text,
  peso text,
  imagen_url text,
  color_acento text check (
    color_acento in ('burrata', 'mascarpone', 'crema', 'descremado', 'quark')
  ),
  destacado boolean not null default false,
  orden integer not null default 0,
  created_at timestamptz not null default now()
);

create index productos_categoria_orden_idx on public.productos (categoria_id, orden);

create index productos_destacados_idx on public.productos (orden)
  where destacado = true;

alter table public.productos enable row level security;

create policy "productos_select_public"
  on public.productos
  for select
  to anon, authenticated
  using (true);

-- ---------------------------------------------------------
-- PUNTOS DE VENTA
--
-- Nota: maps_url se agrega porque los 21 comercios de barrio
-- existentes en lib/data.ts ya traen un link de Google Maps;
-- no estaba en el pedido original pero se pierde data real si
-- no lo migramos.
-- ---------------------------------------------------------
create table public.puntos_venta (
  id bigint generated always as identity primary key,
  nombre_comercio text not null,
  tipo text not null check (tipo in ('cadena', 'barrio')),
  direccion text,
  provincia text,
  region text,
  maps_url text,
  imagen_url text,
  created_at timestamptz not null default now()
);

create index puntos_venta_tipo_idx on public.puntos_venta (tipo);

create index puntos_venta_provincia_idx on public.puntos_venta (provincia)
  where tipo = 'barrio';

alter table public.puntos_venta enable row level security;

create policy "puntos_venta_select_public"
  on public.puntos_venta
  for select
  to anon, authenticated
  using (true);
