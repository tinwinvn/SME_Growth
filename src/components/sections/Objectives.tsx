import { Icons } from "../../icons";

export const Objectives = () => {
  const objectives = [
    "Nắm rõ các yêu cầu quản trị doanh nghiệp hiện đại, từ đó xây dựng và hoàn thiện quy trình vận hành",
    "Tư duy chuẩn trong quản trị tài chính, nhân sự và vận hành doanh nghiệp",
    "Xây dựng kế hoạch kinh doanh khả thi, áp dụng trực tiếp trên tình hình thực tế",
    "Thành thạo các công cụ quản trị, báo cáo và ra quyết định",
    "Biết cách thu thập, xử lý và phân tích dữ liệu kinh doanh",
    "Xác định nguyên nhân và cách khắc phục các điểm nghẽn trong vận hành",
    "Hiểu về các chính sách, chương trình hỗ trợ doanh nghiệp nhỏ và vừa",
    "Chủ động xây dựng lộ trình phát triển và mở rộng quy mô"
  ];

  return (
    <section id="muc-tieu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 uppercase">Mục Tiêu & Cam Kết</h2>
          <div className="max-w-4xl mx-auto space-y-4 text-slate-600 text-lg">
            <p>
              Giúp doanh nghiệp nhỏ và vừa xây dựng và hoàn thiện quy trình quản trị nội bộ, 
              chủ động thích ứng với thay đổi thị trường và quy định pháp luật.
            </p>
            <p>
              Trang bị kiến thức và kỹ năng quản trị thực tiễn, giúp doanh nghiệp 
              tối ưu nguồn lực, hạn chế rủi ro vận hành và nâng cao năng lực cạnh tranh.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((obj, i) => (
            <div 
              key={i} 
              className={`bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 animate-fade-in-up`}
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Icons.CheckCircle className="text-blue-600 w-6 h-6" />
              </div>
              <p className="text-slate-700 font-medium leading-relaxed">{obj}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
