"use client";

import { WHO_WE_SERVE, BRAND_COLORS } from "@/lib/constants";
import { motion } from "framer-motion";

export function WhoWeServeSection() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#F0F7FF] to-white relative scroll-mt-20 border-t border-primary/10" id="who-we-serve">

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
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Who We Serve</h2>
                    <h3 className="text-4xl font-bold font-heading heading-gradient pb-2 leading-tight">
                        Empowering Every <span className="text-primary/60">Stakeholder</span>
                    </h3>
                    <p className="mt-6 text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                        A personalized, data-driven experience designed specifically for the unique needs of India's chronic care ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {WHO_WE_SERVE.map((item, i) => {
                        // Meaningful badges based on the stakeholder type
                        const badges = [
                            { label: "HIPAA Compliant", variant: "primary" },
                            { label: "ABHA Ready", variant: "secondary" }
                        ];

                        // Custom badges for each stakeholder
                        const customBadges = [
                            [{ label: "Patient-Focused", variant: "primary" }, { label: "Privacy First", variant: "secondary" }],
                            [{ label: "Clinical Grade", variant: "primary" }, { label: "Secure", variant: "secondary" }],
                            [{ label: "Enterprise Ready", variant: "primary" }, { label: "Scalable", variant: "secondary" }]
                        ];

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                                className="group h-full"
                            >
                                <div className="h-full flex flex-col relative overflow-hidden p-5 lg:p-6 rounded-2xl bg-white border border-primary/10 shadow-[0_15px_45px_rgba(41,54,129,0.06)] transition-all duration-500 hover:shadow-[0_25px_70px_rgba(41,54,129,0.12)] hover:-translate-y-2">
                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Icon and Badge Row */}
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                                <span className="material-symbols-outlined text-[1.5rem] lg:text-[1.8rem] transition-transform duration-500 group-hover:scale-110">
                                                    {item.icon}
                                                </span>
                                            </div>
                                            <div className="px-3 py-1 rounded-full bg-secondary text-primary text-[10px] font-bold uppercase tracking-wider ring-1 ring-primary/10">
                                                {customBadges[i][0].label}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h4 className="text-xl lg:text-2xl font-bold text-primary mb-3 font-heading tracking-tight">
                                            {item.title}
                                        </h4>

                                        {/* Description */}
                                        <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed flex-1">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Decorative Watermark Number - Smaller */}
                                    <div className="absolute -bottom-8 -right-4 text-[10rem] lg:text-[12rem] font-bold text-primary/[0.02] select-none pointer-events-none z-0 font-heading leading-none">
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
