export default function Footer() {
  return (
    <footer style={{ background: "var(--festa-navy-900)", color: "rgba(255,255,255,0.72)" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "60px 32px 28px",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr",
          gap: 40,
        }}
      >
        <div>
          <div style={{ display: "inline-flex", alignItems: "baseline", gap: 10 }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 30,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                paddingLeft: "0.22em",
                color: "#fff",
                lineHeight: 1,
              }}
            >
              Festa
            </span>
            <span style={{ fontFamily: "var(--font-script)", fontSize: 20, color: "rgba(255,255,255,0.75)", lineHeight: 1 }}>
              Familia Festa
            </span>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.7, margin: "18px 0 0", maxWidth: 320 }}>
            Quesos frescos artesanales desde 1989. Receta original italiana, elaboración a mano,
            enteramente sin TACC.
          </p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 18,
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <span style={{ display: "inline-flex", width: 22, height: 15, borderRadius: 2, overflow: "hidden" }}>
              <span style={{ flex: 1, background: "var(--italy-green)" }} />
              <span style={{ flex: 1, background: "#fff" }} />
              <span style={{ flex: 1, background: "var(--italy-red)" }} />
            </span>
            Industria Argentina
          </div>
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginBottom: 16,
            }}
          >
            Navegación
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            <a href="#historia" className="footer-link" style={{ fontFamily: "var(--font-sans)", fontSize: 14 }}>
              Historia
            </a>
            <a href="#catalogo" className="footer-link" style={{ fontFamily: "var(--font-sans)", fontSize: 14 }}>
              Catálogo
            </a>
            <a href="#donde" className="footer-link" style={{ fontFamily: "var(--font-sans)", fontSize: 14 }}>
              Dónde encontrarnos
            </a>
            <a href="#contacto" className="footer-link" style={{ fontFamily: "var(--font-sans)", fontSize: 14 }}>
              Contacto
            </a>
          </div>
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginBottom: 16,
            }}
          >
            Contacto mayorista
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11, fontFamily: "var(--font-sans)", fontSize: 14 }}>
            <a href="tel:+541149914156" className="footer-link">
              11 4991 4156
            </a>
            <a href="mailto:ventas@quesosfesta.com.ar" className="footer-link">
              ventas@quesosfesta.com.ar
            </a>
            <a href="https://instagram.com/quesosfesta" className="footer-link">
              @quesosfesta
            </a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "20px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
            © 2026 Quesos Festa · Familia Festa. Todos los derechos reservados.
          </span>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
            Powered by <span style={{ color: "rgba(255,255,255,0.82)" }}>Ignacio Weppler</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
