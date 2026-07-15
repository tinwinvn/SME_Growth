import { Icons } from "../../icons";

export const Events = () => {
  const events = [
    {
      date: "15/08/2026",
      name: "Nâng Cao Năng Lực Quản Trị Tài Chính",
      location: "Đà Nẵng",
      offline: 120,
      online: 350
    },
    {
      date: "22/09/2026",
      name: "Chuyển Đổi Số Trong Vận Hành SME",
      location: "Hà Nội",
      offline: 150,
      online: 500
    },
    {
      date: "10/10/2026",
      name: "Chiến Lược Nhân Sự Mùa Tăng Trưởng",
      location: "TP.HCM",
      offline: 200,
      online: 600
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 uppercase">Hội Thảo Chuyên Đề</h2>
          <p className="max-w-4xl mx-auto text-slate-600 text-lg">
            Chương trình thường xuyên phối hợp cùng các cơ quan quản lý, hiệp hội doanh nghiệp để tổ chức chuỗi hội thảo chuyên đề 
            "Nâng Cao Năng Lực Quản Trị Cho Doanh Nghiệp Nhỏ Và Vừa", cung cấp kiến thức thiết thực.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {events.map((evt, i) => (
              <div 
                key={i} 
                className="flex flex-col md:flex-row items-center justify-between bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all animate-fade-in-up group"
                style={{ animationDelay: `${200 + i * 150}ms` }}
              >
                <div className="flex items-center gap-6 mb-4 md:mb-0 w-full md:w-auto">
                  <div className="bg-orange-100 text-orange-600 p-4 rounded-xl text-center min-w-[100px] shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <div className="text-2xl font-black">{evt.date.split('/')[0]}</div>
                    <div className="text-sm font-bold">Tháng {evt.date.split('/')[1]}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{evt.name}</h3>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Icons.MapPin className="w-4 h-4" />
                      <span>{evt.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 w-full md:w-auto border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
                  <div className="text-center flex-1 md:flex-none">
                    <div className="text-blue-900 font-bold text-xl">{evt.offline}</div>
                    <div className="text-xs text-slate-500 uppercase">Offline</div>
                  </div>
                  <div className="text-center flex-1 md:flex-none">
                    <div className="text-blue-900 font-bold text-xl">{evt.online}</div>
                    <div className="text-xs text-slate-500 uppercase">Online</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
