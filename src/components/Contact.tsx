import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import React from "react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "08116183380 , 09031826132",
      subtitle: "Mon-Fri 8AM-6PM"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "Adenijiafeesadewale@gmail.com",
      subtitle: "24/7 Support"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "232 Transormal,Adabeji Campus Apata, Ibadan",
      subtitle: "By Appointment"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Mon-Fri: 8AM-6PM",
      subtitle: "Sat: 9AM-4PM"
    }
  ];
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e7eca7f4-ee4b-4408-82f2-2d1dfb665507");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }{
      setResult('')
    }
  };


  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Start Your Project Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to turn your vision into reality? Get in touch with our expert team for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Get Your Free Quote</CardTitle>
              </CardHeader>
              <form onSubmit={onSubmit}>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                      <Input required placeholder="AbdulAzeez" name="name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                      <Input required placeholder="Babalola" name="name" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                      <Input required type="email" name="email" placeholder="moshaaallah@gmail.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                      <Input required type="tel" name="phone" placeholder="+2349013562269" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Project Type</label>
                    <Input required name="project" placeholder="e.g., Kitchen Renovation, Custom Furniture, New Construction" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Project Details</label>
                    <Textarea 
                    name="message" required
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      className="min-h-32"
                    />
                  </div>
                    <span>{result}</span>
                  <Button variant="hero" size="lg" className="w-full text-lg py-6">
                    Request Free Consultation
                  </Button>
                </CardContent>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-4 hover:shadow-warm transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gradient-to-br from-accent to-wood-warm text-accent-foreground rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{info.title}</h3>
                      <p className="text-foreground">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;