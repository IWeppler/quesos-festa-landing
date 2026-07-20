-- =========================================================
-- Quesos Festa — estado de consultas + acceso admin
--
-- Nota: a diferencia de los inserts (que solo pasan por el
-- Server Action del formulario publico via service-role), la
-- lectura y el toggle "atendida" desde el panel admin usan la
-- sesion del usuario autenticado, asi que necesitan policies
-- explicitas (mismo patron que 0002_authenticated_admin_writes.sql).
-- =========================================================
alter table public.consultas
  add column atendida boolean not null default false;

create index consultas_atendida_idx on public.consultas (atendida)
  where atendida = false;

create policy "consultas_select_authenticated"
  on public.consultas
  for select
  to authenticated
  using (true);

create policy "consultas_update_authenticated"
  on public.consultas
  for update
  to authenticated
  using (true)
  with check (true);
