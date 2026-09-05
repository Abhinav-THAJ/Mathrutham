import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-accent text-center">
        <div className="container mx-auto px-4">
          <span className="text-brand-green font-semibold uppercase tracking-widest text-sm mb-4 block">Connect With Us</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Get in Touch
          </h1>
          <p className="text-foreground/75 text-lg max-w-2xl mx-auto">
            We are here to help you on your wellness journey. Reach out for consultations and inquiries.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Contact Information</h2>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-brand-green shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-foreground">Our Location</h4>
                  <p className="text-foreground/70">123 Ayurveda Marg, Wellness Valley, Kerala, India 680001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F7EFF9] rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-foreground">Phone</h4>
                  <p className="text-foreground/70">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-brand-green shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-foreground">Email</h4>
                  <p className="text-foreground/70">healing@punarjani.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F7EFF9] rounded-full flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-foreground">Working Hours</h4>
                  <p className="text-foreground/70">Mon - Sun: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-primary/15">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Book an Appointment</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">First Name</label>
                    <input type="text" className="w-full bg-accent/60 border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-accent/60 border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-accent/60 border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-accent/60 border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-primary text-white font-semibold py-4 rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all hover:scale-[1.01] active:scale-[0.99]">
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
