"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      {/* Decorative leaf/shape */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative h-[700px] w-full rounded-[2rem] overflow-hidden">
              <Image
                src="/images/about.png"
                alt="Luxury Ayurvedic Treatment Room"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating Glass Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 md:bottom-10 md:-right-10 bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-sm border border-border"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                Legacy of Healing
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Rooted in authentic Kerala Ayurveda, we provide a sanctuary for mothers and families to heal, restore, and rejuvenate naturally.
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:pl-10 mt-16 lg:mt-0"
          >
            <span className="text-brand-green font-semibold uppercase tracking-widest text-sm mb-4 block">
              Our Story
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              A Sanctuary for Mother & Child Wellness
            </h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg mb-10">
              <p className="text-justify">
                At Punarjani Matrutwam, we believe that motherhood is a sacred journey that deserves the utmost care, respect, and nurturing. Rooted in the timeless wisdom of Ayurveda, we specialize in postnatal care (Prasava Raksha) that helps mothers recover, rejuvenate, and reconnect with their inner strength.
              </p>
              <p className="text-justify">
                Our therapies are designed to support physical healing, emotional balance, and overall well-being during the delicate postpartum phase. With personalized treatments, experienced therapists, and a calming environment, we ensure that every mother feels cared for, valued, and empowered.
              </p>
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-foreground font-semibold text-lg hover:text-primary transition-colors"
            >
              <span className="border-b-2 border-primary pb-1">Discover Our Journey</span>
              <ArrowRight className="transition-transform group-hover:translate-x-2 text-primary" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
