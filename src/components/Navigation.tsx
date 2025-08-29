import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpg"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2" onClick={() => scrollToSection("home")}>
            <img src={logo} alt="logo" className="w-10 h-10" />
            {/* <div className="w-8 h-8 bg-gradient-to-br from-wood-warm to-accent rounded"></div> */}
            <span className="text-xl font-bold text-blue-950">Adams Gs.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["services", "projects", "testimonials", "faq", "about"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-foreground text-[18px]  hover:text-wood-warm transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <Button onClick={() => scrollToSection("contact")} variant="hero" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Animated */}
        <AnimatePresence>
          {isOpen && (
            // <motion.div
            //   initial={{ height: 0, opacity: 0 }}
            //   animate={{ height: "auto", opacity: 1 }}
            //   exit={{ height: 0, opacity: 0 }}
            //   transition={{ duration: 0.3 }}
            //   className="z-50 overflow-hidden md:hidden mt-4 flex flex-col space-y-4"
            // >
            <div className="z-50 overflow-hidden md:hidden mt-4 flex flex-col space-y-4">
                {["home","services", "projects", "testimonials", "faq", "about"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-foreground text-[16px] hover:text-wood-warm transition-colors"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
                <Button onClick={() => scrollToSection("contact")} variant="hero" size="sm">
                  Get Quote
                </Button>
            </div>
            // </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
