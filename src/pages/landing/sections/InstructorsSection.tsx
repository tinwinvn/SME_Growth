import { useState, useEffect, useRef, useCallback } from "react";
import { AnimateIn } from "../../../components/ui/AnimateIn";
import { SectionHeading } from "../../../components/ui/SectionHeading";
import { Icons } from "../../../icons";
import { INSTRUCTORS } from "../../../data/landingData";
import { InstructorCard } from "./instructors/InstructorCard";
import { CarouselDots } from "./instructors/CarouselDots";

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
    <section className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeading>ĐỘI NGŨ GIẢNG VIÊN / CHUYÊN GIA</SectionHeading>
        <AnimateIn animation="anim-fade-in-up" delay={80}>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 text-sm leading-relaxed">
            Chương trình được triển khai bởi đội ngũ giảng viên của Trường Đại
            học Kinh tế — Đại học Đà Nẵng cùng các chuyên gia, doanh nhân và nhà
            quản lý giàu kinh nghiệm thực tế.
          </p>
        </AnimateIn>

        <div className="relative">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 min-h-50 carousel-slide"
            key={carouselIdx}
          >
            {visibleInstructors.map(
              (ins: (typeof INSTRUCTORS)[number], i: number) => (
                <InstructorCard key={i} ins={ins} delay={i * 60} />
              ),
            )}
          </div>

          <div className="text-center mt-4 text-xs text-gray-400">
            Trang {carouselIdx + 1} / {totalPages} &nbsp;({INSTRUCTORS.length}{" "}
            giảng viên & chuyên gia)
          </div>

          <div className="flex items-center justify-center gap-4 mt-5">
            <button
              onClick={prevSlide}
              className="btn-press w-10 h-10 rounded-full flex items-center justify-center text-white bg-card-blue transition-colors duration-200 hover:bg-primary"
              aria-label="Trang trước"
            >
              <Icons.ChevronLeft size={20} />
            </button>

            <CarouselDots
              total={totalPages}
              current={carouselIdx}
              onSelect={(i) => {
                setCarouselIdx(i);
                resetAuto();
              }}
            />

            <button
              onClick={nextSlide}
              className="btn-press w-10 h-10 rounded-full flex items-center justify-center text-white bg-card-blue transition-colors duration-200 hover:bg-primary"
              aria-label="Trang sau"
            >
              <Icons.ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
