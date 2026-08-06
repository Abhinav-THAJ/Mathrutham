"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-accent pt-20">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/50 rounded-l-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 uppercase tracking-wider">
            Authentic Ayurveda
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-[#1A2E1A]">
            Authentic Ayurvedic Care for Mothers, Women & Families
          </h1>
          <p className="text-lg text-foreground/80 mb-10 leading-relaxed">
            Experience traditional Ayurvedic healing through specialized postnatal care, prenatal wellness, rejuvenation therapies, Panchakarma, and holistic treatments designed for lifelong well-being.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              Book Consultation
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-primary/20 pt-8">
            <div>
              <p className="text-3xl font-heading font-bold text-luxury-gold">15+</p>
              <p className="text-sm text-foreground/70">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-luxury-gold">10k+</p>
              <p className="text-sm text-foreground/70">Happy Mothers</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-luxury-gold">25+</p>
              <p className="text-sm text-foreground/70">Treatments</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-luxury-gold">99%</p>
              <p className="text-sm text-foreground/70">Success Rate</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="relative h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/hero.png"
            alt="Luxury Ayurvedic Wellness"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E1A]/40 to-transparent" />
        </motion.div>

      </div>
    </section>
  );
}
