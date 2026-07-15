import { Icons } from "../icons";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t-4 border-blue-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white text-blue-900 font-black px-3 py-1 rounded-sm tracking-widest text-lg">
                <span className="text-orange-500">SME</span> GROWTH
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Chương trình đào tạo thiết kế theo nhu cầu thực tế của doanh nghiệp nhỏ và vừa, 
              giúp nâng cao năng lực quản trị, vận hành và phát triển bền vững.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="font-bold text-white">FB</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="font-bold text-white">IN</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                <span className="font-bold text-white">YT</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Liên Hệ</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <Icons.MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  71 Ngũ Hành Sơn, Phường Mỹ An, Quận Ngũ Hành Sơn, Đà Nẵng
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Icons.Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="tel:0123456789" className="hover:text-white transition-colors">
                  0123 456 789 (Ms. Anh)
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Icons.Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="mailto:contact@smegrowth.vn" className="hover:text-white transition-colors">
                  contact@smegrowth.vn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Liên Kết</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#muc-tieu" className="hover:text-orange-400 transition-colors">Mục Tiêu Chương Trình</a></li>
              <li><a href="#noi-dung" className="hover:text-orange-400 transition-colors">Nội Dung Đào Tạo</a></li>
              <li><a href="#quy-trinh" className="hover:text-orange-400 transition-colors">Quy Trình Thực Hiện</a></li>
              <li><a href="#nang-luc" className="hover:text-orange-400 transition-colors">Tại Sao Chọn Chúng Tôi</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 mt-8 text-sm text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} SME Growth Program - Đại học Kinh tế, ĐHĐN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
