export type Product = {
  name: string;
  color: string; // CSS custom property, e.g. "var(--accent-burrata)"
  desc: string;
  pres: string;
  photo: string | null;
};

export type Category = {
  title: string;
  script: string;
  blurb: string;
  photo: string;
  photoBg: string;
  items: Product[];
};

const P = "/assets/photos/";

const NAVY = "var(--accent-burrata)";
const GOLD = "var(--accent-mascarpone)";
const BLUE = "var(--accent-crema)";
const GREEN = "var(--accent-descremado)";
const RUST = "var(--accent-quark)";

function mk(
  name: string,
  color: string,
  desc: string,
  pres: string,
  photo?: string,
): Product {
  return { name, color, desc, pres, photo: photo ? P + photo : null };
}

export const categories: Category[] = [
  {
    title: "Especialidades italianas",
    script: "Presentación de",
    blurb:
      "El corazón de nuestra casa: quesos de pasta hilada, elaborados pieza por pieza como manda la receta original.",
    photo: P + "foto-2.jpg",
    photoBg: NAVY,
    items: [
      mk(
        "Burrata",
        NAVY,
        "Corazón de stracciatella cremosa envuelto en una fina hoja de mozzarella hilada a mano.",
        "Pote · 200 g",
        "foto-12.jpg",
      ),
      mk(
        "Burratina Clásica",
        NAVY,
        "La burrata en su versión individual: delicada, cremosa y lista para lucir en la mesa.",
        "Pote · 150 g",
      ),
      mk(
        "Burratina Tartufo",
        NAVY,
        "Con trufa negra: un bocado de perfume intenso y elegante.",
        "Pote · 150 g",
        "foto-13.jpg",
      ),
      mk(
        "Burratina Caprese",
        NAVY,
        "Tomate y albahaca en el corazón: la caprese hecha burratina.",
        "Pote · 150 g",
        "foto-14.jpg",
      ),
      mk(
        "Burratina x10",
        NAVY,
        "Formato profesional para restaurantes y cocinas exigentes.",
        "Balde · 100 g × 10 u",
      ),
      mk(
        "Bocconcino",
        NAVY,
        "Pequeños bocados de mozzarella fresca, tiernos y jugosos.",
        "Doypack / Bolsa · 150 g · 1 kg",
      ),
      mk(
        "Stracciatella",
        NAVY,
        "Hebras de mozzarella en crema: el corazón mismo de la burrata.",
        "Doypack / Pote · 250 g · 1 kg",
        "foto-2.jpg",
      ),
      mk(
        "Polpeta",
        NAVY,
        "Bocha de mozzarella fresca hilada, ideal para pizzas y ensaladas.",
        "Doypack · 200 g · 1 kg",
        "foto-10.jpg",
      ),
    ],
  },
  {
    title: "Cremas y untables",
    script: "Para untar y cocinar",
    blurb:
      "Texturas sedosas para la mesa dulce y la cocina profesional, incluida la línea Jiro Premium.",
    photo: P + "foto-11.jpg",
    photoBg: GOLD,
    items: [
      mk(
        "Mascarpone",
        GOLD,
        "Untable italiano de textura sedosa, base ineludible del tiramisú y la cocina dulce.",
        "Pote / Bolsa · 250 g · 3 kg",
        "foto-11.jpg",
      ),
      mk(
        "Queso Crema",
        BLUE,
        "Suave, parejo y versátil: para untar y para cocinar.",
        "Pote / Bolsa · 290 g · 3 kg",
      ),
      mk(
        "Jiro Premium",
        BLUE,
        "Nuestra crema premium para pastelería y cocina profesional, de cuerpo firme y sabor limpio.",
        "Manga · 1 kg",
        "foto-9.jpg",
      ),
      mk(
        "Cottage",
        BLUE,
        "Queso fresco granulado, liviano y natural.",
        "Pote / Balde · 250 g · 2,5 kg",
        "foto-5.jpg",
      ),
    ],
  },
  {
    title: "Quesos blancos",
    script: "Frescura de todos los días",
    blurb:
      "La línea liviana y natural, también en formatos de 3 kg para food service.",
    photo: P + "foto-6.jpg",
    photoBg: RUST,
    items: [
      mk(
        "Queso Descremado",
        GREEN,
        "Untable liviano: la frescura de todos los días.",
        "Pote / Bolsa · 290 g · 3 kg",
        "foto-8.jpg",
      ),
      mk(
        "Quark",
        RUST,
        "Queso blanco magro de tradición europea, suave y neutro.",
        "Bolsa · 3 kg",
      ),
      mk(
        "Saborizado",
        RUST,
        "Queso blanco saborizado, para propuestas de cocina y gastronomía.",
        "Bolsa · 3 kg",
        "foto-6.jpg",
      ),
    ],
  },
];

export type Store = { name: string; addr: string; mapsUrl?: string };
export type StoreGroup = { region: string; stores: Store[] };
export type Province = { name: string; groups: StoreGroup[] };

export const provinces: Province[] = [
  {
    name: "Buenos Aires",
    groups: [
      {
        region: "Oeste · Ramos Mejía y alrededores",
        stores: [
          {
            name: "Fiambrería La Avenida",
            addr: "Av. de Mayo 877, Ramos Mejía",
            mapsUrl: "https://maps.app.goo.gl/sJkUNe8E752S9SPx7",
          },
          {
            name: "Almacén La Esquina",
            addr: "Mitre y Pueyrredón, Ramos Mejía",
            mapsUrl: "https://maps.app.goo.gl/tAiRBJn1zhm2tjed8",
          },
          {
            name: "La Proveeduría",
            addr: "Gelly y Obes, Ramos Mejía",
            mapsUrl: "https://maps.app.goo.gl/4nAuGGhupzdu6KFA6",
          },
          {
            name: "La Taba",
            addr: "Alvarado y Bolívar, Ramos Mejía",
            mapsUrl: "https://maps.app.goo.gl/uerAFPvDqKHEhCAL9",
          },
          {
            name: "Pranzo",
            addr: "Acassuso 7189, Barrio Naón",
            mapsUrl: "https://maps.app.goo.gl/us5NzAnek8bLnJsj8",
          },
          {
            name: "El Manchego",
            addr: "San Martín 1549, Ramos Mejía",
            mapsUrl: "https://maps.app.goo.gl/wg5wQcvuJfczRb5W6",
          },
          {
            name: "Tienda Gourmet",
            addr: "Mendoza 2538, San Justo",
            mapsUrl: "https://maps.app.goo.gl/uBmAQbgHTfopwH6Q8",
          },
        ],
      },
      {
        region: "Zona Norte",
        stores: [
          {
            name: "Fiambrería Kesitos",
            addr: "Av. Boulogne Sur Mer 1253",
            mapsUrl: "https://maps.app.goo.gl/5oMuuaTasMXgFzje6",
          },
          {
            name: "La Chacra · La Boutique del Salame",
            addr: "Av. San Martín 3171, Belén de Escobar",
            mapsUrl: "https://maps.app.goo.gl/X2nRPFw7DrS91sSg7",
          },
        ],
      },
      {
        region: "Zona Sur",
        stores: [
          {
            name: "El Palacio del Jamón",
            addr: "Alem 299, Quilmes",
            mapsUrl: "https://maps.app.goo.gl/Vaxj7o2rgm8soZys9",
          },
          {
            name: "El Palacio del Jamón",
            addr: "Calle 148 N.º 1272 (e/ 12 y 13), Berazategui",
            mapsUrl: "https://maps.app.goo.gl/FKNuSi5oip2xyUSHA",
          },
          {
            name: "Piacere",
            addr: "Shopping Plaza Canning, Canning",
            mapsUrl: "https://maps.app.goo.gl/tfanwBNUYbQZp2z29",
          },
        ],
      },
    ],
  },
  {
    name: "Santa Fe",
    groups: [
      {
        region: "Rosario y Santa Fe capital",
        stores: [
          {
            name: "Zaatar Fisherton",
            addr: "Perón 7299, Rosario",
            mapsUrl: "https://maps.app.goo.gl/m1PSviCadf54GjgYA",
          },
          {
            name: "Zaatar Centro",
            addr: "Av. Pellegrini 689, Rosario",
            mapsUrl: "https://maps.app.goo.gl/QDrr1KsUNeCX1oYg7",
          },
          {
            name: "TAP Tienda",
            addr: "Av. Gral. Paz 4921, Santa Fe",
            mapsUrl: "https://maps.app.goo.gl/9z3xCSWaSTi5MYb97",
          },
        ],
      },
    ],
  },
  {
    name: "Misiones",
    groups: [
      {
        region: "Oberá",
        stores: [
          {
            name: "Dinco I · Dini y Cía. S.R.L.",
            addr: "Av. Sarmiento y Santa Fe",
            mapsUrl: "https://maps.app.goo.gl/cUPLRipTwuLmRnP36",
          },
          {
            name: "Dinco III · Dini y Cía. S.R.L.",
            addr: "Av. Libertad 540",
            mapsUrl: "https://maps.app.goo.gl/mMVjkUx1ZPPYjT796",
          },
          {
            name: "Panadería Doña Laura",
            addr: "Av. Libertad 824",
            mapsUrl: "https://maps.app.goo.gl/9mYa8rpxzjjhkVSu5",
          },
          {
            name: "Supermercado Gauze",
            addr: "Leandro N. Alem 967",
            mapsUrl: "https://maps.app.goo.gl/DmCjDs6gPGQjcyjp9",
          },
          {
            name: "La Frutería",
            addr: "Santa Fe 60",
            mapsUrl: "https://maps.app.goo.gl/LkHSFxeADeyY3Kbd7",
          },
          {
            name: "Supermercado El Cóndor",
            addr: "Apóstoles Norte 951",
            mapsUrl: "https://maps.app.goo.gl/kcWLX4DcBFTMLAzX7",
          },
        ],
      },
    ],
  },
];

export const pillars = [
  { big: "1989", label: "Empresa familiar, tres generaciones de oficio." },
  {
    big: "A mano",
    label: "Mozzarella hilada y burrata armada pieza por pieza.",
  },
  { big: "Italia", label: "Fieles a la receta original italiana." },
  { big: "Sin TACC", label: "Toda la línea es libre de gluten." },
];

export const chains = [
  { name: "Día", image: P + "dia.webp" },
  { name: "Disco", image: P + "disco.png" },
  { name: "Vea", image: P + "vea.webp" },
  { name: "Jumbo", image: P + "logo.webp" },
  { name: "Carrefour", image: P + "carrefour.webp" },
];
