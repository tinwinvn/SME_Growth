import { useInView } from "../../hooks/useInView";

export const AnimateIn = ({
  children,
  animation = "anim-fade-in-up",
  delay = 0,
  className = "",
  as: Tag = "div" as React.ElementType,
}: {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) => {
  const { ref, inView } = useInView();
  return (
    <Tag
      ref={ref}
      className={`${inView ? animation : "pre-anim"} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};
