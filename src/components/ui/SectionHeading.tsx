import { useInView } from "../../hooks/useInView";

export const SectionHeading = ({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) => {
  const { ref, inView } = useInView(0.3);
  return (
    <div className="flex flex-col items-center gap-3 mb-10">
      <h2
        ref={ref}
        className={`section-heading font-extrabold uppercase text-center text-2xl tracking-widest ${inView ? "in-view anim-fade-in-up" : "pre-anim"} ${light ? "text-white" : "text-card-blue"}`}
      >
        {children}
      </h2>
    </div>
  );
};
