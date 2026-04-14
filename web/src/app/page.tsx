import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import QuizCTASection from "@/components/sections/QuizCTASection";
import GalleryTeaser from "@/components/sections/GalleryTeaser";
import BlogTeaser from "@/components/sections/BlogTeaser";
import AboutTeaser from "@/components/sections/AboutTeaser";
import TrustSection from "@/components/sections/TrustSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQTeaser from "@/components/sections/FAQTeaser";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import ShopTeaser from "@/components/sections/ShopTeaser";
import PromiseSection from "@/components/sections/PromiseSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection limit={3} />
      <QuizCTASection />
      <GalleryTeaser />
      <BlogTeaser />
      <AboutTeaser />
      <PromiseSection />
      <TrustSection />
      <TestimonialsSection />
      <FAQTeaser />
      <ServiceAreasSection />
      <ShopTeaser />
    </>
  );
}
