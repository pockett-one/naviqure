import { HeroSection } from "@/components/features/HeroSection";
import { SolutionsGrid } from "@/components/features/SolutionsGrid";
import { WhoWeServeSection } from "@/components/features/WhoWeServeSection";
import { CareAreasSection } from "@/components/features/CareAreasSection";
import { TeamSection } from "@/components/features/TeamSection";
import { ComplianceSection } from "@/components/features/ComplianceSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <SolutionsGrid />
      <WhoWeServeSection />
      <CareAreasSection />
      <TeamSection />
      <ComplianceSection />
      <Footer />
    </div>
  );
}
