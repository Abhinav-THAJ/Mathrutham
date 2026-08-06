import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const Facebook = ({ size = 24, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 24, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Twitter = ({ size = 24, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[#1A2E1A] text-[#F8F4EC] pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-luxury-gold text-[#1A2E1A] rounded-full flex items-center justify-center font-heading font-bold text-xl">
                P
              </div>
              <span className="font-heading font-semibold text-2xl tracking-wide text-luxury-gold">
                Punarjani
              </span>
            </div>
            <p className="text-[#F8F4EC]/80 mb-6 font-light leading-relaxed">
              Authentic Ayurvedic healing through specialized postnatal care, prenatal wellness, and rejuvenation therapies. Experience luxury wellness rooted in ancient wisdom.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-[#1A2E1A] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-[#1A2E1A] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-[#1A2E1A] transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-xl mb-6 text-luxury-gold">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-[#F8F4EC]/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-[#F8F4EC]/80 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/gallery" className="text-[#F8F4EC]/80 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-[#F8F4EC]/80 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/packages" className="text-[#F8F4EC]/80 hover:text-white transition-colors">Wellness Packages</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-heading text-xl mb-6 text-luxury-gold">Treatments</h3>
            <ul className="space-y-4">
              <li><Link href="/services#postnatal" className="text-[#F8F4EC]/80 hover:text-white transition-colors">Postnatal Care</Link></li>
              <li><Link href="/services#prenatal" className="text-[#F8F4EC]/80 hover:text-white transition-colors">Prenatal Care</Link></li>
              <li><Link href="/services#rejuvenation" className="text-[#F8F4EC]/80 hover:text-white transition-colors">Women's Rejuvenation</Link></li>
              <li><Link href="/services#panchakarma" className="text-[#F8F4EC]/80 hover:text-white transition-colors">Panchakarma</Link></li>
              <li><Link href="/services#pain" className="text-[#F8F4EC]/80 hover:text-white transition-colors">Pain Management</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-heading text-xl mb-6 text-luxury-gold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#F8F4EC]/80">
                <MapPin size={20} className="text-luxury-gold shrink-0 mt-1" />
                <span>123 Ayurveda Marg, Wellness Valley, Kerala, India 680001</span>
              </li>
              <li className="flex items-center gap-3 text-[#F8F4EC]/80">
                <Phone size={20} className="text-luxury-gold shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-[#F8F4EC]/80">
                <Mail size={20} className="text-luxury-gold shrink-0" />
                <span>healing@punarjani.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-[#F8F4EC]/60">
          <p>© {new Date().getFullYear()} Punarjani Matrutwam. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
