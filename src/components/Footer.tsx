import { Link } from "react-router-dom";
import { Dumbbell, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-background border-t border-primary/25">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Dumbbell className="w-6 h-6 text-primary icon-neonthumb" />
            <span className="font-heading text-lg font-bold text-foreground">
              ELITE <span className="text-primary drop-shadow-[0_0_10px_rgba(57,255,20,0.45)]">FITNESS</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Transform your body and mind with Chennai's premier fitness destination. 5+ years of excellence.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm tracking-widest uppercase text-foreground mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["About", "Programs", "Plans", "Gallery", "Contact"].map((l) => (
              <Link
                key={l}
                to={`/${l.toLowerCase()}`}
                className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm tracking-widest uppercase text-foreground mb-4">Programs</h4>
          <div className="flex flex-col gap-2 text-muted-foreground text-sm">
            <span>Weight Loss</span>
            <span>Muscle Building</span>
            <span>Personal Training</span>
            <span>Cardio Fitness</span>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm tracking-widest uppercase text-foreground mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>info@elitefitness.in</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>T. Nagar, Chennai, TN</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground text-xs">
        © {new Date().getFullYear()} Elite Fitness. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
