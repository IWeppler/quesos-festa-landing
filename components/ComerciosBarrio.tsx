"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import type { Province, Store } from "@/lib/data";

const MapaComercios = dynamic(() => import("./MapaComercios"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center bg-surface-sunken font-sans text-sm text-text-muted">
      Cargando mapa…
    </div>
  ),
});

function getMapsUrl(store: Store) {
  return (
    store.mapsUrl ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${store.name}, ${store.addr}`,
    )}`
  );
}

export default function ComerciosBarrio({ provinces }: { provinces: Province[] }) {
  const [prov, setProv] = useState(provinces[0]?.name ?? "");
  const active = provinces.find((p) => p.name === prov) ?? provinces[0];
  const stores = useMemo(
    () => active?.groups.flatMap((g) => g.stores) ?? [],
    [active],
  );

  return (
    <div className="py-16 sm:py-20 lg:py-21 lg:pb-24">
      <div className="mx-auto max-w-300 px-5 sm:px-8">
        <div data-reveal className="mb-9 text-center">
          <div className="font-script text-[28px] leading-none text-festa-green-800">
            Cerca tuyo
          </div>
          <div className="mt-1.5 font-sans text-xs font-medium uppercase tracking-[0.32em] text-text-muted">
            Comercios y locales de barrio
          </div>
          <h2 className="m-0 mt-3 font-serif text-[30px] font-medium leading-[1.2] text-text-heading sm:text-4xl">
            Almacenes, fiambrerías y tiendas gourmet
          </h2>
          <div data-rule className="mx-auto mt-5 h-0.5 w-12 bg-rule-gold" />
        </div>

        <div
          data-reveal
          className="mb-9 flex justify-start gap-1 overflow-x-auto overflow-y-hidden border-b border-border-subtle sm:justify-center"
        >
          {provinces.map((p) => {
            const count = p.groups.reduce((n, g) => n + g.stores.length, 0);
            const isActive = prov === p.name;
            return (
              <button
                key={p.name}
                onClick={() => setProv(p.name)}
                className={`-mb-px cursor-pointer whitespace-nowrap border-0 border-b-2 bg-transparent px-5 py-3 font-sans text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-150 ${
                  isActive
                    ? "border-rule-gold text-festa-navy-800"
                    : "border-transparent text-text-muted hover:text-festa-navy-800"
                }`}
              >
                {p.name}{" "}
                <span className="text-[11px] opacity-60">· {count}</span>
              </button>
            );
          })}
        </div>

        {/* El mapa es solo un atajo visual: la lista de texto de al lado repite
            los mismos comercios porque Leaflet no renderiza en el server y su
            contenido no es indexable por buscadores. */}
        <div data-reveal className="grid grid-cols-1 gap-8 lg:grid-cols-[3fr_2fr] lg:items-start">
          <div className="h-100 overflow-hidden rounded-2xl border border-border-subtle shadow-festa-md lg:h-125">
            <MapaComercios stores={stores} />
          </div>

          <div className="flex flex-col gap-8 lg:max-h-125 lg:overflow-y-auto lg:pr-1">
            {active?.groups.map((g) => (
              <div key={g.region}>
                <div className="mb-1 font-sans text-xs font-medium uppercase tracking-[0.2em] text-festa-green-800">
                  {g.region}
                </div>
                <div className="mb-1.5 h-px bg-border-subtle" />
                {g.stores.map((s) => (
                  <div
                    key={s.name + s.addr}
                    className="flex flex-col gap-1 border-b border-border-subtle px-1 py-4 sm:flex-row sm:items-baseline sm:gap-4"
                  >
                    <span className="hidden h-1.75 w-1.75 shrink-0 -translate-y-0.5 rounded-full bg-rule-gold sm:block" />
                    <span className="flex-1 font-serif text-[19px] font-semibold text-text-heading">
                      {s.name}
                    </span>
                    <a
                      href={getMapsUrl(s)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-[1.2] font-sans text-sm text-text-muted transition-colors duration-150 hover:text-festa-navy-800 sm:text-right"
                    >
                      {s.addr}
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
