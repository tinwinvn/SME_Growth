import { Icons } from "../../icons";

export const Demo = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
            Demo Buổi Đào Tạo
          </h2>
          <p className="text-slate-400 text-lg">
            Trải nghiệm thực tế không khí học tập và giảng dạy
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative group cursor-pointer animate-scale-in">
          <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-3xl"></div>
          <div className="relative aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex items-center justify-center">
            <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 to-slate-900/80 z-10"></div>
            <div className="z-20 text-center">
              <div className="w-20 h-20 bg-orange-500/90 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/50">
                <Icons.PlayCircle className="w-10 h-10 text-white ml-1" />
              </div>
              <p className="text-slate-300 font-medium uppercase tracking-widest text-sm">
                Xem Video Demo
              </p>
            </div>
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
