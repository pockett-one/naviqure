"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SOLUTIONS } from "@/lib/constants";
import { motion } from "framer-motion";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function SolutionsGrid() {
    return (
        <section className="py-24 bg-white relative scroll-mt-20" id="solutions">
            <SectionDivider className="absolute -top-[0.5px] left-0 z-50" />
            {/* Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)] opacity-[0.04] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section 1: Platform */}
                <div>
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-sm font-semibold text-primary uppercase tracking-wide">Platform</h2>
                        <h3 className="mt-2 text-3xl font-bold font-heading sm:text-4xl heading-gradient pb-2">
                            Healthcare Intelligence
                        </h3>
                        <p className="mt-4 text-lg text-muted-foreground">
                            A unified orchestration layer for chronic disease management.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {SOLUTIONS.map((solution, index) => {
                            return (
                                <motion.div
                                    key={solution.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group h-full"
                                >
                                    <Card className="h-full relative border-none bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-primary/5 rounded-[1.5rem] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(41,54,129,0.08)] hover:-translate-y-2 overflow-hidden flex flex-col p-2">
                                        <div className="flex-1 p-6 flex flex-col relative z-10">
                                            <CardHeader className="p-0 mb-6">
                                                <div className="flex justify-between items-start mb-6">
                                                    <div className="h-14 w-14 rounded-xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                                        <span className="material-symbols-outlined text-[1.8rem]">
                                                            {solution.icon}
                                                        </span>
                                                    </div>
                                                    <div className="px-3 py-1 rounded-full bg-secondary text-primary text-[10px] font-bold uppercase tracking-wider ring-1 ring-primary/10">
                                                        AI Ready
                                                    </div>
                                                </div>
                                                <CardTitle className="text-2xl font-bold tracking-tight text-primary font-heading leading-tight group-hover:text-primary transition-colors">
                                                    {solution.title}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="p-0">
                                                <CardDescription className="text-[15px] font-medium text-muted-foreground leading-relaxed">
                                                    {solution.description}
                                                </CardDescription>
                                            </CardContent>
                                        </div>

                                        {/* Watermark Number */}
                                        <div className="absolute -bottom-6 -right-2 text-[10rem] font-bold text-primary/[0.03] select-none pointer-events-none z-0 font-heading leading-none">
                                            {index + 1}
                                        </div>

                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
