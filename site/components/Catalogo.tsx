"use client";

import { useState } from "react";
import { categories } from "@/lib/data";

export default function Catalogo() {
  const [hover, setHover] = useState<{ cat: number; item: number } | null>(null);

  return (
    <section
      id="catalogo"
      style={{
        padding: "92px 0 96px",
        background: "var(--surface-card)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div data-reveal style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ fontFamily: "var(--font-script)", fontSize: 30, color: "var(--festa-green-800)", lineHeight: 1 }}>
            Presentación de
          </div>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginTop: 6,
            }}
          >
            Catálogo de productos
          </div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
              fontSize: 42,
              lineHeight: 1.16,
              color: "var(--text-heading)",
              margin: "12px 0 0",
            }}
          >
            Quesos frescos artesanales
          </h2>
          <div data-rule style={{ height: 2, width: 48, background: "var(--rule-gold)", margin: "18px auto 0" }} />
        </div>

        {/* sin TACC banner */}
        <div data-reveal style={{ display: "flex", justifyContent: "center", marginBottom: 22 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "var(--surface-sunken)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 999,
              padding: "9px 20px",
            }}
          >
            <span style={{ display: "inline-flex", width: 8, height: 8, borderRadius: 999, background: "var(--success)" }} />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12.5,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-body)",
              }}
            >
              Toda nuestra línea es sin TACC · libre de gluten
            </span>
          </div>
        </div>

        <div
          data-reveal
          style={{
            textAlign: "center",
            margin: "0 auto 52px",
            maxWidth: 620,
            fontFamily: "var(--font-sans)",
            fontSize: 13.5,
            lineHeight: 1.6,
            color: "var(--text-muted)",
          }}
        >
          Pasá el cursor —o tocá en el celular— sobre cada producto para verlo en detalle.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 72 }}>
          {categories.map((cat, ci) => {
            const hovering = hover && hover.cat === ci ? cat.items[hover.item] : null;
            const showOverlay = !!(hovering && hovering.photo);
            const overlayPhoto = hovering && hovering.photo ? hovering.photo : cat.photo;

            return (
              <div
                key={cat.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "340px 1fr",
                  gap: 48,
                  alignItems: "start",
                }}
              >
                <div style={{ position: "sticky", top: 92 }}>
                  <div
                    data-reveal
                    style={{
                      position: "relative",
                      aspectRatio: "3/4",
                      borderRadius: 16,
                      overflow: "hidden",
                      boxShadow: "var(--shadow-md)",
                      background: cat.photoBg,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cat.photo}
                      alt={cat.title}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={overlayPhoto}
                      alt=""
                      className="catalogo-overlay-img"
                      style={{ opacity: showOverlay ? 1 : 0 }}
                    />
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-script)",
                      fontSize: 24,
                      color: "var(--festa-green-800)",
                      lineHeight: 1,
                      marginTop: 16,
                    }}
                  >
                    {cat.script}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 500,
                      fontSize: 27,
                      lineHeight: 1.2,
                      color: "var(--text-heading)",
                      margin: "4px 0 0",
                    }}
                  >
                    {cat.title}
                  </h3>
                  <div data-rule style={{ height: 2, width: 40, background: "var(--rule-gold)", margin: "12px 0 14px" }} />
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.65, color: "var(--text-muted)", margin: 0, maxWidth: 300 }}>
                    {cat.blurb}
                  </p>
                </div>

                <div
                  data-stagger
                  onMouseLeave={() => setHover((h) => (h && h.cat === ci ? null : h))}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {cat.items.map((item, ii) => {
                    const active = hover !== null && hover.cat === ci && hover.item === ii;
                    return (
                      <div
                        key={item.name}
                        data-reveal
                        className="catalogo-row"
                        style={{ background: active ? "var(--surface-sunken)" : "transparent" }}
                        onMouseEnter={() => setHover({ cat: ci, item: ii })}
                        onClick={() =>
                          setHover((h) =>
                            h && h.cat === ci && h.item === ii ? null : { cat: ci, item: ii }
                          )
                        }
                      >
                        <span
                          className={`catalogo-dot${active ? " is-active" : ""}`}
                          style={{ background: item.color }}
                        />
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}>
                            <h4
                              className={`catalogo-name${active ? " is-active" : ""}`}
                              style={{ color: active ? item.color : undefined }}
                            >
                              {item.name}
                            </h4>
                            <span
                              style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: 12.5,
                                fontWeight: 500,
                                letterSpacing: "0.04em",
                                color: "var(--festa-navy-800)",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {item.pres}
                            </span>
                          </div>
                          <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "var(--text-body)", margin: "6px 0 0", maxWidth: 560 }}>
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
