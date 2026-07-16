import { AnimateIn } from "../../ui/AnimateIn";
import { SectionHeading } from "../../ui/SectionHeading";
import { COMMITMENTS } from "../../../data/landingData";

export const CommitmentsSection = () => (
  <section
    style={{
      background:
        "linear-gradient(160deg, #1a4e8a 0%, #2c82c9 60%, #1a4e8a 100%)",
    }}
    className="py-16"
  >
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <SectionHeading light>CAM KẾT</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {COMMITMENTS.map((c, i) => (
          <AnimateIn key={i} animation="anim-scale-in" delay={i * 100}>
            <div className="card-hover bg-white rounded-sm overflow-hidden shadow-md h-full">
              <div
                className="px-5 py-3 font-bold text-white text-sm uppercase"
                style={{
                  background: "#1b5e9e",
                  borderBottom: "2px solid #e85d24",
                }}
              >
                {c.title}
              </div>
              <div className="px-5 py-4">
                <p className="text-gray-700 text-sm leading-relaxed">{c.body}</p>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </div>
  </section>
);
