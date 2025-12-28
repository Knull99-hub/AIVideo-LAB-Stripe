import { Hero } from "@/components/sections/Hero";
import { TrustedBrands } from "@/components/sections/TrustedBrands";
import { FeatureBlocks } from "@/components/sections/FeatureBlocks";
import { ToolkitCarousel } from "@/components/sections/ToolkitCarousel";
import { Results } from "@/components/sections/Results";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Pricing } from "@/components/sections/Pricing";
import { TrustCompliance } from "@/components/sections/TrustCompliance";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <TrustedBrands />
      <FeatureBlocks />
      <ToolkitCarousel />
      <Results />
      <CaseStudies />
      <Pricing />
      <TrustCompliance />
      <Footer />
    </main>
  );
}
