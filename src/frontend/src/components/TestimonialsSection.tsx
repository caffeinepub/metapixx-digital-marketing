import { Star } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const testimonials = [
  {
    quote:
      "Metapixx completely transformed our social media presence. Within three months, our engagement tripled and we signed two major clients directly from Instagram. Their creativity is unmatched.",
    name: "Priya Mehta",
    role: "Co-founder, Aura Skincare",
    initials: "PM",
    color: "#34E6FF",
    featured: true,
  },
  {
    quote:
      "The video production quality is on par with agencies charging three times the price. Every reel they deliver stops the scroll. Our product launch campaign hit 500K views organically.",
    name: "Arjun Sharma",
    role: "Marketing Head, TechPulse India",
    initials: "AS",
    color: "#6D4BFF",
    featured: false,
  },
  {
    quote:
      "What sets Metapixx apart is how quickly they grasp the brand DNA and translate it into stunning visuals. Fast turnaround, premium results, and a team that genuinely cares.",
    name: "Sneha Kapoor",
    role: "Brand Director, NovaBrew Coffee",
    initials: "SK",
    color: "#FF3BBE",
    featured: false,
  },
];

const STARS = [0, 1, 2, 3, 4];

export default function TestimonialsSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="testimonials"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-16 md:py-32 px-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(18,24,38,0.95) 0%, #070A12 100%)",
      }}
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Heading */}
        <div className="reveal text-center mb-10 md:mb-16">
          <span className="section-label">Client Stories</span>
          <h2
            className="section-title"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="section-subtitle">
            Real results from real brands we&apos;ve helped grow
          </p>
        </div>

        {/* Editorial layout: featured (2-col) + 2 smaller cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Featured testimonial */}
          <div
            className="reveal reveal-delay-1 glass-card glass-card-hover p-6 md:p-10 flex flex-col lg:col-span-2 relative overflow-hidden"
            data-ocid="testimonials.item.1"
          >
            {/* Large SVG Quote Mark */}
            <div aria-hidden="true" className="mb-6" style={{ lineHeight: 0 }}>
              <svg
                width="72"
                height="56"
                viewBox="0 0 72 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <text
                  x="0"
                  y="56"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: "80px",
                    fontWeight: 900,
                    fill: "url(#quoteGrad)",
                  }}
                >
                  &ldquo;
                </text>
                <defs>
                  <linearGradient id="quoteGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#34E6FF" />
                    <stop offset="100%" stopColor="#6D4BFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex gap-1 mb-5">
              {STARS.map((s) => (
                <Star
                  key={s}
                  size={16}
                  className="star-filled"
                  fill="#FFD700"
                />
              ))}
            </div>

            <p
              className="flex-1 mb-8"
              style={{
                color: "#D0D8EE",
                lineHeight: 1.75,
                fontSize: "1.1rem",
                fontStyle: "italic",
              }}
            >
              &ldquo;{testimonials[0].quote}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${testimonials[0].color}50, ${testimonials[0].color}20)`,
                  border: `1px solid ${testimonials[0].color}60`,
                  color: testimonials[0].color,
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                }}
              >
                {testimonials[0].initials}
              </div>
              <div>
                <p
                  className="font-bold text-white"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {testimonials[0].name}
                </p>
                <p className="text-xs" style={{ color: "#B7C0D4" }}>
                  {testimonials[0].role}
                </p>
              </div>
            </div>
          </div>

          {/* Smaller testimonials */}
          <div className="flex flex-col gap-5">
            {testimonials.slice(1).map((t, i) => (
              <div
                key={t.name}
                className={`reveal reveal-delay-${i + 2} glass-card glass-card-hover p-5 md:p-7 flex flex-col flex-1`}
                data-ocid={`testimonials.item.${i + 2}`}
              >
                {/* SVG Quote Mark — smaller */}
                <div
                  aria-hidden="true"
                  className="mb-4"
                  style={{ lineHeight: 0 }}
                >
                  <svg
                    width="48"
                    height="38"
                    viewBox="0 0 48 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <text
                      x="0"
                      y="38"
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontSize: "52px",
                        fontWeight: 900,
                        fill: `url(#quoteGrad${i})`,
                      }}
                    >
                      &ldquo;
                    </text>
                    <defs>
                      <linearGradient
                        id={`quoteGrad${i}`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor={t.color} />
                        <stop offset="100%" stopColor="#6D4BFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex gap-0.5 mb-3">
                  {STARS.map((s) => (
                    <Star
                      key={s}
                      size={12}
                      className="star-filled"
                      fill="#FFD700"
                    />
                  ))}
                </div>

                <p
                  className="text-sm flex-1 mb-5"
                  style={{ color: "#B7C0D4", lineHeight: 1.75 }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${t.color}40, ${t.color}20)`,
                      border: `1px solid ${t.color}60`,
                      color: t.color,
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold text-white"
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                      }}
                    >
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: "#B7C0D4" }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
