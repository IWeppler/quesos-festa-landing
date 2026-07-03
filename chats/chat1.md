# Quesos Festa landing institucional

_Started 2026-07-03 02:07 UTC_

---

## User

Usando el design system del proyecto (paleta navy #22265f, tipografías Cinzel para display/logo, Jost para UI/cuerpo, Cormorant + Parisienne para acentos editoriales), armá la landing institucional completa de Quesos Festa, marca de quesos frescos artesanales premium con más de 35 años de trayectoria, elaboración estilo italiano, sin TACC.
Esto es un sitio de marca (marketing institucional), NO un e-commerce. En ninguna sección debe aparecer sensación transaccional: sin precios, sin botones de "comprar" o "agregar al carrito", sin lenguaje de venta directa.
Estructura completa:

Hero — propuesta de valor de marca: tradición artesanal, +35 años, calidad premium, sin TACC.
Historia — texto breve sobre el oficio y la tradición familiar detrás de los quesos.
Catálogo de productos — organizado por categoría (quesos frescos, untables, especialidades italianas como burrata/burratina/bocconcino/stracciatella, línea sin TACC), mostrando nombre, breve descripción y presentación (envase + peso). Sin precio, sin CTA de compra. Contenido real: [pegás acá la tabla completa de productos].
Dónde encontrarnos — sección de puntos de venta, pensada como directorio institucional, no como grilla de e-commerce. Jerarquía por relevancia real, no por cantidad: primero, con mayor peso visual, "Encontranos en las principales cadenas" (Disco, Vea, Jumbo, Carrefour, Día) como sello de alcance nacional. Debajo, "Comercios y locales de barrio" agrupados por región/provincia (ej. Santa Fe, Misiones - Oberá), con nombre de comercio y dirección, presentado de forma prolija y fácil de escanear (acordeón o tabs por región, no una grilla repetitiva de cards idénticas).
Contacto mayorista — teléfono, email, redes sociales.
Footer — datos de contacto + créditos: "Powered by Ignacio Weppler".

Tono de copy: gourmet, tradicional, cálido, prolijo — más europeo que industrial. Evitá cualquier lenguaje de venta agresiva.

## Assistant

_[tool: list_files]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: copy_files]_

_[tool: run_script]_

_[tool: view_image]_

Ya tengo el design system y las 15 fotos de marca cargadas. Antes de construir necesito el contenido real de dos secciones — el brief tiene un placeholder para productos y no incluye la lista de puntos de venta.

_[tool: questions_v2]_

## User

Questions answered:
- productos: Producto/Envase/Peso;
Saborizado/Bolsa/3 KG;
Quark/Bolsa/3 KG;
Q. Crema/Bolsa / Pote/ 3 KG / 290 GS;
Q.Descremado/Bolsa / Pote3 KG / 290 GS;
Mascarpone/Bolsa / Pote3 KG / 250 GS;
Polpeta/Doypack/1 KG / 200 GS;
Boconccino/Bolsa / Doypack/1 KG / 150 GS;
Strachiatella/Doypack / Pote/1 KG / 250 GS;
Burrata/Pote/200 GS;
Burratina Clásica/Pote/150 GS;
Burratina Tartufo/Pote/150 GS;
Burratina Caprese/Pote/150 GS;
Burratina (balde)/Balde/100 GS x 10 U;
Q. Jiro/Manga/1 KG;
Cottage/Pote / Balde/250 GS / 2.5 KG;
- puntos_venta: Misiones Oberá
- DINI Y CIA. S.R.L DINCO 1 — Av. Sarmiento y Santa Fe
- DINI Y CIA S.R.L DINCO III — Av. Libertad 540
- Doña Laura S.R.L Panadería Doña Laura — Av. Libertad 824
- Gauze S.R.L Supermercado Gauze — Leandro N. Alem 967
- Berling Vanesa La Frutería — Santa Fe 60
- El Condor S.R.L Supermercado — Apóstoles Norte 951

Santa Fe
- Zaatar Fisherton — Perón 7299, Rosario, Santa Fe
- Zaatar Centro — Av. Pellegrini 689, Rosario, Santa Fe
- TAP TIENDA — Av. Gral Paz 4921, Santa Fe

Ramos Mejía / Buenos Aires
- Fiambrería La Avenida — Av. de Mayo 877, Ramos Mejía
- Almacén La Esquina — Mitre y Pueyrredón, Ramos Mejía
- La Proveeduría — Gelly y Obes, Ramos Mejía
- La Taba — Alvarado y Bolívar, Ramos Mejía
- Pranzo — Acassuso 7189, Barrio Naón
- El Manchego — San Martín 1549, Ramos Mejía
- Tienda Gourmet — Mendoza 2538, San Justo

Zona Norte
- Fiambrería Kesitos — Av. Boulogne Sur Mer 1253
- La Chacra La Boutique del Salame — Av. San Martín 3171, Belén de Escobar

Zona Sur
- El Palacio del Jamón — Alem 299, Quilmes
- El Palacio del Jamón — Calle 148 N. 1272 entre 12 y 13, Berazategui
- Piacere — Shopping Plaza Canning, Canning

Grandes Cadenas de supermercados
Día, Disco, Vea, Jumbo, Carreofur
- contacto: Contacto: ventas mayoristas 11 4991-4156, ventas@quesosfesta.com.ar, @quesosfesta.
- organizacion_catalogo: Secciones apiladas por categoría, todo visible al hacer scroll
- donde_encontrarnos_ui: Tabs por provincia
- variaciones: Sí — variaciones del Catálogo
- idioma_ui: Sí, solo español (voseo)

## Assistant

Tengo todo el contenido. Voy a armar la landing completa. Primero reviso los componentes y tokens que voy a usar.

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

Tengo todo. Voy a construir la landing completa en un solo Design Component.

_[tool: update_todos]_

_[tool: dc_write]_

_[tool: update_todos]_

_[tool: show_html]_

_[tool: show_html]_

Hero se ve bien. Voy a reforzar el degradado para legibilidad y revisar el catálogo.

_[tool: dc_html_str_replace]_

_[tool: multi_screenshot]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

_[tool: show_html]_

_[tool: save_screenshot]_

Las tres vistas del catálogo y el switcher funcionan. Cierro y verifico.

_[tool: update_todos]_

_[tool: snip]_

_[tool: ready_for_verification]_

Listo. La landing institucional de Quesos Festa está completa en `Quesos Festa - Landing.dc.html`, íntegramente sobre el design system (navy #22265f, Cinzel/Jost/Cormorant/Parisienne).

Qué incluye:
- **Hero** con propuesta de marca (35+ años, artesanal, receta italiana, sin TACC) — solo navegación, sin lenguaje transaccional.
- **Historia** familiar + sello "Sin TACC" y franja de valores.
- **Catálogo** con los 15 productos reales organizados en 3 categorías (especialidades italianas, cremas/untables, quesos blancos), cada uno con descripción gourmet y presentación (envase + peso). Sin precios ni CTA de compra. Como pediste variaciones del catálogo, agregué un switcher **Editorial / Grilla / Carta** para verlo en tres tratamientos dentro de la misma página.
- **Dónde encontrarnos**: banda navy destacada para las cadenas nacionales (Día, Disco, Vea, Jumbo, Carrefour) como sello de alcance, y debajo tabs por provincia (Buenos Aires / Santa Fe / Misiones) con los comercios agrupados por región — directorio prolijo, no grilla de cards.
- **Contacto mayorista** y **footer** con créditos "Powered by Ignacio Weppler".

Los productos sin foto propia usan un placeholder tipográfico con color de familia. Si querés, puedo dejar fija una de las tres vistas del catálogo o ajustar el orden/agrupación de los comercios.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

Corregido — los tres bloques `<img>` con `src` interpolado ahora quedan fuera del render placeholder, así que no se disparan más los 404 en la carga. El resto ya estaba correcto y on-brand.

## User

Vamos a quedarnos con el formato Carta para el catálogo de productos (descartá Editorial y Grilla) y hacerle dos ajustes antes de pasar a código:
1. Imagen dinámica interactiva
La imagen grande de la izquierda (actualmente estática por categoría, ej. "Presentación de Especialidades italianas") debe volverse dinámica: al hacer hover sobre cualquier producto de la lista de la derecha (o tap en mobile, ya que no hay hover táctil), esa imagen debe transicionar con un fade suave hacia la foto de ese producto puntual. Si un producto todavía no tiene foto propia cargada, la imagen debe volver a mostrar la foto genérica de categoría como fallback, sin dejar espacios vacíos ni verse roto. El nombre del producto en hover/tap debe destacarse levemente (ej. cambio sutil de color o peso de fuente) para reforzar qué ítem se está mostrando.
2. Efectos de scroll sutiles
Agregá animaciones de entrada al hacer scroll, coherentes con el tono premium/artesanal de la marca — nada llamativo ni "tech":

Fade-in + rise sutil (opacity 0→1, translateY de 12-16px, ~500-600ms, ease-out) para secciones y elementos al entrar en viewport.
Stagger leve (60-80ms) entre ítems de una misma sección — por ejemplo entre los productos de la lista Carta, o entre las cards de "Cremas y untables".
La línea dorada corta que aparece debajo de los subtítulos de sección (como en "Especialidades italianas") debería "dibujarse" de ancho 0 a su ancho final al entrar en viewport, como un detalle de marca.
Evitá parallax, zoom, rotaciones o rebotes — todo debe sentirse discreto y elegante, no llamativo.

Aplicá esto de forma consistente en toda la landing, no solo en la sección de catálogo.

## Assistant

_[tool: read_file]_

Voy a quitar Editorial y Grilla (dejando solo Carta), hacer la imagen dinámica con cross-fade + fallback, y agregar los reveals de scroll con stagger y el trazo de la línea dorada. Reescribo el componente completo.

_[tool: dc_write]_

_[tool: show_html]_

_[tool: show_html]_

Hero se ve bien. Verifico el catálogo con hover activo y los reveals.

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

Todo funciona: la imagen hace cross-fade a la foto del producto (Burrata → su foto propia), y cuando el producto no tiene foto (Burratina Clásica) el overlay se desvanece a 0 y vuelve la foto genérica de categoría. Los reveals de scroll se disparan correctamente.

_[tool: save_screenshot]_

_[tool: eval_js]_

El `getBoundingClientRect` confirma que no hay solapamiento real (el nombre ocupa una línea y la descripción queda debajo con separación) — el traslape que se veía era un artefacto del renderizador de captura, no del layout real. Todo verificado: cross-fade con fallback, resaltado del nombre activo, y reveals de scroll con stagger y trazado de la línea dorada.

_[tool: ready_for_verification]_

Listo. Ajustes aplicados:

- **Catálogo solo en formato Carta** — eliminé las vistas Editorial y Grilla y el selector.
- **Imagen dinámica**: al pasar el cursor (o tocar en mobile) sobre un producto, la foto grande hace cross-fade a la imagen de ese producto; si el producto no tiene foto propia, el overlay se desvanece y vuelve la foto genérica de la categoría, sin huecos ni roturas. El nombre del ítem activo se resalta (color de familia + peso de fuente + punto agrandado).
- **Reveals de scroll** en toda la landing: fade-in + rise sutil (~580ms ease-out), stagger de 70ms entre ítems (productos, valores, cadenas, contacto) y el trazo de las líneas doradas dibujándose de 0 a su ancho al entrar en viewport. Respeta `prefers-reduced-motion`. Sin parallax, zoom ni rebotes.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: eval_js]_

Corregido — envolví la imagen overlay en un `sc-if`, así el hole ya no se usa como `src` literal durante el streaming. Verificado: cero URLs literales `{{...}}` y cero imágenes rotas en el catálogo.

## User

Save as standalone HTML: Quesos Festa - Landing.dc.html

## Assistant

Voy a preparar una copia para el export. El detalle clave: las fotos del catálogo se referencian como strings en el JS (no como atributos HTML), así que el bundler no las detecta solo — necesito meta tags `ext-resource-dependency` para esas.

_[tool: copy_files]_

_[tool: read_file]_

_[tool: update_todos]_

_[tool: str_replace_edit]_

Now update the logic to resolve photos through `window.__resources`.

_[tool: str_replace_edit]_

## Assistant

Todos 4 and 5 are done. The category-level photos still use raw paths in JS — need to route those through `__resources` too.

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: update_todos]_

_[tool: super_inline_html]_

Those two warnings are the dynamic `src` holes (resolved at runtime via `__resources`) — harmless. Let me verify the bundle renders with photos intact.

_[tool: show_html]_

_[tool: eval_js]_

_[tool: show_html]_

_[tool: eval_js]_

_[tool: eval_js]_

The bundle works — catalog photos resolve through `__resources` as blob URLs (10 assets embedded), zero broken images, hero and section backgrounds intact. The standalone file is fully self-contained and works offline.

_[tool: present_fs_item_for_download]_

_[tool: update_todos]_

Listo — archivo standalone arriba. Es un único HTML autónomo con las 10 fotos, fuentes y estilos embebidos; funciona offline sin dependencias. El catálogo interactivo (cross-fade, tabs) y los reveals de scroll siguen operativos.

