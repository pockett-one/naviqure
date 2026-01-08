"use client";

import { WHO_WE_SERVE, BRAND_COLORS } from "@/lib/constants";
import { motion } from "framer-motion";

export function WhoWeServeSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-[#F0F7FF] to-white relative scroll-mt-20 border-t border-primary/10" id="who-we-serve">

            {/* Background elements wrapper for overflow clipping */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[120px]" />

                {/* Subtle Grid with Fade Out */}
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: `linear-gradient(to right, ${BRAND_COLORS.primary} 1px, transparent 1px), linear-gradient(to bottom, ${BRAND_COLORS.primary} 1px, transparent 1px)`,
                        backgroundSize: '32px 32px',
                        maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Target Audience</h2>
                    <h3 className="text-4xl font-bold font-heading sm:text-5xl heading-gradient pb-2 leading-tight">
                        Empowering Every <span className="text-primary/60">Stakeholder</span>
                    </h3>
                    <p className="mt-6 text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                        A personalized, data-driven experience designed specifically for the unique needs of India's chronic care ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {WHO_WE_SERVE.map((item, i) => {
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                                className="group h-full"
                            >
                                <div className="h-full flex flex-col relative overflow-hidden p-10 rounded-[2.5rem] bg-white border border-primary/10 shadow-[0_15px_45px_rgba(41,54,129,0.06)] transition-all duration-500 hover:shadow-[0_25px_70px_rgba(41,54,129,0.12)] hover:-translate-y-3">
                                    <div className="relative z-10 flex flex-col items-center text-center h-full">
                                        <div className="flex gap-2 mb-10">
                                            <span className="px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider ring-1 ring-primary/10">Active</span>
                                            <span className="px-3 py-1 rounded-full bg-secondary/40 text-muted-foreground/60 text-[10px] font-bold uppercase tracking-wider">Stakeholder</span>
                                        </div>

                                        <div className="w-24 h-24 rounded-3xl bg-secondary flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-inner group-hover:shadow-[0_10px_30px_rgba(45,57,163,0.3)]">
                                            <span className="material-symbols-outlined text-[3.5rem] transition-transform duration-500 group-hover:scale-110">
                                                {item.icon}
                                            </span>
                                        </div>

                                        <h4 className="text-2xl font-bold text-primary mb-5 font-heading tracking-tight">{item.title}</h4>
                                        <p className="text-muted-foreground text-[16px] font-medium leading-[1.7] mb-8 flex-1">
                                            {item.description}
                                        </p>

                                        <div className="w-full mt-auto">
                                            <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-primary/40 mb-3">
                                                <span>Standard Compliance</span>
                                                <span className="text-primary font-bold">100%</span>
                                            </div>
                                            <div className="w-full h-2 rounded-full bg-secondary/50 overflow-hidden p-[2px] ring-1 ring-primary/5">
                                                <motion.div
                                                    className="h-full rounded-full bg-primary shadow-[0_0_12px_rgba(45,57,163,0.3)]"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "100%" }}
                                                    transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative Watermark Number */}
                                    <div className="absolute -bottom-10 -right-6 text-[15rem] font-bold text-primary/[0.02] select-none pointer-events-none z-0 font-heading leading-none">
                                        {i + 1}
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
