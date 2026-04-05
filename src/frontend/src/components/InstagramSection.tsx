import { Play } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { useScrollReveal } from "../hooks/useScrollReveal";

const instaTiles = [
  {
    id: 1,
    url: "https://www.instagram.com/reel/DV_XSAgkaOX/",
    gradient: "linear-gradient(135deg, #6D4BFF 0%, #34E6FF 100%)",
  },
  {
    id: 2,
    url: "https://www.instagram.com/reel/DVQIAhSE18d/",
    gradient: "linear-gradient(135deg, #FF3BBE 0%, #6D4BFF 100%)",
  },
  {
    id: 3,
    url: "https://www.instagram.com/reel/DQAM5-SDyj6/",
    gradient: "linear-gradient(135deg, #34E6FF 0%, #FF3BBE 100%)",
  },
  {
    id: 4,
    url: "https://www.instagram.com/reel/DP-zsQMEe2B/",
    gradient: "linear-gradient(135deg, #6D4BFF 0%, #FF3BBE 100%)",
  },
  {
    id: 5,
    url: "https://www.instagram.com/reel/DPbi9VbEQCB/",
    gradient: "linear-gradient(135deg, #FF3BBE 0%, #34E6FF 100%)",
  },
  {
    id: 6,
    url: "https://www.instagram.com/reel/DO_Nga0EVbr/",
    gradient: "linear-gradient(135deg, #34E6FF 0%, #6D4BFF 100%)",
  },
  {
    id: 7,
    url: "https://www.instagram.com/reel/DMXujxXxhus/",
    gradient: "linear-gradient(135deg, #FF3BBE 60%, #6D4BFF 100%)",
  },
  {
    id: 8,
    url: "https://www.instagram.com/reel/C_DftMEtT5g/",
    gradient: "linear-gradient(135deg, #6D4BFF 30%, #34E6FF 100%)",
  },
  {
    id: 9,
    url: "https://www.instagram.com/reel/DPJZyvAARJ3/",
    gradient: "linear-gradient(135deg, #34E6FF 20%, #FF3BBE 100%)",
  },
];

export default function InstagramSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="instagram"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-14 md:py-28 px-6"
      style={{ background: "#070A12" }}
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Heading */}
        <div className="reveal text-center mb-10 md:mb-14">
          <div className="section-divider" />
          <h2 className="section-title">FOLLOW US ON INSTAGRAM</h2>
          <p className="section-subtitle">
            Catch our latest creative drops @metapixx
          </p>
        </div>

        {/* Grid — 2 cols on mobile, 3 cols on sm+ */}
        <div
          className="reveal grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-10"
          data-ocid="instagram.table"
        >
          {instaTiles.map((tile, i) => (
            <a
              key={tile.id}
              href={tile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="insta-tile"
              data-ocid={`instagram.item.${i + 1}`}
            >
              <div
                className="w-full h-full"
                style={{ background: tile.gradient, minHeight: "120px" }}
              />
              <div className="insta-overlay">
                <div className="flex flex-col items-center gap-2 text-white">
                  <Play size={28} fill="white" className="drop-shadow-lg" />
                  <span className="text-xs font-semibold tracking-wider uppercase opacity-90">
                    Watch Reel
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center">
          <a
            href="https://www.instagram.com/metapixx"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn-outline inline-flex items-center gap-3 py-3.5 px-8 text-sm font-bold"
            data-ocid="instagram.primary_button"
          >
            <SiInstagram size={20} />
            @metapixx — Follow Us
          </a>
        </div>
      </div>
    </section>
  );
}
