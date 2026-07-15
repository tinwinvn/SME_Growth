import { Icons } from "../../icons";

export const CTA = () => {
  return (
    <section className="py-24 bg-orange-500 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight text-white drop-shadow-md">Đã Đến Lúc</h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-orange-100">Nâng Cấp Năng Lực Quản Trị Cho Doanh Nghiệp Của Bạn</h3>
        <p className="text-lg md:text-xl text-orange-50 mb-10 max-w-3xl mx-auto">
          Chương trình sẽ đưa ra giải pháp đào tạo được thiết kế riêng theo nhu cầu và quy mô của doanh nghiệp nhỏ và vừa.
        </p>
        <button 
          onClick={() => document.getElementById('dang-ky')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-orange-600 hover:bg-slate-100 hover:text-orange-700 font-black text-xl py-4 px-12 rounded-full shadow-2xl transition-all hover:scale-105 uppercase tracking-wider inline-flex items-center gap-2"
        >
          Cập Nhật Ngay <Icons.ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};
