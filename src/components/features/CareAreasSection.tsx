"use client";

import { CARE_AREAS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CareAreasSection() {
    return (
        <section className="bg-secondary/40 py-24 sm:py-32 relative overflow-hidden scroll-mt-20" id="care-areas">
            {/* Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] opacity-[0.06] [background-size:32px_32px] pointer-events-none opacity-50" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-wide">Clinical Focus</h2>
                    <h3 className="mt-2 text-3xl font-bold font-heading sm:text-4xl heading-gradient pb-2">Treatment Continuity</h3>
                    <p className="mt-4 text-lg text-muted-foreground">Specialized care pathways for high-complexity chronic conditions.</p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {CARE_AREAS.map((area, index) => {
                        return (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="h-full relative p-2 rounded-[1.5rem] bg-white border border-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(41,54,129,0.08)] hover:-translate-y-2 flex flex-col">
                                    <div className="flex-1 p-6 md:p-8 relative z-10">
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            <span className="px-3 py-1 rounded-full bg-secondary text-primary text-[10px] font-bold uppercase tracking-wider ring-1 ring-primary/10">Specialized</span>
                                            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-[10px] font-bold uppercase tracking-wider">Chronic</span>
                                        </div>

                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-14 h-14 rounded-xl bg-primary text-white backdrop-blur-md shadow-lg shadow-primary/20 flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-[1.8rem]">
                                                    {area.icon}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold font-heading text-primary leading-tight">
                                                {area.title}
                                            </h3>
                                        </div>

                                        <div className="mb-8">
                                            <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-3 opacity-60">Focus Areas</div>
                                            <p className="text-muted-foreground text-[15px] font-medium leading-relaxed text-justify">
                                                {area.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Watermark Number */}
                                    <div className="absolute -bottom-6 -right-2 text-[10rem] font-bold text-primary/[0.03] select-none pointer-events-none z-0 font-heading leading-none">
                                        {index + 1}
                                    </div>


                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
