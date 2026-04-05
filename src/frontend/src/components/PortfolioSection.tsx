import { useState } from "react";
import { SiBehance } from "react-icons/si";
import { useScrollReveal } from "../hooks/useScrollReveal";

type Category = "All" | "Poster" | "Reel" | "Ads";

type PortfolioItem = {
  id: number;
  title: string;
  category: Category;
  image: string;
  behanceUrl?: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "School Admission Poster Design",
    category: "Poster",
    image:
      "/assets/12_vvat_-_copy_-_copy_-_copy_copy-019d5d35-0e2c-722f-aa71-9d45eb983bb7.jpg",
  },
  {
    id: 2,
    title: "Instagram Reel for Event Promotion",
    category: "Reel",
    image: "/assets/generated/portfolio-event-reel.dim_600x600.jpg",
  },
  {
    id: 3,
    title: "Product Advertisement Creative",
    category: "Ads",
    image: "/assets/generated/portfolio-product-ad.dim_600x600.jpg",
  },
  {
    id: 4,
    title: "Social Media Poster",
    category: "Poster",
    image: "/assets/generated/portfolio-social-poster.dim_600x600.jpg",
  },
  {
    id: 5,
    title: "Brand Promotion Video Edit",
    category: "Reel",
    image: "/assets/generated/portfolio-brand-video.dim_600x600.jpg",
  },
  {
    id: 6,
    title: "Coolie Welcome Video - Theater Work",
    category: "Reel",
    image:
      "/assets/coolie_booking_post_copy-019d5d3f-5445-71cb-83b9-d042bac4fdf2.jpg",
    behanceUrl:
      "https://www.behance.net/gallery/232600667/Cololie-Welcome-Video-Sri-Balaji-Cinemas-Metapixx",
  },
];

const categories: Category[] = ["All", "Poster", "Reel", "Ads"];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const sectionRef = useScrollReveal();

  const filtered =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-16 md:py-32 px-6"
      style={{
        background:
          "linear-gradient(180deg, #070A12 0%, rgba(18,24,38,0.95) 100%)",
      }}
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Heading */}
        <div className="reveal text-center mb-10 md:mb-12">
          <span className="section-label">Selected Work</span>
          <h2
            className="section-title"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            OUR PORTFOLIO
          </h2>
          <p className="section-subtitle">
            A glimpse into the work we&apos;re most proud of
          </p>
        </div>

        {/* Filter chips */}
        <div className="reveal flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-14">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setActiveFilter(cat)}
              aria-pressed={activeFilter === cat}
              data-ocid={`portfolio.${cat.toLowerCase()}.tab`}
              style={{
                padding: "0.4rem 1.1rem",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: 600,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                letterSpacing: "0.04em",
                cursor: "pointer",
                transition: "all 0.25s ease",
                border:
                  activeFilter === cat
                    ? "1.5px solid transparent"
                    : "1.5px solid rgba(255,255,255,0.12)",
                background:
                  activeFilter === cat
                    ? "linear-gradient(135deg, #6D4BFF, #FF3BBE)"
                    : "rgba(255,255,255,0.05)",
                color: activeFilter === cat ? "#fff" : "#B7C0D4",
                boxShadow:
                  activeFilter === cat
                    ? "0 0 20px rgba(109,75,255,0.4)"
                    : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => {
            const cardContent = (
              <div
                className="portfolio-card group relative overflow-hidden rounded-2xl cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-6px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 12px 40px rgba(109,75,255,0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 4px 24px rgba(0,0,0,0.3)";
                }}
              >
                {/* Image with zoom on hover */}
                <div className="overflow-hidden" style={{ aspectRatio: "1/1" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    style={{
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLImageElement).style.transform =
                        "scale(1.07)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLImageElement).style.transform =
                        "scale(1)";
                    }}
                    loading="lazy"
                  />
                </div>

                {/* Gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(7,10,18,0.92) 0%, rgba(7,10,18,0.4) 55%, transparent 100%)",
                    transition: "opacity 0.35s ease",
                    pointerEvents: "none",
                  }}
                />

                {/* Behance badge on hover overlay */}
                {item.behanceUrl && (
                  <div
                    className="absolute bottom-16 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100"
                    style={{
                      transition: "opacity 0.35s ease, transform 0.35s ease",
                      transform: "translateY(6px)",
                      pointerEvents: "none",
                    }}
                  >
                    <span
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{
                        background: "rgba(9,82,255,0.85)",
                        backdropFilter: "blur(8px)",
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.2)",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        letterSpacing: "0.03em",
                        boxShadow: "0 2px 12px rgba(9,82,255,0.4)",
                      }}
                    >
                      <SiBehance size={13} />
                      View on Behance
                    </span>
                  </div>
                )}

                {/* Info bar */}
                <div
                  className="p-4"
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3
                      className="text-white font-semibold text-sm leading-snug line-clamp-2"
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </h3>
                    <span
                      className="shrink-0 text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(109,75,255,0.25), rgba(255,59,190,0.2))",
                        border: "1px solid rgba(109,75,255,0.35)",
                        color: "#C4A8FF",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        letterSpacing: "0.03em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            );

            return (
              <div
                key={item.id}
                className="reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {item.behanceUrl ? (
                  <a
                    href={item.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`portfolio.item.${item.id}`}
                    style={{ display: "block", textDecoration: "none" }}
                  >
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div
            className="text-center py-20"
            data-ocid="portfolio.empty_state"
            style={{ color: "#B7C0D4" }}
          >
            <p
              className="text-lg"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              No items in this category yet.
            </p>
          </div>
        )}

        {/* Behance CTA */}
        <div className="reveal flex justify-center mt-10 md:mt-14">
          <a
            href="https://www.behance.net/gallery/232600667/Cololie-Welcome-Video-Sri-Balaji-Cinemas-Metapixx"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="portfolio.behance.button"
            className="flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full font-semibold text-sm text-center"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: "0.04em",
              background: "rgba(9,82,255,0.08)",
              border: "1.5px solid rgba(9,82,255,0.55)",
              color: "#7EB3FF",
              backdropFilter: "blur(12px)",
              boxShadow:
                "0 0 20px rgba(9,82,255,0.15), inset 0 1px 0 rgba(255,255,255,0.07)",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(9,82,255,0.18)";
              el.style.boxShadow =
                "0 0 32px rgba(9,82,255,0.4), inset 0 1px 0 rgba(255,255,255,0.1)";
              el.style.borderColor = "rgba(9,82,255,0.85)";
              el.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(9,82,255,0.08)";
              el.style.boxShadow =
                "0 0 20px rgba(9,82,255,0.15), inset 0 1px 0 rgba(255,255,255,0.07)";
              el.style.borderColor = "rgba(9,82,255,0.55)";
              el.style.color = "#7EB3FF";
            }}
          >
            <SiBehance size={18} className="shrink-0" />
            <span>View Full Portfolio on Behance</span>
          </a>
        </div>
      </div>
    </section>
  );
}
