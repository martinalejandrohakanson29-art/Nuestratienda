import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Stack from "@/components/Stack";
import Integrations from "@/components/Integrations";
import BentoGrid from "@/components/BentoGrid";
import Proceso from "@/components/Proceso";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Servicios />
      <Stack />
      <Integrations />
      <BentoGrid />
      <Proceso />
      <Contacto />
      <Footer />
    </main>
  );
}
