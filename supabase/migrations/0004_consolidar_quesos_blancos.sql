-- =========================================================
-- Quesos Festa — consolidar "Quesos blancos" en "Cremas y untables"
--
-- El catálogo pasa de 3 a 2 categorías: los productos de
-- "Quesos blancos" (Queso Descremado, Quark, Saborizado) se
-- reasignan a "Cremas y untables" (quedan al final del listado)
-- y la categoría vacía se elimina.
-- =========================================================

update public.productos
set
  categoria_id = (select id from public.categorias where nombre = 'Cremas y untables'),
  orden = orden + (
    select coalesce(max(orden), 0)
    from public.productos
    where categoria_id = (select id from public.categorias where nombre = 'Cremas y untables')
  )
where categoria_id = (select id from public.categorias where nombre = 'Quesos blancos');

delete from public.categorias where nombre = 'Quesos blancos';
