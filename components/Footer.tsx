import Link from "next/link";

const footerLinkClass =
  "font-sans text-sm text-white/78 no-underline transition-colors duration-150 hover:text-white";

const footerHeadingClass =
  "mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-white/50";

export default function Footer() {
  return (
    <footer className="bg-festa-navy-900 text-white/72">
      <div className="mx-auto grid max-w-300 gap-10 px-5 pt-12 pb-8 sm:px-8 sm:pt-15 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="inline-flex flex-col sm:flex-row sm:items-baseline sm:gap-2.5">
            <span className="pl-[0.22em] font-display text-[28px] uppercase leading-none tracking-[0.22em] text-white sm:text-[30px]">
              Festa
            </span>
          </div>
          <p className="m-0 mt-4 max-w-80 font-sans text-sm leading-[1.7]">
            Quesos frescos artesanales desde 1989. Receta original italiana,
            elaboración a mano, enteramente sin TACC.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-white/60">
            
            Industria Argentina
          </div>
        </div>

        <div>
          <div className={footerHeadingClass}>Navegación</div>
          <div className="flex flex-col gap-3">
            <a href="#historia" className={footerLinkClass}>
              Historia
            </a>
            <a href="#catalogo" className={footerLinkClass}>
              Catálogo
            </a>
            <a href="#donde" className={footerLinkClass}>
              Dónde encontrarnos
            </a>
            <a href="#contacto" className={footerLinkClass}>
              Contacto
            </a>
          </div>
        </div>

        <div>
          <div className={footerHeadingClass}>Contacto mayorista</div>
          <div className="flex flex-col gap-3">
            <Link
              href="https://wa.me/541149914156"
              target="_blank"
              className={footerLinkClass}
            >
              +54 11 4991 4156
            </Link>
            <Link
              href="mailto:ventas@quesosfesta.com.ar"
              className={footerLinkClass}
            >
              ventas@quesosfesta.com.ar
            </Link>
            <Link
              href="https://instagram.com/quesosfesta"
              target="_blank"
              className={footerLinkClass}
            >
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/festaquesos?locale=es_LA"
              target="_blank"
              className={footerLinkClass}
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-300 flex-col gap-2 px-5 py-5 font-sans text-xs text-white/50 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:px-8">
          <span>
            © 2026 Quesos Festa · Familia Festa. Todos los derechos reservados.
          </span>
          <span>
            Powered by{" "}
            <Link
              href="https://ignacioweppler.com"
              target="_blank"
              className="text-white/82"
            >
              Ignacio Weppler
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
