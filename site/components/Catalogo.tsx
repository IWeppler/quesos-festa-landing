"use client";

import { useState } from "react";
import type { Category } from "@/lib/data";

export default function Catalogo({ categories }: { categories: Category[] }) {
  const [hover, setHover] = useState<{ cat: number; item: number } | null>(
    null,
  );

  return (
    <section
      id="catalogo"
      className="border-t border-border-subtle bg-surface-card py-16 sm:py-20 lg:py-[92px]"
    >
      <div className="mx-auto max-w-300 px-5 sm:px-8">
        <div data-reveal className="mb-5 text-center">
          <div className="font-script text-3xl leading-none text-festa-green-800">
            Presentación de
          </div>
          <div className="mt-1.5 font-sans text-xs font-medium uppercase tracking-[0.32em] text-text-muted">
            Catálogo de productos
          </div>
          <h2 className="m-0 mt-3 font-serif text-[34px] font-medium leading-[1.16] text-text-heading sm:text-[42px]">
            Quesos frescos artesanales
          </h2>
          <div data-rule className="mx-auto mt-[18px] h-0.5 w-12 bg-rule-gold" />
        </div>

        <div data-reveal className="mb-[22px] flex justify-center">
          <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-border-subtle bg-surface-sunken px-5 py-2.25">
            <span className="inline-flex h-2 w-2 shrink-0 rounded-full bg-success" />
            <span className="font-sans text-[12.5px] uppercase tracking-[0.12em] text-text-body">
              Toda nuestra línea es sin TACC · libre de gluten
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-14 lg:gap-[72px]">
          {categories.map((cat, ci) => {
            const hovering =
              hover && hover.cat === ci ? cat.items[hover.item] : null;
            const overlayPhoto = hovering?.photo;

            return (
              <div
                key={cat.title}
                className="grid gap-8 lg:grid-cols-[340px_1fr] lg:items-start lg:gap-12"
              >
                <div className="lg:sticky lg:top-[92px]">
                  <div
                    data-reveal
                    className="relative mx-auto aspect-3/4 max-w-85 overflow-hidden rounded-2xl shadow-festa-md lg:max-w-none"
                    style={{ background: cat.photoBg }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cat.photo}
                      alt={cat.title}
                      className="absolute inset-0 block h-full w-full object-cover"
                    />
                    {overlayPhoto ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        key={overlayPhoto}
                        src={overlayPhoto}
                        alt=""
                        className="pointer-events-none absolute inset-0 block h-full w-full object-cover opacity-100 transition-opacity duration-500"
                      />
                    ) : null}
                  </div>
                  <div className="mt-4 font-script text-2xl leading-none text-festa-green-800">
                    {cat.script}
                  </div>
                  <h3 className="m-0 mt-1 font-serif text-[27px] font-medium leading-[1.2] text-text-heading">
                    {cat.title}
                  </h3>
                  <div data-rule className="my-3.5 h-0.5 w-10 bg-rule-gold" />
                  <p className="m-0 max-w-75 font-sans text-sm leading-[1.65] text-text-muted">
                    {cat.blurb}
                  </p>
                </div>

                <div
                  data-stagger
                  onMouseLeave={() =>
                    setHover((h) => (h && h.cat === ci ? null : h))
                  }
                  className="flex flex-col"
                >
                  {cat.items.map((item, ii) => {
                    const active =
                      hover !== null && hover.cat === ci && hover.item === ii;
                    return (
                      <div
                        key={item.name}
                        className={`-mx-3 flex cursor-pointer items-baseline gap-4 rounded-[10px] border-b border-border-subtle px-3 py-4 transition-colors duration-300 sm:-mx-4 sm:gap-[18px] sm:px-4 sm:py-5 ${
                          active ? "bg-surface-sunken" : "bg-transparent"
                        }`}
                        onMouseEnter={() => setHover({ cat: ci, item: ii })}
                        onClick={() =>
                          setHover((h) =>
                            h && h.cat === ci && h.item === ii
                              ? null
                              : { cat: ci, item: ii },
                          )
                        }
                      >
                        <span
                          className={`mt-1.75 h-2.5 w-2.5 shrink-0 rounded-full transition-transform duration-300 ${
                            active ? "scale-[1.55]" : "scale-100"
                          }`}
                          style={{ background: item.color }}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                            <h4
                              className={`m-0 font-serif text-[22px] leading-[1.1] text-text-heading transition-colors duration-300 sm:text-[23px] ${
                                active ? "font-bold" : "font-semibold"
                              }`}
                              style={{ color: active ? item.color : undefined }}
                            >
                              {item.name}
                            </h4>
                            <span className="font-sans text-[12.5px] font-medium tracking-[0.04em] text-festa-navy-800 sm:whitespace-nowrap">
                              {item.pres}
                            </span>
                          </div>
                          <p className="m-0 mt-1.5 max-w-140 font-sans text-sm leading-[1.6] text-text-body">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
