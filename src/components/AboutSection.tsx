"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Zap, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Notre Vision",
    body: "Bâtir une société dans laquelle l’intégrité et la culture de performance deviennent des standards intégrés.",
    color: "text-[#00b1e0]",
    bg: "bg-[#00b1e0]/10",
  },
  {
    icon: ShieldCheck,
    title: "Notre Mission",
    body: "Former et renforcer les capacités des citoyens et institutions capables d’agir comme vecteurs de développement.",
    color: "text-[#eda900]",
    bg: "bg-[#eda900]/10",
  },
  {
    icon: Zap,
    title: "Notre Devise",
    body: "Connaissance (Éclairer), Caractère (Stabiliser), Action (Transformer).",
    color: "text-[#7c4e24]",
    bg: "bg-[#7c4e24]/10",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-28 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl">
              <Image
                src="/about-visual.jpg"
                alt="SIT RDC — Mission et Vision"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000d48]/60 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-[#000d48] p-6 rounded-3xl shadow-2xl flex items-center gap-4 border border-[#00b1e0]/20"
            >
              <div className="w-12 h-12 bg-[#ffdf00] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#000d48]" />
              </div>
              <div>
                <p className="text-[#00b1e0] text-[10px] uppercase tracking-widest font-bold">Leadership</p>
                <p className="text-white font-heading font-bold text-lg leading-tight">Éthique & Intègre</p>
              </div>
            </motion.div>

            {/* Decorative accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-3xl border-2 border-[#00b1e0]/30 -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-[#00b1e0] text-xs font-bold uppercase tracking-[0.35em] mb-5 block">
              Qui sommes-nous
            </span>
            <h2
              className="font-heading font-black text-4xl lg:text-5xl leading-tight mb-6"
              style={{ color: "var(--text)" }}
            >
              Une institution de <br />
              <span className="text-[#00b1e0]">Transformation</span> sociétale
            </h2>
            <div className="w-16 h-1 bg-[#B48903] rounded-full mb-8" />
            <p
              className="text-base leading-loose mb-12"
              style={{ color: "var(--text-muted)" }}
            >
              SIT est une plateforme multidimensionnelle de développement du capital humain, d’encadrement stratégique et de transformation des mentalités. Nous nous définissons comme une organisation de transformation sociale et une institution d’éducation civique.
            </p>

            <div className="space-y-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex gap-5 p-5 rounded-2xl surface-card transition-all hover:shadow-md"
                >
                  <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${v.bg} ${v.color} flex items-center justify-center`}>
                    <v.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className="font-heading font-bold text-base mb-1"
                      style={{ color: "var(--text)" }}
                    >
                      {v.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {v.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
