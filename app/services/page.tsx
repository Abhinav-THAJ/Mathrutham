import { FinalCTA } from "@/components/sections/FinalCTA";
import { Leaf, Heart, Baby, Eye, BrainCircuit } from "lucide-react";

const services = [
  { id: "postnatal", icon: Baby, title: "Postnatal Care (Prasava Raksha)", desc: "Gentle therapies designed to help mothers recover strength and vitality after childbirth." },
  { id: "prenatal", icon: Heart, title: "Prenatal Care", desc: "Nourishing therapies to prepare the body and mind for a smooth and healthy delivery." },
  { id: "rejuvenation", icon: Leaf, title: "Women's Rejuvenation", desc: "Holistic wellness therapies for women of all ages to restore balance." },
  { id: "panchakarma", icon: Leaf, title: "Panchakarma", desc: "The ultimate Ayurvedic detoxification and purification therapy." },
  { id: "pain", icon: BrainCircuit, title: "Pain Management", desc: "Targeted natural relief for chronic pain and joint issues." },
  { id: "stress", icon: BrainCircuit, title: "Stress Management", desc: "Calming therapies to soothe the nervous system and relieve anxiety." },
  { id: "eye", icon: Eye, title: "Eye Wellness", desc: "Traditional Netra therapies to improve vision and eye health." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-accent">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <span className="text-brand-green font-semibold uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Holistic Healing Services
          </h1>
          <p className="text-foreground/75 text-lg leading-relaxed">
            Discover our comprehensive range of authentic Ayurvedic therapies tailored for your complete well-being.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <div key={svc.id} id={svc.id} className="bg-white border border-primary/15 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                  idx % 2 === 0 ? "bg-secondary text-brand-green" : "bg-[#F7EFF9] text-primary"
                }`}>
                  <svc.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">{svc.title}</h3>
                <p className="text-foreground/70 mb-6">{svc.desc}</p>
                <a href="/contact" className="text-brand-green font-semibold uppercase text-sm tracking-wider hover:text-primary transition-colors inline-flex items-center gap-1">
                  Learn More &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
