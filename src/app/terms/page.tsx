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
                            Effective Date: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
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
                            Welcome to <span className="text-primary font-bold">NaviQure AI</span>. These Terms of Service ("Terms") govern your access to and use of the platform and services provided by <span className="text-primary font-bold">NaviQure AI Health Tech Private Limited</span> ("NaviQure," "we," "us," or "our"), a company incorporated under the laws of India and headquartered in Mumbai.
                        </p>
                        <p className="text-base text-slate-700 leading-relaxed font-medium mt-3">
                            By accessing our Service, you agree to be bound by these Terms and the Indian Information Technology Act, 2000, and the Digital Personal Data Protection (DPDP) Act, 2023.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                        {/* Left Column */}
                        <div className="space-y-8 flex flex-col">
                            {/* Section 1 */}
                            <section>
                                <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">1</span>
                                    The Service & Medical Disclaimer
                                </h3>
                                <div className="bg-amber-50 rounded-xl border border-amber-100 p-5">
                                    <ul className="space-y-3 text-sm text-amber-800">
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-amber-600 shrink-0">check_small</span>
                                            <span><span className="font-bold text-amber-950">Clinical Intelligence Layer:</span> NaviQure is an AI-driven health intelligence platform. We provide data structuring, longitudinal records, and clinical navigation support.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-amber-600 shrink-0">warning</span>
                                            <span><span className="font-bold text-amber-950">No Medical Practice:</span> NaviQure is a technology platform and does not provide medical diagnoses, treatment, or prescriptions. Our AI-driven insights are for informational purposes to support clinician-led care.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-amber-600 shrink-0">warning</span>
                                            <span><span className="font-bold text-amber-950">Clinician-in-the-Loop:</span> All AI-generated summaries must be reviewed by a registered medical practitioner. <strong className="text-amber-950">Never disregard professional medical advice</strong> based on information provided by the platform.</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 2 */}
                            <section>
                                <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">2</span>
                                    Digital Personal Data Protection (DPDP) & Consent
                                </h3>
                                <div className="bg-slate-50 rounded-xl border border-slate-100 p-5">
                                    <ul className="space-y-3 text-sm text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">Data Principal Rights:</span> In accordance with the DPDP Act 2023, you are the "Data Principal." You have the right to access, correct, or withdraw consent for your personal and sensitive medical data at any time.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">Consent Manager:</span> NaviQure acts as a platform for managing your health data. By using the service, you provide "Specified Consent" for NaviQure to process your clinical data via our AI engines to build your health intelligence profile.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">ABHA Integration:</span> Users may link their Ayushman Bharat Health Account (ABHA). By doing so, you authorize NaviQure to fetch and structure records from the ABDM ecosystem.</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 3 */}
                            <section>
                                <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">3</span>
                                    User Obligations & Safety
                                </h3>
                                <div className="bg-slate-50 rounded-xl border border-slate-100 p-5">
                                    <ul className="space-y-3 text-sm text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">Accurate Information:</span> To ensure AI accuracy, you must provide true and updated clinical records.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-red-400 shrink-0">warning</span>
                                            <span><span className="font-bold text-slate-800">Emergency Use:</span> NaviQure is not an emergency response system. In case of a medical emergency, please contact 102, 108, or your nearest hospital immediately.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">Account Security:</span> Users are responsible for the safety of their login credentials. We implement industry-standard encryption, but your password remains your responsibility.</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                        </div>

                        {/* Right Column */}
                        <div className="space-y-8 flex flex-col">
                            {/* Section 4 */}
                            <section>
                                <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">4</span>
                                    Intellectual Property
                                </h3>
                                <div className="bg-slate-50 rounded-xl border border-slate-100 p-5">
                                    <ul className="space-y-3 text-sm text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">Proprietary Technology:</span> The AI models, clinical navigation logic, and the "NaviQure" brand are the exclusive property of NaviQure AI Health Tech Pvt Ltd, developed by our team of IIT, UCLA, and Microsoft alumni.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-red-400 shrink-0">block</span>
                                            <span><span className="font-bold text-slate-800">Restrictions:</span> You may not copy, modify, or attempt to reverse-engineer any part of the NaviQure AI engine.</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 5 */}
                            <section>
                                <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">5</span>
                                    B2B / B2B2C Enterprise Terms
                                </h3>
                                <div className="bg-slate-50 rounded-xl border border-slate-100 p-5">
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Hospitals, clinics, and corporate partners using NaviQure for their patient populations are subject to specific <span className="font-bold text-slate-800">Data Processing Agreements (DPA)</span> and <span className="font-bold text-slate-800">Service Level Agreements (SLA)</span> that comply with the National Health Authority (NHA) guidelines.
                                    </p>
                                </div>
                            </section>

                            {/* Section 6 */}
                            <section>
                                <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">6</span>
                                    Limitation of Liability
                                </h3>
                                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                                    NaviQure is built with high-scale engineering. However, NaviQure shall not be liable for:
                                </p>
                                <div className="bg-slate-50 rounded-xl border border-slate-100 p-5">
                                    <ul className="space-y-3 text-sm text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span>Errors in third-party medical data provided by hospitals or diagnostic labs.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span>Clinical decisions made by doctors based on the platform's insights.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span>Any indirect or consequential damages arising from the use of the service.</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 7 */}
                            <section className="flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">7</span>
                                    Governing Law & Dispute Resolution
                                </h3>
                                <div className="bg-slate-50 rounded-xl border border-slate-100 p-5 flex-1 flex flex-col justify-center">
                                    <ul className="space-y-3 text-sm text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">gavel</span>
                                            <span><span className="font-bold text-slate-800">Governing Law:</span> These Terms are governed by the laws of <strong className="text-slate-800">India</strong>.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">balance</span>
                                            <span><span className="font-bold text-slate-800">Jurisdiction:</span> Any disputes arising out of these Terms shall be subject to the exclusive jurisdiction of the courts in <strong className="text-slate-800">Mumbai, Maharashtra</strong>.</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Contact - Full Width */}
                    <div className="mt-12 pt-8 border-t border-dashed border-slate-200">
                        <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">8</span>
                                    Grievance Redressal
                                </h3>
                                <p className="text-sm text-muted-foreground">In compliance with the DPDP Act, we have appointed a Grievance Officer. For any data-related concerns, please contact:</p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    <strong>Grievance Officer</strong><br />
                                    NaviQure AI Health Tech Private Limited<br />
                                    Lake Pleasant, Powai, Mumbai.
                                </p>
                            </div>

                            <div className="flex items-center gap-2 relative bg-secondary/5 px-4 py-2 rounded-full border border-primary/5">
                                <span className="material-symbols-outlined text-[1.1rem] text-primary/60">mail</span>
                                <strong className="text-slate-700 text-base">Email:</strong>
                                <a
                                    onClick={(e) => {
                                        navigator.clipboard.writeText("legal@naviqure.ai");
                                        setShowCopied(true);
                                        setTimeout(() => setShowCopied(false), 2000);
                                    }}
                                    className="text-primary text-base font-medium cursor-pointer hover:text-primary/80 transition-colors"
                                >
                                    legal@naviqure.ai
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
