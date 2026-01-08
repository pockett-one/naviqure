"use client";

import { COMPLIANCE_FEATURES, BRAND_COLORS } from "@/lib/constants";
import { motion } from "framer-motion";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function ComplianceSection() {
    return (
        <section className="py-24 bg-secondary/20 relative" id="trust">
            <SectionDivider className="absolute -top-[0.5px] left-0 z-50" />

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
                <div className="flex flex-col lg:flex-row gap-8 items-stretch">

                    <div className="w-full lg:w-1/3 p-8 rounded-[1.5rem] bg-gradient-to-br from-[#EBF5FF] to-white border border-primary/5 relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                                <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                                Reliability & Trust
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 heading-gradient pb-2">Built on Trust, Secured by Design</h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                We implement enterprise-grade security protocols to ensure your health data remains private, secure, and under your absolute control at all times.
                            </p>
                        </div>

                        <div className="relative z-10 space-y-4">
                            <div className={`bg-gradient-to-br from-secondary to-white p-8 md:p-12 h-full flex flex-col justify-center`}>
                                <div className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[1.2rem]">location_on</span>
                                    Data Sovereignty
                                </div>
                                <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                                    Indian patient data stays within national borders, hosted on secure local cloud infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {COMPLIANCE_FEATURES.map((feature, i) => {
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-[1.5rem] bg-white border border-primary/10 shadow-[0_15px_40px_rgba(41,54,129,0.05)] hover:shadow-[0_25px_60px_rgba(41,54,129,0.1)] hover:-translate-y-1 transition-all duration-500 group"
                                >
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                            <span className="material-symbols-outlined text-[1.8rem]">
                                                {feature.icon}
                                            </span>
                                        </div>
                                        <span className="px-2 py-0.5 rounded-full bg-primary/5 text-primary text-[9px] font-bold uppercase tracking-tighter opacity-80 ring-1 ring-primary/10">Protocol</span>
                                    </div>
                                    <h3 className="font-bold text-primary mb-3 text-lg font-heading">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">{feature.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
