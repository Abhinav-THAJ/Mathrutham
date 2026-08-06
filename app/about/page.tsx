import Image from "next/image";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-primary/5 text-[#1A2E1A]">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <span className="text-luxury-gold font-medium uppercase tracking-widest text-sm mb-4 block">Our Story</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-[#1A2E1A]">
            Luxury Kerala Ayurvedic Retreat
          </h1>
          <p className="text-foreground/80 text-lg leading-relaxed">
            Rooted in authentic Kerala Ayurveda, we provide a sanctuary for mothers and families to heal, restore, and rejuvenate naturally.
          </p>
        </div>
      </section>

      <section className="py-24 bg-accent">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="font-heading text-3xl font-bold text-[#1A2E1A] mb-6">Our Philosophy</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              At Punarjani Matrutwam, we believe in the profound wisdom of Ayurveda to nurture life. Our retreat is designed not as a hospital, but as a premium wellness sanctuary where traditional healing meets modern luxury.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Every detail of our center, from the organic herbs used in our therapies to the tranquil environment, is curated to help you disconnect from stress and reconnect with your natural state of balance.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
