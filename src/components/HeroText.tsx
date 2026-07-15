export const HeroText = () => {
  return (
    <div className="flex flex-col items-center text-center mt-32 md:mt-40 z-10 relative px-4 max-w-4xl mx-auto">
      <div className="animate-fade-in-down animation-delay-200">
        <span className="inline-block bg-blue-100 text-blue-800 text-sm md:text-base font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider shadow-sm border border-blue-200">
          Hỗ Trợ Doanh Nghiệp Nhỏ Và Vừa
        </span>
      </div>

      <h1 
        className="text-white text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6 animate-scale-in animation-delay-400"
        style={{ textShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
      >
        Chương Trình Đào Tạo
      </h1>

      <div className="relative my-2 animate-scale-in animation-delay-600 hover:scale-105 transition-transform duration-500">
        <h2
          className="text-6xl md:text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-red-500 to-orange-400 pr-4"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.8)",
            filter: "drop-shadow(0px 10px 10px rgba(0,0,0,0.4))",
          }}
        >
          SME GROWTH
        </h2>
      </div>

      <p className="text-blue-100 text-base md:text-xl font-medium tracking-wide mt-8 mb-10 max-w-3xl leading-relaxed animate-fade-in-up animation-delay-800">
        Chương trình đào tạo được thiết kế riêng cho doanh nghiệp nhỏ và vừa, giúp chủ doanh nghiệp và đội ngũ nhân sự nâng cao năng lực quản trị, tối ưu vận hành và xây dựng nền tảng phát triển bền vững.
      </p>

      <button 
        onClick={() => document.getElementById('dang-ky')?.scrollIntoView({ behavior: 'smooth' })}
        className="animate-fade-in-up animation-delay-1000 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 px-10 rounded-full shadow-xl shadow-orange-500/40 transition-all hover:scale-105 border border-orange-400"
      >
        LIÊN HỆ TƯ VẤN NGAY
      </button>
    </div>
  );
};
