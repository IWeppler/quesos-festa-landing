import type { Chain, Province } from "@/lib/data";
import ComerciosBarrio from "./ComerciosBarrio";

export default function DondeEncontrarnos({
  chains,
  provinces,
}: {
  chains: Chain[];
  provinces: Province[];
}) {
  return (
    <section id="donde" className="bg-surface-page">
      <div className="bg-festa-navy-800 py-16 text-white sm:py-20 lg:py-21">
        <div className="mx-auto max-w-300 px-5 text-center sm:px-8">
          <div
            data-reveal
            className="font-sans text-xs font-medium uppercase tracking-[0.32em] text-white/70"
          >
            Alcance nacional
          </div>
          <h2
            data-reveal
            className="m-0 mt-3.5 mb-2 font-serif text-[32px] font-medium leading-[1.18] text-white sm:text-[40px]"
          >
            Encontranos en las principales cadenas
          </h2>
          <p
            data-reveal
            className="mx-auto mb-10 max-w-140 font-sans text-base leading-[1.7] text-white/82"
          >
            Nuestros quesos llegan a las góndolas de los principales
            supermercados del país.
          </p>
          <div
            data-stagger
            className="mx-auto grid max-w-225 grid-cols-2 justify-items-center gap-4.5 sm:grid-cols-3 lg:grid-cols-5"
          >
            {chains.map((c) => (
              <div
                key={c.name}
                data-reveal
                className="flex min-w-42 flex-col items-center gap-2 rounded-xl border border-white/16 bg-white/5 px-7 py-6"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.image}
                  alt={c.name}
                  className="block h-13 w-29 object-contain"
                />
                <span className="h-0.5 w-6.5 bg-rule-gold" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ComerciosBarrio provinces={provinces} />
    </section>
  );
}
