"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        // Handle ChunkLoadError (HMR errors) - auto-reload in development
        if (error.name === 'ChunkLoadError' || error.message.includes('chunk') || error.message.includes('Failed to fetch dynamically imported module')) {
            if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
                // Auto-reload for HMR chunk errors in development
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        }
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);

        // Handle ChunkLoadError specifically - these are usually HMR issues
        if (error.name === 'ChunkLoadError' || error.message.includes('chunk') || error.message.includes('Failed to fetch dynamically imported module')) {
            if (process.env.NODE_ENV === 'development') {
                console.log('ChunkLoadError detected - this is usually a development HMR issue. Reloading...');
                // Don't show error UI for HMR errors, just reload
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
                return;
            }
        }

        // In production, you could send this to an error reporting service
        // Example: Sentry.captureException(error, { extra: errorInfo });
    }

    private handleReset = () => {
        this.setState({ hasError: false, error: null });
        window.location.href = "/";
    };

    public render() {
        if (this.state.hasError) {
            // Don't show error UI for ChunkLoadError in development - it will auto-reload
            if (
                this.state.error &&
                (this.state.error.name === 'ChunkLoadError' ||
                 this.state.error.message.includes('chunk') ||
                 this.state.error.message.includes('Failed to fetch dynamically imported module')) &&
                process.env.NODE_ENV === 'development'
            ) {
                return (
                    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/40 flex items-center justify-center p-4">
                        <div className="text-center">
                            <div className="inline-flex items-center gap-3 text-primary">
                                <span className="material-symbols-outlined text-4xl animate-spin">refresh</span>
                                <span className="text-lg font-semibold">Reloading page...</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-4">
                                HMR chunk update in progress
                            </p>
                        </div>
                    </div>
                );
            }

            return (
                <div className="min-h-screen bg-gradient-to-b from-white to-secondary/40 flex items-center justify-center p-4">
                    <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl border border-primary/10 p-8 sm:p-12">
                        {/* Error Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="h-20 w-20 rounded-full bg-red-50 flex items-center justify-center">
                                <span className="material-symbols-outlined text-5xl text-red-500">error</span>
                            </div>
                        </div>

                        {/* Error Message */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl sm:text-4xl font-bold font-heading text-primary mb-4">
                                Oops! Something went wrong
                            </h1>
                            <p className="text-lg text-muted-foreground mb-2">
                                We encountered an unexpected error. Don't worry, our team has been notified.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Please try refreshing the page or return to the homepage.
                            </p>
                        </div>

                        {/* Error Details (Development Only) */}
                        {process.env.NODE_ENV === "development" && this.state.error && (
                            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl">
                                <p className="text-sm font-bold text-red-900 mb-2">Error Details (Dev Mode):</p>
                                <p className="text-xs text-red-800 font-mono break-all">
                                    {this.state.error.message}
                                </p>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={() => window.location.reload()}
                                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/20"
                            >
                                <span className="material-symbols-outlined text-xl mr-2">refresh</span>
                                Refresh Page
                            </Button>
                            <Button
                                onClick={this.handleReset}
                                variant="outline"
                                className="border-primary text-primary hover:bg-primary/5 rounded-full px-8 py-6 text-base font-semibold"
                            >
                                <span className="material-symbols-outlined text-xl mr-2">home</span>
                                Go to Homepage
                            </Button>
                        </div>

                        {/* Support Contact */}
                        <div className="mt-8 pt-8 border-t border-slate-200 text-center">
                            <p className="text-sm text-muted-foreground mb-2">
                                Need help? Contact our support team:
                            </p>
                            <a
                                href="mailto:info@naviqure.ai"
                                className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                            >
                                <span className="material-symbols-outlined text-lg">mail</span>
                                info@naviqure.ai
                            </a>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
