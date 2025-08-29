import logo from "@/assets/logo.jpg"

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
                <img src={logo} alt="logo" className="w-10 h-10" />
              {/* <div className="w-8 h-8 bg-gradient-to-br from-accent to-wood-warm rounded"></div> */}
              <span className="text-xl font-bold">Adams Gs.</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Building dreams and crafting excellence for over 10 years. 
              Your trusted partner for construction and custom furniture projects.
            </p>
            <div className="text-sm text-primary-foreground/60">
              Licensed • Insured • Trusted
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Custom Construction</li>
              <li>Furniture Making</li>
              <li>Renovations</li>
              <li>Design Consultation</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>+2348116183380</li>
              <li>Adenijiafeesadewale@gmail.com</li>
              <li>232 Transormal,Adabeji Campus Apata, Ib</li>
              
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 Azbab-Design-Huh  All is well, Glory to Almighty. Trusted  | Innovation & Business. <strong>Trust Us with your Business, we deliver the BEST </strong></p> 
          <strong>+2349013562269</strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;