import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-160 items-center overflow-hidden">
      <Image
        src="/assets/photos/banner.webp"
        alt="Selección de quesos frescos artesanales Quesos Festa"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(88deg, rgba(20,23,63,0.95) 0%, rgba(20,23,63,0.86) 34%, rgba(20,23,63,0.5) 66%, rgba(20,23,63,0.1) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-300 px-8 py-18">
        <div className="max-w-155 text-white animate-[festaFade_640ms_var(--ease-out)_both]">
          <div className="mb-5 inline-flex items-center gap-2.5">
            <span className="inline-flex h-4 w-6 overflow-hidden rounded-xs">
              <span className="flex-1 bg-italy-green" />
              <span className="flex-1 bg-white" />
              <span className="flex-1 bg-italy-red" />
            </span>
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-white/78">
              Receta original italiana · Desde 1989
            </span>
          </div>
          <div className="font-script text-[40px] leading-none text-white/90">
            Disfrutá de
          </div>
          <h1 className="mt-2.5 mb-5 font-display text-[68px] font-normal uppercase leading-[1.04] tracking-[0.04em] text-white">
            El arte del queso fresco
          </h1>
          <p className="mb-8 max-w-130 font-sans text-[19px] leading-[1.75] text-white/88">
            Más de 35 años elaborando burrata, stracciatella y mascarpone pieza
            por pieza, como manda la tradición italiana. Quesos frescos
            artesanales, de familia, enteramente sin TACC.
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href="#catalogo"
              className="hero-btn-primary rounded-md bg-white px-7.5 py-4 font-sans text-[15px] font-medium uppercase tracking-[0.08em] text-festa-navy-900 no-underline"
            >
              Ver catálogo
            </a>
            <a
              href="#historia"
              className="hero-btn-secondary rounded-md border border-white/55 px-7.5 py-4 font-sans text-[15px] font-medium uppercase tracking-[0.08em] text-white no-underline"
            >
              Nuestra historia
            </a>
          </div>
        </div>
      </div>
      <div className="absolute z-10 right-8 bottom-7 flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.28em] text-white/70">
        Industria Argentina
      </div>
    </section>
  );
}
