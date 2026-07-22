import { AnimateIn } from "../../../components/ui/AnimateIn";
import { MoneyIcon } from "../../../icons";

export const TrainingFundingSection = () => (
  <section className="py-10 bg-[#f0f5fb]">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <AnimateIn animation="anim-fade-in-up">
        <div className="rounded-xl overflow-hidden shadow-md border border-[#d0e4f5]">
          <div className="flex items-center gap-4 px-7 py-4 bg-card-blue">
            <div className="text-white shrink-0">
              <MoneyIcon />
            </div>
            <h2 className="font-extrabold uppercase text-white text-lg tracking-widest">
              KINH PHÍ ĐÀO TẠO
            </h2>
          </div>

          <div className="px-7 py-6 bg-white border-l-4 border-l-accent">
            <p className="leading-relaxed text-gray-800 italic font-medium text-sm md:text-base">
              Kinh phí triển khai đào tạo chương trình DNNVV theo định mức kinh
              phí tại{" "}
              <strong className="not-italic text-card-blue">
                Quyết định số 706/QĐ-BGDĐT ngày 26/03/2026 của Bộ Giáo dục và
                Đào tạo
              </strong>{" "}
              về việc giao nhiệm vụ và kinh phí hỗ trợ doanh nghiệp nhỏ và vừa
              năm 2026.
            </p>
          </div>
        </div>
      </AnimateIn>
    </div>
  </section>
);
