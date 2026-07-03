"use client";

import { useState } from "react";
import { chains, provinces } from "@/lib/data";

export default function DondeEncontrarnos() {
  const [prov, setProv] = useState(provinces[0].name);
  const active = provinces.find((p) => p.name === prov) ?? provinces[0];

  return (
    <section id="donde" style={{ background: "var(--surface-page)" }}>
      {/* cadenas nacionales */}
      <div style={{ background: "var(--festa-navy-800)", color: "#fff", padding: "84px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
          <div
            data-reveal
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Alcance nacional
          </div>
          <h2
            data-reveal
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
              fontSize: 40,
              lineHeight: 1.18,
              color: "#fff",
              margin: "14px 0 8px",
            }}
          >
            Encontranos en las principales cadenas
          </h2>
          <p
            data-reveal
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.82)",
              maxWidth: 560,
              margin: "0 auto 42px",
            }}
          >
            Nuestros quesos llegan a las góndolas de los principales supermercados del país.
          </p>
          <div data-stagger style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 18 }}>
            {chains.map((c) => (
              <div
                key={c}
                data-reveal
                style={{
                  minWidth: 168,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  borderRadius: 12,
                  padding: "24px 28px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 24, letterSpacing: "0.02em", color: "#fff" }}>
                  {c}
                </span>
                <span style={{ height: 2, width: 26, background: "var(--rule-gold)" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* comercios de barrio */}
      <div style={{ padding: "84px 0 96px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div data-reveal style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ fontFamily: "var(--font-script)", fontSize: 28, color: "var(--festa-green-800)", lineHeight: 1 }}>
              Cerca tuyo
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
              Comercios y locales de barrio
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 500,
                fontSize: 36,
                lineHeight: 1.2,
                color: "var(--text-heading)",
                margin: "12px 0 0",
              }}
            >
              Almacenes, fiambrerías y tiendas gourmet
            </h2>
            <div data-rule style={{ height: 2, width: 48, background: "var(--rule-gold)", margin: "18px auto 0" }} />
          </div>

          <div
            data-reveal
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 4,
              borderBottom: "1px solid var(--border-subtle)",
              marginBottom: 36,
            }}
          >
            {provinces.map((p) => {
              const count = p.groups.reduce((n, g) => n + g.stores.length, 0);
              const isActive = prov === p.name;
              return (
                <button
                  key={p.name}
                  onClick={() => setProv(p.name)}
                  className={`prov-tab${isActive ? " is-active" : ""}`}
                >
                  {p.name} <span style={{ opacity: 0.6, fontSize: 11 }}>· {count}</span>
                </button>
              );
            })}
          </div>

          <div data-reveal style={{ maxWidth: 860, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>
            {active.groups.map((g) => (
              <div key={g.region}>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    fontSize: 12,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--festa-green-800)",
                    marginBottom: 4,
                  }}
                >
                  {g.region}
                </div>
                <div style={{ height: 1, background: "var(--border-subtle)", marginBottom: 6 }} />
                {g.stores.map((s) => (
                  <div
                    key={s.name + s.addr}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 16,
                      padding: "15px 4px",
                      borderBottom: "1px solid var(--border-subtle)",
                    }}
                  >
                    <span
                      style={{
                        flex: "none",
                        width: 7,
                        height: 7,
                        borderRadius: 999,
                        background: "var(--rule-gold)",
                        transform: "translateY(-2px)",
                      }}
                    />
                    <span style={{ flex: 1, fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 19, color: "var(--text-heading)" }}>
                      {s.name}
                    </span>
                    <span style={{ flex: 1.2, fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", textAlign: "right" }}>
                      {s.addr}
                    </span>
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
