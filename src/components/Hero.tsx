import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative sm:min-h-80 md:min-h-[600px] mt-[60px] flex items-center bg-gradient-to-br from-background via-muted to-stone-light overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Building Dreams,
            <span className="text-wood-warm block">Crafting Excellence</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white mb-8 max-w-2xl">
            From custom furniture to complete construction projects, we bring your vision to life with unmatched craftsmanship and attention to detail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToContact}
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-6 bg-blue-950"
            >
              Start Your Project
            </Button>
            <Button 
              onClick={scrollToProjects}
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-2 border-wood-warm text-wood-warm hover:bg-wood-warm hover:text-primary-foreground"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-wood-warm rounded-full flex justify-center">
          <div className="w-1 h-3 bg-wood-warm rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;