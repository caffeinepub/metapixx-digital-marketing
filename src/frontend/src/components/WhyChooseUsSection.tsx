import { BadgeDollarSign, Brain, TrendingUp, Zap } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const reasons = [
  {
    icon: Brain,
    title: "Creative Strategy",
    description:
      "We don't just execute — we think. Every campaign is built on deep brand insight and strategic storytelling that resonates with your audience.",
    color: "#34E6FF",
    index: "01",
  },
  {
    icon: TrendingUp,
    title: "Trend-Based Execution",
    description:
      "We ride the wave before it peaks. Our team monitors platform trends daily so your content is always culturally relevant and algorithm-favoured.",
    color: "#6D4BFF",
    index: "02",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Speed without compromise. We deliver production-quality creatives in tight timelines — because every moment of delay costs you engagement.",
    color: "#FF3BBE",
    index: "03",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Pricing",
    description:
      "Premium quality at honest prices. We believe great content shouldn't be a luxury — it should be the foundation of every growing brand.",
    color: "#34E6FF",
    index: "04",
  },
];

export default function WhyChooseUsSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="why-choose-us"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-16 md:py-32 px-6"
      style={{ background: "#070A12" }}
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Heading */}
        <div className="reveal text-center mb-10 md:mb-16">
          <span className="section-label">Our Strengths</span>
          <h2
            className="section-title"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            WHY CHOOSE US
          </h2>
          <p className="section-subtitle">
            The reasons our clients keep coming back
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`reveal reveal-delay-${i + 1} glass-card glass-card-hover p-5 md:p-7 relative overflow-hidden`}
              data-ocid={`why.item.${i + 1}`}
            >
              {/* Giant editorial background number */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: "-0.5rem",
                  right: "0.75rem",
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: "7rem",
                  fontWeight: 900,
                  color: "#fff",
                  opacity: 0.04,
                  lineHeight: 1,
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {reason.index}
              </span>

              {/* Flex row: icon + content */}
              <div className="flex gap-4">
                {/* Icon column */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: `${reason.color}12`,
                    boxShadow: `0 0 0 1px ${reason.color}40, 0 0 16px ${reason.color}18`,
                  }}
                >
                  <reason.icon size={22} style={{ color: reason.color }} />
                </div>

                {/* Content column */}
                <div>
                  <h3
                    className="text-sm font-bold uppercase mb-2.5"
                    style={{
                      color: "#fff",
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "#B7C0D4", lineHeight: 1.7 }}
                  >
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
