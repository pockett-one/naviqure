"use client";

import { WHO_WE_SERVE } from "@/lib/constants";
import { motion } from "framer-motion";

export function WhoWeServeSection() {
    return (
        <section className="py-24 bg-white relative scroll-mt-20 border-t border-primary/5" id="who-we-serve">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-wide">Target Audience</h2>
                    <h3 className="mt-2 text-3xl font-bold font-heading sm:text-4xl heading-gradient pb-2">Who We Serve</h3>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Tailored solutions for every stakeholder in the healthcare ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {WHO_WE_SERVE.map((item, i) => {
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="h-full flex flex-col relative overflow-hidden p-2 rounded-[1.5rem] bg-white border border-border transition-all duration-500 hover:shadow-[0_20px_50px_rgba(41,54,129,0.06)] hover:-translate-y-2">
                                    <div className="flex-1 p-6 md:p-8 flex flex-col items-center text-center relative z-10">
                                        <div className="flex gap-2 mb-8">
                                            <span className="px-3 py-1 rounded-full bg-secondary text-primary text-[10px] font-bold uppercase tracking-wider ring-1 ring-primary/10">Active</span>
                                            <span className="px-3 py-1 rounded-full bg-primary/5 text-primary/60 text-[10px] font-bold uppercase tracking-wider">Stakeholder</span>
                                        </div>

                                        <div className="w-20 h-20 rounded-xl bg-accent flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm ring-1 ring-primary/5">
                                            <span className="material-symbols-outlined text-[2.5rem]">
                                                {item.icon}
                                            </span>
                                        </div>

                                        <h4 className="text-2xl font-bold text-primary mb-4 font-heading">{item.title}</h4>
                                        <p className="text-muted-foreground text-[15px] font-medium leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Watermark Number */}
                                    <div className="absolute -bottom-2 -right-2 text-[10rem] font-bold text-primary/[0.03] select-none pointer-events-none z-0 font-heading leading-none">
                                        {i + 1}
                                    </div>
                                    <div className="p-2">
                                        <div className="w-full h-1.5 rounded-full bg-primary/10 overflow-hidden">
                                            <motion.div
                                                className="h-full bg-primary/40"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "100%" }}
                                                transition={{ duration: 1.5, delay: i * 0.2 }}
                                            />
                                        </div>
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
