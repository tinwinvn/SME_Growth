import { useState, useEffect } from "react";
import { Navbar } from "./landing/sections/Navbar";
import { HeroSection } from "./landing/sections/HeroSection";
import { AboutSection } from "./landing/sections/AboutSection";
import { ObjectivesSection } from "./landing/sections/ObjectivesSection";
import { CommitmentsSection } from "./landing/sections/CommitmentsSection";
import { AudienceSection } from "./landing/sections/AudienceSection";
import { TrainingFundingSection } from "./landing/sections/TrainingFundingSection";
import { CurriculumSection } from "./landing/sections/CurriculumSection";
import { InstructorsSection } from "./landing/sections/InstructorsSection";
import { WhyJoinSection } from "./landing/sections/WhyJoinSection";
import { RegistrationSection } from "./landing/sections/RegistrationSection";
import { FooterSection } from "./landing/sections/FooterSection";

export const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const header = document.querySelector("header") as HTMLElement | null;
    const headerH = header ? header.offsetHeight : 72;
    const top =
      target.getBoundingClientRect().top + window.scrollY - headerH - 16;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Navbar scrolled={scrolled} scrollTo={scrollTo} />
      <HeroSection />
      <AboutSection />
      <ObjectivesSection />
      <CommitmentsSection />
      <AudienceSection />
      <TrainingFundingSection />
      <CurriculumSection />
      <InstructorsSection />
      <WhyJoinSection />
      <RegistrationSection />
      <FooterSection />
    </div>
  );
};
