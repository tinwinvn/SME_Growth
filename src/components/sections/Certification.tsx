import { Icons } from "../../icons";

export const Certification = () => {
  const highlights = [
    "Được cấp hoàn toàn miễn phí",
    "Học viên đạt chất lượng đầu ra",
    "Hỗ trợ giải đáp thắc mắc sau khóa học"
  ];

  return (
    <section className="py-16 bg-orange-50 border-y border-orange-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 animate-fade-in-right">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 uppercase">Chứng Nhận Hoàn Thành Chương Trình</h2>
            <div className="space-y-4">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-orange-100">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <Icons.CheckCircle className="w-6 h-6" />
                  </div>
                  <span className="font-medium text-slate-800 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-200 blur-2xl rounded-full opacity-50 animate-pulse"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 max-w-sm">
                <div className="border-2 border-dashed border-slate-300 p-6 text-center h-full flex flex-col justify-center">
                  <Icons.BookOpen className="w-16 h-16 text-blue-900 mx-auto mb-4" />
                  <h3 className="text-2xl font-black text-slate-800 mb-2 font-serif">CHỨNG NHẬN</h3>
                  <p className="text-sm text-slate-500 uppercase tracking-widest mb-4">Hoàn thành khóa học</p>
                  <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
