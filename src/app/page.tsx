import { HeroSection } from "@/components/features/HeroSection";
import dynamic from "next/dynamic";

const SolutionsGrid = dynamic(() => import("@/components/features/SolutionsGrid").then(mod => mod.SolutionsGrid));
const WhoWeServeSection = dynamic(() => import("@/components/features/WhoWeServeSection").then(mod => mod.WhoWeServeSection));
const CareAreasSection = dynamic(() => import("@/components/features/CareAreasSection").then(mod => mod.CareAreasSection));
const TeamSection = dynamic(() => import("@/components/features/TeamSection").then(mod => mod.TeamSection));
const ComplianceSection = dynamic(() => import("@/components/features/ComplianceSection").then(mod => mod.ComplianceSection));
const Footer = dynamic(() => import("@/components/layout/Footer").then(mod => mod.Footer));

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NaviQure AI',
    url: 'https://naviqure.ai',
    logo: 'https://naviqure.ai/favicon.svg',
    description: 'AI-driven chronic disease management and predictive analytics platform for Indian healthcare.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressCountry: 'IN'
    },
    sameAs: [
      'https://twitter.com/naviqure',
      'https://linkedin.com/company/naviqure'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@naviqure.ai',
      contactType: 'customer support'
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <SolutionsGrid />
      <WhoWeServeSection />
      <CareAreasSection />
      <ComplianceSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
