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

export const ContactInfoGroup = ({ formData, errors, onChange }: Props) => (
  <FieldGroup label="Thông tin người liên hệ" className="mt-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <FormField label="Tên người liên hệ" required error={errors.tenNguoiLienHe}>
        <input
          id="f-ten-nlt"
          name="tenNguoiLienHe"
          type="text"
          placeholder="Họ và tên"
          className={`form-input${errors.tenNguoiLienHe ? " input-error" : ""}`}
          required
          value={formData.tenNguoiLienHe}
          onChange={onChange}
        />
      </FormField>

      <FormField label="Chức vụ" required error={errors.chucVu}>
        <input
          id="f-chuc-vu"
          name="chucVu"
          type="text"
          placeholder="Chức vụ"
          className={`form-input${errors.chucVu ? " input-error" : ""}`}
          required
          value={formData.chucVu}
          onChange={onChange}
        />
      </FormField>

      <FormField label="Email liên hệ" required error={errors.email}>
        <input
          id="f-email"
          name="email"
          type="email"
          placeholder="example@company.vn"
          className={`form-input${errors.email ? " input-error" : ""}`}
          required
          value={formData.email}
          onChange={onChange}
        />
      </FormField>

      <FormField label="Số điện thoại" required error={errors.soDienThoai}>
        <input
          id="f-sdt"
          name="soDienThoai"
          type="tel"
          placeholder="09xxxxxxxx"
          className={`form-input${errors.soDienThoai ? " input-error" : ""}`}
          required
          value={formData.soDienThoai}
          onChange={onChange}
        />
      </FormField>
    </div>
  </FieldGroup>
);
