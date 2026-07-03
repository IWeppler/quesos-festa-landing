export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: 640,
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(88deg, rgba(20,23,63,0.95) 0%, rgba(20,23,63,0.86) 34%, rgba(20,23,63,0.5) 66%, rgba(20,23,63,0.1) 100%), url(/assets/photos/foto-2.jpg) center/cover no-repeat",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 32px", width: "100%" }}>
        <div
          style={{
            maxWidth: 620,
            color: "#fff",
            animation: "festaFade 640ms var(--ease-out) both",
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span style={{ display: "inline-flex", width: 24, height: 16, borderRadius: 2, overflow: "hidden" }}>
              <span style={{ flex: 1, background: "var(--italy-green)" }} />
              <span style={{ flex: 1, background: "#fff" }} />
              <span style={{ flex: 1, background: "var(--italy-red)" }} />
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 11,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.78)",
              }}
            >
              Receta original italiana · Desde 1989
            </span>
          </div>
          <div style={{ fontFamily: "var(--font-script)", fontSize: 40, color: "rgba(255,255,255,0.9)", lineHeight: 1 }}>
            Disfrutá de
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: 68,
              lineHeight: 1.04,
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              margin: "10px 0 20px",
            }}
          >
            El arte del queso fresco
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 19,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.88)",
              maxWidth: 520,
              margin: "0 0 32px",
            }}
          >
            Más de 35 años elaborando burrata, stracciatella y mascarpone pieza por pieza, como
            manda la tradición italiana. Quesos frescos artesanales, de familia, enteramente sin
            TACC.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
            <a
              href="#catalogo"
              className="hero-btn-primary"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 15,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--festa-navy-900)",
                background: "#fff",
                padding: "15px 30px",
                borderRadius: 6,
                textDecoration: "none",
              }}
            >
              Ver catálogo
            </a>
            <a
              href="#historia"
              className="hero-btn-secondary"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 15,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.55)",
                padding: "15px 30px",
                borderRadius: 6,
                textDecoration: "none",
              }}
            >
              Nuestra historia
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 32,
          bottom: 28,
          display: "flex",
          alignItems: "center",
          gap: 8,
          color: "rgba(255,255,255,0.7)",
          fontFamily: "var(--font-sans)",
          fontSize: 11,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
        }}
      >
        Industria Argentina
      </div>
    </section>
  );
}
