export default function Contacto() {
  return (
    <section id="contacto" style={{ background: "var(--festa-green-800)", color: "#fff" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "stretch",
        }}
      >
        <div style={{ padding: "92px 56px 92px 0", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div
            data-reveal
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Contacto mayorista
          </div>
          <h2
            data-reveal
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
              fontSize: 40,
              lineHeight: 1.16,
              color: "#fff",
              margin: "14px 0 16px",
            }}
          >
            Llevá Festa a tu comercio
          </h2>
          <p
            data-reveal
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.85)",
              margin: "0 0 34px",
              maxWidth: 440,
            }}
          >
            Somos una empresa familiar y atendemos cada pedido con nombre y apellido. Contanos de
            tu local y coordinamos la mejor propuesta para tu góndola.
          </p>
          <div data-stagger style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <a data-reveal href="tel:+541149914156" style={{ display: "flex", alignItems: "center", gap: 16, textDecoration: "none", color: "#fff" }}>
              <span
                style={{
                  flex: "none",
                  width: 46,
                  height: 46,
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.4)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span>
                <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.62)" }}>
                  Ventas mayoristas
                </span>
                <span style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 23 }}>11 4991 4156</span>
              </span>
            </a>
            <a data-reveal href="mailto:ventas@quesosfesta.com.ar" style={{ display: "flex", alignItems: "center", gap: 16, textDecoration: "none", color: "#fff" }}>
              <span
                style={{
                  flex: "none",
                  width: 46,
                  height: 46,
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.4)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
              </span>
              <span>
                <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.62)" }}>
                  Escribinos
                </span>
                <span style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 23 }}>ventas@quesosfesta.com.ar</span>
              </span>
            </a>
            <a data-reveal href="https://instagram.com/quesosfesta" style={{ display: "flex", alignItems: "center", gap: 16, textDecoration: "none", color: "#fff" }}>
              <span
                style={{
                  flex: "none",
                  width: 46,
                  height: 46,
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.4)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
              </span>
              <span>
                <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.62)" }}>
                  Seguinos
                </span>
                <span style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 23 }}>@quesosfesta</span>
              </span>
            </a>
          </div>
        </div>
        <div style={{ minHeight: 520, background: "url(/assets/photos/foto-13.jpg) center/cover no-repeat" }} />
      </div>
    </section>
  );
}
