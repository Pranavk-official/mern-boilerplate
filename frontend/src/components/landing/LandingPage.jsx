import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeatureSection";
import CtaSection from "./CtaSection";

function LandingPage() {
  return (
    <main className="bg-slate-100 min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
    </main>
  );
}

export default LandingPage;
