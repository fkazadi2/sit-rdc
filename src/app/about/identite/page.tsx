"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { ShieldCheck, Target, Users } from "lucide-react";

export default function IdentitePage() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#ffdf00] from-80% to-[#eda900] py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/identite-hero.jpg" 
            alt="Identité SIT" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex justify-center mb-8">
            <Breadcrumb />
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#000d48]/60 text-xs font-bold uppercase tracking-[0.4em] mb-4 block"
          >
            SIT RD CONGO
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-black text-4xl lg:text-7xl text-[#000d48] mb-6"
          >
            Notre <span className="text-white">Identité</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#000d48]/70 max-w-2xl mx-auto text-lg"
          >
            SIT est une plateforme multidimensionnelle dédiée à l'encadrement stratégique et à l'éveil de la conscience citoyenne.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="font-heading font-black text-3xl text-[#000d48] mb-8">Un Pilier de Transformation</h2>
              <p>
                Services for Impact and Transformation (SIT) n'est pas seulement une organisation ; c'est un mouvement vers l'excellence. Nous nous positionnons comme un trait d'union entre le potentiel individuel et la performance collective.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Transformation Sociale", icon: ShieldCheck, color: "#00b1e0" },
                { title: "Leadership Éthique", icon: Target, color: "#ffdf00" },
                { title: "Impact Durable", icon: Users, color: "#7c4e24" }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${item.color}20` }}>
                    <item.icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-[#000d48]">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
