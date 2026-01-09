"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BRAND_COLORS } from "@/lib/constants";

const HERO_IMAGES = [
    {
        src: "/hero-solutions.png",
        alt: "Advanced Healthcare Solutions",
        watermark: "Solutions"
    },
    {
        src: "/hero-care-areas.png",
        alt: "Compassionate Care",
        watermark: "Care Areas"
    },
    {
        src: "/hero-who-we-serve.png",
        alt: "Collaborative Healthcare",
        watermark: "Who We Serve"
    }
];

export function HeroSection() {
    const [hoveredCTA, setHoveredCTA] = useState<string | null>(null);
    const [showCopied, setShowCopied] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [direction, setDirection] = useState(0);
    const [progressKey, setProgressKey] = useState(0);

    // Auto-play carousel
    useEffect(() => {
        if (isHovering) return; // Pause on hover

        const timer = setInterval(() => {
            setDirection(1);
            setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
            setProgressKey((prev) => prev + 1);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer);
    }, [isHovering]);

    const handleNext = () => {
        setDirection(1);
        setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        setProgressKey((prev) => prev + 1);
    };

    const handlePrevious = () => {
        setDirection(-1);
        setCurrentImageIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
        setProgressKey((prev) => prev + 1);
    };

    const handleThumbnailClick = (index: number) => {
        setDirection(index > currentImageIndex ? 1 : -1);
        setCurrentImageIndex(index);
        setProgressKey((prev) => prev + 1);
    };

    const handleDotClick = (index: number) => {
        setDirection(index > currentImageIndex ? 1 : -1);
        setCurrentImageIndex(index);
        setProgressKey((prev) => prev + 1);
    };


    return (
        <section className="relative overflow-hidden bg-white pt-4 pb-16 sm:pt-6 sm:pb-16 lg:pt-10 lg:pb-20" id="hero">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-secondary/40 z-0" />

            {/* Dot Pattern Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] opacity-[0.08] [background-size:24px_24px] z-0" />

            {/* Watermark - Left aligned and smaller */}
            <div className="absolute top-4 sm:top-8 left-0 select-none pointer-events-none z-0 overflow-hidden w-full flex justify-start pl-4 sm:pl-8 lg:pl-32">
                <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold text-primary/5 whitespace-nowrap tracking-tight font-heading leading-none">
                    NAVIQURE
                </span>
            </div>

            {/* Wave Background - Reduced height */}
            <div className="absolute bottom-0 left-0 right-0 z-0 overflow-hidden h-32 sm:h-48 lg:h-64 pointer-events-none">
                <svg viewBox="0 0 1440 320" className="w-full h-full block align-bottom" preserveAspectRatio="none">
                    <path
                        fill="#E8F3FF"
                        fillOpacity="1"
                        d="M0,160L48,152C96,144,192,128,288,136C384,144,480,176,576,188C672,200,768,192,864,180C960,168,1056,152,1152,144C1248,136,1344,136,1392,136L1440,136L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                    <path
                        fill="#F0F7FF"
                        fillOpacity="1"
                        d="M0,220L48,228C96,236,192,252,288,262C384,272,480,276,576,268C672,260,768,240,864,236C960,232,1056,244,1152,252C1248,260,1344,264,1392,266L1440,268L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-8 items-center">

                    {/* Text Content - More condensed */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center text-center lg:text-left pt-4 sm:pt-6"
                    >
                        <div className="inline-flex items-center rounded-full border border-primary/10 bg-white/60 backdrop-blur-sm px-3 py-1 text-xs sm:text-sm font-medium text-primary mb-4 sm:mb-5 mx-auto lg:mx-0 w-fit shadow-sm">
                            <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary/40 mr-2 animate-pulse"></span>
                            The Future of Patient Empowerment
                        </div>

                        <h1 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight lg:text-4xl mb-3 sm:mb-4 heading-gradient pb-1 leading-tight">
                            Building the Future of AI Powered Chronic Healthcare in India
                        </h1>

                        <p className="mx-auto lg:mx-0 max-w-xl text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                            NaviQure is transforming India's fragmented health data into actionable insights through content standardization, responsible sharing, and AI-driven intelligence.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 justify-center lg:justify-start relative">
                            {/* Primary CTA - Request Appointment */}
                            <div
                                className="relative group w-full sm:w-auto flex flex-col items-center sm:items-start"
                                onMouseEnter={() => setHoveredCTA('appointment')}
                                onMouseLeave={() => setHoveredCTA(null)}
                            >
                                <Button asChild size="lg" className="mb-2 text-sm sm:text-base px-6 h-10 sm:h-11 bg-primary hover:bg-[#1E247D] shadow-md shadow-primary/20 transition-all hover:scale-[1.02] rounded-full w-full sm:w-auto gap-2 cursor-pointer">
                                    <a
                                        href="mailto:info@naviqure.ai"
                                        onClick={(e) => {
                                            // 1. Copy to clipboard
                                            navigator.clipboard.writeText("info@naviqure.ai");

                                            // 2. Show feedback
                                            setShowCopied(true);
                                            setTimeout(() => setShowCopied(false), 2500);

                                            // 3. Allow default mailto behavior
                                        }}
                                    >
                                        Request Appointment <span className="material-symbols-outlined text-[1.1rem]">arrow_forward</span>
                                    </a>
                                </Button>

                                {/* Smart Hover/Feedback Tagline */}
                                <AnimatePresence mode="wait">
                                    {showCopied ? (
                                        <motion.div
                                            key="copied-feedback"
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            className="absolute top-14 left-0 w-full text-center sm:text-left pointer-events-none"
                                        >
                                            <span className="text-xs font-bold text-green-600 bg-green-50 backdrop-blur-sm px-3 py-1 rounded-full border border-green-200 shadow-sm whitespace-nowrap flex items-center gap-1 w-fit mx-auto sm:mx-0">
                                                <span className="material-symbols-outlined text-[1rem]">check_circle</span>
                                                Email copied to clipboard!
                                            </span>
                                        </motion.div>
                                    ) : hoveredCTA === 'appointment' ? (
                                        <motion.div
                                            key="hover-tagline"
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            className="absolute top-14 left-0 w-full text-center sm:text-left pointer-events-none"
                                        >
                                            <span className="text-xs font-semibold text-primary/80 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/10 shadow-sm whitespace-nowrap">
                                                Start your data-driven care journey today.
                                            </span>
                                        </motion.div>
                                    ) : null}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-primary/60 font-medium">
                            <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[1rem] opacity-80">shield_locked</span> ABHA Ready</div>
                            <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[1rem] opacity-80">vital_signs</span> Clinical Grade</div>
                            <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[1rem] opacity-80">auto_awesome</span> AI Powered</div>
                        </div>
                    </motion.div>

                    {/* Visual Content - Smaller, tighter aspect ratios */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full flex flex-col max-w-lg mx-auto lg:max-w-md"
                    >
                        <div className="relative w-full mt-4 lg:mt-0 p-3 bg-white border border-primary/10 rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(41,54,129,0.2)]">
                            <div
                                className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden group"
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                            >
                                {/* Carousel Content */}
                                <div className="absolute inset-0 z-0">
                                    {HERO_IMAGES.map((image, index) => {
                                        const isActive = index === currentImageIndex;
                                        return (
                                            <motion.div
                                                key={index}
                                                className="absolute inset-0"
                                                initial={false}
                                                animate={{ opacity: isActive ? 1 : 0, zIndex: isActive ? 10 : 0 }}
                                                transition={{ opacity: { duration: 0.8 } }}
                                            >
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    fill
                                                    className="object-cover"
                                                    priority={index === currentImageIndex}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Compact Navigation Arrows - Always Visible */}
                                <button
                                    onClick={handlePrevious}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-primary hover:bg-white transition-all hover:scale-110 active:scale-95 border border-primary/10"
                                    aria-label="Previous image"
                                >
                                    <span className="material-symbols-outlined text-xl">chevron_left</span>
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-primary hover:bg-white transition-all hover:scale-110 active:scale-95 border border-primary/10"
                                    aria-label="Next image"
                                >
                                    <span className="material-symbols-outlined text-xl">chevron_right</span>
                                </button>

                                {/* Compact Dots */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                                    {HERO_IMAGES.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleDotClick(index)}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${index === currentImageIndex ? "w-6 bg-white" : "w-1.5 bg-white/60 hover:bg-white/80"}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
