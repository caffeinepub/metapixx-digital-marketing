import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [logoHovered, setLogoHovered] = useState(false);
  const [mobileLogoHovered, setMobileLogoHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const totalScrollable = document.body.scrollHeight - window.innerHeight;
      const progress =
        totalScrollable > 0
          ? Math.min((window.scrollY / totalScrollable) * 100, 100)
          : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(7, 10, 18, 0.94)"
            : "rgba(7, 10, 18, 0.25)",
          backdropFilter: scrolled ? "blur(24px)" : "blur(6px)",
          borderBottom: scrolled
            ? "1px solid rgba(109, 75, 255, 0.15)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between h-[76px] relative">
          {/* Logo */}
          <button
            type="button"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              alignItems: "center",
            }}
            data-ocid="nav.link"
            onClick={() => handleNavClick("#home")}
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <img
              src="/assets/metapixx-logo.png"
              alt="Metapixx"
              style={{
                height: "44px",
                width: "auto",
                display: "block",
                transition: "transform 0.3s ease, filter 0.3s ease",
                transform: logoHovered ? "scale(1.06)" : "scale(1)",
                filter: logoHovered
                  ? "drop-shadow(0 0 10px rgba(109, 75, 255, 0.6))"
                  : "drop-shadow(0 0 0px transparent)",
              }}
            />
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                className="nav-link"
                onClick={() => handleNavClick(link.href)}
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            type="button"
            className="hidden md:block neon-btn-outline text-sm py-2.5 px-6"
            onClick={() => handleNavClick("#contact")}
            data-ocid="nav.primary_button"
          >
            GET IN TOUCH
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Scroll progress bar */}
          <div
            className="scroll-progress"
            style={{ width: `${scrollProgress}%` }}
            aria-hidden="true"
          />
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu-overlay md:hidden" data-ocid="nav.modal">
          <button
            type="button"
            className="absolute top-5 right-6 text-white"
            onClick={() => setMenuOpen(false)}
            data-ocid="nav.close_button"
          >
            <X size={28} />
          </button>
          <img
            src="/assets/metapixx-logo.png"
            alt="Metapixx"
            className="mb-8"
            style={{
              height: "40px",
              width: "auto",
              display: "block",
              transition: "transform 0.3s ease, filter 0.3s ease",
              transform: mobileLogoHovered ? "scale(1.06)" : "scale(1)",
              filter: mobileLogoHovered
                ? "drop-shadow(0 0 10px rgba(109, 75, 255, 0.6))"
                : "drop-shadow(0 0 0px transparent)",
            }}
            onMouseEnter={() => setMobileLogoHovered(true)}
            onMouseLeave={() => setMobileLogoHovered(false)}
          />
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              className="text-xl font-semibold text-white transition-all"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              onClick={() => handleNavClick(link.href)}
              data-ocid="nav.link"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            className="neon-btn text-sm py-3 px-8 mt-4"
            onClick={() => handleNavClick("#contact")}
            data-ocid="nav.primary_button"
          >
            GET IN TOUCH
          </button>
        </div>
      )}
    </>
  );
}
