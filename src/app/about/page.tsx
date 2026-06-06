"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Zap, ShieldCheck, TrendingUp, Users } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#ffdf00] from-80% to-[#eda900] py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/about-hero.jpg" 
            alt="Decoration" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-[#000d48] to-transparent blur-3xl" />
        </div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <Breadcrumb />
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
            className="font-heading font-black text-5xl lg:text-7xl text-[#000d48] max-w-4xl leading-tight"
          >
            Une institution de transformation <span className="text-white underline decoration-[#eda900]">sociétale</span>
          </motion.h1>
        </div>
      </section>

      {/* Identity & Strategic Positioning */}
      <section id="positionnement" className="py-24 bg-white transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-black text-3xl lg:text-4xl mb-10 text-[#000d48]">
              1. NOTRE IDENTITÉ ET NOTRE POSITIONNEMENT STRATÉGIQUE
            </h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <p className="text-xl font-medium text-[#000d48]">
                SIT est une plateforme multidimensionnelle de développement du capital humain, d’encadrement stratégique et de transformation des mentalités.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 my-12">
                {[
                  "Une organisation de transformation sociale",
                  "Une plateforme de développement du leadership et du capital humain",
                  "Une institution d’éducation civique"
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-2xl border-l-4 border-[#ffdf00]">
                    <p className="font-bold text-sm uppercase tracking-wider text-[#000d48]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-[#000d48] text-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl space-y-6">
                <p className="text-lg leading-relaxed">
                  Notre approche repose sur un principe fondamental : <br />
                  <strong className="text-[#00b1e0] text-2xl block mt-2">
                    Le développement durable commence par la transformation intérieure des individus et la structuration éthique des institutions.
                  </strong>
                </p>
                <p>
                  SIT se donne l’objectif de former et d’inculquer des valeurs importantes d’une société moderne, pour que les gens à tous les niveaux de la société, agissent par valeurs et non d’abord par la force de loi.
                </p>
                <p>
                  Notre ambition est d’institutionnaliser un programme national de performance Ethique formel et informel, destiné aux entreprises publiques, privées et aux administrations stratégiques. Ce programme vise à transformer les principes éthiques en standards opérationnels mesurables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Devise */}
      <section className="py-24 bg-slate-50 transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto space-y-20">
            <div>
              <h2 className="font-heading font-black text-3xl lg:text-4xl mb-12 text-[#000d48] flex items-center gap-4">
                <span className="w-12 h-1 bg-[#ffdf00] rounded-full" />
                2. VISION, MISSION, DEVISE
              </h2>
              
              <div className="space-y-16">
                {/* Vision */}
                <div className="relative p-10 bg-white rounded-[3rem] shadow-xl border border-slate-200">
                  <div className="absolute -top-6 left-10 bg-[#00b1e0] text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs">
                    LA VISION SIT
                  </div>
                  <p className="text-xl leading-relaxed text-slate-700">
                    "Bâtir une société dans laquelle l’intégrité, la responsabilité, la culture de performance, la sacralité de la vie humaine et le respect du bien commun deviennent des standards intégrés dans les comportements, les organisations et les politiques publiques."
                  </p>
                  <p className="mt-6 text-slate-600">
                    Former et renforcer les capacités des citoyens, leaders et institutions capables d’agir comme vecteurs sûrs de développement humain pour impacter, transformer et bâtir une culture de performance, d’intégrité, de loyauté, d’éthique du travail et de vivre-ensemble dans la société.
                  </p>
                </div>

                {/* Mission */}
                <div className="relative p-10 bg-white rounded-[3rem] shadow-xl border border-slate-200">
                  <div className="absolute -top-6 left-10 bg-[#eda900] text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs">
                    NOTRE MISSION
                  </div>
                  <p className="text-xl text-slate-700">
                    Concevoir, structurer et déployer des dispositifs d’encadrement et de formation capables de former des citoyens, leaders et institutions agissant comme vecteurs sûrs de développement humain, économique et moral.
                  </p>
                </div>

                {/* Devise */}
                <div className="bg-[#000d48] p-12 rounded-[3rem] text-center shadow-2xl">
                  <span className="text-white/40 text-xs font-bold uppercase tracking-[0.5em] mb-8 block">
                    NOTRE DEVISE
                  </span>
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                    {[
                      { word: "Connaissance", desc: "Pour éclairer" },
                      { word: "Caractère", desc: "Pour stabiliser" },
                      { word: "Action", desc: "Pour transformer" }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <span className="font-heading font-black text-4xl text-[#ffdf00] mb-2">{item.word}</span>
                        <span className="text-white/60 text-sm font-medium tracking-widest uppercase">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Positioning final */}
            <div className="bg-[#00b1e0] rounded-[3rem] p-10 lg:p-16 text-white">
              <h3 className="font-heading font-black text-3xl mb-8">Notre positionnement auprès des dirigeants</h3>
              <ul className="space-y-4 text-lg font-medium">
                <li className="flex gap-4">
                  <span className="text-[#000d48] font-bold">●</span> Un partenaire stratégique des institutions publiques
                </li>
                <li className="flex gap-4">
                  <span className="text-[#000d48] font-bold">●</span> Un accélérateur d’excellence pour les entreprises publiques et privées
                </li>
                <li className="flex gap-4">
                  <span className="text-[#000d48] font-bold">●</span> Un catalyseur d’intégrité pour les élites nationales
                </li>
                <li className="flex gap-4">
                  <span className="text-[#000d48] font-bold">●</span> Un architecte de transformation durable et de performance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
