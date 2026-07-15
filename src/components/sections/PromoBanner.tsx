import { useState, useEffect } from "react";
import { Icons } from "../../icons";

export const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Target date configuration (single source of truth)
  const targetDate = new Date("2026-12-31T23:59:59").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-linear-to-r from-red-600 to-orange-500 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
        <Icons.MonitorPlay className="w-96 h-96 text-white opacity-10" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left animate-fade-in-right">
          <h2 className="text-3xl md:text-4xl font-black mb-2 uppercase drop-shadow-md">Học Phí Ưu Đãi — Lên Đến 30%</h2>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">Đào tạo thực chiến</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">Ứng dụng trực tiếp</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">Thực hành chuyên sâu</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 animate-fade-in-left">
          <div className="flex gap-4">
            <div className="bg-white text-orange-600 rounded-lg p-3 w-16 md:w-20 text-center shadow-lg">
              <div className="text-2xl md:text-3xl font-black leading-none mb-1">{timeLeft.days}</div>
              <div className="text-xs font-bold uppercase">Ngày</div>
            </div>
            <div className="bg-white text-orange-600 rounded-lg p-3 w-16 md:w-20 text-center shadow-lg">
              <div className="text-2xl md:text-3xl font-black leading-none mb-1">{timeLeft.hours}</div>
              <div className="text-xs font-bold uppercase">Giờ</div>
            </div>
            <div className="bg-white text-orange-600 rounded-lg p-3 w-16 md:w-20 text-center shadow-lg">
              <div className="text-2xl md:text-3xl font-black leading-none mb-1">{timeLeft.minutes}</div>
              <div className="text-xs font-bold uppercase">Phút</div>
            </div>
            <div className="bg-white text-orange-600 rounded-lg p-3 w-16 md:w-20 text-center shadow-lg">
              <div className="text-2xl md:text-3xl font-black leading-none mb-1">{timeLeft.seconds}</div>
              <div className="text-xs font-bold uppercase">Giây</div>
            </div>
          </div>
          
          <button 
            onClick={() => document.getElementById('dang-ky')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-900 hover:bg-blue-800 text-white font-black py-3 px-10 rounded-full shadow-xl transition-all hover:scale-105 uppercase tracking-widest text-lg w-full"
          >
            Đăng Ký Ngay!
          </button>
        </div>
      </div>
    </section>
  );
};
