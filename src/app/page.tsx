import {
  HeroSection,
  ServicesSection,
  CaseStudiesSection,
  AboutSection,
  StatsBar,
  CTASection,
  TestimonialsSection,
  SkillsConstellation,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <SkillsConstellation />
      <CaseStudiesSection />
      <TestimonialsSection />
      <AboutSection />
      <CTASection />
    </>
  );
}
