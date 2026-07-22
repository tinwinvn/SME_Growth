import { INSTRUCTORS } from "../../../../data/landingData";
import { InstructorAvatar } from "./InstructorAvatar";
import { DualRoleDivider } from "./DualRoleDivider";

export const InstructorCard = ({
  ins,
  delay,
}: {
  ins: (typeof INSTRUCTORS)[number];
  delay: number;
}) => {
  const hasDualRole = !!ins.role2;

  return (
    <div
      className={`instructor-card flex flex-col items-center text-center bg-white border border-[#d0e4f5] rounded-xl p-5 shadow-sm ${hasDualRole ? "min-h-55" : "min-h-42.5"}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      <InstructorAvatar name={ins.name} />

      <p className="font-bold text-sm mb-2 leading-tight text-card-blue">
        {ins.name}
      </p>

      {hasDualRole ? (
        <>
          <div className="w-full">
            <p className="text-xs font-semibold leading-snug text-accent">
              {ins.role}
            </p>
            {ins.org && (
              <p className="text-xs text-gray-500 leading-snug mt-0.5">
                {ins.org}
              </p>
            )}
          </div>

          <DualRoleDivider />

          <div className="w-full">
            <p className="text-xs font-semibold leading-snug text-accent">
              {ins.role2}
            </p>
            {ins.org2 && (
              <p className="text-xs text-gray-500 leading-snug mt-0.5">
                {ins.org2}
              </p>
            )}
          </div>
        </>
      ) : (
        <>
          <p className="text-xs font-semibold mb-1 leading-snug text-accent">
            {ins.role}
          </p>
          <p className="text-xs text-gray-500 leading-snug">{ins.org}</p>
        </>
      )}
    </div>
  );
};
