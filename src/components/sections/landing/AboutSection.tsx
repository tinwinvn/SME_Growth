import { AnimateIn } from "../../ui/AnimateIn";
import { PILLARS } from "../../../data/landingData";

export const AboutSection = () => (
  <section id="gioi-thieu" className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <AnimateIn animation="anim-fade-in-up" className="text-center">
        <h2
          className="font-extrabold uppercase mb-1 text-shimmer"
          style={{ fontSize: "1.45rem", lineHeight: 1.35 }}
        >
          CHƯƠNG TRÌNH ĐÀO TẠO HỖ TRỢ DOANH NGHIỆP NHỎ VÀ VỪA NĂM 2026
        </h2>
        <h2
          className="font-extrabold uppercase mb-8 text-shimmer"
          style={{ fontSize: "1.45rem" }}
        >
          SME GROWTH 2026
        </h2>
      </AnimateIn>

      <AnimateIn animation="anim-fade-in-up" delay={100}>
        <p
          className="text-center text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12"
          style={{ fontSize: "1rem" }}
        >
          <strong>DUE SME GROWTH 2026</strong> là chương trình đào tạo, tư vấn
          và hỗ trợ thực tiễn dành cho doanh nghiệp nhỏ và vừa, giúp doanh
          nghiệp nâng cao năng lực quản trị, chuyển đổi số, tối ưu vận hành,
          phát triển thị trường và khai thác hiệu quả các nguồn lực tăng trưởng.
        </p>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        {PILLARS.map((p, i) => (
          <AnimateIn key={i} animation="anim-scale-in" delay={i * 120}>
            <div
              className="pillar-card text-white p-6 rounded-sm flex flex-col gap-4 h-full cursor-default"
              style={{ background: "#1b5e9e" }}
            >
              <h3
                className="font-extrabold text-center uppercase text-base pb-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.25)" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.92)" }}
              >
                {p.body}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>

      <AnimateIn animation="anim-fade-in-up" delay={200}>
        <div
          className="relative max-w-4xl mx-auto py-8 px-12"
          style={{
            borderTop: "2px solid #e0e0e0",
            borderBottom: "2px solid #e0e0e0",
          }}
        >
          <span
            className="absolute top-4 left-4 font-black text-5xl leading-none"
            style={{
              color: "#1b5e9e",
              opacity: 0.3,
              fontFamily: "Georgia, serif",
            }}
          >
            "
          </span>
          <p
            className="text-center italic text-gray-700 leading-relaxed"
            style={{ fontSize: "1rem" }}
          >
            DUE SME GROWTH 2026 đồng hành cùng doanh nghiệp nhỏ và vừa từ quản
            trị vững đến tăng trưởng bền, giúp doanh nghiệp nhận diện đúng vấn
            đề, tối ưu nguồn lực và sẵn sàng bứt phá trong kỷ nguyên kinh doanh
            mới.
          </p>
          <span
            className="absolute bottom-2 right-4 font-black text-5xl leading-none"
            style={{
              color: "#1b5e9e",
              opacity: 0.3,
              fontFamily: "Georgia, serif",
            }}
          >
            "
          </span>
        </div>
      </AnimateIn>
    </div>
  </section>
);
