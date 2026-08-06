import { Hero } from "@/components/hero/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <WhyChooseUs />
      
      {/* Placeholder for Services Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <span className="text-luxury-gold font-medium uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1A2E1A] mb-12">Holistic Ayurvedic Services</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8">Detailed services cards for Postnatal, Prenatal, Rejuvenation, etc. will go here, complete with elegant hover effects and unique imagery.</p>
        </div>
      </section>

      {/* Placeholder for Packages Section */}
      <section className="py-24 bg-accent text-center">
        <div className="container mx-auto px-4">
          <span className="text-luxury-gold font-medium uppercase tracking-widest text-sm mb-4 block">Wellness Plans</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1A2E1A] mb-12">Curated Packages</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8">7 Days, 10 Days, and 14 Days Glassmorphism Pricing Cards.</p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
