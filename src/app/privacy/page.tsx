"use client";

import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PrivacyPage() {
    const [showCopied, setShowCopied] = useState(false);

    return (
        <main className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-white border-b border-primary/5 pt-12 pb-6">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <Breadcrumb items={[{ label: "Privacy Policy", href: "/privacy" }]} />

                    <div className="mt-4">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-2">
                            Legal & Compliance
                        </h2>
                        <h1 className="text-3xl sm:text-4xl font-bold font-heading heading-gradient pb-2 tracking-tight">
                            Privacy Policy
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
                            At <span className="text-primary font-bold">NaviQure</span>, we are committed to protecting your personal data and respecting your privacy. This policy complies with the <span className="font-bold">Digital Personal Data Protection (DPDP) Act, 2023</span>, and ensures your health data is handled with the highest standards of security.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left Column */}
                        <div className="space-y-8">
                            {/* Section 1 */}
                            <section>
                                <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">1</span>
                                    Information We Collect
                                </h3>
                                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                                    We collect essential data to provide digital healthcare services, including:
                                </p>
                                <div className="space-y-3">
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <h4 className="text-base font-bold text-slate-800 mb-1">Identity & Contact</h4>
                                        <p className="text-sm text-slate-500">Name, age, gender, email, phone, address.</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <h4 className="text-base font-bold text-slate-800 mb-1">Health Data</h4>
                                        <p className="text-sm text-slate-500">Medical history, prescriptions, diagnostic reports (via ABHA/NDHM).</p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 3 */}
                            <section>
                                <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">3</span>
                                    User Rights (DPDP Act)
                                </h3>
                                <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                                    <ul className="space-y-3 text-sm text-slate-600">
                                        <li className="flex gap-2">
                                            <span className="font-bold text-slate-800 min-w-[120px]">Right to Access:</span>
                                            <span>Request a summary of your processed data.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="font-bold text-slate-800 min-w-[120px]">Right to Correction:</span>
                                            <span>Correct inaccurate or misleading data.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="font-bold text-slate-800 min-w-[120px]">Right to Erasure:</span>
                                            <span>Request deletion of data (subject to legal retention).</span>
                                        </li>
                                    </ul>
                                    <div className="mt-4 pt-4 border-t border-slate-200 relative z-10">
                                        <div className="text-sm text-slate-500 flex items-center gap-1 flex-wrap">
                                            To exercise these rights, contact
                                            <span className="relative inline-flex items-center">
                                                <a
                                                    onClick={(e) => {
                                                        navigator.clipboard.writeText("info@naviqure.ai");
                                                        setShowCopied(true);
                                                        setTimeout(() => setShowCopied(false), 2000);
                                                    }}
                                                    className="text-primary font-bold hover:text-primary/80 transition-colors cursor-pointer"
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
                                            </span>
                                            .
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            {/* Section 2 */}
                            <section>
                                <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">2</span>
                                    Purpose of Processing
                                </h3>
                                <div className="bg-slate-50 rounded-xl border border-slate-100 p-5">
                                    <ul className="space-y-3 text-sm text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span>To facilitate health record retrieval and organization.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span>To generate AI-driven clinical insights.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span>To communicate updates and security alerts.</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 4 & 5 */}
                            <div className="grid gap-6">
                                <section>
                                    <h3 className="text-lg font-bold text-primary font-heading mb-2">Data Sharing</h3>
                                    <p className="text-sm text-slate-600 mb-2">We do not sell data. We share only with:</p>
                                    <ul className="text-sm text-slate-500 space-y-2 list-disc pl-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                        <li>Authorized Healthcare Providers</li>
                                        <li>Trusted Technical Service Providers</li>
                                        <li>Legal Authorities (when mandated)</li>
                                    </ul>
                                </section>
                                <section>
                                    <h3 className="text-lg font-bold text-primary font-heading mb-2">Security</h3>
                                    <p className="text-sm text-slate-600 p-4 bg-slate-50 rounded-lg border border-slate-100">
                                        We use encryption in transit/at rest and strict access controls. Our platform is <strong>HIPAA</strong> and <strong>NDHM</strong> compliant.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>

                    {/* Contact - Full Width */}
                    <div className="mt-12 pt-8 border-t border-dashed border-slate-200">
                        <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-primary font-heading mb-1">Contact DPO</h3>
                                <p className="text-sm text-muted-foreground">For any privacy concerns or data requests.</p>
                            </div>

                            <div className="flex items-center gap-2 relative bg-secondary/5 px-4 py-2 rounded-full border border-primary/5">
                                <span className="material-symbols-outlined text-[1.1rem] text-primary/60">mail</span>
                                <strong className="text-slate-700 text-base">Email:</strong>
                                <a
                                    onClick={(e) => {
                                        navigator.clipboard.writeText("info@naviqure.ai");
                                        setShowCopied(true);
                                        setTimeout(() => setShowCopied(false), 2000);
                                    }}
                                    className="text-primary text-base font-medium cursor-pointer hover:text-primary/80 transition-colors"
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
