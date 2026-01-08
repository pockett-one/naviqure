"use client";

import Link from "next/link";
import { NAV_LINKS, BRAND_COLORS } from "@/lib/constants";
import { motion } from "framer-motion";
import { SectionDivider } from "@/components/ui/SectionDivider";

// Lucide imports removed in favor of Material Symbols
import { Logo } from "@/components/ui/Logo";

export function Footer() {
    return (
        <footer className="bg-secondary/30 pt-16 pb-8 relative">
            <SectionDivider className="absolute -top-[0.5px] left-0 z-40" />

            {/* Wave Background Wrapper - Three Distinct Color Layers */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 z-0 h-64">
                    <svg viewBox="0 0 1440 320" className="w-full h-full block align-bottom" preserveAspectRatio="none">
                        {/* Layer 1: Back Wave - Darkest Blue - TEMPORARILY HIDDEN */}
                        {/* <path
                            fill="#D4E7FF"
                            fillOpacity="1"
                            d="M0,140L48,156C96,172,192,204,288,208C384,212,480,188,576,168C672,148,768,132,864,140C960,148,1056,180,1152,192C1248,204,1344,196,1392,192L1440,188L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        /> */}
                        {/* Layer 2: Middle Wave - Medium Blue */}
                        <path
                            fill="#E8F3FF"
                            fillOpacity="1"
                            d="M0,204L48,196C96,188,192,172,288,176C384,180,480,204,576,216C672,228,768,228,864,216C960,204,1056,180,1152,168C1248,156,1344,156,1392,156L1440,156L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        />
                        {/* Layer 3: Front Wave - Lightest Blue */}
                        <path
                            fill="#F0F7FF"
                            fillOpacity="1"
                            d="M0,232L48,240C96,248,192,264,288,272C384,280,480,280,576,268C672,256,768,232,864,228C960,224,1056,240,1152,248C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        />
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">

                    {/* Brand Column */}
                    <div className="space-y-4 max-w-sm">
                        <Link href="/" className="flex items-center gap-3">
                            <Logo className="h-10 w-10" />
                            <span className="text-2xl font-bold font-heading text-primary tracking-tight">NaviQure AI</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            Intelligence for a Healthier Tomorrow.
                        </p>
                        <div className="space-y-2 text-xs text-muted-foreground font-medium">
                            <p className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[1.2rem] text-primary/60">mail</span>
                                <a href="mailto:hello@naviqure.ai" className="hover:text-primary transition-colors">hello@naviqure.ai</a>
                            </p>
                            <p className="flex items-center gap-2 text-left">
                                <span className="material-symbols-outlined text-[1.2rem] text-primary/60">location_on</span>
                                <a
                                    href="https://maps.app.goo.gl/q74UgswfncajS3m88"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors"
                                >
                                    Lake Homes, Powai, Mumbai, MH.
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div className="text-left md:text-right">
                        <ul className="space-y-3 text-sm font-medium">
                            <li><Link href="#" className="text-primary/70 hover:text-primary transition-colors">Privacy Policy (DPDP)</Link></li>
                            <li><Link href="#" className="text-primary/70 hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="text-primary/70 hover:text-primary transition-colors">Business Associate Agreement (BAA)</Link></li>
                            <li><Link href="#" className="text-primary/70 hover:text-primary transition-colors">ABHA Consent Manager</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} NaviQure AI. All rights reserved.</p>
                    <div className="flex items-center gap-4 mt-4 md:mt-0 font-medium">
                        <p>HIPAA Compliant</p>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <p>ABHA Ready</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
