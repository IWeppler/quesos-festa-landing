import { getContenidoSitio } from "@/lib/queries";

export default async function Historia() {
  const { historia } = await getContenidoSitio();

  return (
    <section id="historia" className="bg-surface-page py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-300 gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div data-reveal>
          <h2 className="m-0 mb-5.5 font-serif text-[32px] font-medium leading-[1.18] text-text-heading sm:text-[38px] lg:text-[42px]">
            Historia
          </h2>
          <p className="m-0 mb-4.5 font-sans text-base leading-[1.75] text-text-body sm:text-[17px] sm:leading-[1.8]">
            DESDE 1989 nuestros quesos están elaborados de manera fiel a su
            receta original con base en las mejores técnicas de especialistas
            europeos. La calidad siempre ha sido prioridad en Festa. Los métodos
            de producción tradicionales y los controles rigurosos son elementos
            de confianza para nuestros consumidores. Esto asegura una
            trazabilidad precisa y el cumplimiento estricto de las normas de
            calidad desde el aprovisionamiento de las materias primas hasta el
            producto final. Todos nuestros productos son libres de gluten,
            <strong className="font-semibold text-festa-navy-800">
              {" "}
              sin TACC
            </strong>
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <span className="inline-flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-rule-gold text-center text-festa-navy-800">
              <span className="font-display text-xl leading-none tracking-[0.06em]">
                Sin TACC
              </span>
              <span className="my-1.25 h-px w-8.5 bg-rule-gold" />
              <span className="font-sans text-[9px] uppercase tracking-[0.14em] text-text-muted">
                Libre de gluten
              </span>
            </span>
          </div>
        </div>
        <div
          data-reveal
          className="relative mx-auto w-full max-w-105 lg:max-w-none"
        >
          <div
            className="aspect-4/5 overflow-hidden rounded-2xl bg-cover bg-center shadow-festa-lg"
            style={{ backgroundImage: `url('${historia}')` }}
          />
          <div className="absolute -bottom-4 left-4 rounded-[14px] bg-festa-navy-800 px-5 py-4 text-white shadow-festa-md sm:-bottom-5.5 sm:-left-5.5 sm:px-6 sm:py-5">
            <div className="font-display text-[32px] leading-none tracking-[0.02em] sm:text-[40px]">
              35+
            </div>
            <div className="mt-1.5 font-sans text-[11px] uppercase tracking-[0.22em] text-white/78">
              Años de oficio
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
