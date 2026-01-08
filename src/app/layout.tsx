import type { Metadata } from "next";
import { Montserrat, Inter, Geist, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "NaviQure AI | AI Powered Chronic Healthcare in India",
  description: "Transform healthcare data into actionable intelligence with AI-driven analytics.",
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
        className={`${montserrat.variable} ${inter.variable} ${geist.variable} ${manrope.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
