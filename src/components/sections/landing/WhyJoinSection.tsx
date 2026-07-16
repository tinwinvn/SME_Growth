import { AnimateIn } from "../../ui/AnimateIn";
import { SectionHeading } from "../../ui/SectionHeading";
import { REASONS } from "../../../data/landingData";

export const WhyJoinSection = () => (
  <section style={{ background: "#e6f4fc" }} className="py-16">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <SectionHeading>VÌ SAO NÊN THAM GIA</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {REASONS.map((r, i) => (
          <AnimateIn key={i} animation="anim-scale-in" delay={i * 70}>
            <div
              className="reason-card bg-white rounded-xl p-5 shadow-sm flex flex-col gap-3 h-full"
              style={{ borderTop: "3px solid #e85d24" }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white font-extrabold text-sm shrink-0"
                style={{ background: "#e85d24" }}
              >
                {i + 1}
              </div>
              <h3
                className="font-bold text-sm leading-snug"
                style={{ color: "#1b5e9e" }}
              >
                {r.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">{r.desc}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </div>
  </section>
);
