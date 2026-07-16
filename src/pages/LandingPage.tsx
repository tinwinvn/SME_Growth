import { useState, useEffect } from "react";
import { Navbar } from "../components/sections/landing/Navbar";
import { HeroSection } from "../components/sections/landing/HeroSection";
import { AboutSection } from "../components/sections/landing/AboutSection";
import { ObjectivesSection } from "../components/sections/landing/ObjectivesSection";
import { CommitmentsSection } from "../components/sections/landing/CommitmentsSection";
import { AudienceSection } from "../components/sections/landing/AudienceSection";
import { CurriculumSection } from "../components/sections/landing/CurriculumSection";
import { InstructorsSection } from "../components/sections/landing/InstructorsSection";
import { WhyJoinSection } from "../components/sections/landing/WhyJoinSection";
import { RegistrationSection } from "../components/sections/landing/RegistrationSection";
import { FooterSection } from "../components/sections/landing/FooterSection";

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
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar scrolled={scrolled} scrollTo={scrollTo} />
      <HeroSection />
      <AboutSection />
      <ObjectivesSection />
      <CommitmentsSection />
      <AudienceSection />
      <CurriculumSection />
      <InstructorsSection />
      <WhyJoinSection />
      <RegistrationSection />
      <FooterSection />
    </div>
  );
};
