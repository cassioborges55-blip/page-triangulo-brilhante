import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import CredibilityBadges from "@/components/landing/CredibilityBadges";
import ProblemsSection from "@/components/landing/ProblemsSection";
import SolutionsSection from "@/components/landing/SolutionsSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import CasesSection from "@/components/landing/CasesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import StatsSection from "@/components/landing/StatsSection";
import RegionSection from "@/components/landing/RegionSection";
import ContactFormSection from "@/components/landing/ContactFormSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <CredibilityBadges />
        <ProblemsSection />
        <SolutionsSection />
        <ComparisonSection />
        <CasesSection />
        <HowItWorksSection />
        <StatsSection />
        
        <RegionSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;