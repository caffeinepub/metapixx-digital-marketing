import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Idea",
    description:
      "We listen, research, and understand your brand, audience, and goals.",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "Our creative team develops bold concepts tailored to your vision.",
  },
  {
    number: "03",
    title: "Shoot",
    description:
      "Professional production — filming, photography, and live coverage.",
  },
  {
    number: "04",
    title: "Edit",
    description:
      "Post-production magic: editing, grading, motion graphics, audio mix.",
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "On-time delivery in all required formats, ready to publish and convert.",
  },
  {
    number: "06",
    title: "Post",
    description:
      "We post your content directly to your social media for maximum reach and impact.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const stepEls = section.querySelectorAll(".process-step");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 150);
          }
        }
      },
      { threshold: 0.3 },
    );

    for (const el of stepEls) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-16 md:py-32 px-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(18,24,38,0.95) 0%, #070A12 100%)",
      }}
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <span className="section-label">How We Work</span>
          <h2
            className="section-title"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            OUR PROCESS
          </h2>
          <p className="section-subtitle">
            How we bring your brand story to life
          </p>
        </div>

        {/* Steps — vertical on mobile, horizontal on md+ */}
        {/* Mobile: vertical stacked list */}
        <div className="flex flex-col gap-0 md:hidden">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-start gap-5">
              {/* Left: vertical line + circle */}
              <div className="flex flex-col items-center shrink-0">
                <div
                  className="process-step reveal w-14 h-14 rounded-full flex items-center justify-center font-black shrink-0 cursor-default"
                  data-index={i}
                  data-ocid={`process.item.${i + 1}`}
                  style={{
                    background:
                      step.number === "06"
                        ? "linear-gradient(135deg, #FF3BBE, #6D4BFF, #34E6FF)"
                        : "linear-gradient(135deg, #34E6FF, #6D4BFF, #FF3BBE)",
                    boxShadow:
                      step.number === "06"
                        ? "0 0 30px rgba(255,59,190,0.6), 0 0 60px rgba(109,75,255,0.3)"
                        : "0 0 30px rgba(109,75,255,0.5), 0 0 60px rgba(52,230,255,0.2)",
                    fontSize: "1.1rem",
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                  }}
                >
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-0.5 flex-1 min-h-[40px]"
                    style={{
                      background:
                        "linear-gradient(to bottom, #6D4BFF, #34E6FF)",
                      marginTop: "4px",
                      marginBottom: "4px",
                    }}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Right: text content */}
              <div className="pb-8 pt-2">
                <h3
                  className="font-bold uppercase tracking-widest mb-1.5"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: "0.95rem",
                    letterSpacing: "0.08em",
                    fontWeight: 700,
                    color: step.number === "06" ? "#FF3BBE" : undefined,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#B7C0D4", lineHeight: 1.7 }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: horizontal layout */}
        <div className="hidden md:flex items-start" style={{ gap: 0 }}>
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-start flex-1">
              {/* Step */}
              <div
                className="process-step reveal flex-1 flex flex-col items-center text-center px-3"
                data-index={i}
                data-ocid={`process.item.${i + 1}`}
              >
                {/* Numbered circle */}
                <div
                  className="process-step-circle w-16 h-16 rounded-full flex items-center justify-center font-black mb-5 shrink-0 cursor-default"
                  style={{
                    background:
                      step.number === "06"
                        ? "linear-gradient(135deg, #FF3BBE, #6D4BFF, #34E6FF)"
                        : "linear-gradient(135deg, #34E6FF, #6D4BFF, #FF3BBE)",
                    boxShadow:
                      step.number === "06"
                        ? "0 0 30px rgba(255,59,190,0.6), 0 0 60px rgba(109,75,255,0.3)"
                        : "0 0 30px rgba(109,75,255,0.5), 0 0 60px rgba(52,230,255,0.2)",
                    fontSize: "1.25rem",
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="font-bold uppercase tracking-widest mb-2"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: "1rem",
                    letterSpacing: "0.08em",
                    fontWeight: 700,
                    color: step.number === "06" ? "#FF3BBE" : undefined,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-xs leading-relaxed max-w-[130px]"
                  style={{ color: "#B7C0D4", lineHeight: 1.7 }}
                >
                  {step.description}
                </p>
              </div>

              {/* Connector line (not after last) */}
              {i < steps.length - 1 && (
                <div
                  className="process-connector mt-8 shrink-0"
                  style={{ width: "24px" }}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
