"use client";

import { COMPLIANCE_FEATURES, BRAND_COLORS } from "@/lib/constants";
import { motion } from "framer-motion";

export function ComplianceSection() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-secondary/20 relative border-t border-primary/10" id="trust">

            {/* Texture wrapper with clipping */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute inset-0 opacity-[0.01]"
                    style={{
                        backgroundImage: `linear-gradient(to right, ${BRAND_COLORS.primary} 1px, transparent 1px), linear-gradient(to bottom, ${BRAND_COLORS.primary} 1px, transparent 1px)`,
                        backgroundSize: '32px 32px',
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-wide">Security & Compliance</h2>
                    <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold font-heading heading-gradient pb-2">
                        Trust Architecture
                    </h3>
                    <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                        Enterprise-grade security protocols ensuring your health data remains private, secure, and under your absolute control.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-stretch">

                    <div className="w-full lg:w-1/3 p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-[1.5rem] bg-gradient-to-br from-[#EBF5FF] to-white border border-primary/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 w-fit">
                                <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                                Trust Architecture
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-heading mb-3 sm:mb-4 heading-gradient pb-2">Built on Trust, Secured by Design</h2>
                            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                                We implement enterprise-grade security protocols to ensure your health data remains private, secure, and under your absolute control at all times.
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {COMPLIANCE_FEATURES.map((feature, i) => {
                            // Custom badges based on card content
                            const badges = ["Sovereign", "NDHM", "Compliant"];
                            
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-[1.5rem] bg-white border border-primary/10 shadow-[0_15px_40px_rgba(41,54,129,0.05)] hover:shadow-[0_25px_60px_rgba(41,54,129,0.1)] hover:-translate-y-1 transition-all duration-500 group"
                                >
                                    <div className="flex justify-between items-start mb-3 sm:mb-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                            <span className="material-symbols-outlined text-[1.3rem] sm:text-[1.5rem] lg:text-[1.8rem]">
                                                {feature.icon}
                                            </span>
                                        </div>
                                        <span className="px-2 py-0.5 rounded-full bg-primary/5 text-primary text-[8px] sm:text-[9px] font-bold uppercase tracking-tighter opacity-80 ring-1 ring-primary/10">{badges[i]}</span>
                                    </div>
                                    <h3 className="font-bold text-primary mb-2 text-sm sm:text-base lg:text-lg font-heading">{feature.title}</h3>
                                    <p className="text-xs sm:text-sm lg:text-sm text-muted-foreground font-medium leading-relaxed">{feature.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
