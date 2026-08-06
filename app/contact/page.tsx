import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-[#1A2E1A]">
            Get in Touch
          </h1>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            We are here to help you on your wellness journey. Reach out for consultations and inquiries.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="font-heading text-3xl font-bold text-[#1A2E1A] mb-8">Contact Information</h2>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-foreground/70">123 Ayurveda Marg, Wellness Valley, Kerala, India 680001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  <p className="text-foreground/70">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-foreground/70">healing@punarjani.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                  <p className="text-foreground/70">Mon - Sun: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-primary/10">
              <h2 className="font-heading text-3xl font-bold text-[#1A2E1A] mb-8">Book an Appointment</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">First Name</label>
                    <input type="text" className="w-full bg-accent/50 border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-accent/50 border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-accent/50 border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-accent/50 border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-primary text-white font-semibold py-4 rounded-xl hover:bg-[#1A2E1A] transition-colors">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
