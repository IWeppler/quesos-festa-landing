import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Valores from "@/components/Valores";
import Historia from "@/components/Historia";
import Catalogo from "@/components/Catalogo";
import DondeEncontrarnos from "@/components/DondeEncontrarnos";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
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
      <Catalogo />
      <DondeEncontrarnos />
      <Contacto />
      <Footer />
    </div>
  );
}
