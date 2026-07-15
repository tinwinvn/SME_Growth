import { Icons } from "../../icons";

export const Process = () => {
  const steps = [
    {
      title: "Khảo Sát",
      desc: "Khảo sát thực trạng và nhu cầu của doanh nghiệp; trao đổi, thống nhất nội dung đào tạo phù hợp; ký thỏa thuận bảo mật thông tin nếu cần.",
      icon: Icons.Users
    },
    {
      title: "Xây Dựng Chương Trình & Triển Khai",
      desc: "Xây dựng giáo án phù hợp quy mô, lĩnh vực; thống nhất thời gian, hình thức (trực tiếp/trực tuyến); chuẩn bị tài liệu và đào tạo.",
      icon: Icons.BookOpen
    },
    {
      title: "Đánh Giá & Tư Vấn Hỗ Trợ",
      desc: "Thu thập phản hồi từ học viên; tư vấn, hỗ trợ các thắc mắc phát sinh sau đào tạo; đánh giá hiệu quả và đề xuất cải thiện.",
      icon: Icons.TrendingUp
    }
  ];

  return (
    <section id="quy-trinh" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 uppercase">Quy Trình Thực Hiện</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-200 -translate-y-1/2 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div 
                  key={i} 
                  className="relative flex flex-col items-center text-center animate-fade-in-up"
                  style={{ animationDelay: `${200 + i * 200}ms` }}
                >
                  {/* Mobile Timeline Line */}
                  {i !== steps.length - 1 && (
                    <div className="md:hidden absolute top-16 left-1/2 w-0.5 h-full bg-blue-200 -translate-x-1/2 -z-10"></div>
                  )}
                  
                  <div className="w-20 h-20 bg-white rounded-full border-4 border-blue-100 flex items-center justify-center shadow-lg mb-6 relative z-10 hover:border-orange-400 transition-colors duration-300 group">
                    <div className="absolute inset-0 bg-blue-900 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shadow-md border-2 border-white">
                      {i + 1}
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 w-full hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
