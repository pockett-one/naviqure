"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { BRAND_COLORS } from "@/lib/constants";

export function HeroSection() {
    const [hoveredCTA, setHoveredCTA] = useState<string | null>(null);
    return (
        <section className="relative overflow-hidden bg-white pt-32 pb-48 lg:pt-40 lg:pb-64" id="hero">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-secondary/40 z-0" />

            {/* Dot Pattern Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] opacity-[0.08] [background-size:24px_24px] z-0" />

            {/* Watermark */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0 overflow-hidden w-full flex justify-center">
                <span className="text-[10rem] md:text-[18rem] lg:text-[22rem] font-bold text-primary/5 whitespace-nowrap tracking-tight font-heading leading-none">
                    NAVIQURE
                </span>
            </div>

            {/* Wave Background (Bottom) - Intertwined Layers (Static & Tall) */}
            <div className="absolute bottom-0 left-0 right-0 z-0 overflow-hidden h-[960px] pointer-events-none">
                <svg viewBox="0 0 1440 320" className="w-full h-full block align-bottom" preserveAspectRatio="none">
                    {/* Layer 1: Back Wave */}
                    <path
                        fill={BRAND_COLORS.secondary}
                        fillOpacity="0.3"
                        d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                    {/* Layer 2: Middle Wave */}
                    <path
                        fill={BRAND_COLORS.secondary}
                        fillOpacity="0.5"
                        d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                    {/* Layer 3: Front Wave (Boldest) */}
                    <path
                        fill={BRAND_COLORS.secondary}
                        fillOpacity="1"
                        d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center text-center lg:text-left"
                    >
                        <div className="inline-flex items-center rounded-full border border-primary/10 bg-white/60 backdrop-blur-sm px-3 py-1 text-sm font-medium text-primary mb-6 mx-auto lg:mx-0 w-fit shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-primary/40 mr-2 animate-pulse"></span>
                            The Future of Patient Empowerment
                        </div>

                        <h1 className="text-4xl font-heading font-bold tracking-tight sm:text-5xl lg:text-5xl xl:text-6xl mb-6 heading-gradient pb-2">
                            Building the Future of AI Powered Chronic Healthcare in India
                        </h1>

                        <p className="mx-auto lg:mx-0 max-w-xl text-xl font-medium text-primary/80 mb-4 leading-relaxed">
                            A patient-first platform for chronic care, where intelligence meets empathy, powered by secure AI and evidence-based guidance.
                        </p>

                        <p className="mx-auto lg:mx-0 max-w-2xl text-lg text-muted-foreground mb-8 leading-relaxed">
                            NaviQure is transforming India's fragmented health data into actionable insights through content standardization, responsible sharing, and AI-driven intelligence powered by foundation models — creating a transparent, interoperable, and trustworthy chronic care ecosystem.
                        </p>

                        <div className="flex flex-row items-start gap-4 justify-center lg:justify-start min-h-[100px]">
                            {/* Primary CTA container */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setHoveredCTA('get-started')}
                                onMouseLeave={() => setHoveredCTA(null)}
                            >
                                <Button size="lg" className={`text-lg px-8 h-14 bg-primary hover:bg-[${BRAND_COLORS.primaryHover}] shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] rounded-full w-full sm:w-auto gap-2`}>
                                    Get started <span className="material-symbols-outlined text-[1.4rem]">arrow_forward</span>
                                </Button>
                                <AnimatePresence>
                                    {hoveredCTA === 'get-started' && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 8 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="absolute top-16 left-0 right-0 lg:right-auto lg:w-max text-[13px] text-primary/80 mt-2 pointer-events-none"
                                        >
                                            Empower your health journey today
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Secondary CTA container */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setHoveredCTA('appointment')}
                                onMouseLeave={() => setHoveredCTA(null)}
                            >
                                <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-primary text-primary hover:bg-primary/5 transition-all hover:scale-[1.02] rounded-full w-full sm:w-auto font-semibold">
                                    Request Appointment
                                </Button>
                                <AnimatePresence>
                                    {hoveredCTA === 'appointment' && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 8 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="absolute top-16 left-0 right-0 lg:right-auto lg:w-48 text-[12px] text-muted-foreground mt-2 pointer-events-none leading-tight"
                                        >
                                            Start your data-driven care journey today
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start space-x-6 text-sm text-primary/60 font-medium">
                            <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[1.2rem] opacity-80">shield_locked</span> ABHA Ready</div>
                            <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[1.2rem] opacity-80">vital_signs</span> Clinical Grade</div>
                            <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[1.2rem] opacity-80">auto_awesome</span> AI Powered</div>
                        </div>
                    </motion.div>

                    {/* Visual Content: Rounded Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-[500px] lg:max-w-none flex justify-center"
                    >
                        <div className="relative w-full aspect-square max-w-[450px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-primary/10 transition-transform hover:scale-[1.02] duration-500">
                            <Image
                                src="/hero-1.jpeg"
                                alt="Healthcare Professional"
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Overlay Gradient for better integration */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
