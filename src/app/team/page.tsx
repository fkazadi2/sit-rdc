"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { User, ShieldCheck, Mail, MapPin, Phone } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const teamMembers = [
  {
    name: "Direction Générale",
    role: "CEO du SIT",
    bio: "Stratégie du capital humain et vision institutionnelle.",
    image: "/user-placeholder.jpg"
  },
  {
    name: "Coordonnateur CER",
    role: "Responsable des Élites",
    bio: "Experts en gouvernance et leadership éthique.",
    image: "/user-placeholder.jpg"
  },
  {
    name: "Coordonnateur CLR",
    role: "Responsable Leaders Religieux",
    bio: "Spécialiste de l'accompagnement des serviteurs de Dieu.",
    image: "/user-placeholder.jpg"
  },
  {
    name: "Responsable VMD",
    role: "Valeurs & Développement",
    bio: "Expert en transformation des mentalités et éducation civique.",
    image: "/user-placeholder.jpg"
  },
  {
    name: "Responsable COC",
    role: "Œuvres Caritatives",
    bio: "Gestionnaire de projets philanthropiques et sociaux.",
    image: "/user-placeholder.jpg"
  },
  {
    name: "Direction CCM",
    role: "Com. & Multimédia",
    bio: "Stratège en communication institutionnelle et pédagogique.",
    image: "/user-placeholder.jpg"
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#ffdf00] from-80% to-[#eda900] py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/team-hero.jpg" 
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
            SIT RD CONGO
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-black text-4xl lg:text-6xl text-[#000d48] mb-6"
          >
            Notre <span className="text-white">équipe</span> de bâtisseurs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#000d48]/70 max-w-2xl mx-auto text-lg"
          >
            Une force unifiée autour d'une mission commune : transformer les mentalités et bâtir l'excellence institutionnelle en RDC.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-slate-50 transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Photo Section with Zoom & Bio Overlay */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Bio Overlay (Transitions in on hover) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#000d48]/90 via-[#000d48]/40 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <p className="text-white text-lg font-medium leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </motion.div>
                </div>

                {/* Info Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-heading font-black text-2xl mb-2 text-[#000d48] leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-[#7c4e24] font-bold text-lg mb-8">
                    {member.role}
                  </p>
                  
                  <div className="mt-auto flex justify-end">
                    <button className="flex items-center gap-2 text-[#7c4e24] font-bold hover:gap-4 transition-all group/link">
                      Voir le profil
                      <span className="text-xl">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
