import BannerImg from "../../../assets/refactor-v1/banner.png";

export const HeroSection = () => (
  <section className="w-full overflow-hidden animate-[fadeInDown_0.8s_cubic-bezier(.22,1,.36,1)_both]">
    <img
      src={BannerImg}
      alt="DUE SME Growth 2026 — Chương trình đào tạo hỗ trợ doanh nghiệp nhỏ và vừa"
      className="w-full h-auto block scale-100 transition-transform duration-8000m ease-out hover:scale-[1.01]"
    />
  </section>
);
