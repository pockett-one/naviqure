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
        <section className="relative overflow-x-hidden bg-white pt-24 pb-24 sm:pt-28 sm:pb-28 lg:pt-40 lg:pb-40" id="hero">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-secondary/40 z-0" />

            {/* Dot Pattern Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] opacity-[0.08] [background-size:24px_24px] z-0" />

            {/* Watermark */}
            <div className="absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0 overflow-hidden w-full flex justify-center">
                <span className="text-[6rem] sm:text-[10rem] md:text-[18rem] lg:text-[22rem] font-bold text-primary/5 whitespace-nowrap tracking-tight font-heading leading-none">
                    NAVIQURE
                </span>
            </div>

            {/* Wave Background (Bottom) - Two Distinct Color Layers */}
            <div className="absolute bottom-0 left-0 right-0 z-0 overflow-hidden h-64 sm:h-80 lg:h-96 pointer-events-none">
                <svg viewBox="0 0 1440 320" className="w-full h-full block align-bottom" preserveAspectRatio="none">
                    {/* Layer 1: Back Wave - Medium Blue */}
                    <path
                        fill="#E8F3FF"
                        fillOpacity="1"
                        d="M0,160L48,152C96,144,192,128,288,136C384,144,480,176,576,188C672,200,768,192,864,180C960,168,1056,152,1152,144C1248,136,1344,136,1392,136L1440,136L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                    {/* Layer 2: Front Wave - Lightest Blue */}
                    <path
                        fill="#F0F7FF"
                        fillOpacity="1"
                        d="M0,220L48,228C96,236,192,252,288,262C384,272,480,276,576,268C672,260,768,240,864,236C960,232,1056,244,1152,252C1248,260,1344,264,1392,266L1440,268L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-x-hidden">
                <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-6 xl:gap-8 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center text-center lg:text-left"
                    >
                        <div className="inline-flex items-center rounded-full border border-primary/10 bg-white/60 backdrop-blur-sm px-3 py-1 text-sm font-medium text-primary mb-6 mx-auto lg:mx-0 w-fit shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-primary/40 mr-2 animate-pulse"></span>
                            The Future of Patient Empowerment
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight lg:text-5xl mb-4 sm:mb-6 heading-gradient pb-2">
                            Building the Future of AI Powered Chronic Healthcare in India
                        </h1>

                        <p className="mx-auto lg:mx-0 max-w-2xl text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                            NaviQure is transforming India's fragmented health data into actionable insights through content standardization, responsible sharing, and AI-driven intelligence powered by foundation models — creating a transparent, interoperable, and trustworthy chronic care ecosystem.
                        </p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 justify-center lg:justify-start">
                            {/* Primary CTA container */}
                            <div
                                className="relative group w-full sm:w-auto"
                                onMouseEnter={() => setHoveredCTA('get-started')}
                                onMouseLeave={() => setHoveredCTA(null)}
                            >
                                <Button size="lg" className={`text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 bg-primary hover:bg-[${BRAND_COLORS.primaryHover}] shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] rounded-full w-full sm:w-auto gap-2`}>
                                    Get started <span className="material-symbols-outlined text-[1.2rem] sm:text-[1.4rem]">arrow_forward</span>
                                </Button>
                                <AnimatePresence>
                                    {hoveredCTA === 'get-started' && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 8 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="absolute top-16 left-0 right-0 lg:right-auto lg:w-max text-[13px] text-primary/80 mt-2 pointer-events-none"
                                        >
                                            Empower your health journey today
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Secondary CTA container */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setHoveredCTA('appointment')}
                                onMouseLeave={() => setHoveredCTA(null)}
                            >
                                <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 border-primary text-primary hover:bg-primary/5 transition-all hover:scale-[1.02] rounded-full w-full sm:w-auto font-semibold">
                                    Request Appointment
                                </Button>
                                <AnimatePresence>
                                    {hoveredCTA === 'appointment' && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 8 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="absolute top-16 left-0 right-0 lg:right-auto lg:w-48 text-[12px] text-muted-foreground mt-2 pointer-events-none leading-tight"
                                        >
                                            Start your data-driven care journey today
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-primary/60 font-medium">
                            <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[1rem] sm:text-[1.2rem] opacity-80">shield_locked</span> ABHA Ready</div>
                            <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[1rem] sm:text-[1.2rem] opacity-80">vital_signs</span> Clinical Grade</div>
                            <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[1rem] sm:text-[1.2rem] opacity-80">auto_awesome</span> AI Powered</div>
                        </div>
                    </motion.div>

                    {/* Visual Content: Premium Immersive Carousel */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full flex flex-col overflow-hidden"
                        style={{ perspective: "2000px" }}
                    >
                        {/* Main Carousel Container - Fits within bounds */}
                        <div className="relative w-full mt-8 lg:mt-0">
                            <div
                                className="relative w-full aspect-[3/2] sm:aspect-[4/3] lg:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden group"
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                            >
                                {/* Modern 3D Slide Carousel */}
                                <div className="absolute inset-0 z-0" style={{ transformStyle: 'preserve-3d' }}>
                                    {HERO_IMAGES.map((image, index) => {
                                        const isActive = index === currentImageIndex;

                                        return (
                                            <motion.div
                                                key={index}
                                                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                                                initial={false}
                                                animate={{
                                                    opacity: isActive ? 1 : 0,
                                                    zIndex: isActive ? 10 : 0,
                                                }}
                                                transition={{
                                                    opacity: {
                                                        duration: 2.8,
                                                        ease: [0.12, 1, 0.28, 1], // Ultra-gentle ease-out
                                                    }
                                                }}
                                            >
                                                {/* Static border container - no animation */}
                                                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl p-2 sm:p-[11px] bg-white border border-primary/10">
                                                    {/* Image content */}
                                                    <div className="absolute inset-2 sm:inset-[11px] rounded-xl sm:rounded-2xl overflow-hidden">
                                                        <Image
                                                            src={image.src}
                                                            alt={image.alt}
                                                            fill
                                                            className="object-cover"
                                                            priority={index === currentImageIndex}
                                                        />

                                                        {/* Gradient Overlay */}
                                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

                                                        {/* Vignette Effect */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                                                        {/* Placeholder Watermark - Subtle and Visible */}
                                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                                                            <p
                                                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-heading text-white/20 tracking-wide select-none whitespace-nowrap"
                                                                style={{
                                                                    textShadow: '0 2px 8px rgba(0,0,0,0.2)',
                                                                    transform: 'rotate(-45deg)',
                                                                }}
                                                            >
                                                                PLACEHOLDER
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>


                                {/* Modern Navigation Arrows */}
                                <motion.button
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: isHovering ? 1 : 0.6, x: 0 }}
                                    whileHover={{ opacity: 1, scale: 1.15, x: -4 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    onClick={handlePrevious}
                                    className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/98 backdrop-blur-xl shadow-2xl shadow-black/10 flex items-center justify-center text-primary hover:shadow-primary/20 transition-shadow duration-300 pointer-events-auto border border-white/40 touch-manipulation"
                                    aria-label="Previous image"
                                >
                                    <span className="material-symbols-outlined text-[1.8rem] sm:text-[2.2rem] font-bold">chevron_left</span>
                                </motion.button>

                                <motion.button
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: isHovering ? 1 : 0.6, x: 0 }}
                                    whileHover={{ opacity: 1, scale: 1.15, x: 4 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    onClick={handleNext}
                                    className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/98 backdrop-blur-xl shadow-2xl shadow-black/10 flex items-center justify-center text-primary hover:shadow-primary/20 transition-shadow duration-300 pointer-events-auto border border-white/40 touch-manipulation"
                                    aria-label="Next image"
                                >
                                    <span className="material-symbols-outlined text-[1.8rem] sm:text-[2.2rem] font-bold">chevron_right</span>
                                </motion.button>
                            </div>

                            {/* Enhanced Side Thumbnail Navigation */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[calc(100%+1.5rem)] hidden xl:flex flex-col gap-4 z-40">
                                {HERO_IMAGES.map((image, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => handleThumbnailClick(index)}
                                        className={`relative w-20 h-20 rounded-2xl overflow-hidden transition-all duration-500 group/thumb ${index === currentImageIndex
                                            ? "ring-4 ring-primary shadow-2xl shadow-primary/40"
                                            : "ring-2 ring-white/30 hover:ring-primary/50 opacity-50 hover:opacity-100"
                                            }`}
                                        whileHover={{ scale: 1.15, x: 10 }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: index * 0.1,
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 25
                                        }}
                                        aria-label={`View ${image.watermark}`}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                                        />

                                        {/* Overlay */}
                                        <div className={`absolute inset-0 transition-all duration-500 ${index === currentImageIndex
                                            ? "bg-gradient-to-br from-primary/30 to-transparent"
                                            : "bg-black/30 group-hover/thumb:bg-black/10"
                                            }`} />

                                        {/* Active Indicator */}
                                        {index === currentImageIndex && (
                                            <motion.div
                                                layoutId="activeSideThumb"
                                                className="absolute inset-0 border-3 border-white rounded-2xl"
                                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            />
                                        )}

                                        {/* Enhanced Label on Hover */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            whileHover={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white/98 backdrop-blur-xl px-4 py-2 rounded-xl shadow-2xl whitespace-nowrap pointer-events-none border border-white/40"
                                        >
                                            <p className="text-sm font-bold text-primary">
                                                {image.watermark}
                                            </p>
                                        </motion.div>
                                    </motion.button>
                                ))}
                            </div>

                            {/* Enhanced Bottom Thumbnail Navigation - Mobile/Tablet */}
                            <div className="flex xl:hidden gap-2 sm:gap-3 justify-center mt-4 sm:mt-6">
                                {HERO_IMAGES.map((image, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => handleThumbnailClick(index)}
                                        className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-500 ${index === currentImageIndex
                                            ? "ring-2 sm:ring-3 ring-primary shadow-xl sm:shadow-2xl shadow-primary/30 scale-105 sm:scale-110"
                                            : "ring-1 sm:ring-2 ring-white/30 hover:ring-primary/50 opacity-50 hover:opacity-100"
                                            }`}
                                        whileHover={{ y: -6, scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: index * 0.1,
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 25
                                        }}
                                        aria-label={`View ${image.watermark}`}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                        <div className={`absolute inset-0 transition-all duration-500 ${index === currentImageIndex
                                            ? "bg-gradient-to-t from-primary/30 via-transparent to-transparent"
                                            : "bg-gradient-to-t from-black/40 via-transparent to-transparent hover:from-black/20"
                                            }`} />

                                        {index === currentImageIndex && (
                                            <motion.div
                                                layoutId="activeBottomThumb"
                                                className="absolute inset-0 border-3 border-primary rounded-xl"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Modern Progress Indicators */}
                            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-2.5 z-30">
                                {HERO_IMAGES.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleDotClick(index)}
                                        className="relative group/dot"
                                        aria-label={`Go to slide ${index + 1}`}
                                    >
                                        <motion.div
                                            className={`h-2 sm:h-2.5 rounded-full transition-all duration-500 ${index === currentImageIndex
                                                ? "w-10 sm:w-14 bg-white shadow-lg shadow-white/50"
                                                : "w-2 sm:w-2.5 bg-white/50 group-hover/dot:bg-white/80 group-hover/dot:w-3 sm:group-hover/dot:w-4"
                                                }`}
                                            layout
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        >
                                            {index === currentImageIndex && !isHovering && (
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-primary via-primary/90 to-primary rounded-full shadow-md"
                                                    initial={{ width: "0%" }}
                                                    animate={{ width: "100%" }}
                                                    transition={{ duration: 5, ease: "linear" }}
                                                    key={`progress-${currentImageIndex}-${progressKey}`}
                                                />
                                            )}
                                        </motion.div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Text content below carousel */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-6 lg:mt-8 text-center lg:text-left w-full text-base sm:text-lg lg:text-xl font-medium text-primary/80 leading-relaxed"
                        >
                            A patient-first platform for chronic care, where intelligence meets empathy, powered by secure AI and evidence-based guidance.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
