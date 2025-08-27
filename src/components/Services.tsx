import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hammer, Home, Wrench, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Custom Construction",
      description: "Complete building solutions from foundation to finish, including residential and commercial projects.",
      features: ["New Construction", "Renovations", "Extensions", "Project Management"]
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Custom Furniture",
      description: "Handcrafted furniture pieces designed to fit your space and lifestyle perfectly.",
      features: ["Kitchen Cabinets", "Built-in Storage", "Custom Tables", "Bedroom Furniture"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Renovation Services",
      description: "Transform your existing space with our comprehensive renovation expertise.",
      features: ["Kitchen Remodels", "Bathroom Updates", "Flooring Installation", "Interior Finishing"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Consultation",
      description: "Professional design services to bring your vision to life with expert guidance.",
      features: ["Space Planning", "Material Selection", "3D Visualization", "Project Coordination"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, we provide comprehensive solutions for all your construction and furniture needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-accent to-wood-warm text-accent-foreground rounded-full w-fit group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-[17px]  text-muted-foreground ">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-md text-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="construction" size="lg" className="text-lg px-8 py-6">
            Request a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;