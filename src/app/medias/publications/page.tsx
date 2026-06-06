"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { BookOpen, Search, Filter, Download, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Bâtir et Développer la culture d’intégrité",
    category: "Valeurs & Civisme",
    year: "2023",
    desc: "Un manuel stratégique sur la restauration des valeurs morales au sein des institutions nationales.",
    type: "Livre"
  },
  {
    title: "Le Leadership Expirationnel",
    category: "Leadership",
    year: "2022",
    desc: "Guide pratique pour une gouvernance orientée vers l'impact et la transformation sociale.",
    type: "Guide"
  },
  {
    title: "Rapport Annuel SIT 2023",
    category: "Rapport",
    year: "2024",
    desc: "Bilan des activités et impact des 5 coordinations sur le territoire congolais.",
    type: "Rapport PDF"
  },
  {
    title: "Culture de Loyauté & Performance professionnelle",
    category: "Performance",
    year: "2023",
    desc: "Comment allier loyauté institutionnelle et excellence opérationnelle au quotidien.",
    type: "Ouvrage"
  }
];

export default function PublicationsPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#ffdf00] from-80% to-[#eda900] py-24 relative overflow-hidden text-center">
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex justify-center mb-8">
            <Breadcrumb />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-[#000d48] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl"
          >
            <BookOpen className="w-8 h-8 text-[#ffdf00]" />
          </motion.div>
          <h1 className="font-heading font-black text-4xl lg:text-6xl text-[#000d48] mb-6">
            Édition & <span className="text-white">Publications</span>
          </h1>
          <p className="text-[#000d48]/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Accédez à la bibliothèque de savoir du SIT. Plus de 50 ouvrages dédiés au leadership et à la transformation citoyenne.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Rechercher un ouvrage..." 
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#ffdf00] outline-none transition-all"
            />
          </div>
          <div className="flex gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {["Tous", "Livres", "Guides", "Rapports", "Articles"].map((f) => (
              <button key={f} className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-bold text-[#000d48] hover:border-[#ffdf00] transition-colors whitespace-nowrap">
                {f}
              </button>
            ))}
            <button className="p-2.5 bg-[#000d48] text-white rounded-full">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-8"
              >
                <div className="w-full md:w-40 h-52 bg-slate-100 rounded-2xl shrink-0 flex items-center justify-center relative overflow-hidden">
                  <BookOpen className="w-12 h-12 text-slate-300" />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-[#00b1e0] text-white text-[9px] font-black uppercase tracking-widest rounded-md">
                    {pub.type}
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[#00b1e0] text-[10px] font-black uppercase tracking-widest mb-2">
                    {pub.category} • {pub.year}
                  </span>
                  <h3 className="font-heading font-black text-2xl text-[#000d48] mb-4 group-hover:text-[#00b1e0] transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {pub.desc}
                  </p>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-xs font-bold text-[#000d48] hover:underline">
                      <Download className="w-4 h-4" />
                      Extraits
                    </button>
                    <button className="flex items-center gap-2 text-xs font-bold text-[#eda900] hover:underline">
                      <ExternalLink className="w-4 h-4" />
                      Détails
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <button className="btn-yellow">
              Voir tout le catalogue
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
