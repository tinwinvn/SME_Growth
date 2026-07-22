import { DeadlineIcon } from "../../../../icons";

export const DeadlineBanner = () => (
  <div className="rounded-lg px-5 py-3 mb-5 flex items-center gap-3 bg-linear-to-br from-card-blue to-section-blue border border-card-blue">
    <DeadlineIcon className="shrink-0 text-white" />
    <p className="text-white font-extrabold uppercase text-sm tracking-wide">
      THỜI HẠN ĐĂNG KÝ:{" "}
      <span className="font-normal italic normal-case text-[rgba(255,255,255,0.85)]">
        Đang cập nhật
      </span>
    </p>
  </div>
);
