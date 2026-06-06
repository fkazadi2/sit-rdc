"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Zap, Eye, Rocket } from "lucide-react";

export default function MissionPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#ffdf00] from-80% to-[#eda900] py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/mission-hero.jpg" 
            alt="Mission SIT" 
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
            NOTRE RAISON D'ÊTRE
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-black text-4xl lg:text-7xl text-[#000d48] mb-6"
          >
            Vision & <span className="text-white">Mission</span>
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto space-y-20">
            {/* Vision */}
            <div className="relative p-10 lg:p-16 bg-[#000d48] rounded-[4rem] text-white shadow-2xl">
              <div className="absolute top-0 right-10 w-32 h-32 bg-[#00b1e0]/20 rounded-full blur-3xl" />
              <div className="flex items-center gap-4 mb-8">
                <Eye className="w-10 h-10 text-[#00b1e0]" />
                <h2 className="font-heading font-black text-3xl">Notre Vision</h2>
              </div>
              <p className="text-2xl font-light leading-relaxed">
                "Bâtir une société dans laquelle l’intégrité, la responsabilité et la culture de performance deviennent des standards intégrés dans tous les échelons de la nation."
              </p>
            </div>

            {/* Mission */}
            <div className="relative p-10 lg:p-16 bg-white border border-slate-100 rounded-[4rem] shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <Rocket className="w-10 h-10 text-[#B48903]" />
                <h2 className="font-heading font-black text-3xl text-[#000d48]">Notre Mission</h2>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed italic">
                Concevoir des dispositifs d’encadrement et de formation capables de former des citoyens, leaders et institutions agissant comme vecteurs sûrs de développement humain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
