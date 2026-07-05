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

export type Store = { name: string; addr: string; mapsUrl?: string };
export type StoreGroup = { region: string; stores: Store[] };
export type Province = { name: string; groups: StoreGroup[] };
export type Chain = { name: string; image: string };

export const pillars = [
  { big: "1989", label: "Empresa familiar, tres generaciones de oficio." },
  {
    big: "A mano",
    label: "Mozzarella hilada y burrata armada pieza por pieza.",
  },
  { big: "Italia", label: "Fieles a la receta original italiana." },
  { big: "Sin TACC", label: "Toda la línea es libre de gluten." },
];
