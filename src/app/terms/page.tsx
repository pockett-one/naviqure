"use client";

import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function TermsPage() {
    const [showCopied, setShowCopied] = useState(false);

    return (
        <main className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-white border-b border-primary/5 pt-12 pb-6">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <Breadcrumb items={[{ label: "Terms of Service", href: "/terms" }]} />

                    <div className="mt-4">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-2">
                            Legal & Compliance
                        </h2>
                        <h1 className="text-3xl sm:text-4xl font-bold font-heading heading-gradient pb-2 tracking-tight">
                            Terms of Service
                        </h1>
                        <p className="text-muted-foreground text-sm mt-1">
                            Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-8">
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-primary/5 shadow-sm">
                    {/* Introduction - Full Width */}
                    <div className="mb-8 p-6 bg-secondary/5 rounded-xl border border-primary/5">
                        <p className="text-base text-slate-700 leading-relaxed font-medium">
                            Welcome to <span className="text-primary font-bold">NaviQure</span>. By accessing or using our platform, you agree to be bound by these Terms of Service. Please read them carefully. If you do not agree, you may not use our services.
                        </p>
                    </div>

                    {/* Medical Disclaimer - Full Width */}
                    <div className="mb-12 p-5 bg-amber-50 rounded-xl border border-amber-100">
                        <h3 className="text-lg font-bold text-amber-900 font-heading mb-2 flex items-center gap-2">
                            <span className="material-symbols-outlined text-amber-600">warning</span>
                            Medical Disclaimer
                        </h3>
                        <p className="text-sm text-amber-800 leading-relaxed font-medium">
                            NaviQure is a technology platform, not a medical provider. Insights and summaries are for informational purposes only. <strong className="text-amber-950">Always seek professional medical advice.</strong> Never disregard professional advice because of something you have read on NaviQure.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left Column */}
                        <div className="space-y-8">
                            {/* Section 1: User Accounts */}
                            <section>
                                <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">1</span>
                                    User Accounts & Security
                                </h3>
                                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                                    <p className="text-base text-slate-600 leading-relaxed mb-3">
                                        You are responsible for maintaining the confidentiality of your account credentials.
                                    </p>
                                    <ul className="text-sm text-slate-500 space-y-2 list-disc pl-4">
                                        <li>Notify us immediately of any unauthorized use.</li>
                                        <li>You are responsible for all activities under your account.</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 3: Intellectual Property */}
                            <section>
                                <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">3</span>
                                    Intellectual Property
                                </h3>
                                <p className="text-sm text-slate-600 mb-2 leading-relaxed">
                                    All rights reserved by NaviQure.
                                </p>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        The platform, including software, designs, text, and graphics, is protected by copyright laws. You may not copy, modify, distribute, or reverse-engineer any part of our services.
                                    </p>
                                </div>
                            </section>


                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            {/* Section 2: Acceptable Use */}
                            <section>
                                <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">2</span>
                                    Acceptable Use
                                </h3>
                                <div className="bg-slate-50 rounded-xl border border-slate-100 p-5">
                                    <p className="text-sm text-slate-600 mb-3 font-medium">You agree NOT to:</p>
                                    <ul className="space-y-3 text-sm text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-red-400 shrink-0">block</span>
                                            <span>Upload false, misleading, or illegal content.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-red-400 shrink-0">block</span>
                                            <span>Violate privacy or IP rights of others.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-red-400 shrink-0">block</span>
                                            <span>Distribute viruses or attack our infrastructure.</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* Limitation of Liability */}
                            <section>
                                <h3 className="text-lg font-bold text-primary font-heading mb-2">Limitation of Liability</h3>
                                <p className="text-sm text-slate-600 p-4 bg-slate-50 rounded-lg border border-slate-100 leading-relaxed">
                                    To the maximum extent permitted by law, NaviQure shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
                                </p>
                            </section>

                        </div>
                    </div>

                    {/* Governing Law - Full Width */}
                    <div className="mt-8 mb-12">
                        <section className="bg-slate-50 rounded-xl border border-slate-100 p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-primary font-heading mb-2">Governing Law</h3>
                                <p className="text-base text-slate-600 leading-relaxed">
                                    These Terms are governed by the laws of <strong>India</strong>. Any disputes are subject to the exclusive jurisdiction of courts in <strong>Mumbai</strong>.
                                </p>
                            </div>
                            <span className="material-symbols-outlined text-slate-300 text-4xl hidden sm:block">gavel</span>
                        </section>
                    </div>

                    {/* Contact - Full Width */}
                    <div className="mt-12 pt-8 border-t border-dashed border-slate-200">
                        <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-primary font-heading mb-1">Questions?</h3>
                                <p className="text-sm text-muted-foreground">Contact our legal team for clarifications.</p>
                            </div>

                            <div className="flex items-center gap-2 relative bg-secondary/5 px-4 py-2 rounded-full border border-primary/5">
                                <span className="material-symbols-outlined text-[1.1rem] text-primary/60">mail</span>
                                <strong className="text-slate-700 text-sm">Email:</strong>
                                <a
                                    onClick={(e) => {
                                        navigator.clipboard.writeText("info@naviqure.ai");
                                        setShowCopied(true);
                                        setTimeout(() => setShowCopied(false), 2000);
                                    }}
                                    className="text-primary font-medium cursor-pointer hover:text-primary/80 transition-colors"
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
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
