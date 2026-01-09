import { HeroSection } from "@/components/features/HeroSection";
import { SolutionsGrid } from "@/components/features/SolutionsGrid";
import { WhoWeServeSection } from "@/components/features/WhoWeServeSection";
import { CareAreasSection } from "@/components/features/CareAreasSection";
import { TeamSection } from "@/components/features/TeamSection";
import { ComplianceSection } from "@/components/features/ComplianceSection";
import { Footer } from "@/components/layout/Footer";

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
