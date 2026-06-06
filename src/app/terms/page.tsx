"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { FileText, Scale, Gavel, UserCheck } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      <section className="bg-gradient-to-r from-[#ffdf00] from-80% to-[#eda900] py-24 relative overflow-hidden text-center">
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <Breadcrumb />
          </div>
          <Scale className="w-16 h-16 text-[#000d48] mx-auto mb-8" />
          <h1 className="font-heading font-black text-4xl lg:text-6xl text-[#000d48] mb-6">Conditions <span className="text-white">générales</span></h1>
          <p className="text-[#000d48]/70 max-w-2xl mx-auto">Cadre juridique regissant l'utilisation de la plateforme SIT RDC.</p>
        </div>
      </section>
      <section className="py-24 bg-[var(--bg)] transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-12 text-slate-600 dark:text-slate-400">
            <div>
              <h2 className="text-[#000d48] font-heading font-bold text-2xl mb-4">1. Acceptation des conditions</h2>
              <p>En accédant au site sitrdc.org, vous acceptez de vous conformer aux présentes conditions générales d'utilisation et à toutes les lois et réglementations applicables.</p>
            </div>
            <div>
              <h2 className="text-[#000d48] font-heading font-bold text-2xl mb-4">2. Propriété Intellectuelle</h2>
              <p>Tous les contenus présents sur ce site (textes, images, logos, vidéos) sont la propriété exclusive du SIT RDC ou de ses partenaires techniques.</p>
            </div>
            <div>
              <h2 className="text-[#000d48] font-heading font-bold text-2xl mb-4">3. Responsabilité</h2>
              <p>SIT RDC s'efforce de fournir des informations exactes et à jour, mais ne saurait être tenu responsable des erreurs ou omissions indépendantes de sa volonté.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
