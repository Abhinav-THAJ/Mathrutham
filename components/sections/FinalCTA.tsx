"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-bg.png"
          alt="Ayurvedic Retreat Sunrise"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1A2E1A]/80 backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-luxury-gold font-medium uppercase tracking-widest text-sm mb-6 block">
            Your Wellness Awaits
          </span>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Begin Your Healing Journey Today
          </h2>
          <p className="text-[#F8F4EC]/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the transformative power of authentic Ayurveda. Schedule your consultation with our expert physicians.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-luxury-gold px-10 py-5 text-lg font-semibold text-[#1A2E1A] shadow-xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <Calendar size={22} className="group-hover:animate-bounce" />
              Book Consultation
            </Link>
            <a
              href="tel:+919876543210"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white/10 backdrop-blur-md px-10 py-5 text-lg font-semibold text-white border border-white/30 shadow-xl transition-all hover:bg-white/20 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <Phone size={22} className="group-hover:rotate-12 transition-transform" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
