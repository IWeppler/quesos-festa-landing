import { getProductosDestacados } from "@/lib/queries";

export default async function Novedades() {
  const productos = await getProductosDestacados();

  if (productos.length === 0) return null;

  return (
    <section id="novedades" className="relative overflow-hidden bg-festa-navy-900 text-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(115% 80% at 82% 2%, rgba(184,134,1,0.16) 0%, rgba(184,134,1,0) 56%)",
        }}
      />
      <div className="relative mx-auto max-w-300 px-8 pt-24 pb-26">
        <div data-reveal className="mb-18 text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-rule-gold" />
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.36em] text-rule-gold">
              Novedades
            </span>
            <span className="h-px w-10 bg-rule-gold" />
          </div>
          <div className="mt-3 font-script text-[38px] leading-none text-white/94 sm:text-[46px]">
            Recién llegados
          </div>
          <h2 className="mt-1.5 font-serif text-[28px] font-medium leading-[1.15] tracking-[0.01em] text-white/90 sm:text-[34px]">
            Nuestras últimas incorporaciones
          </h2>
        </div>

        <div className="flex flex-col gap-16 sm:gap-20">
          {productos.map((producto, i) => {
            const imageFirst = i % 2 === 1;
            return (
              <div
                key={producto.nombre}
                className={`grid grid-cols-1 items-center gap-10 lg:gap-16 ${
                  imageFirst ? "lg:grid-cols-[1.15fr_1fr]" : "lg:grid-cols-[1fr_1.15fr]"
                }`}
              >
                <div data-reveal className={imageFirst ? "lg:order-2" : undefined}>
                  {producto.categoriaNombre ? (
                    <div className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/58">
                      {producto.categoriaNombre}
                    </div>
                  ) : null}
                  <h3 className="mt-3 font-serif text-[38px] font-semibold leading-none text-white sm:text-[54px]">
                    {producto.nombre}
                  </h3>
                  <div className="my-5.5 h-0.5 w-11 bg-rule-gold" />
                  {producto.descripcion ? (
                    <p className="max-w-115 font-sans text-base leading-[1.72] text-white/80 sm:text-[17px]">
                      {producto.descripcion}
                    </p>
                  ) : null}
                  {producto.presentaciones.length > 0 ? (
                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/50">
                        {producto.presentaciones.length > 1 ? "Presentaciones" : "Presentación"}
                      </span>
                      {producto.presentaciones.map((pres, idx) => (
                        <span key={pres} className="flex items-center gap-3">
                          {idx > 0 ? <span className="h-1 w-1 rounded-full bg-white/35" /> : null}
                          <span className="font-serif text-[17px] font-semibold text-rule-gold">
                            {pres}
                          </span>
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div
                  data-reveal
                  className={`relative overflow-hidden rounded-[20px] shadow-[0_30px_70px_rgba(0,0,0,0.4)] ${
                    imageFirst ? "lg:order-1" : ""
                  }`}
                >
                  <div className="aspect-[16/11] bg-festa-navy-800">
                    {producto.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={producto.photo}
                        alt={producto.nombre}
                        className="block h-full w-full object-cover"
                      />
                    ) : null}
                  </div>
                  <span className="absolute top-5 left-5 rounded-full bg-rule-gold px-3.5 py-1.5 font-sans text-[10.5px] font-semibold uppercase tracking-[0.18em] text-festa-navy-900">
                    Recién llegado
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
