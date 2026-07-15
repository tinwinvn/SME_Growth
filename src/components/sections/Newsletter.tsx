import { useState } from "react";
import { Icons } from "../../icons";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section className="py-20 bg-blue-50 border-t border-blue-100">
      <div className="max-w-4xl mx-auto px-4 text-center animate-fade-in-up">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
          <Icons.Mail className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-blue-900 mb-4 uppercase">Nhận Thông Tin</h2>
        <p className="text-slate-600 text-lg mb-8">Thông Tin Hội Thảo & Sự Kiện Mới Nhất</p>

        {submitted ? (
          <div className="bg-green-100 text-green-700 p-4 rounded-xl border border-green-200 font-medium animate-fade-in">
            Đăng Ký Thành Công! Chương trình sẽ cập nhật tin tức mới nhất đến bạn.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full border border-slate-300 px-6 py-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-lg" 
              placeholder="Nhập email của bạn..." 
            />
            <button 
              type="submit" 
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-full transition-colors whitespace-nowrap uppercase tracking-wider shadow-lg"
            >
              Đăng Ký Ngay
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
