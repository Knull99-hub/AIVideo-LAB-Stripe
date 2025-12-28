import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import DemoSamples from "@/components/sections/DemoSamples";
import LeadMagnet from "@/components/sections/LeadMagnet";
import WhoIsFor from "@/components/sections/WhoIsFor";
import ComparisonTable from "@/components/sections/ComparisonTable";
import StrategyCall from "@/components/sections/StrategyCall";
import TrustedBrands from "@/components/sections/TrustedBrands";
import Pricing from "@/components/sections/Pricing";
import Deliverables from "@/components/sections/Deliverables";
import WhyAIVideoLab from "@/components/sections/WhyAIVideoLab";
import Roadmap from "@/components/sections/Roadmap";
import TrustCompliance from "@/components/sections/TrustCompliance";
import FAQ from "@/components/sections/FAQ";
import ProofBar from "@/components/sections/ProofBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <DemoSamples />
        <LeadMagnet />
        <WhoIsFor />
        <ComparisonTable />
        <StrategyCall />
        <TrustedBrands />
        <Pricing />
        <Deliverables />
        <WhyAIVideoLab />
        <Roadmap />
        <TrustCompliance />
        <FAQ />
        <ProofBar />
      </main>
      <Footer />
      <CookieBanner />
      <StickyMobileCTA />
    </>
  );
}
