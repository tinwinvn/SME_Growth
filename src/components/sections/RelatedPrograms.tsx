import { Icons } from "../../icons";

export const RelatedPrograms = () => {
  const programs = [
    {
      title: "Chương Trình Cố Vấn Khởi Nghiệp",
      desc: "Đồng hành 1-1 cùng chuyên gia trong 6 tháng.",
      icon: Icons.Rocket
    },
    {
      title: "Chuyển Đổi Số Toàn Diện",
      desc: "Giải pháp ERP và quản trị tự động cho SME.",
      icon: Icons.MonitorPlay
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 uppercase">Các Chương Trình Khác Trong Gói Hỗ Trợ</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {programs.map((prog, i) => {
            const Icon = prog.icon;
            return (
              <div 
                key={i} 
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex items-start gap-4 animate-fade-in-up group"
                style={{ animationDelay: `${200 + i * 150}ms` }}
              >
                <div className="bg-blue-50 p-4 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{prog.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm">{prog.desc}</p>
                  <button className="text-orange-500 font-bold text-sm uppercase flex items-center gap-1 hover:text-orange-600 transition-colors">
                    Tư vấn báo giá <Icons.ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
