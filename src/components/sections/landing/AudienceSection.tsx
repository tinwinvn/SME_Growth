import { AnimateIn } from "../../ui/AnimateIn";
import { Bullet } from "../../ui/Bullet";
import { UsersGroupIcon } from "../../../icons";
import People2 from "../../../assets/People-2.png";
import { AUDIENCE_A, AUDIENCE_B } from "../../../data/landingData";

export const AudienceSection = () => (
  <section id="doi-tuong" className="py-16 bg-white overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 w-full">
          <AnimateIn animation="anim-fade-in-left">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="rounded-full p-2 text-white shrink-0"
                style={{ background: "#1b5e9e" }}
              >
                <UsersGroupIcon />
              </div>
              <h2
                className="font-extrabold uppercase text-2xl"
                style={{ color: "#1b5e9e" }}
              >
                ĐỐI TƯỢNG TUYỂN SINH
              </h2>
            </div>
          </AnimateIn>

          <AnimateIn animation="anim-fade-in-left" delay={100}>
            <div className="mb-7">
              <h3
                className="font-bold mb-3 leading-snug"
                style={{ color: "#1b5e9e", fontSize: "1rem" }}
              >
                Doanh nghiệp siêu nhỏ, nhỏ và vừa theo quy định của pháp luật.
              </h3>
              <p className="text-gray-700 font-semibold mb-2 text-sm">
                Ưu tiên:
              </p>
              <ul className="space-y-2">
                {AUDIENCE_A.map((t, i) => (
                  <AnimateIn
                    key={i}
                    animation="anim-fade-in-left"
                    delay={150 + i * 70}
                    as="li"
                    className="flex items-start gap-2.5"
                  >
                    <Bullet />
                    <span className="text-gray-700 text-sm leading-snug">
                      {t}
                    </span>
                  </AnimateIn>
                ))}
              </ul>
            </div>
          </AnimateIn>

          <AnimateIn animation="anim-fade-in-left" delay={350}>
            <div>
              <h3
                className="font-bold mb-3 leading-snug"
                style={{ color: "#1b5e9e", fontSize: "1rem" }}
              >
                Đội ngũ quản lý và nhân sự chủ chốt của doanh nghiệp.
              </h3>
              <p className="text-gray-700 font-semibold mb-2 text-sm">
                Bao gồm:
              </p>
              <ul className="space-y-2">
                {AUDIENCE_B.map((t, i) => (
                  <AnimateIn
                    key={i}
                    animation="anim-fade-in-left"
                    delay={400 + i * 70}
                    as="li"
                    className="flex items-start gap-2.5"
                  >
                    <Bullet />
                    <span className="text-gray-700 text-sm leading-snug">
                      {t}
                    </span>
                  </AnimateIn>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>

        <div className="flex-1 w-full flex items-end justify-center relative min-h-80">
          <div
            className="absolute bottom-0 right-0 w-full h-4/5 rounded-tl-[80px]"
            style={{
              background:
                "linear-gradient(135deg, #2c82c9 0%, #1a4e8a 100%)",
              zIndex: 0,
            }}
          />
          <AnimateIn
            animation="anim-fade-in-right"
            className="relative z-10 flex justify-center"
          >
            <img
              src={People2}
              alt="Doanh nhân tham gia chương trình"
              className="w-auto max-h-100 object-contain img-float"
              style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.2))" }}
            />
          </AnimateIn>
        </div>
      </div>
    </div>
  </section>
);
