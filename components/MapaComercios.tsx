"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useMemo } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import type { Store } from "@/lib/data";

const ARGENTINA_CENTER: [number, number] = [-38.4161, -63.6167];

const pinIcon = L.divIcon({
  className: "qf-map-pin",
  iconSize: [20, 20],
  iconAnchor: [10, 24],
  popupAnchor: [0, -24],
});

function withCoords(stores: Store[]) {
  return stores.filter(
    (s): s is Store & { lat: number; lng: number } => s.lat != null && s.lng != null,
  );
}

/** Recentra el mapa cuando cambia la lista de comercios visibles (ej. al cambiar de provincia). */
function FitToStores({ stores }: { stores: Store[] }) {
  const map = useMap();

  useEffect(() => {
    const puntos = withCoords(stores);
    if (puntos.length === 0) return;

    if (puntos.length === 1) {
      map.setView([puntos[0].lat, puntos[0].lng], 13);
      return;
    }

    const bounds = L.latLngBounds(puntos.map((s) => [s.lat, s.lng]));
    map.fitBounds(bounds, { padding: [32, 32], maxZoom: 14 });
  }, [stores, map]);

  return null;
}

export default function MapaComercios({ stores }: { stores: Store[] }) {
  const puntos = useMemo(() => withCoords(stores), [stores]);

  return (
    <MapContainer
      center={ARGENTINA_CENTER}
      zoom={4}
      scrollWheelZoom={false}
      className="qf-map h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitToStores stores={stores} />
      {puntos.map((s) => (
        <Marker key={s.name + s.addr} position={[s.lat, s.lng]} icon={pinIcon}>
          <Popup>
            <span className="qf-popup-title">{s.name}</span>
            <span className="qf-popup-addr">{s.addr}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
