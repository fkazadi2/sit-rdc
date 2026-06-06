"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Award, GraduationCap, Globe, ShieldCheck } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export default function FondateurPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#ffdf00] from-80% to-[#eda900] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/fondateur-hero.jpg" 
            alt="Decoration" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col items-center text-center">
          <div className="flex justify-center mb-8">
            <Breadcrumb />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-48 h-48 rounded-full border-4 border-[#000d48] overflow-hidden mb-8 shadow-2xl"
          >
            <Image
              src="/past-jc.jpg"
              alt="Dr. Jean Claude NTUMBA KABELU"
              width={192}
              height={192}
              className="object-cover"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-black text-4xl lg:text-6xl text-[#000d48] mb-4"
          >
            Dr. Jean Claude <br />
            <span className="text-white">NTUMBA KABELU</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#000d48]/70 font-heading font-bold text-xl uppercase tracking-widest"
          >
            Fondateur & CEO du SIT
          </motion.p>
        </div>
      </section>

      {/* Conviction Section */}
      <section className="py-24 bg-white transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-2/3 space-y-8 text-lg leading-relaxed text-slate-700">
                <h2 className="font-heading font-black text-3xl text-[#000d48]">
                  Une conviction devenue architecture stratégique
                </h2>
                
                <p>
                  Derrière toute institution durable, un homme capable de lire son époque, d’en comprendre les fractures et d’en anticiper les besoins.
                </p>
                
                <p>
                  Le Docteur Jean Claude NTUMBA KABELU incarne cette génération de leaders pour qui le développement d’une nation ne se limite pas à la croissance économique, mais repose avant tout sur la qualité des hommes, la solidité des valeurs et la crédibilité des institutions.
                </p>

                <p className="bg-[#000d48] p-8 rounded-[2rem] text-white">
                  "La transformation durable d’une nation commence par la transformation des mentalités, la structuration du leadership et la restauration du caractère."
                </p>

                <p>
                  Son parcours est celui d’un bâtisseur de conscience et d’un stratège du capital humain. À la croisée du leadership spirituel, de l’encadrement des élites et de la transformation sociale.
                </p>
              </div>

              <div className="lg:w-1/3 grid gap-6">
                <div className="p-8 bg-slate-50 rounded-3xl border-t-4 border-[#ffdf00]">
                  <h4 className="font-heading font-bold mb-4 text-[#000d48]">Les 3 Piliers du CEO</h4>
                  <ul className="space-y-4 text-sm font-semibold text-slate-600">
                    <li className="flex gap-3"><ShieldCheck className="w-5 h-5 text-[#00b1e0]" /> Lucidité nationale</li>
                    <li className="flex gap-3"><ShieldCheck className="w-5 h-5 text-[#00b1e0]" /> Exigence d'excellence</li>
                    <li className="flex gap-3"><ShieldCheck className="w-5 h-5 text-[#00b1e0]" /> Foi dans le potentiel humain</li>
                  </ul>
                </div>
                
                <div className="p-8 bg-[#00b1e0]/10 rounded-3xl border-t-4 border-[#00b1e0]">
                  <p className="font-heading font-bold text-2xl text-[#000d48]">50+</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-500">Livres à son actif</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Background */}
      <section className="py-24 bg-slate-50 transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-black text-3xl mb-12 text-center text-[#000d48]">Formations & Expertise</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  icon: Award, 
                  title: "Doctorat (PhD)", 
                  desc: "Christian Leadership de Cornestones Christian University, Floride." 
                },
                { 
                  icon: GraduationCap, 
                  title: "Doctorat en Ministère", 
                  desc: "Kingdom Bible College & Seminary, Virginia." 
                },
                { 
                  icon: BookOpen, 
                  title: "Maîtrise en Théologie", 
                  desc: "Mount Olive Bible Institute and Seminary." 
                },
                { 
                  icon: Globe, 
                  title: "Enseignement International", 
                  desc: "Enseignant dans plusieurs structures de formation et universitaires mondiales." 
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-8 bg-white rounded-[2rem] shadow-lg border border-slate-100">
                  <div className="w-12 h-12 bg-[#ffdf00]/20 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-[#eda900]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#000d48] mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-10 bg-[#000d48] rounded-[2.5rem] text-white">
              <h3 className="font-heading font-bold text-2xl text-[#ffdf00] mb-6 underline underline-offset-8">Auteur & Conférencier</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Écrivain et conférencier de renommée internationale, le Dr Jean Claude NTUMBA KABELU a à son actif plus de 50 livres, dont 6 déjà publiés. Parmi ses œuvres majeures non publiées : 
                <br /><br />
                • <strong className="text-[#00b1e0]">Bâtir et Développer la culture d’intégrité</strong><br />
                • <strong className="text-[#00b1e0]">Bâtir la culture de la loyauté pour les grandes performances professionnelles</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
