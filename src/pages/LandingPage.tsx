import { Header } from "../components/Header";
import { HeroText } from "../components/HeroText";
import { Footer } from "../components/Footer";
import bgImage from "../assets/bg.jpg";
import { GrowthArrow } from "../components/GrowthArrow";

// Sections
import { Objectives } from "../components/sections/Objectives";
import { TargetAudience } from "../components/sections/TargetAudience";
import { Curriculum } from "../components/sections/Curriculum";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { Certification } from "../components/sections/Certification";
import { Process } from "../components/sections/Process";
import { Pricing } from "../components/sections/Pricing";
import { Demo } from "../components/sections/Demo";
import { Events } from "../components/sections/Events";
import { Instructors } from "../components/sections/Instructors";
import { RegistrationForm } from "../components/sections/RegistrationForm";
import { CTA } from "../components/sections/CTA";
import { Newsletter } from "../components/sections/Newsletter";
import { PromoBanner } from "../components/sections/PromoBanner";
import { RelatedPrograms } from "../components/sections/RelatedPrograms";

export const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-blue-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Hero Background */}
      <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center pt-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-bottom opacity-50 mix-blend-overlay"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="absolute inset-0 z-0 bg-linear-to-b from-blue-900/90 via-blue-800/80 to-blue-950/90 mix-blend-multiply" />
        
        <GrowthArrow />
        
        <Header />
        <HeroText />
      </div>

      {/* Main Content Sections */}
      <main className="bg-white z-10 relative">
        <Objectives />
        <TargetAudience />
        <Curriculum />
        <WhyChooseUs />
        <Certification />
        <Process />
        <Pricing />
        <Demo />
        <Events />
        <Instructors />
        <PromoBanner />
        <RegistrationForm />
        <CTA />
        <Newsletter />
        <RelatedPrograms />
      </main>

      <Footer />
    </div>
  );
};
