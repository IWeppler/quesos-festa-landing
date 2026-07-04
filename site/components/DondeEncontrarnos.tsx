"use client";

import { useState } from "react";
import { chains, provinces } from "@/lib/data";

function getMapsUrl(store: { name: string; addr: string; mapsUrl?: string }) {
  return (
    store.mapsUrl ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${store.name}, ${store.addr}`,
    )}`
  );
}

export default function DondeEncontrarnos() {
  const [prov, setProv] = useState(provinces[0].name);
  const active = provinces.find((p) => p.name === prov) ?? provinces[0];

  return (
    <section id="donde" className="bg-surface-page">
      <div className="bg-festa-navy-800 py-16 text-white sm:py-20 lg:py-[84px]">
        <div className="mx-auto max-w-300 px-5 text-center sm:px-8">
          <div
            data-reveal
            className="font-sans text-xs font-medium uppercase tracking-[0.32em] text-white/70"
          >
            Alcance nacional
          </div>
          <h2
            data-reveal
            className="m-0 mt-3.5 mb-2 font-serif text-[32px] font-medium leading-[1.18] text-white sm:text-[40px]"
          >
            Encontranos en las principales cadenas
          </h2>
          <p
            data-reveal
            className="mx-auto mb-10 max-w-140 font-sans text-base leading-[1.7] text-white/82"
          >
            Nuestros quesos llegan a las góndolas de los principales
            supermercados del país.
          </p>
          <div
            data-stagger
            className="mx-auto grid max-w-225 grid-cols-2 justify-items-center gap-4.5 sm:grid-cols-3 lg:grid-cols-5"
          >
            {chains.map((c) => (
              <div
                key={c.name}
                data-reveal
                className="flex min-w-42 flex-col items-center gap-2 rounded-xl border border-white/16 bg-white/5 px-7 py-6"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.image}
                  alt={c.name}
                  className="block h-13 w-29 object-contain"
                />
                <span className="h-0.5 w-6.5 bg-rule-gold" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-20 lg:py-[84px] lg:pb-24">
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
            <div
              data-rule
              className="mx-auto mt-[18px] h-0.5 w-12 bg-rule-gold"
            />
          </div>

          <div
            data-reveal
            className="mb-9 flex justify-start gap-1 overflow-x-auto border-b border-border-subtle sm:justify-center"
          >
            {provinces.map((p) => {
              const count = p.groups.reduce((n, g) => n + g.stores.length, 0);
              const isActive = prov === p.name;
              return (
                <button
                  key={p.name}
                  onClick={() => setProv(p.name)}
                  className={`mb-[-1px] cursor-pointer whitespace-nowrap border-0 border-b-2 bg-transparent px-[22px] py-[13px] font-sans text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-150 ${
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

          <div data-reveal className="mx-auto flex max-w-215 flex-col gap-10">
            {active.groups.map((g) => (
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
                    <span className="hidden h-[7px] w-[7px] shrink-0 translate-y-[-2px] rounded-full bg-rule-gold sm:block" />
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
    </section>
  );
}
