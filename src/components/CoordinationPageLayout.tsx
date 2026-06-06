"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

interface CoordinationPageProps {
  id: string;
  tag: string;
  title: string;
  mission: string;
  description: string;
  axesTitle?: string;
  axes?: string[];
  offersTitle?: string;
  offers?: string[];
  closing: string;
  icon: LucideIcon;
  color: string;
}

export default function CoordinationPageLayout({
  id,
  tag,
  title,
  mission,
  description,
  axesTitle,
  axes,
  offersTitle,
  offers,
  closing,
  icon: Icon,
  color,
}: CoordinationPageProps) {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#ffdf00] from-80% to-[#eda900] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/hero-pattern.jpg" 
            alt="Decoration" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <Breadcrumb />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#000d48]/60 text-xs font-bold uppercase tracking-[0.4em] mb-6 block"
          >
            SIT COORDINATIONS / {id}
          </motion.span>
          <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`w-24 h-24 rounded-3xl flex items-center justify-center shadow-2xl`}
              style={{ backgroundColor: "#000d48" }}
            >
              <Icon className="w-12 h-12" style={{ color: color }} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="font-heading font-black text-4xl lg:text-6xl text-[#000d48] mb-2 leading-tight">
                {title.split(' ').map((word, i) => (
                  <span key={i} className={i === title.split(' ').length - 1 ? "text-white" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="text-[#000d48]/70 font-heading font-bold text-lg lg:text-xl tracking-widest uppercase">
                {tag}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {/* Intro & Mission */}
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="text-xl font-medium text-[#000d48] mb-8">
                  {description}
                </p>
                
                <div className="bg-slate-50 p-8 lg:p-12 rounded-[2.5rem] border-l-8" style={{ borderColor: color }}>
                  <h3 className="font-heading font-black text-2xl text-[#000d48] mb-6 tracking-wider">Mission</h3>
                  <p className="text-lg font-medium leading-relaxed">
                    "{mission}"
                  </p>
                </div>
              </div>

              {/* Strategy/Axes */}
              {axes && (
                <div>
                  <h3 className="font-heading font-black text-2xl mb-8 text-[#000d48]">
                    {axesTitle || "Axes Stratégiques"}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {axes.map((axis, i) => (
                      <div key={i} className="flex gap-4 p-6 bg-white border border-slate-100 rounded-2xl shadow-lg">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-white bg-[#00b1e0]">
                          {i + 1}
                        </div>
                        <p className="text-slate-600 font-medium">
                          {axis}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Offers/Interventions */}
              {offers && (
                <div className="bg-[#000d48] p-10 lg:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
                  <h3 className="font-heading font-black text-2xl mb-10 text-[#ffdf00]">
                    {offersTitle || "Nos Offres"}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {offers.map((offer, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#ffdf00] mt-2 shrink-0" />
                        <p className="text-lg font-medium opacity-90">{offer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Closing */}
              <div className="text-center pt-16">
                <div className="w-24 h-1 bg-[#B48903] mx-auto rounded-full mb-10" />
                <p className="text-2xl font-heading font-bold text-[#000d48] mb-8">
                  {closing}
                </p>
                <Link href="/contact" className="btn-cyan px-8 py-4 inline-flex items-center gap-3">
                  Nous contacter
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
