import Link from "next/link";

const navLinkClass =
  "font-sans text-xs font-medium uppercase tracking-[0.14em] text-text-body no-underline transition-colors duration-150 hover:text-festa-navy-800";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-[rgba(250,248,243,0.86)] backdrop-blur-[10px]">
      <div className="mx-auto flex min-h-16 max-w-300 items-center justify-between gap-3 px-4 py-2 sm:px-6 md:h-17 md:px-8 md:py-0">
        <Link
          href="#top"
          className="inline-flex min-w-0 flex-col text-festa-navy-800 no-underline sm:flex-row sm:items-baseline sm:gap-2.5"
        >
          <span className="pl-[0.22em] font-display text-[22px] uppercase leading-none tracking-[0.22em] sm:text-[26px]">
            Festa
          </span>
          <span className="font-script text-base leading-none text-festa-green-800 sm:text-lg">
            Familia Festa
          </span>
        </Link>
        <nav className="flex shrink-0 items-center gap-4 md:gap-7.5">
          <Link href="#historia" className={`${navLinkClass} hidden md:inline-flex`}>
            Historia
          </Link>
          <Link href="#catalogo" className={`${navLinkClass} hidden md:inline-flex`}>
            Catálogo
          </Link>
          <Link href="#donde" className={`${navLinkClass} hidden lg:inline-flex`}>
            Dónde encontrarnos
          </Link>
          <Link
            href="#contacto"
            className="inline-flex rounded-full bg-festa-navy-800 px-4 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-white no-underline transition-colors duration-150 hover:bg-festa-navy-700 sm:px-[18px] sm:py-[9px] sm:text-xs sm:tracking-[0.14em]"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
