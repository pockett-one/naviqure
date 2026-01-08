"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BRAND_COLORS } from "@/lib/constants";

interface CookiePreferences {
    necessary: boolean;
    functional: boolean;
    analytics: boolean;
}

const COOKIE_CATEGORIES = [
    {
        id: "necessary" as const,
        title: "Strictly Necessary Cookies",
        description: "Essential for the website to function. These cookies enable core functionality such as security, authentication, and session management. They cannot be disabled.",
        required: true,
    },
    {
        id: "functional" as const,
        title: "Functional Cookies",
        description: "Enable personalized features like language preferences, UI customization, and accessibility settings to enhance your experience.",
        required: false,
    },
    {
        id: "analytics" as const,
        title: "Analytics Cookies",
        description: "Help us understand how you interact with our website through anonymized data collection, allowing us to improve performance and user experience.",
        required: false,
    },
];

export function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>({
        necessary: true,
        functional: false,
        analytics: false,
    });

    useEffect(() => {
        // Check if user has already made a choice
        const savedPreferences = localStorage.getItem("naviqure_cookie_consent");
        if (!savedPreferences) {
            // Delay showing banner slightly for better UX
            setTimeout(() => setShowBanner(true), 1000);
        }
    }, []);

    const savePreferences = (prefs: CookiePreferences) => {
        localStorage.setItem("naviqure_cookie_consent", JSON.stringify(prefs));
        setShowBanner(false);
        setShowModal(false);
    };

    const handleAcceptAll = () => {
        const allAccepted: CookiePreferences = {
            necessary: true,
            functional: true,
            analytics: true,
        };
        savePreferences(allAccepted);
    };

    const handleRejectAll = () => {
        const onlyNecessary: CookiePreferences = {
            necessary: true,
            functional: false,
            analytics: false,
        };
        savePreferences(onlyNecessary);
    };

    const handleCustomize = () => {
        setShowModal(true);
    };

    const handleSaveCustom = () => {
        savePreferences(preferences);
    };

    const handleToggle = (category: keyof CookiePreferences) => {
        if (category === "necessary") return; // Cannot toggle necessary cookies
        setPreferences((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    return (
        <>
            {/* Cookie Banner */}
            <AnimatePresence>
                {showBanner && !showModal && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
                    >
                        <div className="container mx-auto max-w-5xl">
                            <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary/10 p-5 sm:p-6">
                                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
                                    {/* Content */}
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-[1.5rem]">cookie</span>
                                            <h3 className="text-base sm:text-lg font-semibold text-primary font-heading">
                                                Cookie Policy
                                            </h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            We use cookies to enhance your experience and analyze site traffic.
                                            See our{" "}
                                            <Link
                                                href="#"
                                                className="text-primary hover:underline font-medium"
                                            >
                                                Privacy Policy
                                            </Link>.
                                        </p>
                                    </div>

                                    {/* Actions - Stacked on mobile, side-by-side on desktop */}
                                    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2 w-full lg:w-auto">
                                        <button
                                            onClick={handleRejectAll}
                                            className="px-4 py-2.5 text-sm font-semibold text-primary border-2 border-primary/20 rounded-full hover:bg-primary/5 transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap"
                                        >
                                            Reject All
                                        </button>
                                        <button
                                            onClick={handleCustomize}
                                            className="px-4 py-2.5 text-sm font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary/5 transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap"
                                        >
                                            Customize
                                        </button>
                                        <button
                                            onClick={handleAcceptAll}
                                            className="px-4 py-2.5 text-sm font-semibold text-white bg-primary rounded-full hover:bg-[#1E247D] transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20 whitespace-nowrap"
                                        >
                                            Accept All
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Settings Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
                        >
                            {/* Modal Header */}
                            <div className="bg-gradient-to-r from-primary to-primary/90 p-6 text-white">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-[2rem]">settings</span>
                                        <h2 className="text-xl sm:text-2xl font-bold font-heading">
                                            Cookie Preferences
                                        </h2>
                                    </div>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                        aria-label="Close modal"
                                    >
                                        <span className="material-symbols-outlined text-[1.5rem]">close</span>
                                    </button>
                                </div>
                                <p className="mt-2 text-sm text-white/90">
                                    Manage your cookie preferences. You can enable or disable different types of cookies below.
                                </p>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                                <div className="space-y-6">
                                    {COOKIE_CATEGORIES.map((category) => (
                                        <div
                                            key={category.id}
                                            className="border border-gray-200 rounded-xl p-4 hover:border-primary/30 transition-colors"
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <h3 className="text-base font-semibold text-gray-900">
                                                            {category.title}
                                                        </h3>
                                                        {category.required && (
                                                            <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                                                                Always Active
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                                        {category.description}
                                                    </p>
                                                </div>

                                                {/* Toggle Switch */}
                                                <button
                                                    onClick={() => handleToggle(category.id)}
                                                    disabled={category.required}
                                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${preferences[category.id]
                                                        ? "bg-primary"
                                                        : "bg-gray-300"
                                                        } ${category.required ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                                                    aria-label={`Toggle ${category.title}`}
                                                >
                                                    <span
                                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${preferences[category.id] ? "translate-x-6" : "translate-x-1"
                                                            }`}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="border-t border-gray-200 p-6 bg-gray-50">
                                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="px-6 py-2.5 text-sm font-semibold text-gray-700 border-2 border-gray-300 rounded-full hover:bg-gray-100 transition-all"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSaveCustom}
                                        className="px-6 py-2.5 text-sm font-semibold text-white bg-primary rounded-full hover:bg-[#1E247D] transition-all shadow-lg shadow-primary/20"
                                    >
                                        Save Preferences
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
