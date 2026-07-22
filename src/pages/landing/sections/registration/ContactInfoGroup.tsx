import { FormField, FieldGroup } from "../../../../components/ui/FormFields";

export const ContactInfoGroup = () => (
  <FieldGroup label="Thông tin người liên hệ" className="mt-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <FormField label="Tên người liên hệ">
        <input
          id="f-ten-nlt"
          type="text"
          placeholder="Họ và tên"
          className="form-input"
        />
      </FormField>
      <FormField label="Chức vụ">
        <input
          id="f-chuc-vu"
          type="text"
          placeholder="Chức vụ"
          className="form-input"
        />
      </FormField>
      <FormField label="Email liên hệ">
        <input
          id="f-email"
          type="email"
          placeholder="example@company.vn"
          className="form-input"
        />
      </FormField>
      <FormField label="Số điện thoại">
        <input
          id="f-sdt"
          type="tel"
          placeholder="09xxxxxxxx"
          className="form-input"
        />
      </FormField>
    </div>
  </FieldGroup>
);
