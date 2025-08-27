import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { id: 1, question: "What services do you offer?", answer: "We specialize in custom furniture, renovations, and interior design." },
  { id: 2, question: "How long does a project usually take?", answer: "Timelines vary, but we always provide a clear schedule upfront." },
  { id: 3, question: "Do you provide free consultations?", answer: "Yes, we offer a free consultation before we begin any project." },
  { id: 4, question: "Can you handle large commercial projects?", answer: "Absolutely! We work on both residential and commercial projects." },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-primary mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-border rounded-xl p-4 shadow-sm bg-background">
              <button className="w-full flex justify-between items-center text-left" onClick={() => toggle(faq.id)}>
                <span className="font-semibold text-foreground">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openId === faq.id ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-foreground/70 overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
