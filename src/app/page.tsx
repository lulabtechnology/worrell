import { Hero } from "@/components/sections/Hero";
import { PainSection } from "@/components/sections/PainSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { TestimonialsSlider } from "@/components/sections/TestimonialsSlider";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainSection />
      <ServicesSection />
      <ProcessTimeline />
      <TestimonialsSlider />
      <FAQAccordion />
      <FinalCTA />
    </>
  );
}
