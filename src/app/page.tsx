import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import UrgencySection from "@/components/UrgencySection";
import StatsSection from "@/components/StatsSection";
import ImpactSection from "@/components/ImpactSection";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import CoordinationsSection from "@/components/CoordinationsSection";
import HomeNews from "@/components/HomeNews";
import HomeGallery from "@/components/HomeGallery";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
      
      {/* Impact Stats Section */}
      <StatsSection />
      
      {/* Urgence Section */}
      <UrgencySection />

      {/* About Section */}
      <AboutSection />

      {/* Impact Section — Now with 5 Pillars */}
      <ImpactSection />
      
      {/* Testimonials */}
      <Testimonials />

      <CoordinationsSection />
      
      {/* Photothèque Highlights */}
      <HomeGallery />

      {/* Separator */}
      <div className="container mx-auto px-6 lg:px-16">
        <div className="h-px bg-slate-100" />
      </div>

      {/* News Section */}
      <HomeNews />

      {/* Global CTA Section */}
      <section className="py-24 bg-[#00b1e0]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading font-black text-4xl lg:text-6xl text-white mb-8">
            Entrons dans le <br />
            <span className="text-[#000d48]">cercle des bâtisseurs !</span>
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12">
            Les grandes nations ne se construisent pas par hasard. Elles sont le fruit de leaders visionnaires et de décisions courageuses.
          </p>
          <Link href="/contact" className="btn-yellow text-lg inline-flex items-center gap-3">
            S'engager avec le SIT
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
