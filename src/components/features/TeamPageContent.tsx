"use client";

import { CORE_TEAM, BRAND_COLORS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { User, Building2, Stethoscope, Briefcase, Flag, FileCheck, ArrowLeft, Telescope } from "lucide-react";
import { useState } from "react";

type TeamMember = {
    name: string;
    role: string;
    image: string;
    bio?: string;
    detailedBio?: string;
    visible: boolean;
    placeholder?: boolean;
};

export function TeamPageContent() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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

    const handleMemberClick = (member: TeamMember) => {
        if (member.detailedBio && !member.placeholder) {
            setSelectedMember(member);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleClose = () => {
        setSelectedMember(null);
    };

    return (
        <div className="py-24 bg-gradient-to-b from-[#F8FAFF] to-white relative min-h-screen">
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
                <AnimatePresence mode="wait">
                    {selectedMember ? (
                        // Bio View
                        <motion.div
                            key="bio-view"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="max-w-4xl mx-auto"
                        >
                            {/* Back Button */}
                            <button
                                onClick={handleClose}
                                className="inline-flex items-center gap-2 mb-8 text-primary hover:text-primary/80 transition-colors group"
                            >
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                <span className="font-semibold">Back to Team</span>
                            </button>

                            {/* Member Header */}
                            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-primary/10 mb-8">
                                <div className="flex items-start gap-6 mb-6">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0">
                                        <User className="w-10 h-10 sm:w-12 sm:h-12" />
                                    </div>
                                    <div className="flex-1">
                                        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-primary mb-2">{selectedMember.name}</h1>
                                        <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm uppercase tracking-wider">
                                            {selectedMember.role}
                                        </div>
                                    </div>
                                </div>

                                {/* Detailed Bio */}
                                <div className="prose prose-lg max-w-none">
                                    {selectedMember.detailedBio?.split(/\n\n/).map((paragraph, index) => (
                                        <p key={index} className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 last:mb-0">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Close Button at Bottom */}
                            <div className="text-center">
                                <button
                                    onClick={handleClose}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    Back to Team
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        // Team Grid View
                        <motion.div
                            key="team-grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="text-center max-w-4xl mx-auto mb-20">
                                <h2 className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Governance & Leadership</h2>
                                <h1 className="text-4xl font-bold font-heading heading-gradient pb-2">The Team Behind <span className="text-primary/60">NaviQure</span></h1>

                                <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left max-w-5xl mx-auto">
                                    <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-primary/10 shadow-[0_8px_30px_rgba(45,57,163,0.06)] backdrop-blur-sm group hover:bg-secondary/10 transition-all duration-500">
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
                                    <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-primary/10 shadow-[0_8px_30px_rgba(45,57,163,0.06)] backdrop-blur-sm group hover:bg-secondary/10 transition-all duration-500">
                                        <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                <Telescope className="size-4 sm:size-5" />
                                            </span>
                                            <h4 className="text-primary font-bold text-base sm:text-lg font-heading">Our Vision</h4>
                                        </div>
                                        <p className="text-muted-foreground text-sm sm:text-[15px] font-medium leading-relaxed">
                                            To set the global standard for healthcare platforms through engineering excellence and innovation at scale.
                                        </p>
                                    </div>
                                    <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-primary/10 shadow-[0_8px_30px_rgba(45,57,163,0.06)] backdrop-blur-sm group hover:bg-secondary/10 transition-all duration-500">
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
                                            onClick={() => handleMemberClick(founder as TeamMember)}
                                            className={`flex items-center gap-4 sm:gap-5 lg:gap-6 p-5 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl bg-white border border-primary/15 shadow-md hover:shadow-lg transition-all duration-500 group relative overflow-hidden ${founder.detailedBio ? 'cursor-pointer hover:border-primary/30' : ''}`}
                                        >
                                            <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-primary/5 rounded-full -mr-10 -mt-10 sm:-mr-12 sm:-mt-12 blur-xl group-hover:bg-primary/10 transition-colors" />
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0 relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                                <User className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                                            </div>
                                            <div className="flex-1 min-w-0 relative z-10">
                                                <h5 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary font-heading mb-1 sm:mb-2">{founder.name}</h5>
                                                <div className="text-xs sm:text-sm font-bold text-blue-600 mb-2 sm:mb-3 bg-blue-50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full w-fit uppercase tracking-wider">{founder.role}</div>
                                                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium leading-relaxed">{founder.bio}</p>
                                                {founder.detailedBio && (
                                                    <div className="mt-3 sm:mt-4">
                                                        <span className="text-sm sm:text-base text-primary font-bold group-hover:text-primary/80 transition-colors">Read full bio →</span>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Grid Panels */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
                                {/* Medical Panel */}
                                <div>
                                    <div className="flex items-center gap-4 mb-6 sm:mb-8">
                                        <div className="h-px bg-primary/10 flex-1" />
                                        <h4 className="text-lg sm:text-xl font-bold text-primary font-heading">Medical Panel</h4>
                                        <div className="h-px bg-primary/10 flex-1" />
                                    </div>
                                    <motion.div
                                        variants={container}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                                    >
                                        {CORE_TEAM.medicalPanel.filter(m => m.visible).map((member, i) => (
                                            <motion.div
                                                key={i}
                                                variants={item}
                                                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-primary/10 bg-white shadow-md hover:bg-secondary/10 transition-all duration-500 group hover:shadow-xl hover:shadow-primary/5 h-[120px] sm:h-[130px]"
                                            >
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform ring-1 ring-primary/5">
                                                    <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h5 className="font-bold text-primary text-sm sm:text-base mb-0.5 truncate">{member.name}</h5>
                                                    <div className="text-[10px] sm:text-[11px] font-bold text-muted-foreground/70 uppercase tracking-wider">{member.role}</div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Advisory Panel */}
                                <div>
                                    <div className="flex items-center gap-4 mb-6 sm:mb-8">
                                        <div className="h-px bg-primary/10 flex-1" />
                                        <h4 className="text-lg sm:text-xl font-bold text-primary font-heading">Advisory Panel</h4>
                                        <div className="h-px bg-primary/10 flex-1" />
                                    </div>
                                    <motion.div
                                        variants={container}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                                    >
                                        {CORE_TEAM.advisoryPanel.filter(m => m.visible).map((member, i) => (
                                            <motion.div
                                                key={i}
                                                variants={item}
                                                onClick={() => handleMemberClick(member as TeamMember)}
                                                className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-primary/20 bg-white shadow-lg shadow-primary/[0.04] hover:shadow-xl hover:shadow-primary/[0.08] transition-all duration-500 group h-[120px] sm:h-[130px] ${(member as any).detailedBio && !(member as any).placeholder ? 'cursor-pointer hover:border-primary/40' : ''}`}
                                            >
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h5 className="font-bold text-primary text-sm sm:text-base mb-0.5 truncate">{member.name}</h5>
                                                    <div className="text-[10px] sm:text-[11px] font-bold text-muted-foreground/70 uppercase tracking-wider mb-1">{member.role}</div>
                                                    {(member as any).detailedBio && !(member as any).placeholder && (
                                                        <span className="text-xs sm:text-sm text-primary font-bold group-hover:text-primary/80 transition-colors">Read full bio →</span>
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>

                            {/* Hospital Partners */}
                            <div className="mt-16 sm:mt-20 lg:mt-24">
                                <div className="flex items-center gap-4 mb-6 sm:mb-8 lg:mb-10">
                                    <div className="h-px bg-primary/10 flex-1" />
                                    <h4 className="text-base sm:text-lg lg:text-xl font-bold text-primary/60 font-heading tracking-widest uppercase">Strategic Hospital Partners</h4>
                                    <div className="h-px bg-primary/10 flex-1" />
                                </div>
                                <motion.div
                                    variants={container}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
                                >
                                    {CORE_TEAM.hospitalPartners.filter(m => m.visible).map((partner, i) => (
                                        <motion.div key={i} variants={item} className="p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-secondary/20 border border-primary/5 flex flex-col items-center justify-center min-h-[100px] sm:min-h-[120px] hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group">
                                            <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary/30 group-hover:text-primary transition-colors mb-2 sm:mb-3" />
                                            <h5 className="font-bold text-primary/80 group-hover:text-primary text-center text-sm sm:text-base">{partner.name}</h5>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
