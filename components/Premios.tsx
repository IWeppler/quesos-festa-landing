import { getPremios } from "@/lib/queries";

export default async function Premios() {
  const awards = await getPremios();

  if (awards.length === 0) return null;

  return (
    <section id="premios" className="bg-surface-page border border-t border-border-subtle">
      <div className="mx-auto max-w-200 px-5 pt-24 pb-26 sm:px-8">
        <div data-reveal className="mb-16 text-center">
          <span className="mt-2 block font-sans text-[11px] font-medium uppercase tracking-[0.36em] text-text-muted">
            Reconocimientos y premios
          </span>
          <h2 className="mt-1.5 font-serif text-[30px] font-medium leading-[1.15] tracking-[0.01em] text-text-heading sm:text-[38px]">
            Distinciones que avalan nuestro oficio
          </h2>
          <span className="mx-auto mt-4 block h-px w-12 bg-rule-gold" />
        </div>

        <div data-stagger className="border-t border-border-subtle">
          {awards.map((award, i) => (
            <div
              key={`${award.anio}-${award.titulo}-${i}`}
              data-reveal
              className="grid grid-cols-[64px_1fr] gap-6 border-b border-border-subtle py-6 sm:grid-cols-[88px_1fr] sm:gap-10"
            >
              <span className="font-display text-2xl leading-none tracking-[0.02em] text-text-heading sm:text-[28px]">
                {award.anio}
              </span>
              <div>
                <h3 className="font-serif text-xl font-medium leading-snug text-text-heading sm:text-[22px]">
                  {award.titulo}
                </h3>
                <p className="mt-1.5 font-sans text-sm leading-relaxed text-text-muted sm:text-base">
                  {award.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
