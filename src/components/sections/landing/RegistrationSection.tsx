import { AnimateIn } from "../../ui/AnimateIn";
import { FormField, FieldGroup } from "../../ui/FormFields";

export const RegistrationSection = () => (
  <section id="dang-ky" className="py-16 bg-white">
    <div className="max-w-3xl mx-auto px-4 md:px-8">
      <AnimateIn animation="anim-fade-in-up" className="text-center mb-10">
        <h2
          className="font-extrabold uppercase mb-3"
          style={{ color: "#e85d24", fontSize: "1.5rem", lineHeight: 1.3 }}
        >
          ĐĂNG KÝ LIỀN TAY
          <br />
          BỨT PHÁ TĂNG TRƯỞNG NGAY
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto">
          Hãy để lại thông tin để DUE SME GROWTH 2026 đồng hành cùng doanh
          nghiệp trên hành trình tăng trưởng bền vững.
        </p>
      </AnimateIn>

      <AnimateIn animation="anim-scale-in" delay={120}>
        <form
          className="rounded-2xl p-7 md:p-10 shadow-xl"
          style={{ background: "#f0f5fb", border: "1px solid #d0e4f5" }}
          onSubmit={(e) => e.preventDefault()}
        >
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
                  {["TNHH", "Cổ phần", "Doanh nghiệp tư nhân", "Khác"].map(
                    (o) => (
                      <option key={o}>{o}</option>
                    ),
                  )}
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

          <div className="text-center mt-8">
            <button
              id="btn-dang-ky"
              type="submit"
              className="btn-press btn-pulse text-white font-extrabold uppercase py-3 px-12 rounded-full text-base shadow-lg"
              style={{
                background: "#e85d24",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#c94e1a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#e85d24")
              }
            >
              Gửi Đăng Ký
            </button>
          </div>
        </form>
      </AnimateIn>
    </div>
  </section>
);
