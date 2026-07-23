import { getContenidoSitio } from "@/lib/queries";

export default async function Hero() {
  const { heroDesktop, heroMobile } = await getContenidoSitio();

  return (
    <section
      id="top"
      className="relative flex min-h-140 md:min-h-160 items-center overflow-hidden"
    >
      {/* Mobile: recorte vertical, foco en el detalle del plato */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={heroMobile}
        alt="Selección de quesos frescos artesanales Quesos Festa"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[65%_center] md:hidden"
      />
      {/* Desktop: panorámica original */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={heroDesktop}
        alt="Selección de quesos frescos artesanales Quesos Festa"
        fetchPriority="high"
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(32,45,51,.95) 0%, rgba(32,45,51,.84) 34%, rgba(32,45,51,.46) 68%, rgba(32,45,51,0) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-300 px-6 py-14 md:px-8 md:py-18">
        <div className="max-w-155 text-white animate-[festaFade_640ms_var(--ease-out)_both]">
          <div className="mb-4 inline-flex items-center gap-2.5 md:mb-5">
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-white/78 md:text-[11px] md:tracking-[0.32em]">
              Receta original italiana · Desde 1989
            </span>
          </div>
          <div className="font-script text-2xl leading-none text-white/90 sm:text-3xl md:text-[40px]">
            Quienes somos
          </div>
          <h1 className="mt-2 mb-4 font-display text-4xl font-normal uppercase leading-[1.08] tracking-[0.02em] text-white sm:text-5xl md:mt-2.5 md:mb-5 md:text-6xl md:leading-[1.04] md:tracking-[0.04em] lg:text-[68px]">
            Quesos Festa
          </h1>
          <p className="mb-6 max-w-130 font-sans text-base leading-[1.65] text-white/88 md:mb-8 md:text-[19px] md:leading-[1.75]">
            Hace más de 30 años que en Festa elaboramos quesos con calidad y
            dedicación. Una herencia familiar que ya lleva más de tres décadas.
            Cada uno de nuestros productos refleja ese compromiso con lo
            auténtico, lo simple y lo bien hecho.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#catalogo"
              className="hero-btn-primary rounded-md bg-white px-6 py-3.5 font-sans text-sm font-medium uppercase tracking-[0.08em] text-festa-navy-900 no-underline md:px-7.5 md:py-4 md:text-[15px]"
            >
              Ver catálogo
            </a>
            <a
              href="#historia"
              className="hero-btn-secondary rounded-md border border-white/55 px-6 py-3.5 font-sans text-sm font-medium uppercase tracking-[0.08em] text-white no-underline md:px-7.5 md:py-4 md:text-[15px]"
            >
              Nuestra historia
            </a>
          </div>
        </div>
      </div>
      <div className="absolute z-10 right-6 bottom-5 hidden items-center gap-2 font-sans text-[11px] uppercase tracking-[0.28em] text-white/70 sm:flex md:right-8 md:bottom-7">
        Industria Argentina
      </div>
    </section>
  );
}
