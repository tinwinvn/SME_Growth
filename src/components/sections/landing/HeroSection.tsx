import BannerImg from "../../../assets/Banner.png";

export const HeroSection = () => (
  <section
    className="w-full overflow-hidden"
    style={{ animation: "fadeInDown 0.8s cubic-bezier(.22,1,.36,1) both" }}
  >
    <img
      src={BannerImg}
      alt="DUE SME Growth 2026 — Chương trình đào tạo hỗ trợ doanh nghiệp nhỏ và vừa"
      className="w-full h-auto block"
      style={{
        transform: "scale(1.0)",
        transition: "transform 8s ease-out",
      }}
      onLoad={(e) => {
        (e.target as HTMLImageElement).style.transform = "scale(1.01)";
      }}
    />
  </section>
);
