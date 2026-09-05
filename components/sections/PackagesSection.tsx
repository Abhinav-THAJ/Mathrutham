"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    title: "7 Days Rejuvenation",
    price: "₹35,000",
    desc: "A quick reset for your body and mind with daily therapies.",
    features: ["Daily Abhyanga", "Shirodhara (3 sessions)", "Herbal Steam Bath", "Consultation"],
    img: "/images/gallery/5.png",
  },
  {
    title: "14 Days Detox",
    price: "₹65,000",
    desc: "Comprehensive cleansing program for deep healing.",
    features: ["Panchakarma", "Specialized Diet", "Yoga & Meditation", "Daily Doctor Visit"],
    img: "/images/gallery/6.png",
    popular: true,
  },
  {
    title: "21 Days Postnatal",
    price: "₹95,000",
    desc: "Extensive care designed for mothers and newborns.",
    features: ["Mother & Baby Massage", "Postpartum Diet", "Medicinal Baths", "24/7 Nursing"],
    img: "/images/gallery/1.png", // Reusing image 1
  }
];

export function PackagesSection() {
  return (
    <section className="py-24 bg-accent text-center relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <span className="text-luxury-gold font-medium uppercase tracking-widest text-sm mb-4 block">
          Wellness Plans
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1A2E1A] mb-12">
          Curated Packages
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative bg-white rounded-3xl overflow-hidden shadow-lg border ${
                pkg.popular ? "border-primary shadow-xl scale-105 z-10" : "border-primary/10 mt-4 md:mt-8"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1 rounded-bl-xl z-20 uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="relative h-48 w-full">
                <Image
                  src={pkg.img}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-6 text-white">
                  <h3 className="font-heading text-2xl font-bold">{pkg.title}</h3>
                  <div className="text-xl font-medium mt-1">{pkg.price}</div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-foreground/70 mb-6 min-h-[48px]">
                  {pkg.desc}
                </p>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary">
                        <Check size={14} />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`block w-full py-4 rounded-full font-bold text-center transition-all duration-300 ${
                    pkg.popular 
                      ? "bg-primary text-white shadow-md hover:shadow-lg hover:scale-[1.02]" 
                      : "bg-secondary text-primary hover:bg-primary/20"
                  }`}
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
