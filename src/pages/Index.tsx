import { HeroSection } from "@/components/sections/HeroSection";
import { EventSection } from "@/components/sections/EventSection";
import { ForWhoSection } from "@/components/sections/ForWhoSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { DateLocationSection } from "@/components/sections/DateLocationSection";
import { CaptureSection } from "@/components/sections/CaptureSection";
import { ValueSection } from "@/components/sections/ValueSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <EventSection />
      <ForWhoSection />
      <PillarsSection />
      <DifferentialsSection />
      <ExperienceSection />
      <DateLocationSection />
      <div id="capture-section">
        <CaptureSection />
      </div>
      <ValueSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
