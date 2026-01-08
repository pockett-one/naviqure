"use client";

import { CORE_TEAM } from "@/lib/constants";
import { motion } from "framer-motion";
import { User, Building2, Stethoscope, Briefcase } from "lucide-react";

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
        <section className="py-24 bg-white relative overflow-hidden scroll-mt-20" id="team">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-wide">Governance & Leadership</h2>
                    <h3 className="mt-2 text-3xl font-bold font-heading text-primary sm:text-4xl">Core Team</h3>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="p-8 rounded-[1.5rem] bg-accent/30 border border-accent/50">
                            <h4 className="text-primary font-bold mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                Our Mission
                            </h4>
                            <p className="text-muted-foreground text-[15px] font-medium leading-relaxed">
                                Democratizing specialty care through data-driven empowerment, giving patients the tools to manage complex health journeys with clarity.
                            </p>
                        </div>
                        <div className="p-8 rounded-[1.5rem] bg-accent/30 border border-accent/50">
                            <h4 className="text-primary font-bold mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                Clinical Governance
                            </h4>
                            <p className="text-muted-foreground text-[15px] font-medium leading-relaxed">
                                Our medical advisory board ensures AI safety and clinical accuracy in high-stakes chronic care, maintaining the highest standards of safety.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Founders */}
                <div className="mb-20">
                    <h4 className="text-2xl font-bold text-primary mb-8 border-b border-border pb-4">Founders</h4>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {CORE_TEAM.founders.filter(m => m.visible).map((founder) => (
                            <motion.div key={founder.name} variants={item} className="flex items-start gap-4 p-6 rounded-xl bg-muted border border-border hover:border-primary/20 transition-colors">
                                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-primary shrink-0">
                                    <User className="w-8 h-8" />
                                </div>
                                <div>
                                    <h5 className="text-xl font-bold text-primary">{founder.name}</h5>
                                    <div className="text-sm font-medium text-primary mb-2Secondary">{founder.role}</div>
                                    <p className="text-muted-foreground text-sm">{founder.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Medical Panel */}
                <div className="mb-20">
                    <h4 className="text-2xl font-bold text-primary mb-8 border-b border-border pb-4">Medical Panel</h4>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {CORE_TEAM.medicalPanel.filter(m => m.visible).map((member, i) => (
                            <motion.div key={i} variants={item} className="p-6 rounded-xl border border-dashed border-border bg-white hover:bg-muted transition-colors text-center">
                                <div className="w-12 h-12 mx-auto rounded-full bg-accent flex items-center justify-center text-primary mb-4">
                                    <Stethoscope className="w-6 h-6" />
                                </div>
                                <h5 className="font-bold text-primary">{member.name}</h5>
                                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-1">{member.role}</div>
                                {/* @ts-ignore */}
                                {member.placeholder && <div className="mt-3 text-xs text-muted-foreground/60 italic">Bio to be added</div>}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Advisory Panel */}
                <div className="mb-20">
                    <h4 className="text-2xl font-bold text-primary mb-8 border-b border-border pb-4">Advisory Panel</h4>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {CORE_TEAM.advisoryPanel.filter(m => m.visible).map((member, i) => (
                            <motion.div key={i} variants={item} className="p-6 rounded-xl border border-border bg-white hover:shadow-md transition-shadow text-center">
                                <div className="w-12 h-12 mx-auto rounded-full bg-accent flex items-center justify-center text-primary mb-4">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <h5 className="font-bold text-primary">{member.name}</h5>
                                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-1">{member.role}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Hospital Partners */}
                <div>
                    <h4 className="text-2xl font-bold text-primary mb-8 border-b border-border pb-4">Hospital Partners</h4>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {CORE_TEAM.hospitalPartners.filter(m => m.visible).map((partner, i) => (
                            <motion.div key={i} variants={item} className="p-6 rounded-xl bg-muted border border-border flex flex-col items-center justify-center min-h-[140px] hover:border-primary/20 transition-colors">
                                <Building2 className="w-8 h-8 text-muted-foreground mb-3" />
                                <h5 className="font-bold text-primary">{partner.name}</h5>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
