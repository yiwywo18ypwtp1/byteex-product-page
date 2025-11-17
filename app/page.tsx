import TopAlert from "@/components/TopAlert";

import HeroSection from "@/components/sections/HeroSection";
import BrandsSection from "@/components/sections/BrandsSection";
import AboutSection from "@/components/sections/AboutSection"
import ComfortSection from "@/components/sections/ComfortSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ImpactSection from "@/components/sections/ImpactSection";


export default function Home() {
  return (
    <main className="w-full max-w-[1200px] md:max-w-full mx-auto md:px-0">
      <TopAlert />

      <HeroSection />
      <BrandsSection />
      <AboutSection />
      <ComfortSection />
      <TestimonialsSection />
      <FAQSection />
      <ImpactSection />
    </main>
  );
}
