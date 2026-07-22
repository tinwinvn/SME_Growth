import { FormField, FieldGroup } from "../../../../components/ui/FormFields";

export const BusinessInfoGroup = () => (
  <FieldGroup label="Thông tin doanh nghiệp">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <FormField label="Tên doanh nghiệp" required>
        <input
          id="f-ten-dn"
          type="text"
          placeholder="Nhập tên doanh nghiệp"
          className="form-input"
          required
        />
      </FormField>

      <FormField label="Loại hình doanh nghiệp">
        <select id="f-loai-hinh" className="form-input">
          <option value="">-- Chọn loại hình --</option>
          {["TNHH", "Cổ phần", "Doanh nghiệp tư nhân", "Khác"].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </FormField>

      <FormField label="Quy mô doanh nghiệp">
        <select id="f-quy-mo" className="form-input">
          <option value="">-- Chọn quy mô --</option>
          {["Siêu nhỏ", "Nhỏ", "Vừa"].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </FormField>

      <FormField label="Lĩnh vực hoạt động">
        <input
          id="f-linh-vuc"
          type="text"
          placeholder="Nhập lĩnh vực hoạt động"
          className="form-input"
        />
      </FormField>
    </div>

    <div className="mt-5">
      <FormField label="Vấn đề doanh nghiệp đang gặp phải">
        <textarea
          id="f-van-de"
          placeholder="Mô tả vấn đề doanh nghiệp đang gặp phải..."
          className="form-input resize-y"
          rows={3}
        />
      </FormField>
    </div>

    <div className="mt-5">
      <FormField label="Nội dung đăng ký tham gia">
        <select id="f-noi-dung" className="form-input">
          <option value="">-- Chọn nội dung --</option>
          {[
            "Hỗ trợ công nghệ khởi nghiệp sáng tạo",
            "Hỗ trợ phát triển nguồn nhân lực",
            "Hỗ trợ tư vấn",
          ].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </FormField>
    </div>
  </FieldGroup>
);
