export default function Historia() {
  return (
    <section id="historia" style={{ padding: "96px 0", background: "var(--surface-page)" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        <div data-reveal>
          <div style={{ fontFamily: "var(--font-script)", fontSize: 30, color: "var(--festa-green-800)", lineHeight: 1 }}>
            Nuestra historia
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
            Familia Festa · Desde 1989
          </div>
          <div data-rule style={{ height: 2, width: 48, background: "var(--rule-gold)", margin: "18px 0 24px" }} />
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
              fontSize: 42,
              lineHeight: 1.18,
              color: "var(--text-heading)",
              margin: "0 0 22px",
            }}
          >
            El oficio de hacer queso, de una familia a tu mesa
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.8, color: "var(--text-body)", margin: "0 0 18px" }}>
            Empezamos en 1989 con una convicción sencilla: respetar la receta original italiana y
            no apurar lo que el tiempo hace mejor. Tres décadas y media después, seguimos hilando
            la mozzarella y armando cada burrata a mano, pieza por pieza.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.8, color: "var(--text-body)", margin: "0 0 28px" }}>
            Elegimos leche seleccionada, procesos cuidados y nada de atajos. Así nacen quesos
            frescos de textura sedosa y sabor limpio — toda nuestra línea, además, es enteramente{" "}
            <strong style={{ color: "var(--festa-navy-800)", fontWeight: 600 }}>sin TACC</strong>,
            libre de gluten.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <span
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: 96,
                height: 96,
                borderRadius: 999,
                border: "2px solid var(--rule-gold)",
                color: "var(--festa-navy-800)",
                textAlign: "center",
              }}
            >
              <span style={{ fontFamily: "var(--font-display)", fontSize: 20, lineHeight: 1, letterSpacing: "0.06em" }}>
                Sin TACC
              </span>
              <span style={{ height: 1, width: 34, background: "var(--rule-gold)", margin: "5px 0" }} />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 9,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                Libre de gluten
              </span>
            </span>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "var(--text-muted)", maxWidth: 260 }}>
              Reconocidos en el{" "}
              <strong style={{ color: "var(--festa-navy-800)", fontWeight: 600 }}>4.º Mundial del Queso</strong>, Brasil
              2026.
            </div>
          </div>
        </div>
        <div data-reveal style={{ position: "relative" }}>
          <div
            style={{
              aspectRatio: "4/5",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "var(--shadow-lg)",
              background: "url(/assets/photos/foto-1.jpg) center/cover no-repeat",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: -22,
              bottom: -22,
              background: "var(--festa-navy-800)",
              color: "#fff",
              padding: "20px 26px",
              borderRadius: 14,
              boxShadow: "var(--shadow-md)",
            }}
          >
            <div style={{ fontFamily: "var(--font-display)", fontSize: 40, lineHeight: 1, letterSpacing: "0.02em" }}>
              35+
            </div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.78)",
                marginTop: 6,
              }}
            >
              Años de oficio
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
