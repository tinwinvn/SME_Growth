import { useState } from "react";

export const APPS_SCRIPT_URL: string =
  import.meta.env.VITE_APPS_SCRIPT_URL ?? "";

export interface RegistrationFormData {
  tenDoanhNghiep: string;
  loaiHinh: string;
  quyMo: string;
  linhVuc: string;
  vanDe: string;
  noiDung: string;
  tenNguoiLienHe: string;
  chucVu: string;
  email: string;
  soDienThoai: string;
}

export interface FormErrors {
  tenDoanhNghiep?: string;
  email?: string;
  soDienThoai?: string;
}

export type SubmitStatus = "idle" | "loading" | "success" | "error";

const INITIAL_FORM: RegistrationFormData = {
  tenDoanhNghiep: "",
  loaiHinh: "",
  quyMo: "",
  linhVuc: "",
  vanDe: "",
  noiDung: "",
  tenNguoiLienHe: "",
  chucVu: "",
  email: "",
  soDienThoai: "",
};

function validate(data: RegistrationFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.tenDoanhNghiep.trim()) {
    errors.tenDoanhNghiep = "Vui lòng nhập tên doanh nghiệp.";
  }

  if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Email không hợp lệ.";
  }

  if (
    data.soDienThoai.trim() &&
    !/^(0|\+84)[0-9]{8,10}$/.test(data.soDienThoai.trim())
  ) {
    errors.soDienThoai = "Số điện thoại không hợp lệ (ví dụ: 0912345678).";
  }

  return errors;
}

export function useRegistrationForm() {
  const [formData, setFormData] = useState<RegistrationFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!APPS_SCRIPT_URL) {
      setSubmitStatus("error");
      setErrorMessage(
        "Chưa cấu hình VITE_APPS_SCRIPT_URL trong file .env. Vui lòng xem hướng dẫn trong docs/google-sheets-setup.md.",
      );
      return;
    }

    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const payload = {
        "Tên doanh nghiệp": formData.tenDoanhNghiep,
        "Loại hình": formData.loaiHinh,
        "Quy mô": formData.quyMo,
        "Lĩnh vực hoạt động": formData.linhVuc,
        "Vấn đề gặp phải": formData.vanDe,
        "Nội dung đăng ký": formData.noiDung,
        "Người liên hệ": formData.tenNguoiLienHe,
        "Chức vụ": formData.chucVu,
        Email: formData.email,
        "Số điện thoại": formData.soDienThoai,
        "Thời gian gửi": new Date().toLocaleString("vi-VN", {
          timeZone: "Asia/Ho_Chi_Minh",
        }),
      };

      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body: JSON.stringify(payload),
      });

      setSubmitStatus("success");
      setFormData(INITIAL_FORM);
      setErrors({});
    } catch {
      setSubmitStatus("error");
      setErrorMessage(
        "Gửi đăng ký thất bại. Vui lòng kiểm tra kết nối và thử lại.",
      );
    }
  };

  return {
    formData,
    errors,
    submitStatus,
    errorMessage,
    handleChange,
    handleSubmit,
    setSubmitStatus,
  };
}
