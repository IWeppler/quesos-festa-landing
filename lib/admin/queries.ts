import { supabase } from "@/lib/supabase";
import { createAdminClient } from "@/lib/supabase/admin";

export type CategoriaOption = { id: number; nombre: string };

export type AdminProducto = {
  id: number;
  categoria_id: number;
  nombre: string;
  descripcion: string | null;
  envase: string | null;
  peso: string | null;
  imagen_url: string | null;
  color_acento: string | null;
  destacado: boolean;
  orden: number;
  categorias: { nombre: string } | null;
  created_at: string;
};

export type AdminPuntoVenta = {
  id: number;
  nombre_comercio: string;
  tipo: "cadena" | "barrio";
  direccion: string | null;
  provincia: string | null;
  region: string | null;
  imagen_url: string | null;
  lat: number | null;
  lng: number | null;
  created_at: string;
};

export async function listCategoriasOptions(): Promise<CategoriaOption[]> {
  const { data, error } = await supabase
    .from("categorias")
    .select("id, nombre")
    .order("orden");
  if (error || !data) return [];
  return data;
}

export async function listAdminProductos(): Promise<AdminProducto[]> {
  const { data, error } = await supabase
    .from("productos")
    .select(
      "id, categoria_id, nombre, descripcion, envase, peso, imagen_url, color_acento, destacado, orden, categorias(nombre), created_at",
    )
    .order("categoria_id")
    .order("orden")
    .returns<AdminProducto[]>();
  if (error || !data) return [];
  return data;
}

export async function getAdminProducto(id: number): Promise<AdminProducto | null> {
  const { data, error } = await supabase
    .from("productos")
    .select(
      "id, categoria_id, nombre, descripcion, envase, peso, imagen_url, color_acento, destacado, orden, categorias(nombre), created_at",
    )
    .eq("id", id)
    .returns<AdminProducto[]>()
    .single();
  if (error || !data) return null;
  return data;
}

export async function listAdminPuntosVenta(): Promise<AdminPuntoVenta[]> {
  const { data, error } = await supabase
    .from("puntos_venta")
    .select(
      "id, nombre_comercio, tipo, direccion, provincia, region, imagen_url, lat, lng, created_at",
    )
    .order("tipo")
    .order("nombre_comercio")
    .returns<AdminPuntoVenta[]>();
  if (error || !data) return [];
  return data;
}

export async function getAdminPuntoVenta(id: number): Promise<AdminPuntoVenta | null> {
  const { data, error } = await supabase
    .from("puntos_venta")
    .select(
      "id, nombre_comercio, tipo, direccion, provincia, region, imagen_url, lat, lng, created_at",
    )
    .eq("id", id)
    .returns<AdminPuntoVenta[]>()
    .single();
  if (error || !data) return null;
  return data;
}

export type AdminConsulta = {
  id: number;
  nombre: string;
  nombre_comercio: string;
  email: string;
  telefono: string;
  tipo_comercio: "supermercado" | "almacen_fiambreria" | "distribuidor" | "otro";
  mensaje: string | null;
  atendida: boolean;
  created_at: string;
};

/**
 * Usa el cliente admin (service-role o, si no está configurado, la sesión
 * autenticada) porque `consultas` no tiene policy de select para anon.
 */
export async function listAdminConsultas(): Promise<AdminConsulta[]> {
  const admin = await createAdminClient();
  const { data, error } = await admin
    .from("consultas")
    .select(
      "id, nombre, nombre_comercio, email, telefono, tipo_comercio, mensaje, atendida, created_at",
    )
    .order("created_at", { ascending: false })
    .returns<AdminConsulta[]>();
  if (error || !data) return [];
  return data;
}
