import { FinalCTA } from "@/components/sections/FinalCTA";
import Image from "next/image";

export default function GalleryPage() {
  const images = [
    { src: "/images/gallery/1.png", alt: "Ayurvedic Treatment Room" },
    { src: "/images/gallery/2.png", alt: "Warm Herbal Oils" },
    { src: "/images/gallery/3.png", alt: "Wellness Meditation Session" },
    { src: "/images/gallery/4.png", alt: "Mother and Baby Care" },
    { src: "/images/gallery/5.png", alt: "Luxury Therapy Environment" },
    { src: "/images/gallery/6.png", alt: "Retreat Exterior Sunrise" },
  ];

  return (
    <>
      <section className="relative pt-32 pb-20 bg-accent text-center">
        <div className="container mx-auto px-4">
          <span className="text-brand-green font-semibold uppercase tracking-widest text-sm mb-4 block">Our Sanctuary</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Wellness Gallery
          </h1>
          <p className="text-foreground/75 text-lg max-w-2xl mx-auto">
            Glimpse into our serene environment designed for ultimate healing and peace.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {images.map((img, i) => (
              <div 
                key={i} 
                className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-primary/10 ${
                  i === 0 ? 'md:col-span-2 md:row-span-2' : ''
                } ${
                  i === 5 ? 'lg:col-span-2' : ''
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#2B1230]/0 group-hover:bg-[#2B1230]/40 transition-colors duration-500 flex items-end p-8">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white">
                    <p className="font-heading text-xl font-bold">{img.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
