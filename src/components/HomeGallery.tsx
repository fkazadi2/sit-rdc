"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Camera, ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const previewPhotos = [
  { src: "_WSL7038.jpg", alt: "SIT Présentation 1", span: "row-span-2 col-span-2" },
  { src: "_WSL7503.jpg", alt: "SIT Présentation 2", span: "col-span-1" },
  { src: "_WSL7322.jpg", alt: "SIT Présentation 3", span: "col-span-1" },
  { src: "_WSL7070.jpg", alt: "SIT Présentation 4", span: "col-span-2" },
];

const HomeGallery = () => {
  const basePath = "/images-présentation-sit/";

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#00b1e0] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
              SIT En Action
            </span>
            <h2 className="font-heading font-black text-4xl lg:text-5xl text-[#000d48] leading-tight mb-6">
              L'Impact en <span className="text-[#B48903]">Images</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Revivez les moments forts de la présentation officielle du SIT à Kinshasa en Janvier 2025. Une immersion au cœur de notre mission de transformation.
            </p>
          </div>
          <Link
            href="/medias/phototheque"
            className="group inline-flex items-center gap-3 bg-[#000d48] text-white px-8 py-4 rounded-full font-bold hover:bg-[#ffdf00] hover:text-[#000d48] transition-all duration-300 shadow-xl shadow-black/10"
          >
            Voir toute la photothèque
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 h-[600px]">
          {previewPhotos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative overflow-hidden rounded-[2.5rem] group ${photo.span}`}
            >
              <Image
                src={`${basePath}${photo.src}`}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000d48]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 scale-50 group-hover:scale-100 transition-transform duration-500">
                    <Camera className="text-white w-6 h-6" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
