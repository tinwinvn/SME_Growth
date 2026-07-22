import { AnimateIn } from "../../../components/ui/AnimateIn";
import { CommitmentCard, COMMITMENT_ITEMS } from "./commitments/CommitmentCard";

export const CommitmentsSection = () => (
  <section className="py-10 relative overflow-hidden bg-linear-to-r from-[#001b5a] via-[#004e9c] to-[#6eddf9]">
    <div className="absolute inset-0 pointer-events-none opacity-40">
      <div className="absolute -bottom-50 left-25 w-150 h-125 rounded-[100%] bg-[radial-gradient(ellipse,rgba(255,255,255,0.3)_0%,transparent_70%)] transform rotate-12" />
      <div className="absolute -top-25 -right-25 w-125 h-125 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.25)_0%,transparent_65%)]" />
    </div>

    <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
      <AnimateIn animation="anim-fade-in-up">
        <h2 className="text-center font-extrabold uppercase tracking-widest text-white mb-8 text-[1.6rem]">
          CAM KẾT
        </h2>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {COMMITMENT_ITEMS.map((item, i) => (
          <CommitmentCard key={i} item={item} delay={i * 80} />
        ))}
      </div>
    </div>
  </section>
);
