import { pillars } from "@/lib/data";

export default function Valores() {
  return (
    <section className="border-b border-border-subtle bg-surface-card">
      <div
        data-stagger
        className="mx-auto grid max-w-300 grid-cols-2 gap-x-6 gap-y-8 px-5 py-10 sm:px-8 lg:grid-cols-4 lg:gap-8"
      >
        {pillars.map((p) => (
          <div key={p.big} data-reveal className="flex flex-col gap-2">
            <div className="font-display text-[30px] leading-none tracking-[0.02em] text-festa-navy-800">
              {p.big}
            </div>
            <div className="mx-2 h-0.5 w-8 bg-rule-gold" />
            <div className="font-sans text-sm leading-normal text-text-body">
              {p.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
