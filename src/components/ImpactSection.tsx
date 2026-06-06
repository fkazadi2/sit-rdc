"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Globe, Mic, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Leaders Religieux (CLR)",
    description: "Former les consciences pour transformer les communautés et consolider les valeurs morales.",
    accentColor: "#00b1e0",
    borderColor: "border-t-[#00b1e0]",
    bgIcon: "bg-[#00b1e0]/10 text-[#00b1e0]",
  },
  {
    icon: Target,
    title: "Élites de la Rép. (CER)",
    description: "Bâtir une nouvelle génération de décideurs exemplaires, imprégnés d’éthique et de performance.",
    accentColor: "#ffdf00",
    borderColor: "border-t-[#ffdf00]",
    bgIcon: "bg-[#ffdf00]/10 text-[#eda900]",
  },
  {
    icon: Globe,
    title: "Valeurs & Mentalité (VMD)",
    description: "Transformer la culture pour sécuriser l’avenir via la famille, la religion et l’État.",
    accentColor: "#eda900",
    borderColor: "border-t-[#eda900]",
    bgIcon: "bg-[#eda900]/10 text-[#eda900]",
  },
  {
    icon: ShieldCheck,
    title: "Œuvres Caritatives (COC)",
    description: "Organiser la solidarité avec rigueur et transparence pour renforcer la cohésion nationale.",
    accentColor: "#7c4e24",
    borderColor: "border-t-[#7c4e24]",
    bgIcon: "bg-[#7c4e24]/10 text-[#7c4e24]",
  },
  {
    icon: Mic,
    title: "Com. & Multimédia (CCM)",
    description: "Maîtriser le récit pour éduquer, sensibiliser et amplifier l'impact de la vision SIT.",
    accentColor: "#00b1e0",
    borderColor: "border-t-[#00b1e0]",
    bgIcon: "bg-[#00b1e0]/10 text-[#00b1e0]",
  },
];

const ImpactSection = () => {
  return (
    <section
      id="impact"
      className="py-28 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[#00b1e0] text-xs font-bold uppercase tracking-[0.35em] mb-5"
          >
            Nos 5 coordinations d'impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-4xl lg:text-5xl mb-5 leading-tight"
            style={{ color: "var(--text)" }}
          >
            L'impact que nous créons{" "}
            <span className="text-[#B48903]">pour la société</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "64px" }}
            viewport={{ once: true }}
            className="h-1 bg-[#B48903] mx-auto rounded-full mb-6"
          />
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Une plateforme multidimensionnelle articulée autour de cinq branches complémentaires pour une transformation intégrale.
          </p>
        </div>

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-24">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group p-8 rounded-3xl border-t-4 surface-card hover:shadow-2xl transition-all duration-500 ${pillar.borderColor}`}
            >
              <div className={`w-14 h-14 rounded-2xl ${pillar.bgIcon} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon className="w-7 h-7" />
              </div>
              <h3
                className="font-heading font-bold text-lg mb-3 leading-snug"
                style={{ color: "var(--text)" }}
              >
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Motto Band */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] bg-[#000d48] p-12 text-center overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,177,224,0.15)_0%,_transparent_70%)]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00b1e0]/50 to-transparent" />

          <p className="text-[#00b1e0] text-xs font-bold uppercase tracking-[0.4em] mb-8">
            Notre Devise
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative z-10">
            {["Connaissance", "Caractère", "Action"].map((word, i) => (
              <React.Fragment key={word}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center"
                >
                  <span className="font-heading font-black text-4xl lg:text-5xl text-white">
                    {word}
                  </span>
                </motion.div>
                {i < 2 && (
                  <div className="w-2 h-2 rounded-full bg-[#ffdf00] hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
