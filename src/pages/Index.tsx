import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testiminial";
import About from "@/components/About";
import FAQ from "@/components/Fqas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Testimonials/>
      <FAQ/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
