import { REASONS } from "../../../../data/landingData";
import { AnimateIn } from "../../../../components/ui/AnimateIn";
import { ReasonIcons } from "../../../../icons";

export const ReasonCard = ({
  reason,
  index,
  delay,
}: {
  reason: (typeof REASONS)[number];
  index: number;
  delay: number;
}) => {
  const IconComponent = ReasonIcons[index];
  return (
    <AnimateIn animation="anim-scale-in" delay={delay}>
      <div className="reason-card bg-white rounded-xl p-5 shadow-sm flex flex-col gap-3 h-full border-t-[3px] border-t-accent">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-extrabold text-sm shrink-0 bg-accent">
            {index + 1}
          </div>
          <div className="text-gray-400">
            <IconComponent />
          </div>
        </div>
        <h3 className="font-bold text-sm leading-snug text-card-blue">
          {reason.title}
        </h3>
        <p className="text-gray-600 text-xs leading-relaxed">{reason.desc}</p>
      </div>
    </AnimateIn>
  );
};
