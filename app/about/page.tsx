import Image from "next/image";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-accent text-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <span className="text-brand-green font-semibold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Luxury Kerala Ayurvedic Retreat
          </h1>
          <p className="text-foreground/80 text-lg leading-relaxed">
            Rooted in authentic Kerala Ayurveda, we provide a sanctuary for mothers and families to heal, restore, and rejuvenate naturally.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-white border border-primary/15 rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">About Us</h2>
            <p className="text-foreground/80 leading-relaxed mb-6 text-justify">
              At Punarjani Matrutwam, we believe that motherhood is a sacred journey that deserves the utmost care, respect, and nurturing. Rooted in the timeless wisdom of Ayurveda, we specialize in postnatal care (Prasava Raksha) that helps mothers recover, rejuvenate, and reconnect with their inner strength.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6 text-justify">
              Our therapies are designed to support physical healing, emotional balance, and overall well-being during the delicate postpartum phase. With personalized treatments, experienced therapists, and a calming environment, we ensure that every mother feels cared for, valued, and empowered.
            </p>
            <p className="text-foreground/80 leading-relaxed text-justify">
              At Punarjani Matrutwam, we don’t just offer treatments—we create a space where mothers are reborn with strength and vitality.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
