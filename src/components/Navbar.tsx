"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Users, ShieldCheck, Zap, Heart, Video, Target, Rocket, User, BookOpen, Newspaper, Mic2, Image as ImageIcon } from "lucide-react";

const coordinations = [
  { label: "Leaders Religieux (CLR)", href: "/coordinations/clr", image: "/hero-image.jpg", icon: Users },
  { label: "Élites de la République (CER)", href: "/coordinations/cer", image: "/slide-1.jpg", icon: ShieldCheck },
  { label: "Valeurs & Mentalité (VMD)", href: "/coordinations/vmd", image: "/slide-2.jpg", icon: Zap },
  { label: "Œuvres Caritatives (COC)", href: "/coordinations/coc", image: "/slide-3.jpg", icon: Heart },
  { label: "Communication & Multimédia (CCM)", href: "/coordinations/ccm", image: "/about-image.jpg", icon: Video },
];

const aboutSublinks = [
  { label: "Notre Équipe", href: "/team", image: "/past-jc.jpg", icon: Users },
  { label: "Identité SIT", href: "/about/identite", image: "/about-visual.jpg", icon: Target },
  { label: "Notre Mission", href: "/about/mission", image: "/slide-1.jpg", icon: Rocket },
  { label: "Le Fondateur", href: "/about/fondateur", image: "/past-jc.jpg", icon: User },
];

const mediaSublinks = [
  { label: "Édition & Publications", href: "/medias/publications", image: "/about-image.jpg", icon: BookOpen },
  { label: "Vidéos & Documentaires", href: "/medias/videos", image: "/slide-2.jpg", icon: Video },
  { label: "Actualités SIT", href: "/medias/actualites", image: "/hero-image.jpg", icon: Newspaper },
  { label: "Photothèque", href: "/medias/phototheque", image: "/images-présentation-sit/_WSL7038.jpg", icon: ImageIcon },
  { label: "Podcasts & Radio", href: "/medias/podcasts", image: "/slide-3.jpg", icon: Mic2 },
];

const navLinks = [
  { label: "À propos", href: "/about", hasDropdown: true, sublinks: aboutSublinks },
  { label: "Coordinations", href: "/coordinations", hasDropdown: true, sublinks: coordinations },
  { label: "Médias", href: "/medias", hasDropdown: true, sublinks: mediaSublinks },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<any>(null);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || !isHome
          ? "bg-[#000d48]/95 backdrop-blur-lg shadow-lg shadow-black/30 py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group relative -my-4 translate-y-2">
          <div className="relative h-20 w-20 flex-shrink-0">
            <div className="absolute inset-0 bg-white rounded-full p-1 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] border-4 border-white">
              <img
                src="/logo-sit.png"
                alt="SIT RDC Logo"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center pt-1">
            <div className="text-white font-heading font-black text-[10.5px] leading-[1.2] uppercase tracking-[0.1em]">
              Services for Impact<br />
              And Transformation
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setHoveredLink(null);
                }}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors py-4 relative group ${pathname.startsWith(link.href) || activeDropdown === link.label ? "text-[#ffdf00]" : "text-white/80"}`}
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180" : ""}`}
                  />
                  {/* Underline */}
                  <motion.div
                    className="absolute bottom-3 left-0 right-0 h-0.5 bg-[#ffdf00] origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: pathname.startsWith(link.href) || activeDropdown === link.label ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
                <AnimatePresence>
                  {activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[540px] bg-white border border-slate-200 rounded-[2rem] shadow-2xl overflow-hidden"
                    >
                      <div className="flex">
                        <div className="flex-grow p-6 space-y-0.5">
                          {link.sublinks?.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onMouseEnter={() => setHoveredLink(sub)}
                              className={`flex items-center gap-3 px-3 py-2.5 text-xs rounded-xl transition-all duration-200 font-medium ${pathname === sub.href ? "bg-[#ffdf00]/10 text-[#000d48]" : "text-slate-600 hover:text-[#000d48] hover:bg-slate-50"}`}
                            >
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${pathname === sub.href ? "bg-[#ffdf00] text-[#000d48]" : "bg-slate-100 text-slate-400 group-hover:bg-[#ffdf00] group-hover:text-[#000d48]"}`}>
                                <sub.icon className="w-3.5 h-3.5" />
                              </div>
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                        <div className="w-[200px] shrink-0 relative bg-slate-100">
                          {hoveredLink?.image || link.sublinks?.[0]?.image ? (
                            <motion.div
                              key={hoveredLink?.image || link.sublinks?.[0]?.image}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="absolute inset-0"
                            >
                              <img
                                src={hoveredLink?.image || link.sublinks?.[0]?.image}
                                alt="Preview"
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#000d48]/60 to-transparent" />
                            </motion.div>
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                              <span className="text-[10px] text-slate-300 uppercase tracking-widest font-black italic">
                                SIT RD CONGO
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group py-4 ${pathname === link.href ? "text-[#ffdf00]" : "text-white/80 hover:text-[#ffdf00]"}`}
              >
                {link.label}
                {/* Underline */}
                <motion.div
                  className="absolute bottom-3 left-0 right-0 h-0.5 bg-[#ffdf00] origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: pathname === link.href ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            )
          )}
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/join"
            className="bg-[#00b1e0] text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#ffdf00] hover:text-[#000d48] transition-all duration-300 shadow-lg shadow-[#00b1e0]/20"
          >
            Nous rejoindre
          </Link>
        </div>

        {/* Mobile burger */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#000d48]/98 border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <React.Fragment key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-white/80 hover:text-[#00b1e0] py-3 border-b border-white/5 text-base font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.hasDropdown &&
                    link.sublinks?.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-white/50 hover:text-white/80 py-2 pl-4 text-sm transition-colors"
                      >
                        — {sub.label}
                      </Link>
                    ))}
                </React.Fragment>
              ))}
              <Link
                href="/join"
                onClick={() => setMobileOpen(false)}
                className="mt-4 btn-yellow text-center"
              >
                Nous rejoindre
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
