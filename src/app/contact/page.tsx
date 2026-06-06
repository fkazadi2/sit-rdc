"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, Globe } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#ffdf00] from-80% to-[#eda900] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/contact-hero.jpg" 
            alt="Decoration" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-16 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <Breadcrumb />
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#000d48]/60 text-xs font-bold uppercase tracking-[0.4em] mb-4 block"
          >
            S'engager avec nous
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-black text-4xl lg:text-7xl text-[#000d48] mb-6"
          >
            Contactez <span className="text-white">SIT RDC</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#000d48]/70 max-w-2xl mx-auto text-lg"
          >
            Une question ? Un projet ? Entrez dans le cercle des bâtisseurs et participez à la transformation de notre nation.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="font-heading font-black text-3xl mb-8 text-[#000d48]">
                  Nos Coordonnées
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Venez nous rencontrer à notre siège social à Kinshasa ou contactez-nous via les canaux ci-dessous.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-[#00b1e0]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#00b1e0]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Siège Social</h4>
                    <p className="text-slate-500">
                      Numéro 11, avenue Kato <br />
                      Kinshasa - Lingwala, RD Congo
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-[#ffdf00]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#eda900]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Email</h4>
                    <p className="text-slate-500">contact@sitrdc.org</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-[#000d48]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#000d48]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Téléphone</h4>
                    <p className="text-slate-500">+243 000 000 000</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-5 h-5 text-[#ffdf00]" />
                  <span className="font-bold text-sm tracking-widest uppercase">Disponibilité</span>
                </div>
                <p className="text-slate-500 text-sm">
                  Lundi — Vendredi : 08:30 – 17:30 <br />
                  Samedi : 09:00 – 13:00
                </p>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#000d48] p-8 lg:p-12 rounded-[3rem] shadow-2xl shadow-[#000d48]/30"
            >
              <h3 className="font-heading font-bold text-2xl text-white mb-8">
                Envoyez un <span className="text-[#ffdf00]">Message</span>
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/60 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Nom complet</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#00b1e0] transition-all" placeholder="Jean Dupont" />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#00b1e0] transition-all" placeholder="jean@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-white/60 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Sujet</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-[#00b1e0] transition-all">
                    <option className="bg-[#000d48]">Information Générale</option>
                    <option className="bg-[#000d48]">Partenariat</option>
                    <option className="bg-[#000d48]">Nous rejoindre (Élites)</option>
                    <option className="bg-[#000d48]">Presse & Médias</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/60 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Votre Message</label>
                  <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#00b1e0] transition-all resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                </div>

                <button type="submit" className="w-full btn-yellow py-5 flex items-center justify-center gap-3 text-lg">
                  Envoyer ma demande
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Map Section */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#00b1e0] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
              Présence Géographique
            </span>
            <h2 className="font-heading font-black text-3xl text-[#000d48]">
              Nous trouver à <span className="text-[#00b1e0]">Kinshasa</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-[#000d48]/10"
          >
            {/* Overlay badge */}
            <div className="absolute top-6 left-6 z-10 bg-[#000d48] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#ffdf00]" />
              <div>
                <p className="font-heading font-bold text-sm">Siège Social SIT</p>
                <p className="text-white/60 text-xs">Av. Kato Nº11, Lingwala, Kinshasa</p>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.42773523449!2d15.306397!3d-4.319009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a330a30ccfcb7%3A0xb7b994c7a4741e36!2sLingwala%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1710000000000!5m2!1sfr!2scd"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation SIT RDC"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
