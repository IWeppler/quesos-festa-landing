-- =========================================================
-- Quesos Festa - authenticated admin writes
--
-- This project can run without SUPABASE_SERVICE_ROLE_KEY. In that mode,
-- Server Actions use the signed-in user's session, so RLS must explicitly
-- allow authenticated admins to write rows and media files.
-- =========================================================

create policy "productos_insert_authenticated"
  on public.productos
  for insert
  to authenticated
  with check (true);

create policy "productos_update_authenticated"
  on public.productos
  for update
  to authenticated
  using (true)
  with check (true);

create policy "productos_delete_authenticated"
  on public.productos
  for delete
  to authenticated
  using (true);

create policy "puntos_venta_insert_authenticated"
  on public.puntos_venta
  for insert
  to authenticated
  with check (true);

create policy "puntos_venta_update_authenticated"
  on public.puntos_venta
  for update
  to authenticated
  using (true)
  with check (true);

create policy "puntos_venta_delete_authenticated"
  on public.puntos_venta
  for delete
  to authenticated
  using (true);

create policy "media_insert_authenticated"
  on storage.objects
  for insert
  to authenticated
  with check (
    bucket_id = 'media'
    and (
      (storage.foldername(name))[1] = 'productos'
      or (storage.foldername(name))[1] = 'puntos-venta'
    )
  );

create policy "media_delete_authenticated"
  on storage.objects
  for delete
  to authenticated
  using (
    bucket_id = 'media'
    and (
      (storage.foldername(name))[1] = 'productos'
      or (storage.foldername(name))[1] = 'puntos-venta'
    )
  );
