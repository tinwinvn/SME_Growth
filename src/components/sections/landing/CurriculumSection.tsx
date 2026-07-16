import { useState } from "react";
import { AnimateIn } from "../../ui/AnimateIn";
import { SectionHeading } from "../../ui/SectionHeading";
import { ModuleTable } from "../../ui/ModuleTable";
import { TABS } from "../../../data/landingData";

export const CurriculumSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="noi-dung" className="py-16" style={{ background: "#f0f5fb" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeading>NỘI DUNG ĐÀO TẠO</SectionHeading>

        <AnimateIn animation="anim-fade-in-up" delay={100}>
          <div className="flex flex-col md:flex-row rounded-t-lg overflow-hidden border border-b-0 border-gray-300">
            {TABS.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`tab-btn flex-1 py-4 px-4 text-sm font-bold uppercase text-center border-r last:border-r-0 border-gray-300 ${activeTab === i ? "active" : ""}`}
                style={{
                  background: activeTab === i ? "#1b5e9e" : "#fff",
                  color: activeTab === i ? "#fff" : "#555",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="bg-white border border-gray-300 rounded-b-lg p-6 md:p-8 overflow-hidden">
            <div className="anim-tab-slide space-y-8" key={activeTab}>
              {TABS[activeTab].groups.map((g, gi) => (
                <div key={gi} style={{ animationDelay: `${gi * 60}ms` }}>
                  <h3
                    className="font-bold mb-4 uppercase"
                    style={{ color: "#e85d24", fontSize: "0.95rem" }}
                  >
                    {g.title}
                  </h3>
                  <ModuleTable rows={g.rows} />
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};
