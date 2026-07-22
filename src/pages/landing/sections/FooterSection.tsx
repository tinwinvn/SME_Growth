import { AnimateIn } from "../../../components/ui/AnimateIn";
import { FooterLogoRow } from "./footer/FooterLogoRow";
import { FooterTitleBlock } from "./footer/FooterTitleBlock";
import { FooterContactCard } from "./footer/FooterContactCard";
import { FooterBottomBar } from "./footer/FooterBottomBar";

export const FooterSection = () => (
  <footer className="text-white pt-12 pb-6 bg-card-blue">
    <div className="max-w-5xl mx-auto px-4 md:px-8">
      <AnimateIn animation="anim-fade-in-up">
        <FooterLogoRow />
        <FooterTitleBlock />
        <div className="w-20 mx-auto mb-6 border-t-2 border-[rgba(255,255,255,0.35)]" />
        <FooterContactCard />
      </AnimateIn>
      <FooterBottomBar />
    </div>
  </footer>
);
