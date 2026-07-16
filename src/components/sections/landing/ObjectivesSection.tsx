import { AnimateIn } from "../../ui/AnimateIn";
import { SectionHeading } from "../../ui/SectionHeading";
import { Bullet } from "../../ui/Bullet";
import { OBJECTIVES } from "../../../data/landingData";

export const ObjectivesSection = () => (
  <section id="muc-tieu" style={{ background: "#2c82c9" }} className="py-16">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <SectionHeading light>MỤC TIÊU</SectionHeading>
      <AnimateIn animation="anim-scale-in" delay={150}>
        <div className="bg-white rounded-sm shadow-lg max-w-4xl mx-auto px-8 py-8">
          <ul className="space-y-4">
            {OBJECTIVES.map((obj, i) => (
              <AnimateIn
                key={i}
                animation="anim-fade-in-left"
                delay={i * 80}
                as="li"
                className="flex items-start gap-3"
              >
                <Bullet />
                <span
                  className="text-gray-800 leading-snug"
                  style={{ fontSize: "0.97rem" }}
                >
                  {obj}
                </span>
              </AnimateIn>
            ))}
          </ul>
        </div>
      </AnimateIn>
    </div>
  </section>
);
