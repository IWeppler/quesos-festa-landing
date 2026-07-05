-- =========================================================
-- Quesos Festa — seed a partir de lib/data.ts
--
-- imagen_url guarda el path relativo dentro del bucket "media"
-- (no la URL absoluta) — el frontend lo resuelve con
-- supabase.storage.from('media').getPublicUrl(path). Los
-- archivos todavía no están subidos a Storage (ver
-- supabase/storage.sql); una vez subidos con estos mismos paths,
-- getPublicUrl() va a devolver una URL válida.
-- =========================================================

-- ---------------------------------------------------------
-- CATEGORIAS
-- ---------------------------------------------------------
insert into public.categorias (nombre, script, blurb, imagen_url, color_acento, orden) values
('Especialidades italianas', 'Presentación de',
 'El corazón de nuestra casa: quesos de pasta hilada, elaborados pieza por pieza como manda la receta original.',
 'categorias/foto-2.jpg', 'burrata', 1),
('Cremas y untables', 'Para untar y cocinar',
 'Texturas sedosas para la mesa dulce y la cocina profesional, incluida la línea Jiro Premium.',
 'categorias/foto-11.jpg', 'mascarpone', 2),
('Quesos blancos', 'Frescura de todos los días',
 'La línea liviana y natural, también en formatos de 3 kg para food service.',
 'categorias/foto-6.jpg', 'quark', 3);

-- ---------------------------------------------------------
-- PRODUCTOS — Especialidades italianas
-- ---------------------------------------------------------
insert into public.productos (categoria_id, nombre, descripcion, envase, peso, imagen_url, color_acento, orden) values
((select id from public.categorias where nombre = 'Especialidades italianas'),
 'Burrata', 'Corazón de stracciatella cremosa envuelto en una fina hoja de mozzarella hilada a mano.',
 'Pote', '200 g', 'productos/foto-12.jpg', 'burrata', 1),
((select id from public.categorias where nombre = 'Especialidades italianas'),
 'Burratina Clásica', 'La burrata en su versión individual: delicada, cremosa y lista para lucir en la mesa.',
 'Pote', '150 g', null, 'burrata', 2),
((select id from public.categorias where nombre = 'Especialidades italianas'),
 'Burratina Tartufo', 'Con trufa negra: un bocado de perfume intenso y elegante.',
 'Pote', '150 g', 'productos/foto-13.jpg', 'burrata', 3),
((select id from public.categorias where nombre = 'Especialidades italianas'),
 'Burratina Caprese', 'Tomate y albahaca en el corazón: la caprese hecha burratina.',
 'Pote', '150 g', 'productos/foto-14.jpg', 'burrata', 4),
((select id from public.categorias where nombre = 'Especialidades italianas'),
 'Burratina x10', 'Formato profesional para restaurantes y cocinas exigentes.',
 'Balde', '100 g × 10 u', null, 'burrata', 5),
((select id from public.categorias where nombre = 'Especialidades italianas'),
 'Bocconcino', 'Pequeños bocados de mozzarella fresca, tiernos y jugosos.',
 'Doypack / Bolsa', '150 g · 1 kg', null, 'burrata', 6),
((select id from public.categorias where nombre = 'Especialidades italianas'),
 'Stracciatella', 'Hebras de mozzarella en crema: el corazón mismo de la burrata.',
 'Doypack / Pote', '250 g · 1 kg', 'productos/foto-2.jpg', 'burrata', 7),
((select id from public.categorias where nombre = 'Especialidades italianas'),
 'Polpeta', 'Bocha de mozzarella fresca hilada, ideal para pizzas y ensaladas.',
 'Doypack', '200 g · 1 kg', 'productos/foto-10.jpg', 'burrata', 8);

-- ---------------------------------------------------------
-- PRODUCTOS — Cremas y untables
-- ---------------------------------------------------------
insert into public.productos (categoria_id, nombre, descripcion, envase, peso, imagen_url, color_acento, orden) values
((select id from public.categorias where nombre = 'Cremas y untables'),
 'Mascarpone', 'Untable italiano de textura sedosa, base ineludible del tiramisú y la cocina dulce.',
 'Pote / Bolsa', '250 g · 3 kg', 'productos/foto-11.jpg', 'mascarpone', 1),
((select id from public.categorias where nombre = 'Cremas y untables'),
 'Queso Crema', 'Suave, parejo y versátil: para untar y para cocinar.',
 'Pote / Bolsa', '290 g · 3 kg', null, 'crema', 2),
((select id from public.categorias where nombre = 'Cremas y untables'),
 'Jiro Premium', 'Nuestra crema premium para pastelería y cocina profesional, de cuerpo firme y sabor limpio.',
 'Manga', '1 kg', 'productos/foto-9.jpg', 'crema', 3),
((select id from public.categorias where nombre = 'Cremas y untables'),
 'Cottage', 'Queso fresco granulado, liviano y natural.',
 'Pote / Balde', '250 g · 2,5 kg', 'productos/foto-5.jpg', 'crema', 4);

-- ---------------------------------------------------------
-- PRODUCTOS — Quesos blancos
-- ---------------------------------------------------------
insert into public.productos (categoria_id, nombre, descripcion, envase, peso, imagen_url, color_acento, orden) values
((select id from public.categorias where nombre = 'Quesos blancos'),
 'Queso Descremado', 'Untable liviano: la frescura de todos los días.',
 'Pote / Bolsa', '290 g · 3 kg', 'productos/foto-8.jpg', 'descremado', 1),
((select id from public.categorias where nombre = 'Quesos blancos'),
 'Quark', 'Queso blanco magro de tradición europea, suave y neutro.',
 'Bolsa', '3 kg', null, 'quark', 2),
((select id from public.categorias where nombre = 'Quesos blancos'),
 'Saborizado', 'Queso blanco saborizado, para propuestas de cocina y gastronomía.',
 'Bolsa', '3 kg', 'productos/foto-6.jpg', 'quark', 3);

-- ---------------------------------------------------------
-- PUNTOS DE VENTA — comercios de barrio (Buenos Aires)
-- ---------------------------------------------------------
insert into public.puntos_venta (nombre_comercio, tipo, direccion, provincia, region, maps_url) values
('Fiambrería La Avenida', 'barrio', 'Av. de Mayo 877, Ramos Mejía', 'Buenos Aires', 'Oeste · Ramos Mejía y alrededores', 'https://maps.app.goo.gl/sJkUNe8E752S9SPx7'),
('Almacén La Esquina', 'barrio', 'Mitre y Pueyrredón, Ramos Mejía', 'Buenos Aires', 'Oeste · Ramos Mejía y alrededores', 'https://maps.app.goo.gl/tAiRBJn1zhm2tjed8'),
('La Proveeduría', 'barrio', 'Gelly y Obes, Ramos Mejía', 'Buenos Aires', 'Oeste · Ramos Mejía y alrededores', 'https://maps.app.goo.gl/4nAuGGhupzdu6KFA6'),
('La Taba', 'barrio', 'Alvarado y Bolívar, Ramos Mejía', 'Buenos Aires', 'Oeste · Ramos Mejía y alrededores', 'https://maps.app.goo.gl/uerAFPvDqKHEhCAL9'),
('Pranzo', 'barrio', 'Acassuso 7189, Barrio Naón', 'Buenos Aires', 'Oeste · Ramos Mejía y alrededores', 'https://maps.app.goo.gl/us5NzAnek8bLnJsj8'),
('El Manchego', 'barrio', 'San Martín 1549, Ramos Mejía', 'Buenos Aires', 'Oeste · Ramos Mejía y alrededores', 'https://maps.app.goo.gl/wg5wQcvuJfczRb5W6'),
('Tienda Gourmet', 'barrio', 'Mendoza 2538, San Justo', 'Buenos Aires', 'Oeste · Ramos Mejía y alrededores', 'https://maps.app.goo.gl/uBmAQbgHTfopwH6Q8'),
('Fiambrería Kesitos', 'barrio', 'Av. Boulogne Sur Mer 1253', 'Buenos Aires', 'Zona Norte', 'https://maps.app.goo.gl/5oMuuaTasMXgFzje6'),
('La Chacra · La Boutique del Salame', 'barrio', 'Av. San Martín 3171, Belén de Escobar', 'Buenos Aires', 'Zona Norte', 'https://maps.app.goo.gl/X2nRPFw7DrS91sSg7'),
('El Palacio del Jamón', 'barrio', 'Alem 299, Quilmes', 'Buenos Aires', 'Zona Sur', 'https://maps.app.goo.gl/Vaxj7o2rgm8soZys9'),
('El Palacio del Jamón', 'barrio', 'Calle 148 N.º 1272 (e/ 12 y 13), Berazategui', 'Buenos Aires', 'Zona Sur', 'https://maps.app.goo.gl/FKNuSi5oip2xyUSHA'),
('Piacere', 'barrio', 'Shopping Plaza Canning, Canning', 'Buenos Aires', 'Zona Sur', 'https://maps.app.goo.gl/tfanwBNUYbQZp2z29');

-- ---------------------------------------------------------
-- PUNTOS DE VENTA — comercios de barrio (Santa Fe, Misiones)
-- ---------------------------------------------------------
insert into public.puntos_venta (nombre_comercio, tipo, direccion, provincia, region, maps_url) values
('Zaatar Fisherton', 'barrio', 'Perón 7299, Rosario', 'Santa Fe', 'Rosario y Santa Fe capital', 'https://maps.app.goo.gl/m1PSviCadf54GjgYA'),
('Zaatar Centro', 'barrio', 'Av. Pellegrini 689, Rosario', 'Santa Fe', 'Rosario y Santa Fe capital', 'https://maps.app.goo.gl/QDrr1KsUNeCX1oYg7'),
('TAP Tienda', 'barrio', 'Av. Gral. Paz 4921, Santa Fe', 'Santa Fe', 'Rosario y Santa Fe capital', 'https://maps.app.goo.gl/9z3xCSWaSTi5MYb97'),
('Dinco I · Dini y Cía. S.R.L.', 'barrio', 'Av. Sarmiento y Santa Fe', 'Misiones', 'Oberá', 'https://maps.app.goo.gl/cUPLRipTwuLmRnP36'),
('Dinco III · Dini y Cía. S.R.L.', 'barrio', 'Av. Libertad 540', 'Misiones', 'Oberá', 'https://maps.app.goo.gl/mMVjkUx1ZPPYjT796'),
('Panadería Doña Laura', 'barrio', 'Av. Libertad 824', 'Misiones', 'Oberá', 'https://maps.app.goo.gl/9mYa8rpxzjjhkVSu5'),
('Supermercado Gauze', 'barrio', 'Leandro N. Alem 967', 'Misiones', 'Oberá', 'https://maps.app.goo.gl/DmCjDs6gPGQjcyjp9'),
('La Frutería', 'barrio', 'Santa Fe 60', 'Misiones', 'Oberá', 'https://maps.app.goo.gl/LkHSFxeADeyY3Kbd7'),
('Supermercado El Cóndor', 'barrio', 'Apóstoles Norte 951', 'Misiones', 'Oberá', 'https://maps.app.goo.gl/kcWLX4DcBFTMLAzX7');

-- ---------------------------------------------------------
-- PUNTOS DE VENTA — cadenas nacionales
-- ---------------------------------------------------------
insert into public.puntos_venta (nombre_comercio, tipo, imagen_url) values
('Día', 'cadena', 'puntos-venta/dia.webp'),
('Disco', 'cadena', 'puntos-venta/disco.png'),
('Vea', 'cadena', 'puntos-venta/vea.webp'),
('Jumbo', 'cadena', 'puntos-venta/logo.webp'),
('Carrefour', 'cadena', 'puntos-venta/carrefour.webp');
