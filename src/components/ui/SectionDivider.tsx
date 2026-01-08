"use client";

import { motion } from "framer-motion";
import { BRAND_COLORS } from "@/lib/constants";

interface SectionDividerProps {
    className?: string;
}

export function SectionDivider({ className }: SectionDividerProps) {
    return (
        <div className={`w-full h-[2.5px] pointer-events-none ${className}`}>
            {/* ECG Spike at extreme left */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
                <svg
                    width="120"
                    height="40"
                    viewBox="0 0 120 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary/30 overflow-visible"
                >
                    <motion.path
                        d="M0 20 L40 20 L45 5 L52 35 L58 20 L120 20"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </svg>
            </div>

            {/* The border line - appears after spike animation completes */}
            <motion.div
                className="absolute top-1/2 -translate-y-1/2 left-[120px] right-0 h-full bg-primary/30 origin-left"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            />
        </div>
    );
}
