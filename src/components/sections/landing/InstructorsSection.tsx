import { useState, useEffect, useRef, useCallback } from "react";
import { AnimateIn } from "../../ui/AnimateIn";
import { SectionHeading } from "../../ui/SectionHeading";
import { Icons } from "../../../icons";
import { INSTRUCTORS } from "../../../data/landingData";

const CARDS_PER_PAGE = 4;

export const InstructorsSection = () => {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalPages = Math.ceil(INSTRUCTORS.length / CARDS_PER_PAGE);

  const resetAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCarouselIdx((p) => (p + 1) % totalPages);
    }, 4500);
  }, [totalPages]);

  useEffect(() => {
    resetAuto();
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [resetAuto]);

  const prevSlide = () => {
    setCarouselIdx((p) => (p - 1 + totalPages) % totalPages);
    resetAuto();
  };

  const nextSlide = () => {
    setCarouselIdx((p) => (p + 1) % totalPages);
    resetAuto();
  };

  const visibleInstructors = INSTRUCTORS.slice(
    carouselIdx * CARDS_PER_PAGE,
    carouselIdx * CARDS_PER_PAGE + CARDS_PER_PAGE,
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeading>ĐỘI NGŨ GIẢNG VIÊN / CHUYÊN GIA</SectionHeading>
        <AnimateIn animation="anim-fade-in-up" delay={80}>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 text-sm leading-relaxed">
            Chương trình được triển khai bởi đội ngũ giảng viên của Trường Đại
            học Kinh tế — Đại học Đà Nẵng cùng các chuyên gia, doanh nhân và
            nhà quản lý giàu kinh nghiệm thực tế.
          </p>
        </AnimateIn>

        <div className="relative">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 min-h-50 carousel-slide"
            key={carouselIdx}
          >
            {visibleInstructors.map((ins, i) => (
              <div
                key={i}
                className="instructor-card flex flex-col items-center text-center bg-white border rounded-xl p-5 shadow-sm"
                style={{
                  borderColor: "#d0e4f5",
                  animationDelay: `${i * 60}ms`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-3 text-white font-extrabold text-xl shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #1b5e9e 0%, #2c82c9 100%)",
                  }}
                >
                  {ins.name.split(" ").slice(-1)[0][0]}
                </div>
                <p
                  className="font-bold text-sm mb-1 leading-tight"
                  style={{ color: "#1b5e9e" }}
                >
                  {ins.name}
                </p>
                <p className="text-xs text-gray-500 mb-1 leading-snug">
                  {ins.org}
                </p>
                <p className="text-xs font-semibold" style={{ color: "#e85d24" }}>
                  {ins.role}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="btn-press w-10 h-10 rounded-full flex items-center justify-center text-white"
              style={{ background: "#1b5e9e", transition: "background 0.2s" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#004b87")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#1b5e9e")
              }
            >
              <Icons.ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCarouselIdx(i);
                    resetAuto();
                  }}
                  className="rounded-full"
                  style={{
                    width: carouselIdx === i ? "24px" : "10px",
                    height: "10px",
                    background: carouselIdx === i ? "#e85d24" : "#cbd5e1",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="btn-press w-10 h-10 rounded-full flex items-center justify-center text-white"
              style={{ background: "#1b5e9e", transition: "background 0.2s" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#004b87")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#1b5e9e")
              }
            >
              <Icons.ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
