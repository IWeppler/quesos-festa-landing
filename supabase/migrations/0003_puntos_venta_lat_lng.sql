-- =========================================================
-- Quesos Festa — coordenadas de puntos_venta
--
-- lat/lng son nullable: se completan via geocoding (ver
-- scripts/geocode-puntos-venta.ts) para los puntos de tipo
-- 'barrio', que son los que se muestran con mapa en
-- "Dónde encontrarnos". Los de tipo 'cadena' no los necesitan.
-- =========================================================

alter table public.puntos_venta
  add column lat double precision,
  add column lng double precision;
