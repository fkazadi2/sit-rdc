"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "M. le Procureur Général",
    role: "Près de la Cour des Comptes",
    content: "Je suis arrivé dans cette commission aux pieds du Dr. Jean Claude NTUMBA en 2009 et par les enseignements, les différentes valeurs importantes de la vie comme intégrité, loyauté, la culture du travail… m'ont été inculquées durant toutes ces années et ont forgé mon caractère, qui a fait des preuves dans mon parcours professionnel et qui a influencé même ma nomination par le Président de la République à ce poste de procureur général près de la cour des comptes.",
    image: "/user-placeholder.jpg"
  },
  {
    name: "Serge TSHIBANGU",
    role: "Directeur en charge de la sécurité à l'Hôtel de Monnaie",
    content: "Mon nom est Serge TSHIBANGU, je suis directeur en charge de la sécurité à l'hôtel de monnaie. Je suis arrivé aux pieds du Dr. Jean Claude NTUMBA dans les années 2011 et par les enseignements, j'étais forgé dans mon caractère de loyauté, intégrité,… qui a été même à l'occasion de ma nomination en tant que directeur de la sécurité à l'hôtel de Monnaie.",
    image: "/user-placeholder.jpg"
  },
  {
    name: "FEZA MICKA",
    role: "Gérante générale à B One TV",
    content: "Je suis FEZA MICKA, gérante générale à B One TV. J'ai commencé à suivre les enseignements du Dr. Jean Claude NTUMBA depuis les années 2011. J'ai suivi les enseignements à caractère leadership, loyauté, intégrité,… qui ont forgé mon caractère et qui est aujourd'hui à la base de mon progrès professionnel.",
    image: "/user-placeholder.jpg"
  },
  {
    name: "Freddy YADI SHEMBO",
    role: "Directeur Général",
    content: "Cette commission est une pépinière de leaders de demain dans cette République. Je travaille avec la majeure partie de personnel qui est issue de cette institution. Je peux vous garantir que je suis en paix, parce que je suis entouré des hommes loyaux et intègres.",
    image: "/user-placeholder.jpg"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-[#ffdf00] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-[#000d48]/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-[#00b1e0]/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#000d48]/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#00b1e0]/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-[#000d48]/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-[#00b1e0]/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] border border-[#000d48]/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1600px] border border-[#00b1e0]/5 rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#000d48]/60 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
            Traces du Parcours
          </span>
          <h2 className="font-heading font-black text-4xl lg:text-5xl text-[#000d48] mb-6">
            Ils incarnent la <span className="text-white">Vision</span>
          </h2>
          <p className="text-[#000d48]/70 max-w-2xl mx-auto font-medium">
            Découvrez les témoignages de ceux dont la trajectoire a été transformée par la dynamique SIT.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="bg-[#000d48] rounded-[3rem] p-10 lg:p-20 text-center shadow-2xl shadow-[#000d48]/20"
              >
                <div className="flex justify-center mb-10">
                  <div className="w-20 h-20 rounded-2xl bg-[#ffdf00]/10 flex items-center justify-center rotate-3">
                    <Quote className="w-10 h-10 text-[#ffdf00]" />
                  </div>
                </div>

                <p className="text-xl lg:text-3xl text-white leading-relaxed mb-12 font-medium italic">
                  "{testimonials[current].content}"
                </p>

                <div className="flex flex-col items-center">
                  <h4 className="text-[#ffdf00] font-heading font-black text-2xl tracking-tight mb-2">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-[#00b1e0] text-sm font-black uppercase tracking-[0.2em]">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-6 mt-12">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full border-2 border-[#000d48]/10 flex items-center justify-center text-[#000d48] hover:bg-[#000d48] hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="w-14 h-14 rounded-full border-2 border-[#000d48]/10 flex items-center justify-center text-[#000d48] hover:bg-[#000d48] hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 transition-all duration-500 rounded-full ${
                    i === current ? "w-10 bg-[#000d48]" : "w-2 bg-[#000d48]/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
