"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-surface rounded-l-[100px] -z-10" />
            <div className="absolute top-1/4 -left-10 w-64 h-64 bg-accent/5 blur-[100px] rounded-full -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-widest mb-6">
                                Impact & Transformation
                            </span>
                            <h1 className="font-heading font-extrabold text-5xl lg:text-7xl text-primary leading-[1.1] mb-8">
                                Services for <br />
                                <span className="text-gradient-gold">Impact and</span> <br />
                                Transformation
                            </h1>
                            <p className="text-lg text-primary/70 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
                                Une plateforme multidimensionnelle dédiée à l’encadrement, la transformation sociétale, le leadership éthique et le développement humain durable.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center gap-2 group transition-all shadow-xl shadow-primary/20 hover:shadow-primary/30"
                                >
                                    Contactez-nous
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-8 py-4 border-2 border-accent text-accent rounded-full font-bold transition-all"
                                >
                                    À propos de nous
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Stats / Proof Points */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="mt-16 flex items-center justify-center lg:justify-start gap-12"
                        >
                            <div className="flex flex-col">
                                <span className="text-3xl font-heading font-extrabold text-primary">3+</span>
                                <span className="text-xs text-primary/50 uppercase tracking-widest font-bold">Coordinations</span>
                            </div>
                            <div className="h-10 w-px bg-accent/20" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-heading font-extrabold text-primary">RD Congo</span>
                                <span className="text-xs text-primary/50 uppercase tracking-widest font-bold">Ancrage Principal</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Content */}
                    <div className="flex-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative aspect-[4/5] w-full max-w-[500px] mx-auto"
                        >
                            {/* Image Frame */}
                            <div className="absolute inset-0 border-2 border-accent/20 rounded-[40px] translate-x-6 translate-y-6" />
                            <div className="relative h-full w-full rounded-[40px] overflow-hidden shadow-2xl">
                                <Image
                                    src="/hero-image.jpg"
                                    alt="SIT RDC Impact"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    priority
                                />

                                {/* Floating Card Overlay */}
                                <div className="absolute bottom-8 left-8 right-8 premium-glass p-6 rounded-2xl">
                                    <p className="text-sm font-medium text-primary leading-snug">
                                        "Connaissance • Caractère • Action. Notre devise pour une transformation durable."
                                    </p>
                                    <div className="mt-4 flex -space-x-2">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-surface overflow-hidden">
                                                <div className="w-full h-full bg-accent/20 flex items-center justify-center">
                                                    <span className="text-[10px] text-accent font-bold">SIT</span>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-primary flex items-center justify-center">
                                            <span className="text-[10px] text-white font-bold">+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Circle */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-10 -right-10 w-32 h-32 border-dashed border border-accent/40 rounded-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
