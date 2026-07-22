import { AnimateIn } from "../../../components/ui/AnimateIn";
import { Bullet } from "../../../components/ui/Bullet";
import { OBJECTIVES } from "../../../data/landingData";

export const ObjectivesSection = () => (
  <section id="muc-tieu" className="bg-white pt-0 pb-14">
    <AnimateIn animation="anim-fade-in-down">
      <div className="w-full pt-10 pb-16 flex items-center justify-center relative overflow-hidden bg-linear-to-r from-[#001b5a] via-[#004e9c] to-[#6eddf9]">
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div className="absolute -top-37.5 -right-25 w-125 h-125 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_60%)]" />
          <div className="absolute top-7.5 -left-37.5 w-150 h-75 rounded-[100%] bg-[radial-gradient(ellipse,rgba(255,255,255,0.25)_0%,transparent_70%)] transform -rotate-12" />
        </div>
        <h2 className="font-extrabold uppercase text-white text-2xl tracking-[0.18em] relative z-10">
          MỤC TIÊU
        </h2>
      </div>
    </AnimateIn>

    <AnimateIn animation="anim-fade-in-up" delay={100}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-xl px-8 py-7 shadow-[0_12px_40px_rgba(27,94,158,0.13),0_2px_10px_rgba(0,0,0,0.07)] border border-[#e0edf8] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(27,94,158,0.2)]">
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
                <span className="text-gray-800 leading-snug text-[0.97rem]">
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
