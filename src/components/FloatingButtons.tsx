import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => (
  <>
    {/* WhatsApp */}
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 cta-button cta-button--fab animate-pulse-neon"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-black" />
    </a>

    {/* Call button - mobile only */}
    <a
      href="tel:+919876543210"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-neon md:hidden border-2 border-primary hover:border-[#2EE60F] hover:shadow-neon-hover hover:-translate-y-px transition-all duration-250 ease-in-out active:scale-[0.97]"
      aria-label="Call"
    >
      <Phone className="w-6 h-6 text-primary" />
    </a>
  </>
);

export default FloatingButtons;
