import { AnimateIn } from "../../../components/ui/AnimateIn";
import { DeadlineBanner } from "./registration/DeadlineBanner";
import { BusinessInfoGroup } from "./registration/BusinessInfoGroup";
import { ContactInfoGroup } from "./registration/ContactInfoGroup";
import { SubmitButton } from "./registration/SubmitButton";
import { useRegistrationForm } from "../../../hooks/useRegistrationForm";

export const RegistrationSection = () => {
  const {
    formData,
    errors,
    submitStatus,
    errorMessage,
    handleChange,
    handleSubmit,
    setSubmitStatus,
  } = useRegistrationForm();

  return (
    <section id="dang-ky" className="py-14 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <AnimateIn animation="anim-fade-in-up" className="text-center mb-6">
          <h2 className="font-extrabold uppercase mb-3 text-accent text-[1.5rem] leading-[1.3]">
            ĐĂNG KÝ LIỀN TAY
            <br />
            BỨT PHÁ TĂNG TRƯỞNG NGAY
          </h2>
        </AnimateIn>

        <AnimateIn animation="anim-scale-in" delay={120}>
          <form
            className="rounded-2xl p-7 md:p-10 shadow-xl bg-[#f0f5fb] border border-[#d0e4f5]"
            onSubmit={handleSubmit}
            noValidate
          >
            <DeadlineBanner />

            <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
              Hãy để lại thông tin để DUE SME GROWTH 2026 đồng hành cùng doanh
              nghiệp trên hành trình tăng trưởng bền vững.
            </p>

            <BusinessInfoGroup
              formData={formData}
              errors={errors}
              onChange={handleChange}
            />

            <ContactInfoGroup
              formData={formData}
              errors={errors}
              onChange={handleChange}
            />

            {submitStatus === "success" && (
              <div className="mt-6 rounded-xl px-5 py-4 bg-green-50 border border-green-200 text-green-700 text-sm font-semibold text-center">
                ✅ Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.
              </div>
            )}

            {submitStatus === "error" && errorMessage && (
              <div
                className="mt-6 rounded-xl px-5 py-4 bg-red-50 border border-red-200 text-red-700 text-sm text-center cursor-pointer"
                onClick={() => setSubmitStatus("idle")}
              >
                ❌ {errorMessage}
              </div>
            )}

            <SubmitButton status={submitStatus} />
          </form>
        </AnimateIn>
      </div>
    </section>
  );
};
