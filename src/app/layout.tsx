import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { HMRErrorHandler } from "@/components/HMRErrorHandler";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: 'swap', // Swap to custom font when loaded
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'arial'],
  weight: ['400', '500', '600', '700'],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap', // Swap to custom font when loaded
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'arial'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://naviqure.ai'),
  title: {
    default: "NaviQure AI | AI Powered Chronic Healthcare in India",
    template: "%s | NaviQure AI"
  },
  description: "Transform healthcare data into actionable intelligence with AI-driven analytics. ABHA compliant solution for chronic disease management and preventive care in India.",
  keywords: ["AI healthcare India", "Chronic disease management", "Preventive healthcare AI", "ABHA compliant", "Electronic Health Records", "NaviQure", "Health analytics India"],
  authors: [{ name: "NaviQure AI", url: "https://naviqure.ai" }],
  creator: "NaviQure AI",
  publisher: "NaviQure AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "NaviQure AI | AI Powered Chronic Healthcare in India",
    description: "Transform healthcare data into actionable intelligence with AI-driven analytics. Revolutionizing chronic care management with predictive insights.",
    url: 'https://naviqure.ai',
    siteName: 'NaviQure AI',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/hero-solutions.png',
        width: 1200,
        height: 630,
        alt: 'NaviQure AI - Healthcare Intelligence Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "NaviQure AI | Next-Gen Healthcare Intelligence",
    description: "Transforming Indian healthcare with AI-driven chronic disease management and predictive analytics.",
    images: ['/hero-solutions.png'],
    creator: '@naviqure',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://naviqure.ai',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Material Symbols - let Google Fonts stylesheet handle font loading automatically */}
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" 
        />
        {/* Font loading optimization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if ('fonts' in document) {
                  Promise.all([
                    document.fonts.load('400 1em "Plus Jakarta Sans"'),
                    document.fonts.load('700 1em "Plus Jakarta Sans"'),
                    document.fonts.load('400 1em "Outfit"'),
                    document.fonts.load('600 1em "Outfit"'),
                    document.fonts.load('700 1em "Outfit"')
                  ]).then(function() {
                    document.documentElement.classList.add('fonts-loaded');
                  }).catch(function() {
                    // Fallback: mark fonts as loaded after timeout
                    document.documentElement.classList.add('fonts-loaded');
                  });
                  
                  // Fallback: mark fonts as loaded after a short timeout
                  setTimeout(function() {
                    document.documentElement.classList.add('fonts-loaded');
                  }, 100);
                } else {
                  document.documentElement.classList.add('fonts-loaded');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${outfit.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <HMRErrorHandler />
        <ErrorBoundary>
          <Header />
          <main>{children}</main>
          <CookieConsent />
        </ErrorBoundary>
      </body>
    </html>
  );
}
