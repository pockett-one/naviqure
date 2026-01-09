"use client";

import { CORE_TEAM, BRAND_COLORS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Flag, FileCheck, ArrowLeft, Telescope, User } from "lucide-react";
import { useState } from "react";
import { TeamMemberCard } from "@/components/ui/TeamMemberCard";
import { InfoCard } from "@/components/ui/InfoCard";

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
                            <div className="text-center max-w-4xl mx-auto mb-12">
                                <h2 className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Governance & Leadership</h2>
                                <h1 className="text-4xl font-bold font-heading heading-gradient pb-2">The Team Behind <span className="text-primary/60">NaviQure</span></h1>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left max-w-5xl mx-auto mb-20">
                                <InfoCard
                                    icon={Flag}
                                    title="Our Mission"
                                    description="Democratizing specialty care through data-driven empowerment, giving patients the tools to manage complex health journeys with clarity."
                                    watermark="M"
                                />
                                <InfoCard
                                    icon={Telescope}
                                    title="Our Vision"
                                    description="To set the global standard for healthcare platforms through engineering excellence and innovation at scale."
                                    watermark="V"
                                />
                                <InfoCard
                                    icon={FileCheck}
                                    title="Clinical Governance"
                                    description="Our medical advisory board ensures AI safety and clinical accuracy in high-stakes chronic care, maintaining the highest standards of safety."
                                    watermark="G"
                                />
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
                                        <TeamMemberCard
                                            key={founder.name}
                                            member={founder as any}
                                            memberType="founders"
                                            onClick={(m) => handleMemberClick(m as any)}
                                            variants={item}
                                        />
                                    ))}
                                </motion.div>
                            </div>

                            {/* Advisory Panel */}
                            <div className="mb-16 sm:mb-20 lg:mb-24">
                                <div className="flex items-center gap-4 mb-6 sm:mb-8 lg:mb-10">
                                    <div className="h-px bg-primary/10 flex-1" />
                                    <h4 className="text-xl sm:text-2xl font-bold text-primary font-heading">Advisory Panel</h4>
                                    <div className="h-px bg-primary/10 flex-1" />
                                </div>
                                <motion.div
                                    variants={container}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto"
                                >
                                    {CORE_TEAM.advisoryPanel.filter(m => m.visible).map((member, i) => (
                                        <TeamMemberCard
                                            key={i}
                                            member={member as any}
                                            memberType="advisory"
                                            onClick={(m) => handleMemberClick(m as any)}
                                            variants={item}
                                        />
                                    ))}
                                </motion.div>
                            </div>

                            {/* Medical Panel */}
                            <div className="mb-16 sm:mb-20 lg:mb-24">
                                <div className="flex items-center gap-4 mb-6 sm:mb-8 lg:mb-10">
                                    <div className="h-px bg-primary/10 flex-1" />
                                    <h4 className="text-xl sm:text-2xl font-bold text-primary font-heading">Medical Panel</h4>
                                    <div className="h-px bg-primary/10 flex-1" />
                                </div>
                                <motion.div
                                    variants={container}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto"
                                >
                                    {CORE_TEAM.medicalPanel.filter(m => m.visible).map((member, i) => (
                                        <TeamMemberCard
                                            key={i}
                                            member={member as any}
                                            memberType="medical"
                                            onClick={(m) => handleMemberClick(m as any)}
                                            variants={item}
                                        />
                                    ))}
                                </motion.div>
                            </div>

                            {/* Hospital Partners */}
                            {/* Hospital Partners */}
                            <div>
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
                                        <TeamMemberCard
                                            key={i}
                                            member={partner as any}
                                            memberType="partner"
                                            onClick={() => { }} // Partners typically don't have detailed bios?
                                            variants={item}
                                        />
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
