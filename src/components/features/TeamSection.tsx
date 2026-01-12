"use client";

import { CORE_TEAM, BRAND_COLORS } from "@/lib/constants";
import { motion } from "framer-motion";
import { Building2, Flag, FileCheck, Telescope } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { TeamMembersDisplay } from "./TeamMembersDisplay";
import { InfoCard } from "@/components/ui/InfoCard";

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
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#F8FAFF] to-white relative scroll-mt-20" id="team">
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
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Governance & Leadership</h2>
                    <h3 className="text-4xl font-bold font-heading heading-gradient pb-2">The Team Behind <span className="text-primary/60">NaviQure</span></h3>
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

                {/* Founders */}
                <div className="mb-16 sm:mb-20 lg:mb-24">
                    <div className="flex items-center gap-4 mb-6 sm:mb-8 max-w-5xl mx-auto lg:mb-10">
                        <div className="h-px bg-primary/10 flex-1" />
                        <h4 className="text-xl sm:text-2xl font-bold text-primary font-heading">Founders</h4>
                        <div className="h-px bg-primary/10 flex-1" />
                    </div>
                    <TeamMembersDisplay memberType="founders" />
                </div>

                {/* Advisory Panel */}
                <div className="mb-16 sm:mb-20 lg:mb-24">
                    <div className="flex items-center gap-4 mb-6 sm:mb-8 max-w-5xl mx-auto">
                        <div className="h-px bg-primary/10 flex-1" />
                        <h4 className="text-lg sm:text-xl font-bold text-primary font-heading">Advisory Panel</h4>
                        <div className="h-px bg-primary/10 flex-1" />
                    </div>
                    <TeamMembersDisplay memberType="advisory" />
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
