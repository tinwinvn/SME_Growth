import { AnimateIn } from "../../../components/ui/AnimateIn";
import { Bullet } from "../../../components/ui/Bullet";
import { UsersGroupIcon } from "../../../icons";
import Businessmen2 from "../../../assets/refactor-v1/businessmen-2.png";
import QuarterCircle from "../../../assets/refactor-v1/quater-circle-background.png";
import { AUDIENCE_A, AUDIENCE_B } from "../../../data/landingData";

export const AudienceSection = () => (
  <section id="doi-tuong" className="bg-white overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 md:px-8 pt-14 pb-0">
      <div className="flex flex-col lg:flex-row items-stretch gap-0">
        <div className="flex-1 w-full pb-8">
          <AnimateIn animation="anim-fade-in-left">
            <div className="flex items-center gap-3 mb-8">
              <div className="rounded-full p-2 text-white shrink-0 bg-card-blue">
                <UsersGroupIcon />
              </div>
              <h2 className="font-extrabold uppercase text-2xl text-card-blue">
                ĐỐI TƯỢNG TUYỂN SINH
              </h2>
            </div>
          </AnimateIn>

          <AnimateIn animation="anim-fade-in-left" delay={100}>
            <div className="mb-7">
              <h3 className="font-bold mb-3 leading-snug text-card-blue text-[1rem]">
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
              <h3 className="font-bold mb-3 leading-snug text-card-blue text-[1rem]">
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

        <div className="flex-1 w-full flex items-end justify-center relative min-h-80 overflow-visible">
          <img
            src={QuarterCircle}
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 right-0 w-[90%] h-[90%] object-cover object-top-left z-0 pointer-events-none"
          />
          <AnimateIn
            animation="anim-fade-in-right"
            className="relative z-10 flex justify-center items-end w-full h-full"
          >
            <img
              src={Businessmen2}
              alt="Doanh nhân tham gia chương trình"
              className="w-auto object-contain max-h-115 drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
            />
          </AnimateIn>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">
      <AnimateIn animation="anim-fade-in-up" delay={200}>
        <div className="rounded-lg px-6 py-5 text-sm leading-relaxed text-gray-700 italic bg-linear-to-br from-[#f0f5fb] to-bg-light border-l-4 border-l-card-blue">
          <span className="font-semibold not-italic text-card-blue">
            Lưu ý:&nbsp;
          </span>
          Trường Đại học Kinh tế sẽ tiến hành sàng lọc và lựa chọn đối tượng
          tham gia trên cơ sở: Mức độ phù hợp với nội dung chương trình; Mức độ
          cam kết tham gia; Tính cấp thiết của nhu cầu hỗ trợ và Khả năng tạo ra
          hiệu quả sau đào tạo/ tư vấn.
        </div>
      </AnimateIn>
    </div>
  </section>
);
