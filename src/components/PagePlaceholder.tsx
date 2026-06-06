"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PagePlaceholderProps {
  title: string;
  subtitle: string;
}

export default function PagePlaceholder({ title, subtitle }: PagePlaceholderProps) {
  return (
    <main className="min-h-screen flex flex-col pt-32">
      <Navbar />
      <div className="flex-grow container mx-auto px-6 lg:px-16 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <span className="text-[#00b1e0] text-xs font-bold uppercase tracking-[0.35em] mb-5 block">
            Page en construction
          </span>
          <h1 className="font-heading font-black text-5xl lg:text-7xl mb-8" style={{ color: "var(--text)" }}>
            {title}
          </h1>
          <div className="w-20 h-1 bg-[#ffdf00] mx-auto rounded-full mb-10" />
          <p className="text-xl leading-relaxed mb-12" style={{ color: "var(--text-muted)" }}>
            {subtitle}
          </p>
          <Link href="/" className="btn-yellow inline-flex items-center gap-3">
            <ArrowLeft className="w-5 h-5" />
            Retour à l'accueil
          </Link>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
