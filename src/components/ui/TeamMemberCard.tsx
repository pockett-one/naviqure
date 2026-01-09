"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Stethoscope, Building2 } from "lucide-react";

export type TeamMember = {
    name: string;
    role: string;
    image: string;
    bio?: string;
    detailedBio?: string;
    visible: boolean;
    placeholder?: boolean;
};

interface TeamMemberCardProps {
    member: TeamMember;
    memberType: 'founders' | 'advisory' | 'medical' | 'partner';
    onClick?: (member: TeamMember) => void;
    variants?: any;
}

export function TeamMemberCard({ member, memberType, onClick, variants }: TeamMemberCardProps) {
    const isClickable = (member as any).detailedBio && !(member as any).placeholder;

    return (
        <motion.div
            variants={variants}
            onClick={() => isClickable && onClick?.(member)}
            className={`flex items-center gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white border border-primary/15 shadow-md hover:shadow-lg transition-all duration-500 group relative overflow-hidden ${isClickable ? 'cursor-pointer' : ''}`}
        >
            <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-primary/5 rounded-full -mr-10 -mt-10 sm:-mr-12 sm:-mt-12 blur-xl group-hover:bg-primary/10 transition-colors" />

            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0 relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {memberType === 'founders' && <User className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />}
                {memberType === 'advisory' && <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />}
                {memberType === 'medical' && <Stethoscope className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />}
                {memberType === 'partner' && <Building2 className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />}
            </div>

            <div className="flex-1 min-w-0 relative z-10">
                <div className="flex justify-between items-start mb-2 gap-3">
                    <h5 className="text-base sm:text-lg font-bold font-heading text-primary leading-tight">{member.name}</h5>
                    <div className="px-3 py-1 rounded-full bg-secondary text-primary text-[10px] font-bold uppercase tracking-wider ring-1 ring-primary/10 w-fit shrink-0">{member.role}</div>
                </div>
                {member.bio && (
                    <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed whitespace-pre-line">{member.bio}</p>
                )}
                {member.detailedBio && (
                    <div className="mt-3 sm:mt-4">
                        <span className="text-sm sm:text-base text-primary font-bold group-hover:text-primary/80 transition-colors">Read full bio →</span>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
