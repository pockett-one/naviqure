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
                            At <span className="text-primary font-bold">NaviQure AI Health Tech Private Limited</span>, we treat medical data with the highest level of confidentiality and technical rigor. This policy outlines our commitment to your data privacy in accordance with Indian laws.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                        {/* Left Column */}
                        <div className="space-y-8 flex flex-col">
                            {/* Section 1 */}
                            <section>
                                <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">1</span>
                                    Regulatory Compliance
                                </h3>
                                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                                    NaviQure is architected to be "Privacy-First." We strictly adhere to:
                                </p>
                                <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                                    <ul className="space-y-3 text-sm text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">Digital Personal Data Protection (DPDP) Act, 2023</span></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">National Digital Health Mission (NDHM)</span> / Ayushman Bharat Digital Mission (ABDM)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</span></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">International Best Practices:</span> While focusing on India, our security protocols are aligned with HIPAA-grade encryption standards to ensure global-level data safety.</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 2 */}
                            <section>
                                <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">2</span>
                                    Data We Collect (The "Data Principal")
                                </h3>
                                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                                    As the "Data Principal" under Indian law, you provide us with:
                                </p>
                                <div className="space-y-3">
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <h4 className="text-base font-bold text-slate-800 mb-1">Personal Information</h4>
                                        <p className="text-sm text-slate-500">Name, age, contact details, and ABHA ID.</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <h4 className="text-base font-bold text-slate-800 mb-1">Sensitive Personal Data</h4>
                                        <p className="text-sm text-slate-500">Medical history, clinical reports, prescriptions, and imaging files.</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <h4 className="text-base font-bold text-slate-800 mb-1">Consent Logs</h4>
                                        <p className="text-sm text-slate-500">Digital records of the permissions you grant us.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 4 */}
                            <section>
                                <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">4</span>
                                    Consent Management
                                </h3>
                                <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                                    <ul className="space-y-3 text-sm text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">Specified Consent:</span> We only process data for which you have given clear, affirmative consent.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">Right to Withdraw:</span> You may withdraw your consent at any time via the NaviQure app settings.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">Right to Erasure:</span> In line with the "Right to be Forgotten," you can request the permanent deletion of your data from our servers.</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8 flex flex-col">
                            {/* Section 3 */}
                            <section>
                                <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">3</span>
                                    Purpose of Processing (The AI Intelligence Layer)
                                </h3>
                                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                                    We process your data via our AI-driven platform for specific, consented purposes:
                                </p>
                                <div className="bg-slate-50 rounded-xl border border-slate-100 p-5">
                                    <ul className="space-y-3 text-sm text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">Longitudinal Record Creation:</span> Structuring fragmented health data into a single, intelligent timeline.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">Clinical Navigation:</span> Providing AI-driven summaries to help you and your caregivers navigate chronic care.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">Consent-Based Sharing:</span> Securely sharing specific insights with our medical board (e.g., Major (Dr.) Shrijit Nair or Dr. Kriti Hegde) for clinical validation.</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 5 */}
                            <section>
                                <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">5</span>
                                    Data Security & Storage
                                </h3>
                                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                                    Led by an engineering team from IIT, Adobe, and Microsoft, we employ:
                                </p>
                                <div className="bg-slate-50 rounded-xl border border-slate-100 p-5">
                                    <ul className="space-y-3 text-sm text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">End-to-End Encryption:</span> Data is encrypted at rest (AES-256) and in transit (TLS 1.3).</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">Local Storage:</span> In compliance with Indian data localization preferences, all primary health data is stored on secure servers within India.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">Access Control:</span> Only authorized clinical personnel can view your identifiable health information.</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 6 */}
                            <section className="flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-primary font-heading mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">6</span>
                                    Third-Party Sharing
                                </h3>
                                <p className="text-sm text-slate-600 mb-4 leading-relaxed">NaviQure does not sell your personal health data to third-party marketing or pharmaceutical companies. Data is only shared with:</p>
                                <div className="bg-slate-50 rounded-xl border border-slate-100 p-5 flex-1">
                                    <ul className="text-sm text-slate-600 space-y-3">
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">Hospitals/Clinics:</span> Only when you are part of a B2B2C program through your provider.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[1.1rem] text-primary/60 shrink-0">check_small</span>
                                            <span><span className="font-bold text-slate-800">Government/ABDM:</span> For the purpose of linking and fetching records via your ABHA ID.</span>
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
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs shrink-0">7</span>
                                    Grievance Redressal
                                </h3>
                                <p className="text-sm text-muted-foreground">In accordance with the DPDP Act, we have a dedicated officer to handle your privacy concerns.</p>
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
