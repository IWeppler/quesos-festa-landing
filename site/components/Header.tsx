export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(250,248,243,0.86)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <a
          href="#top"
          style={{
            display: "inline-flex",
            alignItems: "baseline",
            gap: 10,
            textDecoration: "none",
            color: "var(--festa-navy-800)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 26,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              paddingLeft: "0.22em",
              lineHeight: 1,
            }}
          >
            Festa
          </span>
          <span
            style={{
              fontFamily: "var(--font-script)",
              fontSize: 18,
              color: "var(--festa-green-800)",
              lineHeight: 1,
            }}
          >
            Familia Festa
          </span>
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 30 }}>
          <a href="#historia" className="nav-link">
            Historia
          </a>
          <a href="#catalogo" className="nav-link">
            Catálogo
          </a>
          <a href="#donde" className="nav-link">
            Dónde encontrarnos
          </a>
          <a href="#contacto" className="nav-link nav-link-cta">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
