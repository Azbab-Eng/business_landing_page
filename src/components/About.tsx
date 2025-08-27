import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, CheckCircle } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Award className="w-8 h-8" />, number: "10+", label: "Years Experience" },
    { icon: <Users className="w-8 h-8" />, number: "120+", label: "Happy Clients" },
    { icon: <Clock className="w-8 h-8" />, number: "100%", label: "On-Time Delivery" },
    { icon: <CheckCircle className="w-8 h-8" />, number: "560+", label: "Projects Completed" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Crafting Excellence Since 2015
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              With over 10 years of experience in construction and custom furniture making, 
              Adams Gs. has established itself as a trusted partner for homeowners and 
              businesses seeking quality craftsmanship.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of skilled craftsmen combines traditional techniques with modern 
              technology to deliver exceptional results. From small custom furniture pieces 
              to large construction projects, we approach every job with the same level of 
              dedication and attention to detail.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent mr-3" />
                <span className="text-foreground">Licensed and Insured</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent mr-3" />
                <span className="text-foreground">Sustainable Materials</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent mr-3" />
                <span className="text-foreground">Expert Craftsmanship</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent mr-3" />
                <span className="text-foreground">Customer Satisfaction Guarantee</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-gradient-to-br from-card to-muted hover:shadow-warm transition-shadow">
                <CardContent className="p-0">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-accent to-wood-warm text-accent-foreground rounded-full w-fit">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;