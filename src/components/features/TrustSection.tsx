"use client";

import { TRUSTED_BY } from "@/lib/constants";
import { motion } from "framer-motion";

export function TrustSection() {
    return (
        <section className="py-24 sm:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-slate-900 mb-12">
                    Trusted by Innovative Healthcare Providers
                </h2>
                <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {TRUSTED_BY.map((name, index) => (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="col-span-1 flex justify-center grayscale hover:grayscale-0 transition-all duration-300 pointer-events-none"
                        >
                            {/* Placeholder for Logos - using stylized text for now */}
                            <div className="text-xl font-bold text-slate-400 select-none">
                                {name}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
