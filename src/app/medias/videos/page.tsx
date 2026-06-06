"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Video, Play, Search, Clock, Users } from "lucide-react";

const videos = [
  {
    title: "La vision du SIT pour l'éveil citoyen",
    duration: "12:15",
    views: "2.4k",
    date: "Mars 2024",
    category: "Conférence"
  },
  {
    title: "Leadership et Transformation Sociétale",
    duration: "45:30",
    views: "1.8k",
    date: "Février 2024",
    category: "Enseignement"
  },
  {
    title: "Impact du SIT sur le terrain : RDC",
    duration: "08:45",
    views: "4.2k",
    date: "Janvier 2024",
    category: "Documentaire"
  },
  {
    title: "Interview : Dr. Jean Claude NTUMBA",
    duration: "25:00",
    views: "3.1k",
    date: "Décembre 2023",
    category: "Médias"
  }
];

export default function VideosPage() {
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
            <Video className="w-8 h-8 text-[#00b1e0]" />
          </motion.div>
          <h1 className="font-heading font-black text-4xl lg:text-6xl text-[#000d48] mb-6">
            Vidéos & <span className="text-white">Documentaires</span>
          </h1>
          <p className="text-[#000d48]/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Vivez l'impact en images. Conférences, interventions et documentaires sur nos actions de transformation à travers la RDC.
          </p>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="relative aspect-video lg:mx-20 rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer">
            <img 
              src="/video-placeholder.jpg" 
              alt="Vidéo à la une" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#000d48]/40 flex items-center justify-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="w-24 h-24 bg-[#ffdf00] rounded-full flex items-center justify-center shadow-2xl"
              >
                <Play className="w-10 h-10 text-[#000d48] fill-current" />
              </motion.div>
            </div>
            <div className="absolute bottom-10 left-10 text-white">
              <span className="px-3 py-1 bg-[#00b1e0] text-[10px] font-black uppercase tracking-widest rounded-md mb-4 inline-block">
                À la une
              </span>
              <h2 className="font-heading font-black text-3xl lg:text-4xl">
                Documentaire : La marche vers la <span className="text-[#ffdf00]">transformation</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-heading font-black text-3xl text-[#000d48] mb-2">Récent</h2>
              <p className="text-slate-500">Nos dernières productions multimédias</p>
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Rechercher..." 
                  className="pl-12 pr-6 py-3 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#00b1e0]"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((vid, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 shadow-lg shadow-black/5">
                  <img src="/video-tn.jpg" alt={vid.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                    <Play className="w-12 h-12 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-[10px] font-bold rounded">
                    {vid.duration}
                  </div>
                </div>
                <span className="text-[#00b1e0] text-[10px] font-black uppercase tracking-widest mb-2 block">
                  {vid.category}
                </span>
                <h3 className="font-heading font-bold text-xl text-[#000d48] mb-4 group-hover:text-[#00b1e0] transition-colors leading-tight">
                  {vid.title}
                </h3>
                <div className="flex items-center gap-6 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {vid.date}</span>
                  <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {vid.views} vues</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-10 py-4 rounded-full border-2 border-[#000d48] text-[#000d48] font-bold hover:bg-[#000d48] hover:text-white transition-all">
              Charger plus de vidéos
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
