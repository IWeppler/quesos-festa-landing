import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Valores from "@/components/Valores";
import Historia from "@/components/Historia";
import Novedades from "@/components/Novedades";
import Catalogo from "@/components/Catalogo";
import DondeEncontrarnos from "@/components/DondeEncontrarnos";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { getCategorias, getPuntosVenta } from "@/lib/queries";
import Premios from "@/components/Premios";

export default async function Home() {
  const [categories, { chains, provinces }] = await Promise.all([
    getCategorias(),
    getPuntosVenta(),
  ]);

  return (
    <div
      id="festa"
      style={{
        fontFamily: "var(--font-sans)",
        color: "var(--text-body)",
        background: "var(--surface-page)",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <ScrollReveal />
      <Header />
      <Hero />
      <Valores />
      <Historia />
      <Novedades />
      <Catalogo categories={categories} />
      <Premios />
      <DondeEncontrarnos chains={chains} provinces={provinces} />
      <Contacto />
      <Footer />
    </div>
  );
}
