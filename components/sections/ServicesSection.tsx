"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Postnatal Care",
    desc: "Complete restorative care for mother and baby after delivery.",
    img: "/images/gallery/1.png",
    link: "/services/postnatal",
  },
  {
    title: "Prenatal Care",
    desc: "Nourishing therapies for expecting mothers.",
    img: "/images/gallery/2.png",
    link: "/services/prenatal",
  },
  {
    title: "Rejuvenation Therapy",
    desc: "Detox and revive your body with authentic Ayurveda.",
    img: "/images/gallery/3.png",
    link: "/services/rejuvenation",
  },
  {
    title: "Stress Management",
    desc: "Find deep peace with our specialized holistic treatments.",
    img: "/images/gallery/4.png",
    link: "/services/stress-management",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-4 md:px-8">
        <span className="text-brand-green font-semibold uppercase tracking-widest text-sm mb-4 block">
          Our Expertise
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12">
          Holistic Ayurvedic Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative overflow-hidden rounded-3xl cursor-pointer border border-primary/10 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative h-[400px] w-full">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1230]/95 via-[#2B1230]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/85 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {service.desc}
                </p>
                <div className="inline-flex items-center gap-2 text-white/90 font-semibold text-sm group-hover:text-white">
                  <span>Explore</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
