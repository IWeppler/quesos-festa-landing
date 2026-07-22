interface Award {
  id: string;
  year: string;
  title: string;
  description: string;
}

const awards: Award[] = [
  {
    id: "mundial-2026",
    year: "2026",
    title: "Mundial de Quesos de Brasil",
    description:
      "Medalla de Oro por nuestra Burratina Tartufo y Medalla de Plata por nuestra Burrata.",
  },
  {
    id: "exposuipacha-2026",
    year: "2026",
    title: "ExpoSuipacha",
    description: "Cuatro medallas por distintos productos de nuestra línea.",
  },
  {
    id: "premios-exposuipacha-2025",
    year: "2025",
    title: "Premios ExpoSuipacha",
    description:
      "Reconocimiento nacional por nuestra Burrata y nuestros Bocconcinos.",
  },
  {
    id: "world-cheese-awards-2024",
    year: "2024",
    title: "World Cheese Awards",
    description: "Medalla de Bronce por nuestra Burrata.",
  },
  {
    id: "cincho-de-oro-2024",
    year: "2024",
    title: "Cincho de Oro",
    description: "Primer premio internacional por nuestra Burrata.",
  },
];

export default function Premios() {
  return (
    <section id="premios" className="bg-surface-page border border-t border-border-subtle">
      <div className="mx-auto max-w-200 px-5 pt-24 pb-26 sm:px-8">
        <div data-reveal className="mb-16 text-center">
          <div className="font-script text-[26px] leading-none text-festa-green-800 sm:text-[30px]">
            Orgullo de familia
          </div>
          <span className="mt-2 block font-sans text-[11px] font-medium uppercase tracking-[0.36em] text-text-muted">
            Reconocimientos y premios
          </span>
          <h2 className="mt-1.5 font-serif text-[30px] font-medium leading-[1.15] tracking-[0.01em] text-text-heading sm:text-[38px]">
            Distinciones que avalan nuestro oficio
          </h2>
          <span className="mx-auto mt-4 block h-px w-12 bg-rule-gold" />
        </div>

        <div data-stagger className="border-t border-border-subtle">
          {awards.map((award) => (
            <div
              key={award.id}
              data-reveal
              className="grid grid-cols-[64px_1fr] gap-6 border-b border-border-subtle py-6 sm:grid-cols-[88px_1fr] sm:gap-10"
            >
              <span className="font-display text-2xl leading-none tracking-[0.02em] text-text-heading sm:text-[28px]">
                {award.year}
              </span>
              <div>
                <h3 className="font-serif text-xl font-medium leading-snug text-text-heading sm:text-[22px]">
                  {award.title}
                </h3>
                <p className="mt-1.5 font-sans text-sm leading-relaxed text-text-muted sm:text-base">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
