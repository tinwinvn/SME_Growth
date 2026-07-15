import { useState } from "react";
import { Icons } from "../../icons";

export const RegistrationForm = () => {
  const [customerType, setCustomerType] = useState<"CaNhan" | "DoanhNghiep">("CaNhan");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="dang-ky" className="py-20 bg-blue-900 relative">
      <div className="absolute inset-0 bg-blue-950/50"></div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 bg-orange-500 p-8 md:p-10 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-black mb-4 uppercase">Đăng Ký Đào Tạo, Tư Vấn</h2>
              <p className="mb-8 text-orange-100">Để lại thông tin, đội ngũ chương trình sẽ liên hệ hỗ trợ bạn sớm nhất.</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full"><Icons.Phone className="w-5 h-5" /></div>
                  <span className="font-semibold">0123 456 789</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full"><Icons.Mail className="w-5 h-5" /></div>
                  <span className="font-semibold">contact@smegrowth.vn</span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 p-8 md:p-10 relative">
              {submitted ? (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Icons.CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 uppercase">Đăng Ký Thành Công</h3>
                  <p className="text-slate-600">Đội ngũ chương trình sẽ liên hệ với bạn sớm nhất có thể! Cảm ơn bạn.</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Bạn Là Khách Hàng?</label>
                  <div className="flex gap-4">
                    <label className={`flex-1 cursor-pointer rounded-xl border-2 p-3 text-center transition-all ${customerType === "CaNhan" ? "border-orange-500 bg-orange-50 text-orange-700 font-bold" : "border-slate-200 text-slate-500 hover:border-slate-300"}`}>
                      <input type="radio" name="customerType" className="hidden" checked={customerType === "CaNhan"} onChange={() => setCustomerType("CaNhan")} />
                      Cá Nhân
                    </label>
                    <label className={`flex-1 cursor-pointer rounded-xl border-2 p-3 text-center transition-all ${customerType === "DoanhNghiep" ? "border-orange-500 bg-orange-50 text-orange-700 font-bold" : "border-slate-200 text-slate-500 hover:border-slate-300"}`}>
                      <input type="radio" name="customerType" className="hidden" checked={customerType === "DoanhNghiep"} onChange={() => setCustomerType("DoanhNghiep")} />
                      Doanh Nghiệp
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Họ và tên *</label>
                  <input type="text" required className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Nhập họ và tên" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Số điện thoại *</label>
                    <input type="tel" required className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Nhập số điện thoại" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input type="email" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Nhập email" />
                  </div>
                </div>

                {customerType === "DoanhNghiep" && (
                  <div className="animate-fade-in-up">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Tên doanh nghiệp *</label>
                    <input type="text" required className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Nhập tên doanh nghiệp" />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Ghi chú / Nhu cầu</label>
                  <textarea rows={3} className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none" placeholder="Nhập nội dung cần tư vấn..."></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold text-lg py-4 rounded-xl transition-colors shadow-lg uppercase tracking-wider">
                  Gửi Đăng Ký
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
