import { Icons } from "../icons";
import LogoDUE from "../assets/Logo_DUE.png";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-white px-2 py-1 rounded-sm flex items-center gap-2">
            <img src={LogoDUE} alt="DUE Logo" className="h-8 md:h-12 w-auto" />
          </div>
          <div className="text-blue-900 hidden md:block">
            <h2 className="font-bold text-xs md:text-sm tracking-widest uppercase">
              Đại học Đà Nẵng
            </h2>
            <h1 className="font-bold text-sm md:text-lg uppercase tracking-wide">
              Trường Đại học Kinh tế
            </h1>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-blue-900 font-semibold text-sm">
          <button
            onClick={() => scrollToSection("muc-tieu")}
            className="hover:text-orange-500 transition-colors uppercase"
          >
            Mục Tiêu
          </button>
          <button
            onClick={() => scrollToSection("noi-dung")}
            className="hover:text-orange-500 transition-colors uppercase"
          >
            Nội Dung
          </button>
          <button
            onClick={() => scrollToSection("quy-trinh")}
            className="hover:text-orange-500 transition-colors uppercase"
          >
            Quy Trình
          </button>
          <button
            onClick={() => scrollToSection("nang-luc")}
            className="hover:text-orange-500 transition-colors uppercase"
          >
            Năng Lực
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToSection("dang-ky")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 md:px-6 rounded-full shadow-lg shadow-orange-500/30 transition-all hover:scale-105"
          >
            LIÊN HỆ TƯ VẤN
          </button>
          <button className="lg:hidden text-blue-900">
            <Icons.Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
