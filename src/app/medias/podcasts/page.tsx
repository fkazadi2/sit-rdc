"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Mic2, PlayCircle, Clock, Volume2, ArrowRight, Music } from "lucide-react";
import Link from "next/link";

const podcasts = [
  {
    title: "Civisme : Comprendre nos devoirs envers la nation",
    episode: "01",
    duration: "15:20",
    date: "14 Mars 2024",
    desc: "Un enseignement profond sur les fondements de la citoyenneté active."
  },
  {
    title: "Le leadership serviteur : Modèle de transformation",
    episode: "02",
    duration: "22:45",
    date: "12 Mars 2024",
    desc: "Comment influencer positivement son environnement par le service."
  },
  {
    title: "Intégrité professionnelle et culture de performance",
    episode: "03",
    duration: "18:10",
    date: "10 Mars 2024",
    desc: "Dialogues sur l'excellence au quotidien dans le milieu professionnel."
  },
  {
    title: "La famille, premier pilier de la nouvelle société",
    episode: "04",
    duration: "25:30",
    date: "07 Mars 2024",
    desc: "Repenser l'éducation aux valeurs dès le plus jeune âge."
  }
];

export default function PodcastsPage() {
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
            <Mic2 className="w-8 h-8 text-[#7c4e24]" />
          </motion.div>
          <h1 className="font-heading font-black text-4xl lg:text-6xl text-[#000d48] mb-6">
            Podcasts & <span className="text-white">Radio SIT</span>
          </h1>
          <p className="text-[#000d48]/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Écoutez la voix du changement. Retrouvez nos enseignements, réflexions et débats sur la transformation sociétale pour une écoute nomade.
          </p>
        </div>
      </section>

      {/* Audio Player Promo */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="bg-[#7c4e24] rounded-[4rem] p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -mr-48 -mt-48" />
             <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20">
               <Music className="w-12 h-12 text-white" />
             </div>
             <div className="flex-grow text-white text-center lg:text-left">
               <h2 className="font-heading font-black text-3xl lg:text-4xl mb-4">Émission "Le Réveil"</h2>
               <p className="text-white/80 text-xl font-light max-w-xl">
                 Retrouvez-nous chaque vendredi à 18h00 sur les ondes nationales et en simultané sur notre plateforme.
               </p>
             </div>
             <div className="flex gap-4 shrink-0">
               <button className="px-8 py-4 bg-white text-[#7c4e24] font-black rounded-full shadow-xl hover:scale-105 transition-all">
                 Écouter en Direct
               </button>
             </div>
          </div>
        </div>
      </section>

      {/* Podcast List */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="font-heading font-black text-3xl text-[#000d48] mb-12 text-center underline decoration-[#ffdf00] decoration-4 underline-offset-8">
            Dernières Émissions
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {podcasts.map((pod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center gap-6 p-6 md:p-8 bg-white rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center shrink-0 text-slate-300 font-black text-xl group-hover:bg-[#7c4e24]/10 group-hover:text-[#7c4e24] transition-colors">
                  {pod.episode}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-black text-[#7c4e24] uppercase tracking-widest leading-none">Episode Podcast</span>
                    <span className="text-[10px] text-slate-400 font-bold">• {pod.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#000d48] group-hover:text-[#7c4e24] transition-colors mb-2">
                    {pod.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-1">{pod.desc}</p>
                </div>
                <div className="flex items-center gap-6 shrink-0">
                   <div className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-400">
                     <Clock className="w-4 h-4" />
                     {pod.duration}
                   </div>
                   <button className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-[#7c4e24] group-hover:text-white transition-all shadow-sm">
                     <Volume2 className="w-5 h-5" />
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="#" className="inline-flex items-center gap-3 text-[#000d48] font-black group">
              Voir tous les épisodes
              <div className="w-12 h-12 bg-[#ffdf00] rounded-full flex items-center justify-center group-hover:bg-[#000d48] group-hover:text-[#ffdf00] transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
