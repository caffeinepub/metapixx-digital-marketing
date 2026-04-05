import { Toaster } from "@/components/ui/sonner";
import ContactSection from "./components/ContactSection";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InstagramSection from "./components/InstagramSection";
import Navbar from "./components/Navbar";
import PortfolioSection from "./components/PortfolioSection";
import ProcessSection from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";

export default function App() {
  return (
    <div
      className="relative font-poppins"
      style={{ background: "#070A12", minHeight: "100vh" }}
    >
      <Navbar />

      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <InstagramSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />

      <Toaster
        theme="dark"
        toastOptions={{
          style: {
            background: "rgba(18, 24, 38, 0.95)",
            border: "1px solid rgba(109, 75, 255, 0.4)",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}
