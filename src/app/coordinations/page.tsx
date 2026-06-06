"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, GraduationCap, HeartHandshake, ShieldCheck, Mic, ArrowRight } from "lucide-react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const coordinations = [
  {
    id: "clr",
    tag: "Spirituel",
    title: "Leaders Religieux (CLR)",
    description: "Former les consciences pour transformer les communautés et consolider les valeurs morales.",
    icon: Star,
    accent: "#00b1e0",
  },
  {
    id: "cer",
    tag: "Leadership",
    title: "Élites de la Rép. (CER)",
    description: "Bâtir une nouvelle génération de décideurs exemplaires, imprégnés d’éthique et de performance.",
    icon: GraduationCap,
    accent: "#ffdf00",
  },
  {
    id: "vmd",
    tag: "Valeurs",
    title: "Valeurs & Mentalité (VMD)",
    description: "Transformer la culture pour sécuriser l’avenir via la famille, la religion et l’État.",
    icon: HeartHandshake,
    accent: "#eda900",
  },
  {
    id: "coc",
    tag: "Solidarité",
    title: "Œuvres Caritatives (COC)",
    description: "Organiser la solidarité avec rigueur et transparence pour renforcer la cohésion nationale.",
    icon: ShieldCheck,
    accent: "#7c4e24",
  },
  {
    id: "ccm",
    tag: "Communication",
    title: "Com. & Multimédia (CCM)",
    description: "Maîtriser le récit pour éduquer, sensibiliser et amplifier l'impact de la vision SIT.",
    icon: Mic,
    accent: "#00b1e0",
  },
];

export default function CoordinationsPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#ffdf00] from-80% to-[#eda900] py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-[#000d48] to-transparent blur-3xl" />
        </div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <Breadcrumb />
          </div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#000d48]/60 text-xs font-bold uppercase tracking-[0.4em] mb-6 block"
          >
            SIT RD CONGO
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-5xl lg:text-7xl text-[#000d48] mb-8"
          >
            Nos <span className="text-white">coordinations</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#000d48]/70 max-w-2xl mx-auto text-lg lg:text-xl"
          >
            Une architecture structurée pour une transformation intégrale. Explorez nos 5 départements stratégiques.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-[var(--bg)] transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {coordinations.map((coord, i) => (
              <motion.div
                key={coord.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative surface-card rounded-[2.5rem] p-10 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
              >
                <Link href={`/coordinations/${coord.id}`} className="absolute inset-0 z-10" />
                
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: coord.accent }} />

                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: `${coord.accent}15` }}>
                    <coord.icon className="w-8 h-8" style={{ color: coord.accent }} />
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-3" style={{ color: coord.accent }}>
                    {coord.tag}
                  </span>

                  <h3 className="font-heading font-bold text-2xl mb-4 text-[#000d48]">
                    {coord.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                    {coord.description}
                  </p>

                  <div className="inline-flex items-center gap-2 font-bold text-sm group-hover:gap-4 transition-all" style={{ color: coord.accent }}>
                    Détails de la mission
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
