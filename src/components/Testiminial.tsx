import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import myimg from "@/assets/myimg.jpg"

interface Testimonial {
  id: number;
  name: string;
  role: string;
  feedback: string;
  image: string;
}

const testimonials: Testimonial[] = [
  { id: 1, name: "Honorable", role: "Interior Designer", feedback: "Adams Gs. transformed my living room beautifully!", image: myimg},
  { id: 2, name: "The RAIN", role: "Home Owner", feedback: "The team exceeded my expectations. Everything was seamless!", image: myimg },
  { id: 3, name: "Pastor", role: "Business Owner", feedback: "I love their craftsmanship! They built custom furniture for my shop.", image: myimg },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-primary mb-12"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid gap-20 mt-20 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-2xl shadow-lg hover:shadow-xl transition">
                <CardContent className="p-6 text-center">
                  <img src={t.image} alt={t.name} className="w-32  h-32  mx-auto rounded-full mt-[-80px] object-cover" />
                  <p className="text-foreground/80 italic mb-4">“{t.feedback}”</p>
                  <h4 className="font-semibold text-primary">{t.name}</h4>
                  <span className="text-sm text-foreground/60">{t.role}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
