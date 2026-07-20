"use client";

import { useMemo, useState } from "react";
import type { Category, Product } from "@/lib/data";

const DIACRITICS_RE = /[̀-ͯ]/g;

function normalize(s: string) {
  return s.normalize("NFD").replace(DIACRITICS_RE, "").toLowerCase();
}

const TODOS = "Todos";

export default function Catalogo({ categories }: { categories: Category[] }) {
  const [activeCat, setActiveCat] = useState<string>(TODOS);
  const [query, setQuery] = useState("");

  const q = normalize(query.trim());

  const filtered = useMemo(() => {
    return categories
      .filter((cat) => activeCat === TODOS || cat.title === activeCat)
      .map((cat) => ({
        ...cat,
        items: q
          ? cat.items.filter((item) => normalize(item.name).includes(q))
          : cat.items,
      }))
      .filter((cat) => cat.items.length > 0);
  }, [categories, activeCat, q]);

  const totalCount = categories.reduce((n, c) => n + c.items.length, 0);
  const resultCount = filtered.reduce((n, c) => n + c.items.length, 0);

  return (
    <section
      id="catalogo"
      className="border-t border-border-subtle bg-surface-card py-16 sm:py-20 lg:py-[92px]"
    >
      <div className="mx-auto max-w-300 px-5 sm:px-8">
        <div data-reveal className="mb-5 text-center">
          <div className="font-sans text-xs font-medium uppercase tracking-[0.32em] text-text-muted">
            Catálogo mayorista
          </div>
          <h2 className="m-0 mt-3 font-serif text-[34px] font-medium leading-[1.16] text-text-heading sm:text-[42px]">
            Todos nuestros productos
          </h2>
          <p className="mx-auto mt-3 max-w-140 font-sans text-sm leading-[1.6] text-text-muted">
            Surtido completo para definir qué sumar a tu góndola: buscá por
            nombre o filtrá por categoría.
          </p>
          <div data-rule className="mx-auto mt-4.5 h-0.5 w-12 bg-rule-gold" />
        </div>

        <div data-reveal className="mb-6 flex justify-center">
          <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-border-subtle bg-surface-sunken px-5 py-2.25">
            <span className="inline-flex h-2 w-2 shrink-0 rounded-full bg-success" />
            <span className="font-sans text-[12.5px] uppercase tracking-[0.12em] text-text-body">
              Toda nuestra línea es sin TACC · libre de gluten
            </span>
          </div>
        </div>

        <div className="sticky top-16 z-30 -mx-5 border-b border-border-subtle bg-surface-card/95 px-5 py-3.5 backdrop-blur-sm sm:-mx-8 sm:px-8 md:top-17">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {[TODOS, ...categories.map((c) => c.title)].map((label) => {
                const active = activeCat === label;
                const count =
                  label === TODOS
                    ? totalCount
                    : (categories.find((c) => c.title === label)?.items
                        .length ?? 0);
                return (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveCat(label)}
                    className={`rounded-full px-4 py-2.5 font-sans text-[12.5px] font-medium uppercase tracking-[0.06em] transition-colors duration-150 ${
                      active
                        ? "bg-festa-navy-800 text-white"
                        : "bg-surface-sunken text-text-body hover:bg-neutral-150 cursor-pointer"
                    }`}
                  >
                    {label} <span className="opacity-70">({count})</span>
                  </button>
                );
              })}
            </div>
            <label className="relative block sm:w-64">
              <span className="sr-only">Buscar producto</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar producto…"
                className="w-full rounded-full border border-border-subtle bg-surface-page px-4 py-2.5 font-sans text-sm text-text-body outline-none placeholder:text-text-muted focus:border-festa-navy-800"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          {filtered.length === 0 ? (
            <p className="py-12 text-center font-sans text-sm text-text-muted">
              No encontramos productos que coincidan con “{query}”.
            </p>
          ) : (
            <>
              {q ? (
                <p className="mb-1 mt-5 font-sans text-xs uppercase tracking-[0.1em] text-text-muted">
                  {resultCount} resultado{resultCount === 1 ? "" : "s"}
                </p>
              ) : null}
              {filtered.map((cat) => (
                <div key={cat.title} className="flex flex-col">
                  {activeCat === TODOS ? (
                    <h3 className="m-0 mb-1 mt-8 font-serif text-xl font-semibold leading-tight text-text-heading sm:text-3xl first:mt-6">
                      {cat.title}
                    </h3>
                  ) : null}
                  {cat.items.map((item) => (
                    <ProductRow key={item.name} item={item} />
                  ))}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function ProductRow({ item }: { item: Product }) {
  return (
    <div className="flex items-center gap-5 border-b border-border-subtle px-1 py-5 sm:gap-6 sm:py-6">
      <div
        className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl sm:h-40 sm:w-40"
        style={{ background: item.photo ? undefined : item.color }}
      >
        {item.photo ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={item.photo} alt="" className="h-full w-full object-cover" />
        ) : null}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
          <h4 className="m-0 font-serif text-xl font-semibold leading-tight text-text-heading sm:text-2xl">
            {item.name}
          </h4>
          <span className="shrink-0 font-sans text-base font-semibold tracking-[0.04em] text-festa-navy-800">
            {item.pres}
          </span>
        </div>
        <p className="m-0 mt-1.5 max-w-160 font-sans text-base leading-[1.55] text-text-body">
          {item.desc}
        </p>
      </div>
    </div>
  );
}
