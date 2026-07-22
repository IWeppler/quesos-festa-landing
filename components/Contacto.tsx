import Image from "next/image";
import { ConsultaMayoristaForm } from "./ConsultaMayoristaForm";

const contactItems = [
  {
    href: "https://wa.me/541149914156",
    label: "Ventas mayoristas",
    value: "11 4991 4156",
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    href: "mailto:ventas@quesosfesta.com.ar",
    label: "Escribinos",
    value: "ventas@quesosfesta.com.ar",
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
  },
  {
    href: "https://instagram.com/quesosfesta",
    label: "Seguinos",
    value: "@quesosfesta",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </>
    ),
  },
];

export default function Contacto() {
  return (
    <section id="contacto" className="bg-festa-green-800 text-white">
      <div className="mx-auto grid max-w-350 px-5 sm:px-8 lg:grid-cols-2 lg:items-stretch">
        <div className="flex flex-col justify-center py-16 sm:py-20 lg:py-[92px] lg:pr-14">
          <div
            data-reveal
            className="font-sans text-xs font-medium uppercase tracking-[0.32em] text-white/72"
          >
            Contacto mayorista
          </div>
          <h2
            data-reveal
            className="m-0 mt-3.5 mb-4 font-serif text-[34px] font-medium leading-[1.16] text-white sm:text-[40px]"
          >
            Llevá Festa a tu comercio
          </h2>
          <p
            data-reveal
            className="m-0 mb-[34px] max-w-110 font-sans text-base leading-[1.75] text-white/85 sm:text-[17px]"
          >
            Somos una empresa familiar y atendemos cada pedido con nombre y
            apellido. Contanos de tu local y coordinamos la mejor propuesta para
            tu góndola.
          </p>
          <div data-stagger className="flex flex-col gap-5">
            {contactItems.map((item) => (
              <a
                key={item.href}
                data-reveal
                href={item.href}
                className="flex min-w-0 items-center gap-4 text-white no-underline"
              >
                <span className="inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-white/40">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block font-sans text-[11px] uppercase tracking-[0.2em] text-white/62">
                    {item.label}
                  </span>
                  <span className="wrap-break-word font-serif text-xl font-semibold leading-tight sm:text-[23px]">
                    {item.value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div data-reveal className="mt-10 border-t border-white/15 pt-8">
            <p className="m-0 mb-4 font-sans text-sm leading-relaxed text-white/85">
              ¿Preferís dejarnos tus datos? Completá el formulario y te
              contactamos nosotros.
            </p>
            <ConsultaMayoristaForm />
          </div>
        </div>

        <div className="relative min-h-75 sm:min-h-100 lg:min-h-130">
          <Image
            src="/assets/photos/foto-4.webp"
            alt="Quesos artesanales Quesos Festa listos para servir"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
