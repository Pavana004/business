import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DevForge | Web Development & Application Solutions</title>
        <meta
          name="description"
          content="Transform your digital presence with DevForge. We build scalable websites, web applications, and e-commerce solutions with cutting-edge technology and stunning design."
        />
        <meta
          name="keywords"
          content="web development, web applications, UI/UX design, e-commerce, API integration, software development"
        />
        <link rel="canonical" href="https://devforge.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <PortfolioSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
