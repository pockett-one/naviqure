"use client";

import { CARE_AREAS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CareAreasSection() {
    return (
        <section className="bg-secondary/40 py-12 sm:py-16 lg:py-20 relative scroll-mt-20 border-t border-primary/10" id="care-areas">

            {/* Texture Wrapper */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
                <div className="absolute inset-0 bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] opacity-[0.06] [background-size:32px_32px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-wide">Clinical Focus</h2>
                    <h3 className="mt-2 text-4xl font-bold font-heading heading-gradient pb-2">Treatment Continuity</h3>
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
                                    <div className="flex-1 p-5 lg:p-6 relative z-10">
                                        {/* Icon and Badge Row */}
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                                <span className="material-symbols-outlined text-[1.5rem] lg:text-[1.8rem] transition-transform duration-500 group-hover:scale-110">
                                                    {area.icon}
                                                </span>
                                            </div>
                                            <div className="px-3 py-1 rounded-full bg-secondary text-primary text-[10px] font-bold uppercase tracking-wider ring-1 ring-primary/10">
                                                Specialized
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl lg:text-2xl font-bold font-heading text-primary mb-3 leading-tight">
                                            {area.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-muted-foreground text-sm lg:text-[15px] font-medium leading-relaxed">
                                            {area.description}
                                        </p>
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
