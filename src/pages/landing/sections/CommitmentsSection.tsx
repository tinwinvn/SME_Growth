import { AnimateIn } from "../../../components/ui/AnimateIn";
import { CommitmentCard, COMMITMENT_ITEMS } from "./commitments/CommitmentCard";

export const CommitmentsSection = () => (
  <section className="py-5 bg-[linear-gradient(160deg,#1a4e8a_0%,#2c82c9_60%,#1a4e8a_100%)]">
    <div className="max-w-5xl mx-auto px-4 md:px-8">
      <AnimateIn animation="anim-fade-in-up">
        <h2 className="text-center font-extrabold uppercase tracking-widest text-white mb-8 text-[1.6rem] ">
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
