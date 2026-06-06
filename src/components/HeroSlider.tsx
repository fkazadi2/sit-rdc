"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    tag: "Services for Impact and Transformation",
    title: "Services for",
    highlight: "Impact",
    titleEnd: "and Transformation",
    subtitle: "Former – Transformer – Impacter.",
    image: "/slide-1.jpg",
    imageAlt: "Leadership et Transformation — SIT RDC",
    cta: "Découvrir la vision",
    ctaHref: "/about",
    stats: [
      { value: "5", label: "Coordinations" },
      { value: "RDC", label: "Transformation" },
      { value: "3", label: "Piliers d'action" },
    ],
    overlay: "from-[#000d48]/95 via-[#000d48]/70 to-transparent",
  },
  {
    id: 2,
    tag: "L'Urgence Nationale",
    title: "Le défi des",
    highlight: "Valeurs",
    titleEnd: "et du Leadership",
    subtitle:
      "Le véritable défi est celui du leadership et de la culture institutionnelle. Reconstruire une société solide.",
    image: "/slide-2.jpg",
    imageAlt: "Encadrement des Élites — SIT RDC",
    cta: "Notre Approche",
    ctaHref: "/about#positionnement",
    stats: [
      { value: "Éthique", label: "Standard" },
      { value: "Valeurs", label: "Moteur" },
      { value: "Action", label: "Impact" },
    ],
    overlay: "from-[#000d48]/95 via-[#001280]/70 to-transparent",
  },
  {
    id: 3,
    tag: "Transformation Sociétale",
    title: "Entrez dans le",
    highlight: "Cercle",
    titleEnd: "des Bâtisseurs",
    subtitle:
      "Agissons par valeurs et non par la force de loi. Bâtir une société fondée sur la dignité et l'excellence.",
    image: "/slide-2.jpg",
    imageAlt: "Impact Communautaire — SIT RDC",
    cta: "Nous rejoindre",
    ctaHref: "/contact",
    stats: [
      { value: "SIT", label: "Mouvement" },
      { value: "Elite", label: "Pépinière" },
      { value: "Unité", label: "Socle" },
    ],
    overlay: "from-[#000d48]/95 via-[#000d48]/60 to-transparent",
  },
];

const AUTO_ADVANCE_MS = 5000;

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index: number, dir: number) => {
      setDirection(dir);
      setCurrent(index);
    },
    []
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1);
  }, [current, goTo]);

  const prev = () => {
    goTo((current - 1 + slides.length) % slides.length, -1);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [paused, next]);

  const slide = slides[current];

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 60 : -60,
    }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -60 : 60,
    }),
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#000d48]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Image with overlay */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={`bg-${slide.id}`}
          custom={direction}
          variants={{
            enter: (dir: number) => ({ opacity: 0, scale: 1.1, x: dir > 0 ? 10 : -10 }),
            center: { opacity: 1, scale: 1, x: 0 },
            exit: (dir: number) => ({ opacity: 0, scale: 1.05, x: dir > 0 ? -10 : 10 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ 
            opacity: { duration: 1.2, ease: "linear" },
            scale: { duration: AUTO_ADVANCE_MS / 1000 + 1, ease: "linear" },
            x: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
          }}
          className="absolute inset-0"
        >
          <motion.div
            animate={{ scale: [1, 1.1] }}
            transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          {/* Multi-layer overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000d48]/80 via-transparent to-[#000d48]/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 py-32 lg:py-0">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={`content-${slide.id}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="max-w-2xl"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="w-8 h-px bg-[#00b1e0]" />
              <span className="text-[#00b1e0] text-xs font-bold uppercase tracking-[0.3em]">
                {slide.tag}
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading font-black text-5xl lg:text-7xl text-white leading-[1.05] mb-8">
              {slide.title}{" "}
              <span className="text-[#ffdf00]">{slide.highlight}</span>{" "}
              {slide.titleEnd}
            </h1>

            {/* Subtitle */}
            <p className="text-white/70 text-lg lg:text-xl leading-relaxed mb-12 max-w-xl">
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Link href={slide.ctaHref} className="btn-yellow text-base">
                {slide.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="btn-cyan text-base">
                <Phone className="w-5 h-5" />
                Contactez-nous
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-10">
              {slide.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[#ffdf00] font-heading font-black text-2xl lg:text-3xl">
                    {stat.value}
                  </span>
                  <span className="text-white/50 text-xs uppercase tracking-widest font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#00b1e0] hover:border-[#00b1e0] transition-all duration-300"
          aria-label="Précédent"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#00b1e0] hover:border-[#00b1e0] transition-all duration-300"
          aria-label="Suivant"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bullet Pagination */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? "w-10 h-2.5 bg-[#ffdf00]"
                : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-12 right-8 z-20 hidden lg:flex items-center gap-2 text-white/40 text-sm font-mono">
        <span className="text-white font-bold">{String(current + 1).padStart(2, "0")}</span>
        <span>/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>

      {/* Progress bar */}
      {!paused && (
        <motion.div
          key={`progress-${current}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }}
          className="absolute bottom-0 left-0 h-0.5 bg-[#00b1e0] origin-left z-20 w-full"
        />
      )}
    </section>
  );
};

export default HeroSlider;
