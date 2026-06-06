"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      <section className="bg-gradient-to-r from-[#ffdf00] from-80% to-[#eda900] py-24 relative overflow-hidden text-center">
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <Breadcrumb />
          </div>
          <Shield className="w-16 h-16 text-[#000d48] mx-auto mb-8" />
          <h1 className="font-heading font-black text-4xl lg:text-6xl text-[#000d48] mb-6">Politique de <span className="text-white">confidentialité</span></h1>
          <p className="text-[#000d48]/70 max-w-2xl mx-auto">Votre vie privée et la sécurité de vos données sont une priorité pour le SIT RDC.</p>
        </div>
      </section>
      <section className="py-24 bg-[var(--bg)] transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-12 text-slate-600 dark:text-slate-400">
            <div>
              <h2 className="text-[#000d48] font-heading font-bold text-2xl mb-4">1. Collecte des données</h2>
              <p>Nous collectons uniquement les informations nécessaires au traitement de vos demandes d'adhésion ou de contact (Nom, Prénom, Email, Téléphone).</p>
            </div>
            <div>
              <h2 className="text-[#000d48] font-heading font-bold text-2xl mb-4">2. Utilisation des informations</h2>
              <p>Vos données sont utilisées exclusivement pour vous communiquer les actualités du SIT et répondre à vos sollicitations institutionnelles.</p>
            </div>
            <div>
              <h2 className="text-[#000d48] font-heading font-bold text-2xl mb-4">3. Protection et Sécurité</h2>
              <p>Nous mettons en œuvre des mesures de sécurité physiques et techniques pour protéger vos informations contre tout accès non autorisé.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
