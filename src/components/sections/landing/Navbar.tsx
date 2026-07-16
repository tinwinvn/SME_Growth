import { useState } from "react";
import { Icons } from "../../../icons";
import LogoDUE from "../../../assets/Logo_DUE.png";
import SMELogo from "../../../assets/SMTGrowthLogo.png";
import { NAV_LINKS } from "../../../data/landingData";

interface NavbarProps {
  scrolled: boolean;
  scrollTo: (id: string) => void;
}

export const Navbar = ({ scrolled, scrollTo }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white anim-slide-down"
      style={{
        boxShadow: scrolled
          ? "0 4px 20px rgba(0,75,135,0.18)"
          : "0 2px 8px rgba(0,0,0,0.1)",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 shrink-0">
          <img
            src={LogoDUE}
            alt="Logo DUE"
            className="h-12 w-auto"
            style={{ transition: "transform 0.3s ease" }}
          />
          <div className="h-10 w-px bg-gray-300" />
          <img
            src={SMELogo}
            alt="SME Growth 2026"
            className="h-10 w-auto object-contain"
          />
        </div>

        <nav
          className="hidden lg:flex items-center gap-7 text-sm font-semibold"
          style={{ color: "#004b87" }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className="nav-link uppercase tracking-wide transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block shrink-0">
          <button
            id="cta-nav"
            onClick={() => scrollTo("dang-ky")}
            className="btn-press btn-pulse text-white font-bold uppercase py-2.5 px-6 rounded-full text-sm"
            style={{
              background: "#004b87",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1b5e9e")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#004b87")}
          >
            Đăng ký ngay
          </button>
        </div>

        <button
          className="lg:hidden p-1"
          style={{ color: "#004b87" }}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <Icons.Close size={26} /> : <Icons.Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm font-semibold anim-fade-in-down"
          style={{ color: "#004b87" }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className="text-left uppercase"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("dang-ky")}
            className="text-white font-bold uppercase py-2 rounded-full text-center"
            style={{ background: "#004b87" }}
          >
            Đăng ký ngay
          </button>
        </div>
      )}
    </header>
  );
};
