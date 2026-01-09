"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-muted bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-lg shadow-primary/5 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center">

                    {/* Logo area */}
                    <div className="flex-1 flex items-center justify-start">
                        <Link href="/" className="flex items-center gap-3 group">
                            <Logo className="h-10 w-10 transition-transform" />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold font-heading text-primary tracking-tight leading-none group-hover:text-primary/80 transition-colors">NaviQure AI</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-muted-foreground font-medium tracking-wide group-hover:text-primary/60 transition-colors">Towards Better Health and Tomorrow</span>
                                    <svg width="24" height="12" viewBox="0 0 24 12" className="text-primary/40">
                                        <motion.path
                                            d="M0 6 H4 L6 2 L8 10 L10 6 H24"
                                            fill="transparent"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "linear",
                                                times: [0, 0.1, 0.8, 1]
                                            }}
                                        />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-2">
                        {NAV_LINKS.map((link) => (
                            <div
                                key={link.label}
                                className="relative py-2"
                                onMouseEnter={() => 'subLinks' in link && setHoveredLink(link.label)}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-[15px] font-medium transition-all duration-300 flex items-center gap-1",
                                        pathname === link.href
                                            ? "bg-secondary text-primary shadow-sm ring-1 ring-primary/10"
                                            : "text-primary hover:bg-muted hover:text-primary/80"
                                    )}
                                >
                                    {link.label}
                                    {'subLinks' in link && (
                                        <span className={cn("material-symbols-outlined text-[1.2rem] transition-transform duration-300", hoveredLink === link.label && "rotate-180")}>
                                            expand_more
                                        </span>
                                    )}
                                </Link>

                                {'subLinks' in link && (
                                    <AnimatePresence>
                                        {hoveredLink === link.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 z-50"
                                            >
                                                <div className="bg-white rounded-2xl border border-border shadow-2xl shadow-primary/10 p-2 overflow-hidden">
                                                    {link.subLinks.map((sub) => (
                                                        <Link
                                                            key={sub.label}
                                                            href={sub.href}
                                                            className="block px-4 py-2.5 text-sm font-medium text-primary hover:bg-accent transition-colors rounded-xl"
                                                        >
                                                            {sub.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Contact / CTA */}
                    <div className="flex-1 hidden md:flex items-center justify-end">
                        <div className="hidden lg:flex items-center gap-2 bg-primary text-white border border-primary px-4 py-2 rounded-full shadow-md">
                            <span className="material-symbols-outlined text-[1.3rem]">verified_user</span>
                            <span className="text-xs font-bold whitespace-nowrap uppercase tracking-wider">HIPAA & ABHA Compliant</span>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden flex items-center text-primary">
                        {!mounted ? (
                            <Button variant="ghost" size="icon" className="h-9 w-9 text-primary hover:bg-muted">
                                <span className="material-symbols-outlined text-[1.8rem]">menu</span>
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        ) : (
                            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-9 w-9 text-primary hover:bg-muted">
                                        <span className="material-symbols-outlined text-[1.8rem]">menu</span>
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-border bg-white">
                                    <nav className="flex flex-col gap-2 mt-8">
                                        {NAV_LINKS.map((link) => (
                                            <div key={link.label} className="flex flex-col">
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="text-lg font-semibold text-primary hover:bg-muted px-4 py-2 rounded-lg transition-colors"
                                                >
                                                    {link.label}
                                                </Link>
                                                {'subLinks' in link && (
                                                    <div className="flex flex-col ml-4 border-l border-border mt-1 mb-2">
                                                        {link.subLinks.map((sub) => (
                                                            <Link
                                                                key={sub.label}
                                                                href={sub.href}
                                                                onClick={() => setIsOpen(false)}
                                                                className="text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted px-4 py-2 rounded-lg transition-colors"
                                                            >
                                                                {sub.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                        <div className="h-px bg-muted my-4" />
                                        <div className="flex items-center gap-3 bg-accent/50 border border-border px-4 py-2.5 rounded-xl mb-2">
                                            <span className="material-symbols-outlined text-[1.4rem] text-primary">verified_user</span>
                                            <span className="text-xs font-bold text-primary uppercase tracking-tight">HIPAA & ABHA Compliant</span>
                                        </div>
                                        <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full font-semibold shadow-lg shadow-primary/10">Sign In</Button>
                                    </nav>
                                </SheetContent>
                            </Sheet>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
