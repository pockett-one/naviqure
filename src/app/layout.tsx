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
  title: "NaviQure AI | AI Powered Chronic Healthcare in India",
  description: "Transform healthcare data into actionable intelligence with AI-driven analytics.",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
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
