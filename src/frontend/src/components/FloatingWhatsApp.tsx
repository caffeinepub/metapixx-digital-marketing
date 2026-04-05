import { SiWhatsapp } from "react-icons/si";

export default function FloatingWhatsApp() {
  return (
    <div className="group relative whatsapp-float">
      {/* Pulsing ring */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "rgba(37, 211, 102, 0.45)",
          animation: "wa-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
          pointerEvents: "none",
        }}
      />
      <style>{`
        @keyframes wa-ping {
          0% { transform: scale(1); opacity: 0.7; }
          75%, 100% { transform: scale(1.65); opacity: 0; }
        }
      `}</style>

      {/* Tooltip */}
      <span
        style={{
          position: "absolute",
          bottom: "calc(100% + 10px)",
          right: "0",
          background: "rgba(7, 10, 18, 0.92)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(37, 211, 102, 0.35)",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.04em",
          padding: "6px 12px",
          borderRadius: "8px",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          opacity: 0,
          transform: "translateY(4px)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}
        className="group-hover:!opacity-100 group-hover:!translate-y-0"
      >
        Chat on WhatsApp
      </span>

      <a
        href="https://wa.me/917548854071"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        data-ocid="contact.primary_button"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#25D366",
          boxShadow: "0 4px 20px rgba(37, 211, 102, 0.5)",
          position: "relative",
          zIndex: 1,
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            "0 6px 28px rgba(37, 211, 102, 0.7)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            "0 4px 20px rgba(37, 211, 102, 0.5)";
        }}
      >
        <SiWhatsapp size={26} color="#fff" />
      </a>
    </div>
  );
}
