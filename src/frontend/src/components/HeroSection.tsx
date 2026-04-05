export default function HeroSection() {
  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: "100+", label: "Brands Built" },
    { value: "500K+", label: "Monthly Reach" },
    { value: "3×", label: "Avg. Growth" },
  ];

  return (
    <section
      id="home"
      className="hero-bg relative min-h-screen flex items-center justify-center px-6"
      style={{ paddingTop: "80px" }}
    >
      {/* Animated orbs */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />
      <div className="orb orb-4" aria-hidden="true" />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(7,10,18,0.35) 0%, rgba(7,10,18,0.2) 50%, rgba(7,10,18,0.85) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-[960px] mx-auto">
        {/* Agency badge */}
        <div className="hero-animate-1 flex justify-center mb-8">
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.28em] px-5 py-2.5 rounded-full"
            style={{
              background: "rgba(109, 75, 255, 0.1)",
              border: "1px solid",
              borderImageSlice: 1,
              borderColor: "rgba(109, 75, 255, 0.5)",
              color: "#34E6FF",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: "0.25em",
              fontSize: "0.7rem",
            }}
          >
            ✦ Creative Digital Agency ✦
          </span>
        </div>

        {/* H1 — word by word reveal */}
        <h1
          className="mb-6"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(3rem, 9vw, 7rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            textTransform: "uppercase",
          }}
        >
          <span className="word-reveal word-reveal-1 block">WE CREATE</span>
          <span
            className="word-reveal word-reveal-2 block gradient-text"
            style={{ marginTop: "0.05em" }}
          >
            CONTENT
          </span>
          <span
            className="word-reveal word-reveal-3 block"
            style={{ marginTop: "0.05em", fontSize: "0.7em" }}
          >
            THAT GROWS YOUR
          </span>
          <span
            className="word-reveal word-reveal-4 block gradient-text"
            style={{ marginTop: "0.05em" }}
          >
            BRAND
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="hero-animate-3 text-base md:text-lg mb-10 tracking-wider"
          style={{
            color: "#B7C0D4",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            letterSpacing: "0.12em",
            fontSize: "0.9rem",
            textTransform: "uppercase",
          }}
        >
          Posters&nbsp;&nbsp;·&nbsp;&nbsp;Videos&nbsp;&nbsp;·&nbsp;&nbsp;Content&nbsp;&nbsp;·&nbsp;&nbsp;Social
          Media Management
        </p>

        {/* CTAs */}
        <div className="hero-animate-4 flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            type="button"
            className="neon-btn py-4 px-10 text-sm"
            onClick={() => handleScrollTo("#portfolio")}
            data-ocid="hero.primary_button"
          >
            View Our Work
          </button>
          <button
            type="button"
            className="neon-btn-outline py-4 px-10 text-sm"
            onClick={() => handleScrollTo("#contact")}
            data-ocid="hero.secondary_button"
          >
            Start a Project
          </button>
        </div>

        {/* Stats row */}
        <div
          className="hero-animate-stats flex flex-wrap items-center justify-center gap-0"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "2rem",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-4 sm:px-8 py-2"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
              }}
            >
              <span
                className="gradient-text font-black leading-none mb-1"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  color: "#B7C0D4",
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll hint — hidden on small screens to avoid clipping */}
        <div
          className="hidden sm:flex absolute bottom-[-80px] left-1/2 -translate-x-1/2 flex-col items-center gap-2 hero-animate-4"
          aria-hidden="true"
        >
          <span
            style={{
              color: "#B7C0D4",
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Scroll
          </span>
          <div
            className="w-px h-14"
            style={{
              background: "linear-gradient(to bottom, #6D4BFF, transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
