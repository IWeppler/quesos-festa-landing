// Script one-off — no forma parte de la app.
//
// Geocodifica los puntos_venta de tipo 'barrio' que tienen direccion pero
// todavia no tienen lat/lng, usando Nominatim (OpenStreetMap).
//
// Uso:
//   node --env-file=.env.local --experimental-strip-types scripts/geocode-puntos-venta.ts

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error(
    "Faltan NEXT_PUBLIC_SUPABASE_URL y/o SUPABASE_SERVICE_ROLE_KEY en el entorno.",
  );
  process.exit(1);
}

// Nominatim pide un User-Agent identificable y no más de 1 request/segundo.
// https://operations.osmfoundation.org/policies/nominatim/
const NOMINATIM_URL = "https://nominatim.openstreetmap.org/search";
const USER_AGENT = "quesos-festa-landing-geocode-script/1.0 (one-off, contacto: ignacionweppler@gmail.com)";
const RATE_LIMIT_MS = 1100;

type PuntoVenta = {
  id: number;
  nombre_comercio: string;
  direccion: string;
  provincia: string | null;
};

type NominatimResult = {
  lat: string;
  lon: string;
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchPendientes(): Promise<PuntoVenta[]> {
  const params = new URLSearchParams({
    tipo: "eq.barrio",
    direccion: "not.is.null",
    lat: "is.null",
    lng: "is.null",
    select: "id,nombre_comercio,direccion,provincia",
  });

  const res = await fetch(`${SUPABASE_URL}/rest/v1/puntos_venta?${params}`, {
    headers: {
      apikey: SERVICE_ROLE_KEY!,
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Error trayendo puntos_venta: ${res.status} ${await res.text()}`);
  }

  return res.json();
}

async function geocodeDireccion(query: string): Promise<NominatimResult | null> {
  const params = new URLSearchParams({
    q: query,
    format: "json",
    countrycodes: "ar",
    limit: "1",
  });

  const res = await fetch(`${NOMINATIM_URL}?${params}`, {
    headers: { "User-Agent": USER_AGENT },
  });

  if (!res.ok) {
    throw new Error(`Nominatim respondió ${res.status} para "${query}"`);
  }

  const results: NominatimResult[] = await res.json();
  return results[0] ?? null;
}

async function actualizarCoordenadas(id: number, lat: number, lng: number) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/puntos_venta?id=eq.${id}`, {
    method: "PATCH",
    headers: {
      apikey: SERVICE_ROLE_KEY!,
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ lat, lng }),
  });

  if (!res.ok) {
    throw new Error(`Error actualizando id ${id}: ${res.status} ${await res.text()}`);
  }
}

async function main() {
  const pendientes = await fetchPendientes();
  console.log(`Puntos de venta a geocodificar: ${pendientes.length}`);

  const noEncontrados: PuntoVenta[] = [];
  let geocodificados = 0;

  for (const [index, punto] of pendientes.entries()) {
    const query = [punto.direccion, punto.provincia, "Argentina"]
      .filter(Boolean)
      .join(", ");

    try {
      const resultado = await geocodeDireccion(query);

      if (!resultado) {
        noEncontrados.push(punto);
      } else {
        await actualizarCoordenadas(punto.id, parseFloat(resultado.lat), parseFloat(resultado.lon));
        geocodificados++;
        console.log(`✓ [${punto.id}] ${punto.nombre_comercio} — ${query} → ${resultado.lat}, ${resultado.lon}`);
      }
    } catch (err) {
      noEncontrados.push(punto);
      console.error(`✗ [${punto.id}] ${punto.nombre_comercio} — error: ${(err as Error).message}`);
    }

    const esUltimo = index === pendientes.length - 1;
    if (!esUltimo) {
      await sleep(RATE_LIMIT_MS);
    }
  }

  console.log("\n=== Resumen ===");
  console.log(`Geocodificados con éxito: ${geocodificados}`);
  console.log(`Pendientes de revisión manual: ${noEncontrados.length}`);

  if (noEncontrados.length > 0) {
    console.log("\nDirecciones que no se pudieron geocodificar:");
    for (const punto of noEncontrados) {
      console.log(`  [${punto.id}] ${punto.nombre_comercio} — "${punto.direccion}" (${punto.provincia ?? "sin provincia"})`);
    }
  }
}

main().catch((err) => {
  console.error("Error fatal:", err);
  process.exit(1);
});
