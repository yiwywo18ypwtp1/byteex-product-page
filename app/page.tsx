import TopAlert from "@/components/TopAlert";

import HeroSection from "@/components/sections/HeroSection";
import BrandsSection from "@/components/sections/BrandsSection";


export default function Home() {
  return (
    <main className="w-full max-w-[1200px] md:max-w-full mx-auto md:px-0">
      <TopAlert />

      <HeroSection />
      {/* <BrandsSection /> */}
      {/* <FeaturesSection />
      <AboutSection />
      <ComfortSection />
      <TestimonialsSection />
      <FAQSection />
      <ImpactSection />
      <GallerySection /> */}
    </main>
  );
}
