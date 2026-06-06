"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, HeartHandshake, Star, ShieldCheck, Mic } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const coordinations = [
  {
    id: "clr",
    tag: "Spirituel",
    title: "Leaders Religieux (CLR)",
    description: "Former les consciences pour transformer les communautés et consolider les valeurs morales.",
    icon: Star,
    accent: "#00b1e0",
    features: ["Ministères", "Coaching", "Impact Social"],
    image: "/hero-image.jpg"
  },
  {
    id: "cer",
    tag: "Leadership",
    title: "Élites de la Rép. (CER)",
    description: "Bâtir une nouvelle génération de décideurs exemplaires, imprégnés d’éthique et de performance.",
    icon: GraduationCap,
    accent: "#B48903",
    features: ["Gouvernance", "Excellence", "Réseau VIP"],
    image: "/slide-1.jpg"
  },
  {
    id: "vmd",
    tag: "Valeurs",
    title: "Valeurs & Mentalité (VMD)",
    description: "Transformer la culture pour sécuriser l’avenir via la famille, la religion et l’État.",
    icon: HeartHandshake,
    accent: "#eda900",
    features: ["Mentalité", "Éducation", "Civisme"],
    image: "/slide-2.jpg"
  },
  {
    id: "coc",
    tag: "Solidarité",
    title: "Œuvres Caritatives (COC)",
    description: "Organiser la solidarité avec rigueur et transparence pour renforcer la cohésion nationale.",
    icon: ShieldCheck,
    accent: "#7c4e24",
    features: ["Philanthropie", "Bourses", "Transparence"],
    image: "/slide-3.jpg"
  },
  {
    id: "ccm",
    tag: "Communication",
    title: "Com. & Multimédia (CCM)",
    description: "Maîtriser le récit pour éduquer, sensibiliser et amplifier l'impact de la vision SIT.",
    icon: Mic,
    accent: "#00b1e0",
    features: ["Édition", "Audiovisuel", "Digitale"],
    image: "/about-image.jpg"
  },
];

const CoordinationsSection = () => {
  return (
    <section
      id="coordinations"
      className="py-28 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <span className="text-[#00b1e0] text-xs font-bold uppercase tracking-[0.35em] mb-5 block">
              Nos départements
            </span>
            <h2
              className="font-heading font-black text-4xl lg:text-5xl leading-tight"
              style={{ color: "var(--text)" }}
            >
              Nos{" "}
              <span
                className="font-normal"
                style={{ color: "transparent", WebkitTextStroke: "1.5px #00b1e0" }}
              >
                Coordinations
              </span>
            </h2>
          </div>
          <Link
            href="/coordinations"
            className="inline-flex items-center gap-2 text-[#00b1e0] font-bold text-sm hover:gap-4 transition-all"
          >
            Voir toutes les coordinations
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {coordinations.map((coord, i) => (
            <motion.div
              key={coord.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative surface-card rounded-3xl p-8 flex flex-col hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Colored line on top */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                style={{ backgroundColor: coord.accent }}
              />

              {/* Image Preview */}
              <div className="relative h-48 -mx-8 -mt-8 mb-8 overflow-hidden">
                <Image 
                  src={coord.image} 
                  alt={coord.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                
                {/* Tag Overlay */}
                <div className="absolute bottom-4 left-6">
                  <span
                    className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md bg-white/20 border border-white/20 text-white shadow-lg"
                  >
                    {coord.tag}
                  </span>
                </div>
              </div>

              {/* Icon + Title */}
              <div className="flex items-start gap-5 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-500"
                  style={{ backgroundColor: `${coord.accent}15` }}
                >
                  <coord.icon
                    className="w-7 h-7 transition-colors duration-300"
                    style={{ color: coord.accent }}
                  />
                </div>
                <h3
                  className="font-heading font-bold text-xl leading-snug mt-2"
                  style={{ color: "var(--text)" }}
                >
                  {coord.title}
                </h3>
              </div>

              <p
                className="text-sm leading-relaxed flex-grow mb-8"
                style={{ color: "var(--text-muted)" }}
              >
                {coord.description}
              </p>

              {/* Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {coord.features.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border"
                    style={{
                      color: coord.accent,
                      borderColor: `${coord.accent}40`,
                      backgroundColor: `${coord.accent}08`,
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link
                href={`/coordinations/${coord.id}`}
                className="inline-flex items-center gap-2 text-sm font-bold transition-all"
                style={{ color: coord.accent }}
              >
                En savoir plus
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center border transition-all"
                  style={{ borderColor: `${coord.accent}40` }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoordinationsSection;
