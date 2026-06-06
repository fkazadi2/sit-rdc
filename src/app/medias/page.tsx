"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Video, Newspaper, Mic2, PlayCircle, Download } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const mediaCategories = [
  {
    title: "Édition & Publications",
    icon: BookOpen,
    desc: "Découvrez les ouvrages du Dr. Jean Claude NTUMBA et nos guides pédagogiques sur le leadership.",
    count: "50+ Ouvrages",
    color: "#ffdf00",
    href: "/medias/publications"
  },
  {
    title: "Vidéos & Documentaires",
    icon: Video,
    desc: "Suivez nos interventions, conférences et documentaires sur la transformation sociétale.",
    count: "24 Vidéos",
    color: "#00b1e0",
    href: "/medias/videos"
  },
  {
    title: "Actualités",
    icon: Newspaper,
    desc: "Restez informé des dernières activités des 5 coordinations du SIT sur le terrain.",
    count: "Hebdomadaire",
    color: "#eda900",
    href: "/medias/actualites"
  },
  {
    title: "Podcasts & Radio",
    icon: Mic2,
    desc: "Écoutez nos enseignements sur le civisme et les valeurs pour une écoute nomade.",
    count: "12 Épisodes",
    color: "#7c4e24",
    href: "/medias/podcasts"
  },
  {
    title: "Photothèque",
    icon: Video,
    desc: "Revivez en images les moments forts de nos événements et présentations officielles.",
    count: "40+ Photos",
    color: "#00b1e0",
    href: "/medias/phototheque"
  },
];

export default function MediasPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#ffdf00] from-80% to-[#eda900] py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/medias-hero.jpg" 
            alt="Decoration" 
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
            Médiathèque & Presse
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-black text-4xl lg:text-7xl text-[#000d48] mb-6"
          >
            Centre de <span className="text-white">Ressources</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#000d48]/70 max-w-2xl mx-auto text-lg"
          >
            Plongez dans notre univers de connaissances. Livres, vidéos et articles pour nourrir votre transformation.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {mediaCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="w-20 h-20 rounded-[2rem] flex items-center justify-center shrink-0 shadow-lg" style={{ backgroundColor: cat.color }}>
                    <cat.icon className="w-10 h-10 text-[#000d48]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-heading font-bold text-2xl text-[#000d48] tracking-tight">
                        {cat.title}
                      </h3>
                      <span className="px-3 py-1 bg-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm text-slate-500">
                        {cat.count}
                      </span>
                    </div>
                    <p className="text-slate-500 leading-relaxed mb-6">
                      {cat.desc}
                    </p>
                    <Link 
                      href={cat.href}
                      className="flex items-center gap-2 text-sm font-bold text-[#00b1e0] hover:gap-4 transition-all"
                    >
                      Parcourir la section
                      <PlayCircle className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Book */}
      <section className="py-24 bg-[#000d48] relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="bg-[#00b1e0] rounded-[4rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-16 relative">
            <div className="w-64 h-80 bg-[#000d48] rounded-2xl shadow-2xl shrink-0 rotate-3 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center">
               <BookOpen className="w-20 h-20 text-[#ffdf00]" />
            </div>
            <div className="text-white">
              <h2 className="font-heading font-black text-3xl lg:text-5xl mb-6">
                Le livre du <span className="text-[#000d48]">Mois</span>
              </h2>
              <p className="text-xl mb-10 opacity-90 max-w-xl">
                "Bâtir et Développer la culture d’intégrité" — Une œuvre majeure du Dr. Jean Claude NTUMBA pour repenser notre rapport aux valeurs.
              </p>
              <button className="btn-yellow px-10 py-5 flex items-center gap-3 text-lg">
                Commander l'ouvrage
                <Download className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
