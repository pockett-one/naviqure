"use client";

import { CORE_TEAM } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { User, ArrowLeft, Briefcase } from "lucide-react";
import { useState } from "react";
import { TeamMemberCard } from "@/components/ui/TeamMemberCard";

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



    // ... (imports)

    // ... (inside component)

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
                ) : (
                    // Unified Grid for Both Founders and Advisory
                    <motion.div
                        key="members-grid"
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
                            {members.filter(m => m.visible && !(m as any).placeholder).map((member) => (
                                <TeamMemberCard
                                    key={member.name}
                                    member={member as any}
                                    memberType={memberType}
                                    onClick={(m) => handleMemberClick(m as any)}
                                    variants={item}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
