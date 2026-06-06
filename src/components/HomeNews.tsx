"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const newsItems = [
  {
    title: "Le SIT renforce son action dans le Haut-Katanga",
    date: "12 Mars 2024",
    image: "/slide-1.jpg",
    category: "Coordination"
  },
  {
    title: "Transformation des mentalités : Nouveau cycle de formation",
    date: "10 Mars 2024",
    image: "/slide-2.jpg",
    category: "Valeurs"
  },
  {
    title: "Dr. Jean Claude NTUMBA au sommet Africain du Leadership",
    date: "05 Mars 2024",
    image: "/slide-3.jpg",
    category: "International"
  },
  {
    title: "Impact du SIT sur le terrain : RDC",
    date: "01 Mars 2024",
    image: "/about-image.jpg",
    category: "Documentaire"
  }
];

const HomeNews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#00b1e0] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
              Actualités SIT
            </span>
            <h2 className="font-heading font-black text-4xl text-[#000d48]">
              Derniers <span className="text-[#B48903]">Articles</span>
            </h2>
          </motion.div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <button 
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-[#000d48] hover:bg-[#ffdf00] hover:border-[#ffdf00] transition-all"
                aria-label="Précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-[#000d48] hover:bg-[#ffdf00] hover:border-[#ffdf00] transition-all"
                aria-label="Suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <Link href="/medias/actualites" className="flex items-center gap-2 font-black text-sm text-[#000d48] hover:gap-4 transition-all group">
                Voir toute l'actualité
                <ArrowRight className="w-5 h-5 text-[#ffdf00]" />
              </Link>
            </motion.div>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {newsItems.map((item, i) => (
            <div
              key={i}
              className="group cursor-pointer w-[300px] md:w-[400px] shrink-0 snap-start"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-lg shadow-black/5">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#ffdf00] text-[#000d48] text-[9px] font-black uppercase tracking-widest rounded-md">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-3">
                <Calendar className="w-3.5 h-3.5" />
                {item.date}
              </div>
              <h3 className="font-heading font-bold text-xl text-[#000d48] group-hover:text-[#00b1e0] transition-colors leading-tight line-clamp-2">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeNews;
