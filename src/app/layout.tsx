import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { CookieConsent } from "@/components/ui/CookieConsent";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
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
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
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
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${outfit.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
        <CookieConsent />
      </body>
    </html>
  );
}
