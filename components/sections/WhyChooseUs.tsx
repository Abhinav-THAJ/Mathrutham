"use client";

import { motion } from "framer-motion";
import { Leaf, Heart, Stethoscope, Baby, ShieldCheck, Sprout, Wind, Droplet } from "lucide-react";

const reasons = [
  { icon: Leaf, title: "Authentic Ayurveda", desc: "Traditional scriptures-based therapies." },
  { icon: Heart, title: "Personalized Care", desc: "Treatments tailored to your unique body constitution." },
  { icon: Stethoscope, title: "Experienced Therapists", desc: "Expert healers from Kerala." },
  { icon: Baby, title: "Mother & Baby Care", desc: "Specialized gentle postnatal care." },
  { icon: ShieldCheck, title: "Safe Treatments", desc: "100% natural and safe procedures." },
  { icon: Sprout, title: "Natural Herbs", desc: "Medicines prepared from pristine nature." },
  { icon: Wind, title: "Peaceful Healing", desc: "Luxury retreat atmosphere." },
  { icon: Droplet, title: "Hygienic Environment", desc: "Immaculate premium facilities." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
};

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-accent relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-luxury-gold font-medium uppercase tracking-widest text-sm mb-4 block">
            The Punarjani Difference
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1A2E1A] mb-6">
            Why Choose Us
          </h2>
          <p className="text-foreground/70 text-lg">
            We blend the profound science of Ayurveda with the luxurious comfort of a premium wellness retreat to offer an unparalleled healing experience.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-primary/5 hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#1A2E1A] mb-3">
                {item.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
