"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { X, ZoomIn, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

const photos = [
  "_WSL6998.jpg", "_WSL7002.jpg", "_WSL7007.jpg", "_WSL7034.jpg", "_WSL7038.jpg",
  "_WSL7070.jpg", "_WSL7072.jpg", "_WSL7183.jpg", "_WSL7216.jpg", "_WSL7223.jpg",
  "_WSL7260.jpg", "_WSL7261.jpg", "_WSL7262.jpg", "_WSL7271.jpg", "_WSL7322.jpg",
  "_WSL7349.jpg", "_WSL7436.jpg", "_WSL7438.jpg", "_WSL7479.jpg", "_WSL7497.jpg",
  "_WSL7503.jpg", "_WSL7511.jpg", "_WSL7528.jpg", "_WSL7532.jpg", "_WSL7548.jpg",
  "_WSL7552.jpg", "_WSL7553.jpg", "_WSL7559.jpg", "_WSL7560.jpg", "_WSL7570.jpg",
  "_WSL7572.jpg", "_WSL7573.jpg", "_WSL7575.jpg", "_WSL7582.jpg", "_WSL7585.jpg",
  "_WSL7587.jpg", "_WSL7593.jpg", "_WSL7598.jpg", "_WSL7600.jpg", "_WSL7605.jpg",
  "_WSL7606.jpg", "_WSL7607.jpg", "_WSL7612.jpg", "_WSL7613.jpg", "_WSL7619.jpg",
  "_WSL7630.jpg"
];

export default function PhotothequePage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const basePath = "/images-présentation-sit/";

  return (
    <main className="min-h-screen pt-16">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#ffdf00] from-80% to-[#eda900] py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={`${basePath}${photos[4]}`}
            alt="Decoration" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex justify-center mb-8">
            <Breadcrumb />
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#000d48]/60 text-xs font-bold uppercase tracking-[0.4em] mb-4 block"
          >
            MÉDIATHÈQUE / PHOTOTHÈQUE
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-black text-4xl lg:text-6xl text-[#000d48] mb-6 leading-tight"
          >
            Présentation SIT <br />
            <span className="text-white">Kinshasa 2025</span>
          </motion.h1>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-md rounded-full text-[#000d48] font-bold text-sm">
              <Calendar className="w-4 h-4" />
              Janvier 2025
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-md rounded-full text-[#000d48] font-bold text-sm">
              <MapPin className="w-4 h-4" />
              Kinshasa, RDC
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={photo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 10) * 0.05 }}
                className="group relative aspect-square rounded-[2rem] overflow-hidden cursor-pointer bg-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500"
                onClick={() => setSelectedPhoto(photo)}
              >
                <Image
                  src={`${basePath}${photo}`}
                  alt={`SIT Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#000d48]/0 group-hover:bg-[#000d48]/40 transition-colors duration-500 flex items-center justify-center">
                  <ZoomIn className="text-white w-10 h-10 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#000d48]/95 backdrop-blur-xl flex items-center justify-center p-4 lg:p-12"
            onClick={() => setSelectedPhoto(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-[#ffdf00] transition-colors p-2"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-10 h-10" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`${basePath}${selectedPhoto}`}
                alt="Selected Gallery Event"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
