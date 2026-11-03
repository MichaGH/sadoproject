import { AboutSection } from "@/components/homepage/AboutSection";
import { ContactSection } from "@/components/homepage/ContactSection";
import { GardenSection } from "@/components/homepage/GardenSection";
import { HeroSection } from "@/components/homepage/HeroSection";
import { IntroSection } from "@/components/homepage/IntroSection";
import { ProcessSection } from "@/components/homepage/ProcessSection";
import { ProjectsSection } from "@/components/homepage/ProjectsSection";
import { ServicesSection } from "@/components/homepage/ServicesSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#sluzby"
        className="sr-only fixed top-4 left-4 z-50 rounded-full bg-lime px-6 py-3 font-semibold text-ink focus:not-sr-only"
      >
        Preskočiť na obsah
      </a>
      <main id="obsah">
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <GardenSection />
        <ProjectsSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
