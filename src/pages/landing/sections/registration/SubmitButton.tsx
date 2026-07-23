import type { SubmitStatus } from "../../../../hooks/useRegistrationForm";

interface Props {
  status: SubmitStatus;
}

const LABEL: Record<SubmitStatus, string> = {
  idle: "Gửi Đăng Ký",
  loading: "Đang gửi...",
  success: "Đã gửi thành công!",
  error: "Gửi Đăng Ký",
};

export const SubmitButton = ({ status }: Props) => (
  <div className="text-center mt-8">
    <button
      id="btn-dang-ky"
      type="submit"
      disabled={status === "loading" || status === "success"}
      className="btn-press btn-pulse text-white font-extrabold uppercase py-3 px-12 rounded-full text-base shadow-lg bg-accent transition-colors duration-200 ease-in-out hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {LABEL[status]}
    </button>
  </div>
);
