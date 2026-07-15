import { Icons } from "../../icons";

export const TargetAudience = () => {
  const audiences = [
    {
      title: "Chủ Doanh Nghiệp / Ban Lãnh Đạo",
      desc: "Cần định hướng chiến lược, ra quyết định quản trị, nắm bắt xu hướng và chính sách hỗ trợ doanh nghiệp nhỏ và vừa.",
      icon: Icons.Briefcase,
      color: "text-orange-500",
      bg: "bg-orange-100"
    },
    {
      title: "Quản Lý Cấp Trung / Trưởng Phòng",
      desc: "Trực tiếp triển khai quy trình vận hành, quản lý đội ngũ, cần công cụ và phương pháp quản trị hiệu quả.",
      icon: Icons.Users,
      color: "text-blue-500",
      bg: "bg-blue-100"
    },
    {
      title: "Nhân Viên Nghiệp Vụ",
      desc: "Thực hiện các công việc chuyên môn hàng ngày (tài chính, kinh doanh, nhân sự...), cần nâng cao kỹ năng thực hành.",
      icon: Icons.Target,
      color: "text-green-500",
      bg: "bg-green-100"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 uppercase">Đối Tượng Học Viên</h2>
          <p className="max-w-4xl mx-auto text-slate-600 text-lg">
            Chủ doanh nghiệp, quản lý và nhân sự nòng cốt tại các doanh nghiệp nhỏ và vừa trên cả nước, 
            với 3 nhóm chính tham gia trực tiếp vào quá trình đào tạo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-slate-100 animate-fade-in-up relative overflow-hidden group"
                style={{ animationDelay: `${200 + i * 150}ms` }}
              >
                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-10 transition-transform group-hover:scale-150 ${item.bg}`}></div>
                <div className={`${item.bg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative z-10`}>
                  <Icon className={`${item.color} w-8 h-8`} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 relative z-10">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed relative z-10">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
