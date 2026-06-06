"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, TrendingUp, Users } from "lucide-react";

const UrgencySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#00b1e0] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-[#ffdf00] blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#00b1e0] text-xs font-bold uppercase tracking-[0.4em] mb-6 block">
              Constat & Appel à l'action
            </span>
            <h2 className="font-heading font-black text-4xl lg:text-5xl mb-8 leading-tight" style={{ color: "var(--text)" }}>
              L'urgence d'une <br />
              <span className="text-[#B48903]">nouvelle trajectoire</span> <br />
              nationale
            </h2>
            <div className="w-24 h-1.5 bg-[#00b1e0] rounded-full mb-10" />
            
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <p>
                Depuis l'aube de l'Afrique contemporain, la société congolaise rêvait d’essor, de progrès et d’un avenir bâti sur la fierté, la dignité et l’unité.
              </p>
              <p className="font-semibold" style={{ color: "var(--text)" }}>
                Bâtir une nation fondée sur la dignité, l’excellence et l’unité. Riche de ses talents, de sa jeunesse et de son potentiel stratégique, la République Démocratique du Congo dispose de tous les leviers pour incarner un modèle africain de développement durable.
              </p>
              <p>
                Pourtant, un constat s’impose : au-delà des infrastructures et des réformes structurelles, le véritable défi est celui des valeurs, du leadership et de la culture institutionnelle. 
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#ffdf00] rounded-[2rem] p-8 lg:p-12 shadow-2xl relative"
          >
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#000d48] rounded-2xl flex items-center justify-center shadow-xl">
              <ShieldCheck className="w-10 h-10 text-[#ffdf00]" />
            </div>

            <h3 className="text-[#000d48] font-heading font-bold text-2xl mb-8">
              Le véritable défi de demain
            </h3>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#000d48]/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-[#000d48]" />
                </div>
                <p className="text-[#000d48]/80 font-medium">
                  "La performance économique sans intégrité ne produit pas la prospérité durable."
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#000d48]/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#000d48]" />
                </div>
                <p className="text-[#000d48]/80 font-medium">
                  "Le pouvoir sans éthique ne produit pas la stabilité."
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#000d48]/10 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-[#000d48]" />
                </div>
                <p className="text-[#000d48]/80 font-medium">
                  "L’influence sans caractère ne produit pas la transformation."
                </p>
              </li>
            </ul>

            <div className="mt-12 p-10 bg-[#000d48] rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00b1e0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#ffdf00] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#ffdf00]/20">
                  <TrendingUp className="w-7 h-7 text-[#000d48]" />
                </div>
                <p className="text-[#ffdf00] font-heading font-black text-2xl mb-4 leading-tight">
                  Comment reconstruire ?
                </p>
                <p className="text-white/80 text-lg leading-relaxed font-medium">
                  C’est à cette question majeure que répond <span className="text-white font-bold">Services for Impact and Transformation (SIT)</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
