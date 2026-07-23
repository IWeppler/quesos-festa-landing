-- =========================================================
-- Quesos Festa — contenido editable del sitio (imágenes)
--
-- Tabla de filas fijas (una por "slot" de imagen) para que el
-- panel admin pueda reemplazar imágenes que hoy son estáticas
-- (fondo del hero, foto de historia) sin tocar código.
-- imagen_url guarda el path dentro del bucket "media"; si es
-- null, el sitio público usa el asset estático de /public como
-- fallback (ver lib/queries.ts).
-- =========================================================

create table public.contenido_sitio (
  clave text primary key,
  imagen_url text,
  updated_at timestamptz not null default now()
);

alter table public.contenido_sitio enable row level security;

create policy "contenido_sitio_select_public"
  on public.contenido_sitio
  for select
  to anon, authenticated
  using (true);

create policy "contenido_sitio_update_authenticated"
  on public.contenido_sitio
  for update
  to authenticated
  using (true)
  with check (true);

insert into public.contenido_sitio (clave, imagen_url) values
  ('hero_desktop', null),
  ('hero_mobile', null),
  ('historia', null);

-- Mismo patrón que 0002_authenticated_admin_writes.sql, para la
-- carpeta "sitio" del bucket "media".
create policy "media_insert_authenticated_sitio"
  on storage.objects
  for insert
  to authenticated
  with check (
    bucket_id = 'media'
    and (storage.foldername(name))[1] = 'sitio'
  );

create policy "media_delete_authenticated_sitio"
  on storage.objects
  for delete
  to authenticated
  using (
    bucket_id = 'media'
    and (storage.foldername(name))[1] = 'sitio'
  );
