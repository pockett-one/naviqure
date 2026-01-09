"use client";

import { CORE_TEAM } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { User, ArrowLeft, Briefcase } from "lucide-react";
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

interface TeamMembersDisplayProps {
    memberType: 'founders' | 'advisory';
}

export function TeamMembersDisplay({ memberType }: TeamMembersDisplayProps) {
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
        }
    };

    const handleClose = () => {
        setSelectedMember(null);
    };

    const members = memberType === 'founders' ? CORE_TEAM.founders : CORE_TEAM.advisoryPanel;

    return (
        <>
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
                                    {memberType === 'founders' ? (
                                        <User className="w-10 h-10 sm:w-12 sm:h-12" />
                                    ) : (
                                        <Briefcase className="w-10 h-10 sm:w-12 sm:h-12" />
                                    )}
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
                ) : memberType === 'founders' ? (
                    // Founders Grid
                    <motion.div
                        key="founders-grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto"
                        >
                            {members.filter(m => m.visible && !(m as any).placeholder).map((founder) => (
                                <motion.div
                                    key={founder.name}
                                    variants={item}
                                    onClick={() => handleMemberClick(founder as TeamMember)}
                                    className={`flex items-center gap-4 sm:gap-5 lg:gap-6 p-5 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl bg-white border border-primary/15 shadow-md hover:shadow-lg transition-all duration-500 group relative overflow-hidden ${(founder as any).detailedBio ? 'cursor-pointer' : ''}`}
                                >
                                    <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-primary/5 rounded-full -mr-10 -mt-10 sm:-mr-12 sm:-mt-12 blur-xl group-hover:bg-primary/10 transition-colors" />
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0 relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <User className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                                    </div>
                                    <div className="flex-1 min-w-0 relative z-10">
                                        <h5 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary font-heading mb-1 sm:mb-2">{founder.name}</h5>
                                        <div className="text-xs sm:text-sm font-bold text-blue-600 mb-2 sm:mb-3 bg-blue-50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full w-fit uppercase tracking-wider">{founder.role}</div>
                                        <p className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium leading-relaxed">{(founder as any).bio}</p>
                                        {(founder as any).detailedBio && (
                                            <div className="mt-3 sm:mt-4">
                                                <span className="text-sm sm:text-base text-primary font-bold group-hover:text-primary/80 transition-colors">Read full bio →</span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                ) : (
                    // Advisory Panel - Compact Horizontal Cards
                    <motion.div
                        key="advisory-grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto"
                        >
                            {members.filter(m => m.visible && !(m as any).placeholder).map((member, i) => (
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
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
