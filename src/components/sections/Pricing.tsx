import { Icons } from "../../icons";

export const Pricing = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 uppercase">
            Bảng Giá Dịch Vụ
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-slate-100 p-8 shadow-lg hover:border-orange-300 transition-colors relative flex flex-col animate-fade-in-right">
            <h3 className="text-2xl font-bold text-slate-800 mb-2 uppercase text-center">
              Khóa Cá Nhân
            </h3>
            <div className="text-center mb-6">
              <span className="text-sm text-slate-500 line-through">
                2.500.000đ
              </span>
              <div className="text-4xl font-black text-orange-500">
                1.490.000đ
              </div>
              <span className="text-sm text-slate-500">/học viên</span>
            </div>

            <div className="space-y-4 mb-8 grow">
              <div className="flex gap-3">
                <Icons.CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                <p className="text-slate-600">
                  Tiếp cận chương trình đào tạo thực tế phù hợp với doanh nghiệp
                  nhỏ và vừa.
                </p>
              </div>
              <div className="flex gap-3">
                <Icons.CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                <p className="text-slate-600">
                  Thực hành trên tình huống và dữ liệu thực tế.
                </p>
              </div>
              <div className="flex gap-3">
                <Icons.CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                <p className="text-slate-600">
                  Đào tạo kỹ năng quản trị song hành (tài chính, nhân sự, vận
                  hành).
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg mt-4 border border-orange-100">
                <h4 className="font-bold text-orange-800 mb-2 text-sm uppercase">
                  Ưu đãi nhóm:
                </h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Từ 3 học viên: giảm 150.000đ/học viên</li>
                  <li>• Từ 5 học viên: giảm 250.000đ/học viên</li>
                </ul>
              </div>
            </div>

            <button
              onClick={() =>
                document
                  .getElementById("dang-ky")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors uppercase tracking-wider"
            >
              Tư Vấn Ngay
            </button>
          </div>

          <div className="bg-blue-900 rounded-2xl border-2 border-blue-800 p-8 shadow-xl transform md:-translate-y-4 relative flex flex-col animate-fade-in-left">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
              Khuyên Dùng
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 uppercase text-center mt-2">
              Khóa Doanh Nghiệp
            </h3>
            <div className="text-center mb-6">
              <div className="text-4xl font-black text-orange-400 py-2">
                Liên Hệ
              </div>
              <span className="text-sm text-blue-200">
                để nhận báo giá chi tiết
              </span>
            </div>

            <div className="space-y-4 mb-8 grow">
              <div className="flex gap-3">
                <Icons.CheckCircle className="w-6 h-6 text-orange-400 shrink-0" />
                <p className="text-blue-100">
                  Bao gồm toàn bộ nội dung & quyền lợi của khóa cá nhân.
                </p>
              </div>
              <div className="flex gap-3">
                <Icons.CheckCircle className="w-6 h-6 text-orange-400 shrink-0" />
                <p className="text-blue-100">
                  Đề xuất quy trình quản trị nội bộ phù hợp với quy mô doanh
                  nghiệp.
                </p>
              </div>
              <div className="flex gap-3">
                <Icons.CheckCircle className="w-6 h-6 text-orange-400 shrink-0" />
                <p className="text-blue-100">
                  Thực hành trên dữ liệu và tình huống thực tế của doanh nghiệp.
                </p>
              </div>
              <div className="flex gap-3">
                <Icons.CheckCircle className="w-6 h-6 text-orange-400 shrink-0" />
                <p className="text-blue-100">
                  Nội dung được tinh chỉnh, thiết kế riêng theo nhu cầu, quy mô
                  và lĩnh vực hoạt động.
                </p>
              </div>

              <div className="bg-blue-800/50 p-4 rounded-lg mt-4 border border-blue-700 text-center">
                <p className="font-bold text-orange-300 text-sm">
                  Tiết kiệm chi phí hơn so với gói cá nhân
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                document
                  .getElementById("dang-ky")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full bg-white hover:bg-slate-100 text-blue-900 font-black py-3 rounded-xl transition-colors uppercase tracking-wider"
            >
              Tư Vấn Báo Giá
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
