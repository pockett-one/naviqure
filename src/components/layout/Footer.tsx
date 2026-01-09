"use client";

import Link from "next/link";
import { NAV_LINKS, BRAND_COLORS } from "@/lib/constants";
import { motion } from "framer-motion";
import { SectionDivider } from "@/components/ui/SectionDivider";

// Lucide imports removed in favor of Material Symbols
import { Logo } from "@/components/ui/Logo";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export function Footer() {
    const [showCopied, setShowCopied] = useState(false);
    return (
        <footer className="bg-secondary/30 pt-8 pb-4 relative">
            <SectionDivider className="absolute -top-[0.5px] left-0 z-40" />

            {/* Wave Background Wrapper - Two Distinct Color Layers */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 z-0 h-32">
                    <svg viewBox="0 0 1440 320" className="w-full h-full block align-bottom" preserveAspectRatio="none">
                        {/* Layer 1: Back Wave - Medium Blue */}
                        <path
                            fill="#E8F3FF"
                            fillOpacity="1"
                            d="M0,204L48,196C96,188,192,172,288,176C384,180,480,204,576,216C672,228,768,228,864,216C960,204,1056,180,1152,168C1248,156,1344,156,1392,156L1440,156L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        />
                        {/* Layer 2: Front Wave - Lightest Blue */}
                        <path
                            fill="#F0F7FF"
                            fillOpacity="1"
                            d="M0,232L48,240C96,248,192,264,288,272C384,280,480,280,576,268C672,256,768,232,864,228C960,224,1056,240,1152,248C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        />
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between gap-6 mb-4">

                    {/* Brand Column */}
                    <div className="space-y-4 max-w-lg">
                        <Link href="/" className="flex items-center gap-3">
                            <Logo className="h-8 w-8" />
                            <span className="text-xl font-bold font-heading text-primary tracking-tight">NaviQure AI</span>
                        </Link>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-medium">
                            <div className="flex items-center gap-2 relative">
                                <span className="material-symbols-outlined text-[1.1rem] text-primary/60">mail</span>
                                <a
                                    href="mailto:info@naviqure.ai"
                                    onClick={(e) => {
                                        navigator.clipboard.writeText("info@naviqure.ai");
                                        setShowCopied(true);
                                        setTimeout(() => setShowCopied(false), 2000);
                                    }}
                                    className="hover:text-primary transition-colors cursor-pointer"
                                >
                                    info@naviqure.ai
                                </a>
                                <AnimatePresence>
                                    {showCopied && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, x: '-50%' }}
                                            animate={{ opacity: 1, y: 0, x: '-50%' }}
                                            exit={{ opacity: 0, y: 10, x: '-50%' }}
                                            className="absolute bottom-full left-1/2 mb-2 bg-slate-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap pointer-events-none"
                                        >
                                            Copied to clipboard!
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <span className="hidden sm:inline-block text-primary/40 font-bold">•</span>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[1.1rem] text-primary/60">location_on</span>
                                <a
                                    href="https://maps.app.goo.gl/q74UgswfncajS3m88"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors"
                                >
                                    Powai, Mumbai, MH
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div className="text-left md:text-right flex items-center md:items-end">
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-medium">
                            <Link href="/privacy" className="text-primary/70 hover:text-primary transition-colors">Privacy Policy</Link>
                            <span className="text-primary/40 font-bold">•</span>
                            <Link href="/terms" className="text-primary/70 hover:text-primary transition-colors">Terms of Service</Link>
                            <span className="text-primary/40 font-bold">•</span>
                            <Link href="#" className="text-primary/70 hover:text-primary transition-colors">Business Associate Agreement</Link>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} NaviQure AI. All rights reserved.</p>
                    <div className="flex items-center gap-4 mt-2 md:mt-0 font-medium">
                        <p>HIPAA Compliant</p>
                        <span className="text-primary/40 font-bold">•</span>
                        <p>ABHA Ready</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
