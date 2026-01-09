"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface InfoCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    watermark: string;
}

export function InfoCard({ icon: Icon, title, description, watermark }: InfoCardProps) {
    return (
        <div className="relative overflow-hidden p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-primary/10 shadow-[0_8px_30px_rgba(45,57,163,0.06)] backdrop-blur-sm group hover:bg-secondary/10 transition-all duration-500 h-full">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Icon className="size-4 sm:size-5" />
                </span>
                <h4 className="text-primary font-bold text-base sm:text-lg font-heading">{title}</h4>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                {description}
            </p>
            <div className="absolute -bottom-6 -right-2 text-[10rem] font-bold text-primary/[0.03] select-none pointer-events-none z-0 font-heading leading-none">
                {watermark}
            </div>
        </div>
    );
}
