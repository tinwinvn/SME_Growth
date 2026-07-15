

export const Curriculum = () => {
  const modules = [
    "Tổng quan về quản trị doanh nghiệp nhỏ và vừa trong bối cảnh hiện nay",
    "Xây dựng kế hoạch kinh doanh và mô hình tài chính cơ bản",
    "Quản trị dòng tiền, chi phí và tối ưu nguồn lực",
    "Quản trị nhân sự và xây dựng đội ngũ cho doanh nghiệp nhỏ và vừa",
    "Ứng dụng công cụ số và chuyển đổi số trong vận hành doanh nghiệp",
    "Tiếp cận các chính sách, quỹ hỗ trợ và nguồn vốn dành cho doanh nghiệp",
    "Thực hành xây dựng lộ trình phát triển và mở rộng quy mô doanh nghiệp"
  ];

  return (
    <section id="noi-dung" className="py-20 bg-blue-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-950 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-fade-in-up">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
              Nội Dung Đào Tạo
            </h2>
            <p className="text-blue-200 text-lg">Hỗ Trợ Doanh Nghiệp Nhỏ Và Vừa</p>
          </div>
          <div className="mt-6 md:mt-0 bg-orange-500 text-white font-bold px-6 py-2 rounded-full animate-pulse">
            07 MODULE
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
          {modules.map((mod, i) => (
            <div 
              key={i}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-800/50 transition-colors animate-fade-in-right"
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-orange-400 font-black text-xl border border-blue-700 shadow-inner">
                {i + 1 < 10 ? `0${i + 1}` : i + 1}
              </div>
              <p className="text-lg font-medium text-blue-50 pt-2 leading-relaxed">
                {mod}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
