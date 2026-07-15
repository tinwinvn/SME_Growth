import { Icons } from "../icons";

const icons = [
  { Icon: Icons.Users, x: 450, y: 450, delay: "animation-delay-1400" },
  { Icon: Icons.Target, x: 650, y: 340, delay: "animation-delay-1600" },
  { Icon: Icons.Rocket, x: 800, y: 200, delay: "animation-delay-1800" },
];

export const GrowthArrow = () => {
  return (
    <div className="absolute bottom-0 right-0 w-full md:w-3/4 lg:w-2/3 h-[60%] md:h-[80%] z-0 pointer-events-none">
      <svg
        className="w-full h-full drop-shadow-2xl"
        viewBox="0 0 1000 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMax meet"
      >
        <defs>
          <linearGradient
            id="glowGlow"
            x1="0"
            y1="600"
            x2="1000"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1e3a8a" stopOpacity="0" />
            <stop offset="0.3" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="0.7" stopColor="#f97316" stopOpacity="0.9" />
            <stop offset="1" stopColor="#fcd34d" stopOpacity="1" />
          </linearGradient>
          <linearGradient
            id="innerGlow"
            x1="0"
            y1="600"
            x2="1000"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="0.4" stopColor="#93c5fd" stopOpacity="0.9" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="1" />
          </linearGradient>
          <filter id="blurFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="15" />
          </filter>
        </defs>

        <path
          className="animate-draw"
          style={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
          d="M 50 550 C 400 550, 700 450, 960 40"
          stroke="url(#glowGlow)"
          strokeWidth="60"
          strokeLinecap="round"
          filter="url(#blurFilter)"
        />

        <path
          className="animate-draw animation-delay-200"
          style={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
          d="M 50 550 C 400 550, 700 450, 960 40"
          stroke="url(#glowGlow)"
          strokeWidth="25"
          strokeLinecap="round"
        />

        <path
          className="animate-draw animation-delay-400"
          style={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
          d="M 50 550 C 400 550, 700 450, 960 40"
          stroke="url(#innerGlow)"
          strokeWidth="8"
          strokeLinecap="round"
        />

        <path
          className="animate-fade-in animation-delay-2000 opacity-0"
          d="M 870 55 L 970 30 L 950 130"
          stroke="white"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {icons.map((item, i) => {
          const { Icon, x, y, delay } = item;
          return (
            <foreignObject
              key={i}
              x={x - 30}
              y={y - 30}
              width="60"
              height="60"
              className="overflow-visible"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-blue-900/60 backdrop-blur-md border-2 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.6)] flex items-center justify-center cursor-pointer pointer-events-auto hover:scale-125 transition-transform duration-300 animate-scale-in opacity-0 ${delay}`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
            </foreignObject>
          );
        })}
      </svg>
    </div>
  );
};
