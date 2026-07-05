import { supabase } from "./supabase";
import { publicUrl } from "./storage";
import type { Category, Chain, Product, Province, Store } from "./data";

const ACCENTS: Record<string, string> = {
  burrata: "var(--accent-burrata)",
  mascarpone: "var(--accent-mascarpone)",
  crema: "var(--accent-crema)",
  descremado: "var(--accent-descremado)",
  quark: "var(--accent-quark)",
};

function accentVar(colorAcento: string | null) {
  return ACCENTS[colorAcento ?? ""] ?? ACCENTS.burrata;
}

type ProductoRow = {
  nombre: string;
  descripcion: string | null;
  envase: string | null;
  peso: string | null;
  imagen_url: string | null;
  color_acento: string | null;
};

type CategoriaRow = {
  nombre: string;
  script: string | null;
  blurb: string | null;
  imagen_url: string | null;
  color_acento: string | null;
  productos: ProductoRow[];
};

export async function getCategorias(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categorias")
    .select(
      "nombre, script, blurb, imagen_url, color_acento, orden, productos(nombre, descripcion, envase, peso, imagen_url, color_acento, orden)",
    )
    .order("orden")
    .order("orden", { referencedTable: "productos" })
    .returns<CategoriaRow[]>();

  if (error || !data) return [];

  return data.map((cat): Category => ({
    title: cat.nombre,
    script: cat.script ?? "",
    blurb: cat.blurb ?? "",
    photo: publicUrl(cat.imagen_url) ?? "",
    photoBg: accentVar(cat.color_acento),
    items: cat.productos.map((p): Product => ({
      name: p.nombre,
      color: accentVar(p.color_acento),
      desc: p.descripcion ?? "",
      pres: [p.envase, p.peso].filter(Boolean).join(" · "),
      photo: publicUrl(p.imagen_url),
    })),
  }));
}

export type ProductoDestacado = {
  nombre: string;
  categoriaNombre: string;
  descripcion: string;
  photo: string | null;
  presentaciones: string[];
};

type ProductoDestacadoRow = {
  nombre: string;
  descripcion: string | null;
  envase: string | null;
  peso: string | null;
  imagen_url: string | null;
  categorias: { nombre: string } | null;
};

/** Zips "Doypack / Bolsa" + "150 g · 1 kg" into ["Doypack 150 g", "Bolsa 1 kg"]. */
function buildPresentaciones(envase: string | null, peso: string | null): string[] {
  if (!envase && !peso) return [];
  if (!envase || !peso) return [envase ?? peso ?? ""];

  const envases = envase.split("/").map((s) => s.trim());
  const pesos = peso.split("·").map((s) => s.trim());

  if (envases.length > 1 && envases.length === pesos.length) {
    return envases.map((e, i) => `${e} ${pesos[i]}`);
  }
  return [`${envase} ${peso}`];
}

export async function getProductosDestacados(): Promise<ProductoDestacado[]> {
  const { data, error } = await supabase
    .from("productos")
    .select("nombre, descripcion, envase, peso, imagen_url, orden, categorias(nombre)")
    .eq("destacado", true)
    .order("orden")
    .returns<ProductoDestacadoRow[]>();

  if (error || !data) return [];

  return data.map((p): ProductoDestacado => ({
    nombre: p.nombre,
    categoriaNombre: p.categorias?.nombre ?? "",
    descripcion: p.descripcion ?? "",
    photo: publicUrl(p.imagen_url),
    presentaciones: buildPresentaciones(p.envase, p.peso),
  }));
}

type PuntoVentaRow = {
  nombre_comercio: string;
  tipo: "cadena" | "barrio";
  direccion: string | null;
  provincia: string | null;
  region: string | null;
  maps_url: string | null;
  imagen_url: string | null;
};

export async function getPuntosVenta(): Promise<{
  chains: Chain[];
  provinces: Province[];
}> {
  const { data, error } = await supabase
    .from("puntos_venta")
    .select("nombre_comercio, tipo, direccion, provincia, region, maps_url, imagen_url")
    .order("provincia")
    .order("region")
    .order("nombre_comercio")
    .returns<PuntoVentaRow[]>();

  if (error || !data) return { chains: [], provinces: [] };

  const chains: Chain[] = data
    .filter((r) => r.tipo === "cadena")
    .map((r) => ({ name: r.nombre_comercio, image: publicUrl(r.imagen_url) ?? "" }));

  const provinceOrder: string[] = [];
  const byProvince = new Map<string, Map<string, Store[]>>();

  for (const r of data) {
    if (r.tipo !== "barrio") continue;
    const provincia = r.provincia ?? "Otras";
    const region = r.region ?? "Otras zonas";
    if (!byProvince.has(provincia)) {
      byProvince.set(provincia, new Map());
      provinceOrder.push(provincia);
    }
    const byRegion = byProvince.get(provincia)!;
    if (!byRegion.has(region)) byRegion.set(region, []);
    byRegion.get(region)!.push({
      name: r.nombre_comercio,
      addr: r.direccion ?? "",
      mapsUrl: r.maps_url ?? undefined,
    });
  }

  const provinces: Province[] = provinceOrder.map((name) => ({
    name,
    groups: Array.from(byProvince.get(name)!.entries()).map(([region, stores]) => ({
      region,
      stores,
    })),
  }));

  return { chains, provinces };
}
