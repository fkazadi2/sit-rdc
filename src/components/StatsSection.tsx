"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Layers, Lightbulb, Building2, Heart } from "lucide-react";

const stats = [
  {
    value: "5",
    label: "Branches complémentaires au service de la transformation",
    icon: Layers,
  },
  {
    value: "15+",
    label: "Initiatives actives pour l'impact sociétal",
    icon: Lightbulb,
  },
  {
    value: "30+",
    label: "Organisations et institutions partenaires",
    icon: Building2,
  },
  {
    value: "100%",
    label: "Dévouement total à notre mission de transformation",
    icon: Heart,
  },
];

const StatsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/50">
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none">
        <Image 
          src="/bg-dots.png" 
          alt="Dots Pattern" 
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-black text-4xl lg:text-5xl text-[#000d48] leading-tight">
            L'impact que nous créons <br />
            <span className="text-[#B48903]">pour la société</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-[#ffdf00]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#ffdf00] transition-colors duration-500">
                <stat.icon className="w-8 h-8 text-[#000d48]" />
              </div>
              <span className="font-heading font-black text-5xl text-[#000d48] mb-4 block">
                {stat.value}
              </span>
              <p className="text-slate-500 font-medium leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
