"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#000d48] pt-24 pb-10 border-t border-[#00b1e0]/10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-8 group">
              <div className="relative h-20 w-20 flex-shrink-0">
                <div className="w-full h-full bg-white rounded-full p-1 overflow-hidden border-2 border-white">
                  <img
                    src="/logo-sit.png"
                    alt="SIT RDC Logo"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-white font-heading font-black text-[10.5px] leading-[1.2] uppercase tracking-[0.1em]">
                  Services for Impact<br />
                  And Transformation
                </div>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Une plateforme multidimensionnelle dédiée à l'encadrement, la transformation sociétale et le leadership éthique en RDC.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#00b1e0] hover:border-[#00b1e0]/40 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-widest mb-7">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["À propos", "Notre Équipe", "Coordinations", "Médias", "Contact"].map((lbl) => {
                const href = lbl === "Notre Équipe" ? "/team" : `/${lbl.toLowerCase().replace(/ /g, "-")}`;
                return (
                  <li key={lbl}>
                    <Link
                      href={href}
                      className="group flex items-center gap-2 text-sm text-white/50 hover:text-[#00b1e0] transition-colors"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {lbl}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-widest mb-7">
              Contact
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-[#00b1e0] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/50 leading-relaxed">
                  Avenue Kato Nº 11, Commune de Lingwala, Kinshasa, RDC
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-[#00b1e0] flex-shrink-0" />
                <span className="text-sm text-white/50">+243 820 623 348</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-[#00b1e0] flex-shrink-0" />
                <span className="text-sm text-white/50">contact@sitrdc.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-widest mb-7">
              Newsletter
            </h4>
            <p className="text-sm text-white/50 mb-6 leading-relaxed">
              Recevez nos actualités et opportunités directement dans votre boîte mail.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00b1e0]/50 transition-all"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#ffdf00] text-[#000d48] px-5 rounded-full text-xs font-black hover:bg-[#eda900] transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © 2026 SIT RDC — Services for Impact and Transformation. Tous droits réservés.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Confidentialité
            </Link>
            <Link href="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
