import { Footer } from "@/components/layout/Footer";
import { TeamPageContent } from "@/components/features/TeamPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Team | NaviQure AI",
    description: "Meet the team behind NaviQure AI - visionary founders, medical experts, and strategic advisors committed to transforming chronic healthcare in India.",
};

export default function TeamPage() {
    return (
        <>
            <TeamPageContent />
            <Footer />
        </>
    );
}
