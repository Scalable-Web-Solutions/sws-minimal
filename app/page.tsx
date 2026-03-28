import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { FeaturedClients } from "@/components/landing/FeaturedClients";
import { Industries } from "@/components/landing/Industries";
import { ClientLogos } from "@/components/landing/ClientLogos";
import { LatestNews } from "@/components/landing/LatestNews";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[--background] text-[--foreground]">
      <Header />
      <main>
        <Hero />
        <FeaturedClients />
        <Industries />
        <ClientLogos />
        <LatestNews />
      </main>
      <Footer />
    </div>
  );
}
