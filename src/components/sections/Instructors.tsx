import { Icons } from "../../icons";

export const Instructors = () => {
  const instructors = [
    {
      name: "Chuyên Gia 1",
      bio: "15 năm kinh nghiệm tư vấn chiến lược SME.",
      role: "Chuyên gia Tư vấn Quản trị"
    },
    {
      name: "Chuyên Gia 2",
      bio: "Cố vấn tài chính cho hơn 100 doanh nghiệp vừa.",
      role: "Chuyên gia Tài chính"
    },
    {
      name: "Chuyên Gia 3",
      bio: "Chuyên gia về xây dựng hệ thống nhân sự.",
      role: "Chuyên gia Nhân sự"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 uppercase">Giảng Viên Của Chương Trình</h2>
          <p className="text-slate-600 text-lg">Chuyên gia tư vấn và đào tạo cho doanh nghiệp nhỏ và vừa</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((instructor, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${200 + i * 150}ms` }}
            >
              <div className="aspect-square bg-slate-200 relative overflow-hidden">
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                  <Icons.Users className="w-20 h-20 text-blue-300" />
                </div>
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-1">{instructor.name}</h3>
                <p className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-3">{instructor.role}</p>
                <p className="text-slate-600 text-sm">{instructor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
