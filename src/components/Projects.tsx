import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

import int1 from '@/assets/f-int.jpg'
import int2 from '@/assets/f-int2.jpg'
import int3 from '@/assets/f-int3.jpg'
import int4 from '@/assets/f-int4.jpg'
import int5 from '@/assets/f-int5.jpg'

import fur1 from '@/assets/fur1.jpg'
import fur2 from '@/assets/fur2.jpg'
import fur3 from '@/assets/fur3.jpg'
import fur4 from '@/assets/fur4.jpg'
import fur5 from '@/assets/fur5.jpg'

import sf from '@/assets/sf-int1.jpg'
import sf1 from '@/assets/sf1.jpg'
import sf2 from '@/assets/sf2.jpg'
import sf3 from '@/assets/sf3.jpg'
import sf4 from '@/assets/sf4.jpg'
import sf5 from '@/assets/sf5.jpg'

import i1 from '@/assets/int1.jpg'
import i2 from '@/assets/int2.jpg'
import i3 from '@/assets/int3.jpg'
import i4 from '@/assets/int4.jpg'
import i5 from '@/assets/int5.jpg'
import i6 from '@/assets/int6.jpg'

interface Project {
  id: number;
  title: string;
  category: "furniture" | "sofa" | "interior" | "construction";
  image: string;
  description: string;
  gTitle:"Interior Furniture"|"Project Management";

}

const projects: Project[] = [
  { id: 1,gTitle:"Interior Furniture", title: "Modern Room TV console",description: ". Durable and modern room furniture designed to fit any lifestyle and interior style.", category: "furniture", image: fur1 },
  { id: 2,gTitle:"Interior Furniture", title: "Modern Sofa Set", category: "sofa",description: "Adding space and value with a stunning two-story extension.", image: sf},
  { id: 3,gTitle:"Project Management", title: "Office Construction",description: "A beautiful family home built from the ground up with sustainable materials.", category: "construction", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
  { id: 4,gTitle:"Interior Furniture", title: "Living Room Renovation",description: ". Our room furniture blends storage, comfort, and design to create a perfect living environment.", category: "interior", image: int1 },
  { id: 5,gTitle:"Interior Furniture",description: "Well Tv Design that transform your rooms with beauty and function.", title: "Tv & Elegant Room Furniture", category: "furniture", image: i1 },
  { id: 6,gTitle:"Interior Furniture", title: "Modern Sitting",description: " Upgrade your living or office space with our premium sitting furniture.", category: "furniture", image: fur2 },
  { id: 7,gTitle:"Interior Furniture", title: "Tv Console Model", category: "interior",description:"Durable and modern room furniture designed to fit any lifestyle and interior style.", image: i2 },
  { id: 8,gTitle:"Interior Furniture", title: "Comfortable & Luxury Sofas",description :"Discover our sofas designed for ultimate relaxation and timeless elegance.", category: "sofa", image: sf1 },
  { id: 9,gTitle:"Project Management", title: "Living Room Renovation",description: "Bespoke room furniture designed for relax and style..", category: "construction", image: int4 },
  { id: 10,gTitle:"Interior Furniture",description: "Perfect for homes, lounges, and workplaces.", title: "Premium Bed Frame", category: "furniture", image: i3 },
  {id: 11,gTitle:"Interior Furniture", title: "Modern Sofa Collections",description: "Discover our sofas designed for ultimate relaxation and timeless elegance.", category: "sofa", image: sf4 },
  { id: 12,gTitle:"Interior Furniture", title: "Office Relax Room",description: "Bespoke office furniture designed for productivity and style.", category: "interior", image: i4 },
];

const gTitles = ["all", "Interior Furniture", "Project Management"] as const;

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<typeof gTitles[number]>("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.gTitle === activeCategory);

  return (
    <section id="projects" className="py-16 bg-muted/20">
      <div className="container mx-auto px-6">
       
        <motion.div layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="text-center mb-16">
           <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          Featured Projects
        </motion.h2>
          <motion.p layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our commitment to quality and craftsmanship.
          </motion.p>
        </motion.div >
        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12 flex-wrap">
          {gTitles.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-accent text-white"
                  : "bg-background text-foreground border border-border hover:bg-accent/10"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Animated Projects Grid */}
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden">
                  <div className="h-52 w-full overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className=" w-full h-full object-cover transform hover:scale-110 transition"
                    />
                    
                    <div className="absolute top-4 left-4">
                        <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                            {project.category.toUpperCase()}
                        </span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
                    <p className="text-sm font-bold text-foreground/60 capitalize">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
