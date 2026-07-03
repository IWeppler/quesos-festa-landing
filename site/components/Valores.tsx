import { pillars } from "@/lib/data";

export default function Valores() {
  return (
    <section
      style={{
        background: "var(--surface-card)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div
        data-stagger
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 32px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
        }}
      >
        {pillars.map((p) => (
          <div key={p.big} data-reveal style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 30, color: "var(--festa-navy-800)", lineHeight: 1 }}>
              {p.big}
            </div>
            <div style={{ height: 2, width: 32, background: "var(--rule-gold)", margin: "4px 0" }} />
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.5, color: "var(--text-body)" }}>
              {p.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
