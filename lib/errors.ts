import type { PostgrestError } from "@supabase/supabase-js";

const CHECK_MESSAGES: Record<string, string> = {
  productos_color_acento_check: "El color elegido no es válido.",
  categorias_color_acento_check: "El color elegido no es válido.",
  puntos_venta_tipo_check: 'El tipo debe ser "cadena" o "barrio".',
  consultas_tipo_comercio_check: "El tipo de comercio elegido no es válido.",
};

const FALLBACK = "Ocurrió un error. Intentá de nuevo.";

/** Maps a Postgres/PostgREST error to a message safe to show a non-technical user. */
export function friendlyError(error: PostgrestError | null): string {
  if (!error) return FALLBACK;

  switch (error.code) {
    case "23503":
      return "No se puede completar la operación: hay datos relacionados que lo impiden.";
    case "23505":
      return "Ya existe un registro con ese valor.";
    case "23502":
      return "Faltan datos obligatorios.";
    case "23514": {
      const constraint = Object.keys(CHECK_MESSAGES).find((name) =>
        error.message.includes(name),
      );
      return constraint ? CHECK_MESSAGES[constraint] : "Uno de los valores ingresados no es válido.";
    }
    case "42501":
      return "No pudimos guardar tu consulta por un problema de configuración del servidor. Escribinos directamente a ventas@quesosfesta.com.ar mientras lo solucionamos.";
    default:
      return FALLBACK;
  }
}
