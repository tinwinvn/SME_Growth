import { AnimateIn } from "../../../components/ui/AnimateIn";
import { Bullet } from "../../../components/ui/Bullet";
import { OBJECTIVES } from "../../../data/landingData";

export const ObjectivesSection = () => (
  <section id="muc-tieu" className="bg-white pt-0 pb-14">
    <AnimateIn animation="anim-fade-in-down">
      <div
        className="w-full pt-6 pb-12 flex items-center justify-center bg-[linear-gradient(90deg,#1a4e8a_0%,#2376c5_50%,#1a4e8a_100%)]"
      >
        <h2
          className="font-extrabold uppercase text-white text-xl tracking-[0.18em]"
        >
          MỤC TIÊU
        </h2>
      </div>
    </AnimateIn>

    <AnimateIn animation="anim-fade-in-up" delay={100}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 -mt-8 relative z-10">
        <div
          className="bg-white rounded-xl px-8 py-7 shadow-[0_12px_40px_rgba(27,94,158,0.13),0_2px_10px_rgba(0,0,0,0.07)] border border-[#e0edf8]"
        >
          <ul className="space-y-3">
            {OBJECTIVES.map((obj, i) => (
              <AnimateIn
                key={i}
                animation="anim-fade-in-left"
                delay={i * 60}
                as="li"
                className="flex items-start gap-3"
              >
                <Bullet />
                <span
                  className="text-gray-800 leading-snug text-[0.97rem]"
                >
                  {obj}
                </span>
              </AnimateIn>
            ))}
          </ul>
        </div>
      </div>
    </AnimateIn>
  </section>
);
