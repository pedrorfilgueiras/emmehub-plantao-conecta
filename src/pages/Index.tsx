import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
