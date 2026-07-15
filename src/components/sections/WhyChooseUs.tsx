import { Icons } from "../../icons";

export const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Quy trình bài bản, lấy doanh nghiệp làm trung tâm",
      desc: "Nội dung và thời lượng đào tạo linh hoạt điều chỉnh theo quy mô và thực trạng của từng doanh nghiệp; thực hành trên số liệu và tình huống thực tế.",
      icon: Icons.PieChart
    },
    {
      title: "Kiến thức thực tiễn và đội ngũ chuyên gia",
      desc: "Giảng viên có nhiều năm kinh nghiệm tư vấn, đồng hành cùng doanh nghiệp nhỏ và vừa; sẵn sàng hỗ trợ tư vấn trong và sau quá trình đào tạo.",
      icon: Icons.Target
    },
    {
      title: "Đồng hành cùng cộng đồng doanh nghiệp",
      desc: "Liên tục cập nhật thông tin, chính sách hỗ trợ mới nhất dành cho doanh nghiệp nhỏ và vừa thông qua bản tin định kỳ.",
      icon: Icons.Building
    }
  ];

  return (
    <section id="nang-luc" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-orange-500 font-bold tracking-wider uppercase mb-2 block">CƠ HỘI / Nhận Chứng Nhận</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Tại Sao Chọn Chương Trình Này?</h2>
          <p className="max-w-3xl mx-auto text-slate-600 text-lg">
            Những giá trị thực tế và bền vững của chương trình là điểm khác biệt, 
            giúp doanh nghiệp nhỏ và vừa phát triển vững chắc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div 
                key={i} 
                className="group relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${200 + i * 150}ms` }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full -z-10 group-hover:bg-orange-100 transition-colors"></div>
                <div className="text-5xl font-black text-slate-200 mb-4 group-hover:text-blue-100 transition-colors">
                  0{i + 1}
                </div>
                <div className="bg-white w-14 h-14 rounded-full shadow-md flex items-center justify-center mb-6 text-blue-600 group-hover:text-orange-500 transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 leading-tight">{reason.title}</h3>
                <p className="text-slate-600 leading-relaxed">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
