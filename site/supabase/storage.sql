-- =========================================================
-- Quesos Festa — bucket de Storage para imágenes
--
-- Bucket público de solo-lectura: cualquiera puede ver las
-- imágenes (son fotos de producto/catálogo, no hay nada privado),
-- pero solo la service_role puede subir/borrar archivos —
-- el mismo criterio que las tablas: lectura pública, escritura
-- solo desde el dashboard o un backend admin futuro.
-- =========================================================

insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

create policy "media_select_public"
  on storage.objects
  for select
  to anon, authenticated
  using (bucket_id = 'media');
