import { AnimateIn } from "../../ui/AnimateIn";
import LogoDUE from "../../../assets/Logo_DUE.png";
import SMELogo from "../../../assets/SMTGrowthLogo.png";

export const FooterSection = () => (
  <footer style={{ background: "#1b5e9e" }} className="text-white py-12">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <AnimateIn animation="anim-fade-in-up">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div className="flex flex-col gap-5">
            <div
              className="flex items-center gap-3 bg-white rounded-md p-3 w-fit"
              style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}
            >
              <img src={LogoDUE} alt="Logo DUE" className="h-12 w-auto" />
              <div className="h-10 w-px bg-gray-300" />
              <img
                src={SMELogo}
                alt="SME Growth 2026"
                className="h-9 w-auto object-contain"
              />
            </div>
            <div className="max-w-xs">
              <p
                className="font-bold uppercase text-sm leading-snug"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                CHƯƠNG TRÌNH ĐÀO TẠO HỖ TRỢ DOANH NGHIỆP NHỎ VÀ VỪA NĂM 2026
              </p>
              <p
                className="font-bold text-sm mt-1"
                style={{ color: "#f5a869" }}
              >
                (DUE SME GROWTH 2026)
              </p>
            </div>
          </div>

          <div>
            <h4
              className="font-bold uppercase text-sm mb-4 tracking-widest"
              style={{ color: "#f5a869" }}
            >
              THÔNG TIN LIÊN HỆ
            </h4>
            <div
              className="space-y-2 text-sm"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              <p className="font-semibold text-white">
                Trường Đại học Kinh tế — Đại học Đà Nẵng
              </p>
              <p>71 Ngũ Hành Sơn, Quận Ngũ Hành Sơn, Đà Nẵng</p>
              <p>
                Điện thoại: <span className="text-white">Đang cập nhật</span>
              </p>
              <p>
                Email: <span className="text-white">Đang cập nhật</span>
              </p>
            </div>
          </div>
        </div>
      </AnimateIn>

      <div
        className="pt-6 text-center text-xs"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          color: "rgba(255,255,255,0.5)",
        }}
      >
        © 2026 DUE SME Growth — Trường Đại học Kinh tế, Đại học Đà Nẵng. All
        rights reserved.
      </div>
    </div>
  </footer>
);
