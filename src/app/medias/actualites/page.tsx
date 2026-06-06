"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Newspaper, Calendar, ArrowRight, Share2, Bookmark } from "lucide-react";
import Link from "next/link";

const news = [
  {
    title: "Le SIT renforce son action dans le Haut-Katanga",
    category: "Coordination",
    date: "12 Mars 2024",
    desc: "Rencontre stratégique entre les élites locales et la coordination CER pour le développement provincial.",
    image: "/slide-1.jpg"
  },
  {
    title: "Transformation des mentalités : Nouveau cycle de formation",
    category: "Valeurs",
    date: "10 Mars 2024",
    desc: "Lancement du programme national d'encadrement citoyen dans les universités de Kinshasa.",
    image: "/slide-2.jpg"
  },
  {
    title: "Actions Humanitaires : Rapport de Solidarité 2024",
    category: "COC",
    date: "08 Mars 2024",
    desc: "Bilan des interventions caritatives menées durant le premier trimestre en faveur des populations vulnérables.",
    image: "/slide-3.jpg"
  },
  {
    title: "Dr. Jean Claude NTUMBA au sommet Africain du Leadership",
    category: "International",
    date: "05 Mars 2024",
    desc: "Intervention remarquée sur l'importance de l'intégrité comme moteur de développement humain.",
    image: "/hero-image.jpg"
  }
];

export default function ActualitesPage() {
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
            <Newspaper className="w-8 h-8 text-[#eda900]" />
          </motion.div>
          <h1 className="font-heading font-black text-4xl lg:text-6xl text-[#000d48] mb-6">
            Actualités <span className="text-white">SIT RDC</span>
          </h1>
          <p className="text-[#000d48]/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Restez au cœur de la transformation. Toutes les dernières nouvelles, rapports d'activités et événements du SIT sur le terrain.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {news.map((item, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col md:flex-row gap-8 items-center bg-slate-50/50 p-6 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-full md:w-56 h-56 rounded-3xl overflow-hidden shrink-0 shadow-lg relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#eda900] text-white text-[9px] font-black uppercase tracking-widest rounded-md">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-[#000d48]/50 text-xs font-bold mb-4">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <h3 className="font-heading font-black text-2xl text-[#000d48] mb-4 leading-tight group-hover:text-[#eda900] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {item.desc}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <Link href="#" className="flex items-center gap-2 text-sm font-black text-[#00b1e0] hover:gap-4 transition-all">
                      Lire l'article
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <div className="flex gap-2">
                      <button className="p-2.5 rounded-full hover:bg-slate-100 transition-colors">
                        <Share2 className="w-4 h-4 text-slate-400" />
                      </button>
                      <button className="p-2.5 rounded-full hover:bg-slate-100 transition-colors">
                        <Bookmark className="w-4 h-4 text-slate-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-20 text-center">
             <div className="inline-flex p-1.5 bg-slate-100 rounded-full">
               {[1, 2, 3, "...", 12].map((p, i) => (
                 <button 
                   key={i} 
                   className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all ${p === 1 ? 'bg-white shadow-md text-[#000d48]' : 'text-slate-500 hover:text-[#000d48]'}`}
                 >
                   {p}
                 </button>
               ))}
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
