import {
  FormField,
  FieldGroup,
} from "../../../../components/ui/FormFields";
import type {
  RegistrationFormData,
  FormErrors,
} from "../../../../hooks/useRegistrationForm";

interface Props {
  formData: RegistrationFormData;
  errors: FormErrors;
  onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >;
}

const LOAI_HINH = ["TNHH", "Cổ phần", "Doanh nghiệp tư nhân", "Khác"];
const QUY_MO = ["Siêu nhỏ", "Nhỏ", "Vừa"];
const NOI_DUNG = [
  "Hỗ trợ công nghệ khởi nghiệp sáng tạo",
  "Hỗ trợ phát triển nguồn nhân lực",
  "Hỗ trợ tư vấn",
];

export const BusinessInfoGroup = ({ formData, errors, onChange }: Props) => (
  <FieldGroup label="Thông tin doanh nghiệp">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <FormField label="Tên doanh nghiệp" required error={errors.tenDoanhNghiep}>
        <input
          id="f-ten-dn"
          name="tenDoanhNghiep"
          type="text"
          placeholder="Nhập tên doanh nghiệp"
          className={`form-input${errors.tenDoanhNghiep ? " input-error" : ""}`}
          required
          value={formData.tenDoanhNghiep}
          onChange={onChange}
        />
      </FormField>

      <FormField label="Loại hình doanh nghiệp">
        <select
          id="f-loai-hinh"
          name="loaiHinh"
          className="form-input"
          value={formData.loaiHinh}
          onChange={onChange}
        >
          <option value="">-- Chọn loại hình --</option>
          {LOAI_HINH.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Quy mô doanh nghiệp">
        <select
          id="f-quy-mo"
          name="quyMo"
          className="form-input"
          value={formData.quyMo}
          onChange={onChange}
        >
          <option value="">-- Chọn quy mô --</option>
          {QUY_MO.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Lĩnh vực hoạt động">
        <input
          id="f-linh-vuc"
          name="linhVuc"
          type="text"
          placeholder="Nhập lĩnh vực hoạt động"
          className="form-input"
          value={formData.linhVuc}
          onChange={onChange}
        />
      </FormField>
    </div>

    <div className="mt-5">
      <FormField label="Vấn đề doanh nghiệp đang gặp phải">
        <textarea
          id="f-van-de"
          name="vanDe"
          placeholder="Mô tả vấn đề doanh nghiệp đang gặp phải..."
          className="form-input resize-y"
          rows={3}
          value={formData.vanDe}
          onChange={onChange}
        />
      </FormField>
    </div>

    <div className="mt-5">
      <FormField label="Nội dung đăng ký tham gia">
        <select
          id="f-noi-dung"
          name="noiDung"
          className="form-input"
          value={formData.noiDung}
          onChange={onChange}
        >
          <option value="">-- Chọn nội dung --</option>
          {NOI_DUNG.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </FormField>
    </div>
  </FieldGroup>
);
