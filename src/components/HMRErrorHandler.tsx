"use client";

import { useEffect } from "react";

/**
 * Handles HMR (Hot Module Replacement) chunk load errors gracefully
 * This is a development-only component that auto-recovers from Turbopack HMR errors
 */
export function HMRErrorHandler() {
    useEffect(() => {
        // Only run in development
        if (process.env.NODE_ENV !== "development") {
            return;
        }

        const handleChunkError = (event: ErrorEvent) => {
            const error = event.error || event.message;
            const errorString = error?.toString() || "";

            // Check if it's a chunk load error
            if (
                errorString.includes("ChunkLoadError") ||
                errorString.includes("chunk") ||
                errorString.includes("Failed to fetch dynamically imported module") ||
                errorString.includes("Failed to load chunk") ||
                errorString.includes("turbopack")
            ) {
                console.log("HMR ChunkLoadError detected - auto-reloading...");
                event.preventDefault();
                
                // Reload after a short delay to allow the dev server to catch up
                setTimeout(() => {
                    window.location.reload();
                }, 500);
            }
        };

        const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
            const reason = event.reason?.toString() || "";

            // Check if it's a chunk load error
            if (
                reason.includes("ChunkLoadError") ||
                reason.includes("chunk") ||
                reason.includes("Failed to fetch dynamically imported module") ||
                reason.includes("Failed to load chunk") ||
                reason.includes("turbopack")
            ) {
                console.log("HMR ChunkLoadError in promise rejection - auto-reloading...");
                event.preventDefault();
                
                // Reload after a short delay
                setTimeout(() => {
                    window.location.reload();
                }, 500);
            }
        };

        // Listen for unhandled errors
        window.addEventListener("error", handleChunkError);
        window.addEventListener("unhandledrejection", handleUnhandledRejection);

        return () => {
            window.removeEventListener("error", handleChunkError);
            window.removeEventListener("unhandledrejection", handleUnhandledRejection);
        };
    }, []);

    return null;
}
