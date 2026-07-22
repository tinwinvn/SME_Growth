import { SectionHeading } from "../../../components/ui/SectionHeading";
import { REASONS } from "../../../data/landingData";
import { ReasonCard } from "./whyjoin/ReasonCard";

export const WhyJoinSection = () => {
  const firstRow = REASONS.slice(0, 4);
  const secondRow = REASONS.slice(4);

  return (
    <section className="py-14 bg-bg-light">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeading>VÌ SAO NÊN THAM GIA</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {firstRow.map((r: (typeof REASONS)[number], i: number) => (
            <ReasonCard key={i} reason={r} index={i} delay={i * 70} />
          ))}
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full lg:w-3/4">
            {secondRow.map((r: (typeof REASONS)[number], i: number) => (
              <ReasonCard
                key={i + 4}
                reason={r}
                index={i + 4}
                delay={(i + 4) * 70}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
