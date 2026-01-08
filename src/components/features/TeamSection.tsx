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
                    <h3 className="text-4xl font-bold font-heading sm:text-5xl heading-gradient pb-2">The Team Behind <span className="text-primary/60">NaviQure</span></h3>

                    <div className="mt-12 flex flex-col md:flex-row gap-6 text-left max-w-5xl mx-auto">
                        <div className="flex-1 p-8 rounded-3xl bg-white border border-primary/10 shadow-[0_8px_30px_rgba(45,57,163,0.06)] backdrop-blur-sm group hover:bg-secondary/10 transition-all duration-500">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Flag className="size-5" />
                                </span>
                                <h4 className="text-primary font-bold text-lg font-heading">Our Mission</h4>
                            </div>
                            <p className="text-muted-foreground text-[15px] font-medium leading-relaxed">
                                Democratizing specialty care through data-driven empowerment, giving patients the tools to manage complex health journeys with clarity.
                            </p>
                        </div>
                        <div className="flex-1 p-8 rounded-3xl bg-white border border-primary/10 shadow-[0_8px_30px_rgba(45,57,163,0.06)] backdrop-blur-sm group hover:bg-secondary/10 transition-all duration-500">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <FileCheck className="size-5" />
                                </span>
                                <h4 className="text-primary font-bold text-lg font-heading">Clinical Governance</h4>
                            </div>
                            <p className="text-muted-foreground text-[15px] font-medium leading-relaxed">
                                Our medical advisory board ensures AI safety and clinical accuracy in high-stakes chronic care, maintaining the highest standards of safety.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Founders - Prominent Side-by-Side */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px bg-primary/10 flex-1" />
                        <h4 className="text-2xl font-bold text-primary font-heading">Founders</h4>
                        <div className="h-px bg-primary/10 flex-1" />
                    </div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto"
                    >
                        {CORE_TEAM.founders.filter(m => m.visible).map((founder) => (
                            <motion.div key={founder.name} variants={item} className="flex flex-col sm:flex-row items-center sm:items-start gap-8 p-10 rounded-[2.5rem] bg-white border border-primary/15 shadow-[0_20px_50px_rgba(41,54,129,0.08)] hover:shadow-[0_30px_70px_rgba(41,54,129,0.12)] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-colors" />
                                <div className="w-24 h-24 rounded-3xl bg-secondary flex items-center justify-center text-primary shrink-0 relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                    <User className="w-12 h-12" />
                                </div>
                                <div className="text-center sm:text-left relative z-10">
                                    <h5 className="text-2xl font-bold text-primary font-heading mb-1">{founder.name}</h5>
                                    <div className="text-sm font-bold text-blue-600 mb-4 bg-blue-50 px-3 py-1 rounded-full w-fit mx-auto sm:mx-0 uppercase tracking-wider">{founder.role}</div>
                                    <p className="text-muted-foreground text-[15px] font-medium leading-relaxed italic">"{founder.bio}"</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Grid Panels */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Medical Panel */}
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-px bg-primary/10 flex-1" />
                            <h4 className="text-xl font-bold text-primary font-heading">Medical Panel</h4>
                            <div className="h-px bg-primary/10 flex-1" />
                        </div>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            {CORE_TEAM.medicalPanel.filter(m => m.visible).map((member, i) => (
                                <motion.div key={i} variants={item} className="p-6 rounded-2xl border border-primary/10 bg-white shadow-md hover:bg-secondary/10 transition-all duration-500 group text-center hover:shadow-xl hover:shadow-primary/5">
                                    <div className="w-14 h-14 mx-auto rounded-xl bg-white shadow-sm flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform ring-1 ring-primary/5">
                                        <Stethoscope className="w-7 h-7" />
                                    </div>
                                    <h5 className="font-bold text-primary text-lg">{member.name}</h5>
                                    <div className="text-[11px] font-bold text-muted-foreground/70 uppercase tracking-widest mt-2 bg-muted px-2 py-0.5 rounded w-fit mx-auto">{member.role}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Advisory Panel */}
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-px bg-primary/10 flex-1" />
                            <h4 className="text-xl font-bold text-primary font-heading">Advisory Panel</h4>
                            <div className="h-px bg-primary/10 flex-1" />
                        </div>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            {CORE_TEAM.advisoryPanel.filter(m => m.visible).map((member, i) => (
                                <motion.div key={i} variants={item} className="p-6 rounded-2xl border border-primary/20 bg-white shadow-lg shadow-primary/[0.04] hover:shadow-xl hover:shadow-primary/[0.08] transition-all duration-500 text-center group">
                                    <div className="w-14 h-14 mx-auto rounded-xl bg-secondary flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                        <Briefcase className="w-7 h-7" />
                                    </div>
                                    <h5 className="font-bold text-primary text-lg">{member.name}</h5>
                                    <div className="text-[11px] font-bold text-muted-foreground/70 uppercase tracking-widest mt-2">{member.role}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Hospital Partners */}
                <div className="mt-24">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px bg-primary/10 flex-1" />
                        <h4 className="text-xl font-bold text-primary/60 font-heading tracking-widest uppercase text-sm">Strategic Hospital Partners</h4>
                        <div className="h-px bg-primary/10 flex-1" />
                    </div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {CORE_TEAM.hospitalPartners.filter(m => m.visible).map((partner, i) => (
                            <motion.div key={i} variants={item} className="p-6 rounded-2xl bg-secondary/20 border border-primary/5 flex flex-col items-center justify-center min-h-[120px] hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group">
                                <Building2 className="w-8 h-8 text-primary/30 group-hover:text-primary transition-colors mb-3" />
                                <h5 className="font-bold text-primary/80 group-hover:text-primary text-center">{partner.name}</h5>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
