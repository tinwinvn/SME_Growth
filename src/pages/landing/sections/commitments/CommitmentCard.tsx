import { AnimateIn } from "../../../../components/ui/AnimateIn";

export const COMMITMENT_ITEMS = [
  {
    title: "Thực tiễn, dễ áp dụng",
    body: "Nội dung tập trung vào những vấn đề doanh nghiệp đang gặp phải, ưu tiên công cụ và giải pháp có thể triển khai trong thực tế.",
  },
  {
    title: "Thiết kế theo nhu cầu doanh nghiệp",
    body: "Hoạt động đào tạo và tư vấn được xây dựng dựa trên hiện trạng, quy mô và mục tiêu phát triển của từng doanh nghiệp.",
  },
  {
    title: "Đồng hành cùng chuyên gia",
    body: "Doanh nghiệp được trao đổi, thực hành và hoàn thiện giải pháp cùng đội ngũ giảng viên, chuyên gia giàu kinh nghiệm.",
  },
  {
    title: "Có sản phẩm đầu ra cụ thể",
    body: "Sau chương trình, doanh nghiệp có thể xây dựng được kế hoạch hành động, lộ trình chuyển đổi số, bộ KPI, quy trình vận hành hoặc công cụ quản trị phù hợp.",
  },
];

export const CommitmentCard = ({
  item,
  delay,
}: {
  item: (typeof COMMITMENT_ITEMS)[number];
  delay: number;
}) => (
  <AnimateIn animation="anim-fade-in-up" delay={delay}>
    <div className="bg-white rounded-xl p-5 h-36 shadow-[0_4px_20px_rgba(27,94,158,0.10),0_1px_4px_rgba(0,0,0,0.06)]">
      <p className="font-bold text-sm leading-snug text-card-blue">
        {item.title}
      </p>

      <div className="my-3 border-t-[1.5px] border-t-[#d0e4f5]" />

      <p className="text-gray-700 text-sm leading-relaxed">{item.body}</p>
    </div>
  </AnimateIn>
);
