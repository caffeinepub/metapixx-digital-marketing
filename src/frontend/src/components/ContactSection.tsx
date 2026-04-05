import { Instagram, Loader2, Phone } from "lucide-react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

export default function ContactSection() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      errs.email = "Valid email is required";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      if (!actor) throw new Error("Not connected");
      await actor.submitContactInquiry(
        form.name,
        form.email,
        form.phone,
        form.message,
      );
      toast.success("Message sent! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const contactCards = [
    {
      label: "Call Us",
      value: "+91 75488 54071",
      subtext: "Tap to call directly",
      href: "tel:+917548854071",
      target: undefined as string | undefined,
      icon: <Phone size={22} style={{ color: "#34E6FF" }} />,
      glowColor: "rgba(52, 230, 255, 0.18)",
      borderColor: "rgba(52, 230, 255, 0.35)",
      glowHover: "0 0 28px rgba(52, 230, 255, 0.45)",
      iconBg: "rgba(52, 230, 255, 0.1)",
      iconBorder: "rgba(52, 230, 255, 0.3)",
      labelColor: "#34E6FF",
      ocid: "contact.link",
    },
    {
      label: "WhatsApp",
      value: "+91 75488 54071",
      subtext: "Chat with us instantly",
      href: "https://wa.me/917548854071",
      target: "_blank" as string | undefined,
      icon: <SiWhatsapp size={22} style={{ color: "#25D366" }} />,
      glowColor: "rgba(37, 211, 102, 0.18)",
      borderColor: "rgba(37, 211, 102, 0.35)",
      glowHover: "0 0 28px rgba(37, 211, 102, 0.45)",
      iconBg: "rgba(37, 211, 102, 0.1)",
      iconBorder: "rgba(37, 211, 102, 0.3)",
      labelColor: "#25D366",
      ocid: "contact.link",
    },
    {
      label: "Instagram",
      value: "@metapixx",
      subtext: "Follow our work",
      href: "https://www.instagram.com/metapixx",
      target: "_blank" as string | undefined,
      icon: <Instagram size={22} style={{ color: "#FF3BBE" }} />,
      glowColor: "rgba(255, 59, 190, 0.18)",
      borderColor: "rgba(255, 59, 190, 0.35)",
      glowHover: "0 0 28px rgba(255, 59, 190, 0.45)",
      iconBg: "rgba(255, 59, 190, 0.1)",
      iconBorder: "rgba(255, 59, 190, 0.3)",
      labelColor: "#FF3BBE",
      ocid: "contact.link",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-32 px-6"
      style={{ background: "#070A12" }}
    >
      <style>{`
        .contact-card {
          transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.32s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.32s ease;
        }
        .contact-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
      <div className="max-w-[1240px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <span className="section-label">Get In Touch</span>
          <h2
            className="section-title"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            LET&apos;S WORK TOGETHER
          </h2>
          <p className="section-subtitle">
            Ready to take your brand to the next level? Let&apos;s talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          {/* Left — Contact info */}
          <div className="relative">
            {/* Decorative background character */}
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "-2rem",
                left: "-1rem",
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: "10rem",
                fontWeight: 900,
                color: "#fff",
                opacity: 0.04,
                lineHeight: 1,
                pointerEvents: "none",
                userSelect: "none",
                zIndex: 0,
              }}
            >
              ✦
            </span>

            <div className="relative z-10">
              <h3
                className="mb-5"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                Start your{" "}
                <span className="gradient-text">creative journey</span>
              </h3>
              <p
                className="mb-10"
                style={{ color: "#B7C0D4", lineHeight: 1.75 }}
              >
                Have a project in mind? We&apos;d love to hear from you. Reach
                out via WhatsApp for a quick response or fill in the form and
                we&apos;ll be in touch within 24 hours.
              </p>

              {/* Premium Contact Cards */}
              <div className="flex flex-col gap-4">
                {contactCards.map((card) => (
                  <a
                    key={card.label}
                    href={card.href}
                    target={card.target}
                    rel={
                      card.target === "_blank"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="contact-card glass-card flex items-center gap-5 p-5 no-underline"
                    style={{
                      border: `1px solid ${card.borderColor}`,
                      boxShadow: `0 0 0 0 ${card.glowColor}`,
                      borderRadius: "16px",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                        card.glowHover;
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        card.labelColor;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                        `0 0 0 0 ${card.glowColor}`;
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        card.borderColor;
                    }}
                    data-ocid={card.ocid}
                  >
                    {/* Icon */}
                    <div
                      className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        background: card.iconBg,
                        boxShadow: `0 0 0 1px ${card.iconBorder}`,
                      }}
                    >
                      {card.icon}
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p
                        style={{
                          fontSize: "0.65rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: card.labelColor,
                          fontWeight: 600,
                          marginBottom: "4px",
                        }}
                      >
                        {card.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 700,
                          fontSize: "clamp(1rem, 2vw, 1.1rem)",
                          color: "#fff",
                          lineHeight: 1.2,
                          marginBottom: "3px",
                        }}
                      >
                        {card.value}
                      </p>
                      <p
                        style={{
                          fontSize: "0.78rem",
                          color: "#B7C0D4",
                          lineHeight: 1.4,
                        }}
                      >
                        {card.subtext}
                      </p>
                    </div>

                    {/* Arrow indicator — decorative only */}
                    <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      className="shrink-0"
                      style={{ color: card.labelColor, opacity: 0.7 }}
                    >
                      <path
                        d="M3.75 9h10.5M9 3.75 14.25 9 9 14.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="glass-card p-5 sm:p-8" data-ocid="contact.modal">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    data-ocid="contact.input"
                    aria-label="Your name"
                  />
                  {errors.name && (
                    <p
                      className="text-xs mt-1.5"
                      style={{ color: "#FF3BBE" }}
                      data-ocid="contact.error_state"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    data-ocid="contact.input"
                    aria-label="Email address"
                  />
                  {errors.email && (
                    <p
                      className="text-xs mt-1.5"
                      style={{ color: "#FF3BBE" }}
                      data-ocid="contact.error_state"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <input
                  type="tel"
                  className="form-input"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: e.target.value }))
                  }
                  data-ocid="contact.input"
                  aria-label="Phone number"
                />
                {errors.phone && (
                  <p
                    className="text-xs mt-1.5"
                    style={{ color: "#FF3BBE" }}
                    data-ocid="contact.error_state"
                  >
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="mb-7">
                <textarea
                  className="form-input"
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  data-ocid="contact.textarea"
                  aria-label="Project message"
                />
                {errors.message && (
                  <p
                    className="text-xs mt-1.5"
                    style={{ color: "#FF3BBE" }}
                    data-ocid="contact.error_state"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/917548854071"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-sm transition-all"
                  style={{
                    background: "#25D366",
                    color: "#fff",
                    boxShadow: "0 0 20px rgba(37,211,102,0.35)",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    letterSpacing: "0.04em",
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  data-ocid="contact.primary_button"
                >
                  <SiWhatsapp size={18} />
                  WhatsApp Us
                </a>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 neon-btn py-3.5 px-6 text-sm flex items-center justify-center gap-2"
                  data-ocid="contact.submit_button"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>

              {submitting && (
                <p
                  className="text-center text-xs mt-3"
                  style={{ color: "#B7C0D4" }}
                  data-ocid="contact.loading_state"
                >
                  Processing your request...
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
