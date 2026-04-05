import { useState } from "react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [logoHovered, setLogoHovered] = useState(false);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "rgba(7, 10, 18, 0.99)",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <button
              type="button"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "block",
                marginBottom: "8px",
              }}
              onClick={() => handleNavClick("#home")}
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            >
              <img
                src="/assets/metapixx-logo.png"
                alt="Metapixx"
                style={{
                  height: "40px",
                  width: "auto",
                  display: "block",
                  transition: "transform 0.3s ease, filter 0.3s ease",
                  transform: logoHovered ? "scale(1.05)" : "scale(1)",
                  filter: logoHovered
                    ? "drop-shadow(0 0 10px rgba(109, 75, 255, 0.6))"
                    : "drop-shadow(0 0 0px transparent)",
                }}
              />
            </button>
            <p
              style={{
                color: "#B7C0D4",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Creative Digital Marketing Agency
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-1">
            {[
              { label: "Home", href: "#home" },
              { label: "Services", href: "#services" },
              { label: "Portfolio", href: "#portfolio" },
              { label: "Process", href: "#process" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <button
                type="button"
                key={link.href}
                className="nav-link text-xs"
                onClick={() => handleNavClick(link.href)}
                data-ocid="footer.link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/metapixxdigital"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#B7C0D4",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              aria-label="Instagram"
              data-ocid="footer.link"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(255,59,190,0.6)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#FF3BBE";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,59,190,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#B7C0D4";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.04)";
              }}
            >
              <SiInstagram size={15} />
            </a>
            <a
              href="https://facebook.com/metapixxdigital"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#B7C0D4",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              aria-label="Facebook"
              data-ocid="footer.link"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(52,230,255,0.6)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#34E6FF";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(52,230,255,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#B7C0D4";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.04)";
              }}
            >
              <SiFacebook size={15} />
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#B7C0D4",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              aria-label="WhatsApp"
              data-ocid="footer.link"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(37,211,102,0.6)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#25D366";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(37,211,102,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#B7C0D4";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.04)";
              }}
            >
              <SiWhatsapp size={15} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p
            style={{
              color: "#B7C0D4",
              fontSize: "0.75rem",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            &copy; {currentYear} Metapixx Digital Marketing. All rights
            reserved.
          </p>
          <p style={{ fontSize: "0.75rem" }}>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#B7C0D4",
                textDecoration: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: "color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#B7C0D4";
              }}
            >
              Built with ♥ using caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
