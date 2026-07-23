-- =========================================================
-- Quesos Festa — premios y reconocimientos
--
-- Reemplaza el arreglo hardcodeado de components/Premios.tsx
-- por una tabla editable desde el panel admin, con el mismo
-- patrón de RLS que productos/puntos_venta (lectura pública,
-- escritura solo autenticada).
-- =========================================================

create table public.premios (
  id bigint generated always as identity primary key,
  anio integer not null,
  titulo text not null,
  descripcion text,
  orden integer not null default 0,
  created_at timestamptz not null default now()
);

create index premios_anio_orden_idx on public.premios (anio desc, orden);

alter table public.premios enable row level security;

create policy "premios_select_public"
  on public.premios
  for select
  to anon, authenticated
  using (true);

create policy "premios_insert_authenticated"
  on public.premios
  for insert
  to authenticated
  with check (true);

create policy "premios_update_authenticated"
  on public.premios
  for update
  to authenticated
  using (true)
  with check (true);

create policy "premios_delete_authenticated"
  on public.premios
  for delete
  to authenticated
  using (true);

insert into public.premios (anio, titulo, descripcion, orden) values
  (2026, 'Mundial de Quesos de Brasil', 'Medalla de Oro por nuestra Burratina Tartufo y Medalla de Plata por nuestra Burrata.', 0),
  (2026, 'ExpoSuipacha', 'Cuatro medallas por distintos productos de nuestra línea.', 1),
  (2025, 'Premios ExpoSuipacha', 'Reconocimiento nacional por nuestra Burrata y nuestros Bocconcinos.', 0),
  (2024, 'World Cheese Awards', 'Medalla de Bronce por nuestra Burrata.', 0),
  (2024, 'Cincho de Oro', 'Primer premio internacional por nuestra Burrata.', 1);
