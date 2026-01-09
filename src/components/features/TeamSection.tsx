"use client";

import { CORE_TEAM, BRAND_COLORS } from "@/lib/constants";
import { motion } from "framer-motion";
import { User, Building2, Stethoscope, Briefcase, Flag, FileCheck } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function TeamSection() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 bg-gradient-to-b from-[#F8FAFF] to-white relative scroll-mt-20" id="team">
            <SectionDivider className="absolute -top-[0.5px] left-0 z-40" />
            {/* Background elements wrapper for overflow clipping */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[120px]" />

                {/* Texture with Fade */}
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
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Governance & Leadership</h2>
                    <h3 className="text-4xl font-bold font-heading heading-gradient pb-2">The Team Behind <span className="text-primary/60">NaviQure</span></h3>

                    <div className="mt-8 sm:mt-12 flex flex-col md:flex-row gap-4 sm:gap-6 text-left max-w-5xl mx-auto">
                        <div className="flex-1 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-primary/10 shadow-[0_8px_30px_rgba(45,57,163,0.06)] backdrop-blur-sm group hover:bg-secondary/10 transition-all duration-500">
                            <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Flag className="size-4 sm:size-5" />
                                </span>
                                <h4 className="text-primary font-bold text-base sm:text-lg font-heading">Our Mission</h4>
                            </div>
                            <p className="text-muted-foreground text-sm sm:text-[15px] font-medium leading-relaxed">
                                Democratizing specialty care through data-driven empowerment, giving patients the tools to manage complex health journeys with clarity.
                            </p>
                        </div>
                        <div className="flex-1 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-primary/10 shadow-[0_8px_30px_rgba(45,57,163,0.06)] backdrop-blur-sm group hover:bg-secondary/10 transition-all duration-500">
                            <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <FileCheck className="size-4 sm:size-5" />
                                </span>
                                <h4 className="text-primary font-bold text-base sm:text-lg font-heading">Clinical Governance</h4>
                            </div>
                            <p className="text-muted-foreground text-sm sm:text-[15px] font-medium leading-relaxed">
                                Our medical advisory board ensures AI safety and clinical accuracy in high-stakes chronic care, maintaining the highest standards of safety.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Founders - Compact Side by Side */}
                <div className="mb-16 sm:mb-20 lg:mb-24">
                    <div className="flex items-center gap-4 mb-6 sm:mb-8 lg:mb-10">
                        <div className="h-px bg-primary/10 flex-1" />
                        <h4 className="text-xl sm:text-2xl font-bold text-primary font-heading">Founders</h4>
                        <div className="h-px bg-primary/10 flex-1" />
                    </div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto"
                    >
                        {CORE_TEAM.founders.filter(m => m.visible).map((founder) => (
                            <motion.div
                                key={founder.name}
                                variants={item}
                                className="flex items-center gap-4 sm:gap-5 lg:gap-6 p-5 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl bg-white border border-primary/15 shadow-md hover:shadow-lg transition-all duration-500 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-primary/5 rounded-full -mr-10 -mt-10 sm:-mr-12 sm:-mt-12 blur-xl group-hover:bg-primary/10 transition-colors" />
                                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0 relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <User className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                                </div>
                                <div className="flex-1 min-w-0 relative z-10">
                                    <h5 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary font-heading mb-1 sm:mb-2">{founder.name}</h5>
                                    <div className="text-xs sm:text-sm font-bold text-blue-600 mb-2 sm:mb-3 bg-blue-50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full w-fit uppercase tracking-wider">{founder.role}</div>
                                    <p className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium leading-relaxed italic">"{founder.bio}"</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Advisory Panel Header */}
                <div className="flex items-center gap-4 mb-6 sm:mb-8 max-w-5xl mx-auto">
                    <div className="h-px bg-primary/10 flex-1" />
                    <h4 className="text-lg sm:text-xl font-bold text-primary font-heading">Advisory Panel</h4>
                    <div className="h-px bg-primary/10 flex-1" />
                </div>

                {/* Key Team Members - Top 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                    {/* Medical Advisor */}
                    <motion.div
                        variants={item}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {CORE_TEAM.advisoryPanel.filter(m => m.visible).slice(0, 1).map((member, i) => (
                            <div key={i} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-primary/10 bg-white shadow-md hover:bg-secondary/10 transition-all duration-500 group hover:shadow-xl hover:shadow-primary/5">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform ring-1 ring-primary/5">
                                    <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h5 className="font-bold text-primary text-sm sm:text-base mb-0.5 truncate">{member.name}</h5>
                                    <div className="text-[10px] sm:text-[11px] font-bold text-muted-foreground/70 uppercase tracking-wider">{member.role}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Clinical Governance Advisor */}
                    <motion.div
                        variants={item}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {CORE_TEAM.advisoryPanel.filter(m => m.visible).slice(1, 2).map((member, i) => (
                            <div key={i} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-primary/20 bg-white shadow-lg shadow-primary/[0.04] hover:shadow-xl hover:shadow-primary/[0.08] transition-all duration-500 group">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h5 className="font-bold text-primary text-sm sm:text-base mb-0.5 truncate">{member.name}</h5>
                                    <div className="text-[10px] sm:text-[11px] font-bold text-muted-foreground/70 uppercase tracking-wider">{member.role}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* View Full Team CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 sm:mt-16 text-center"
                >
                    <a
                        href="/team"
                        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-full font-semibold text-sm sm:text-base hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
                    >
                        View Full Team
                        <span className="material-symbols-outlined text-[1.2rem]">arrow_forward</span>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
