import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle title="Contact Us" subtitle="Get in touch with Elite Fitness" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <AnimatedSection>
              <div className="space-y-6">
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground">Get In Touch</h3>
                <div className="space-y-4">
                  {[
                    { icon: Phone, label: "+91 98765 43210", href: "tel:+919876543210" },
                    { icon: Mail, label: "info@elitefitness.in", href: "mailto:info@elitefitness.in" },
                    { icon: MapPin, label: "123, Anna Salai, T. Nagar, Chennai, Tamil Nadu - 600017" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
<<<<<<< HEAD
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        {item.href ? (
                          <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
=======
                      <div className="w-10 h-10 rounded-lg bg-black border border-primary/30 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(57,255,20,0.15)]">
                        <item.icon className="w-5 h-5 text-primary icon-neonthumb" />
                      </div>
                      <div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
>>>>>>> 94512aa (final edit)
                            {item.label}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.label}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
<<<<<<< HEAD
                  className="gradient-neon text-primary-foreground font-heading tracking-wider px-6 py-3 rounded-md hover:opacity-90 transition-opacity inline-flex items-center gap-2 mt-4"
=======
                  className="cta-button inline-flex items-center gap-2 mt-4"
>>>>>>> 94512aa (final edit)
                >
                  <MessageCircle className="w-5 h-5" />
                  CHAT ON WHATSAPP
                </a>

                {/* Map placeholder */}
<<<<<<< HEAD
                <div className="rounded-lg overflow-hidden border border-border mt-6 aspect-video">
=======
                <div className="rounded-lg overflow-hidden border border-primary/25 mt-6 aspect-video shadow-[0_0_20px_rgba(57,255,20,0.12)] ring-1 ring-primary/10">
>>>>>>> 94512aa (final edit)
                  <iframe
                    title="Elite Fitness Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9963!2d80.2324!3d13.0401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzI0LjQiTiA4MMKwMTMnNTYuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.15}>
<<<<<<< HEAD
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
=======
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-primary/20 rounded-lg p-8 space-y-6 shadow-[0_0_24px_rgba(57,255,20,0.06)]"
              >
>>>>>>> 94512aa (final edit)
                <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">Send a Message</h3>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
<<<<<<< HEAD
                    className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
=======
                    className="w-full bg-black border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-neon transition-all duration-250 ease-in-out"
>>>>>>> 94512aa (final edit)
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
<<<<<<< HEAD
                    className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
=======
                    className="w-full bg-black border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-neon transition-all duration-250 ease-in-out"
>>>>>>> 94512aa (final edit)
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
<<<<<<< HEAD
                    className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
=======
                    className="w-full bg-black border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-neon transition-all duration-250 ease-in-out resize-none"
>>>>>>> 94512aa (final edit)
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
<<<<<<< HEAD
                  className="w-full gradient-neon text-primary-foreground font-heading tracking-wider px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
=======
                  className="cta-button cta-button--block"
>>>>>>> 94512aa (final edit)
                >
                  SEND MESSAGE
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
