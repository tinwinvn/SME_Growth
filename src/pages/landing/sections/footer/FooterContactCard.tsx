export const FooterContactCard = () => (
  <div
    className="max-w-2xl mx-auto rounded-xl px-8 py-6 text-center border border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.07)]"
  >
    <p
      className="italic mb-3 text-sm text-[rgba(255,255,255,0.8)]"
    >
      Thông tin chi tiết vui lòng liên hệ:
    </p>
    <p
      className="font-extrabold uppercase mb-3 text-sm md:text-base text-white tracking-[0.03em]"
    >
      PHÒNG ĐÀO TẠO, TRƯỜNG ĐẠI HỌC KINH TẾ - ĐẠI HỌC ĐÀ NẴNG
    </p>
    <div
      className="space-y-1.5 text-sm italic text-[rgba(255,255,255,0.85)]"
    >
      <p>
        <span className="not-italic font-semibold text-white">Địa chỉ:</span>{" "}
        71 Ngũ Hành Sơn, Phường Ngũ Hành Sơn, thành phố Đà Nẵng
      </p>
      <p>
        <span className="not-italic font-semibold text-white">Điện thoại:</span>{" "}
        0236 3950 110
        <span className="mx-2">—</span>
        <span className="not-italic font-semibold text-white">Email:</span>{" "}
        daotao@due.edu.vn
      </p>
    </div>
  </div>
);
