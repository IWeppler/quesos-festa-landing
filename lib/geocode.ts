import "server-only";

// Mismo approach que scripts/geocode-puntos-venta.ts, pero pensado para una
// sola consulta on-demand en vez de un batch con rate limiting.
// https://operations.osmfoundation.org/policies/nominatim/
const NOMINATIM_URL = "https://nominatim.openstreetmap.org/search";
const USER_AGENT =
  "quesos-festa-landing/1.0 (admin geocoding, contacto: ignacionweppler@gmail.com)";

export async function geocodeDireccion(
  query: string,
): Promise<{ lat: number; lng: number } | null> {
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
    throw new Error(`Nominatim respondió ${res.status}`);
  }

  const results: { lat: string; lon: string }[] = await res.json();
  const primero = results[0];
  if (!primero) return null;

  return { lat: parseFloat(primero.lat), lng: parseFloat(primero.lon) };
}
