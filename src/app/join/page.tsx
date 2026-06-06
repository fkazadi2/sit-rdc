"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UserPlus, CheckCircle2, ShieldCheck, Zap, ArrowRight, Heart } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const benefits = [
  {
    title: "Accès au Réseau",
    desc: "Connectez-vous avec des élites et leaders engagés pour la transformation de la RDC.",
    icon: ShieldCheck
  },
  {
    title: "Formations Exclusives",
    desc: "Bénéficiez des programmes de certification SIT sur le leadership et l'éthique.",
    icon: Zap
  },
  {
    title: "Impact Direct",
    desc: "Participez concrètement aux œuvres caritatives et aux projets de terrain.",
    icon: Heart
  }
];

export default function JoinPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#ffdf00] from-80% to-[#eda900] py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/join-hero.jpg" 
            alt="Decoration" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
         <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex justify-center mb-8">
            <Breadcrumb />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-[#000d48] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl rotate-12"
          >
            <UserPlus className="w-10 h-10 text-[#ffdf00]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-black text-4xl lg:text-7xl text-[#000d48] mb-6"
          >
            Devenir un <span className="text-white">Bâtisseur</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#000d48]/70 max-w-2xl mx-auto text-lg lg:text-xl"
          >
            Rejoignez le mouvement SIT et engagez-vous pour une nation fondée sur l'intégrité, l'excellence et l'unité.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div>
              <h2 className="font-heading font-black text-3xl lg:text-4xl mb-10 text-[#000d48]">
                Pourquoi nous rejoindre ?
              </h2>
              
              <div className="space-y-8">
                {benefits.map((b, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-[#00b1e0]/10 flex items-center justify-center shrink-0">
                      <b.icon className="w-6 h-6 text-[#00b1e0]" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg mb-1">{b.title}</h4>
                      <p className="text-slate-500">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-slate-50 rounded-[2.5rem] border-l-4 border-[#ffdf00]">
                <p className="font-medium text-[#000d48]">
                  "Entrer dans le cercle des bâtisseurs, c'est choisir l'exigence envers soi-même pour le progrès de tous."
                </p>
              </div>
            </div>

            <div className="bg-[#000d48] p-10 lg:p-14 rounded-[4rem] shadow-2xl relative">
              <div className="absolute top-0 right-10 w-32 h-32 bg-[#ffdf00]/10 rounded-full blur-3xl" />
              <h3 className="text-white font-heading font-bold text-2xl mb-8">
                Formulaire d'adhésion
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-2 ml-1">Type d'engagement</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-[#ffdf00] transition-all">
                    <option className="bg-[#000d48]">Membre Individuel</option>
                    <option className="bg-[#000d48]">Partenaire Institutionnel</option>
                    <option className="bg-[#000d48]">Bénévole (COC)</option>
                    <option className="bg-[#000d48]">Expert / Formateur</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#00b1e0] transition-all" placeholder="Nom" />
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#00b1e0] transition-all" placeholder="Prénom" />
                </div>

                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#00b1e0] transition-all" placeholder="Email" />
                
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#00b1e0] transition-all resize-none" placeholder="Quelles sont vos motivations ?"></textarea>

                <button type="submit" className="w-full btn-yellow py-5 flex items-center justify-center gap-3 text-lg">
                  Envoyer ma candidature
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
