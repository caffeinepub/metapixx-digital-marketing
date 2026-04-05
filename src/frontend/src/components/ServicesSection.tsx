import {
  FileText,
  Lightbulb,
  Palette,
  PenLine,
  Scissors,
  Share2,
  Video,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const services = [
  {
    icon: Palette,
    title: "Poster Design",
    description:
      "Eye-catching visual designs that communicate your brand message with impact and precision.",
    color: "#34E6FF",
    index: "01",
  },
  {
    icon: Video,
    title: "Video Production",
    description:
      "Full-scale video production from concept to camera — cinematic, brand-driven storytelling.",
    color: "#6D4BFF",
    index: "02",
  },
  {
    icon: Scissors,
    title: "Video Editing",
    description:
      "Dynamic editing with motion graphics, color grading, and audio sync for polished reels.",
    color: "#FF3BBE",
    index: "03",
  },
  {
    icon: Lightbulb,
    title: "Concept Development",
    description:
      "Strategic ideation sessions that transform your vision into compelling creative concepts.",
    color: "#34E6FF",
    index: "04",
  },
  {
    icon: FileText,
    title: "Scripting",
    description:
      "Persuasive, on-brand scripts for ads, reels, and brand films that convert viewers.",
    color: "#6D4BFF",
    index: "05",
  },
  {
    icon: PenLine,
    title: "Content Writing",
    description:
      "SEO-optimised, engaging copy for captions, blogs, ads, and brand communications.",
    color: "#FF3BBE",
    index: "06",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "End-to-end management of your channels — strategy, scheduling, growth, and analytics.",
    color: "#34E6FF",
    index: "07",
  },
];

export default function ServicesSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="services"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-16 md:py-32 px-6"
      style={{ background: "rgba(7,10,18,1)" }}
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Heading */}
        <div className="reveal text-center mb-10 md:mb-16">
          <span className="section-label">What We Do</span>
          <h2
            className="section-title"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            OUR SERVICES
          </h2>
          <p className="section-subtitle">
            Everything you need to build a powerful brand presence
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 7)} glass-card glass-card-hover p-5 md:p-7 relative overflow-hidden`}
              style={{ borderTopWidth: "2px", borderTopColor: "transparent" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderTopColor =
                  svc.color;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderTopColor =
                  "transparent";
              }}
              data-ocid={`services.item.${i + 1}`}
            >
              {/* Background index number */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "0.75rem",
                  right: "1rem",
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: "1.75rem",
                  fontWeight: 800,
                  color: "#fff",
                  opacity: 0.06,
                  lineHeight: 1,
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {svc.index}
              </span>

              {/* Icon with gradient border circle */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-5 relative"
                style={{
                  background: `${svc.color}12`,
                  boxShadow: `0 0 0 1px ${svc.color}40, 0 0 16px ${svc.color}20`,
                }}
              >
                <svc.icon size={20} style={{ color: svc.color }} />
              </div>

              <h3
                className="text-sm font-bold mb-2.5 uppercase tracking-wide"
                style={{
                  color: "#fff",
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                {svc.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#B7C0D4", lineHeight: 1.7 }}
              >
                {svc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
