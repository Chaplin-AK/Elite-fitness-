import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Dumbbell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Programs", path: "/programs" },
  { label: "Plans", path: "/plans" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
<<<<<<< HEAD
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <Dumbbell className="w-7 h-7 text-primary" />
          <span className="font-heading text-xl font-bold tracking-wider text-foreground">
            ELITE <span className="text-primary">FITNESS</span>
=======
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-primary/20">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <Dumbbell className="w-7 h-7 text-primary icon-neonthumb transition-[filter] duration-200 group-hover:drop-shadow-[0_0_6px_rgba(57,255,20,0.45)]" />
          <span className="font-heading text-xl font-bold tracking-wider text-foreground">
            ELITE <span className="text-primary drop-shadow-[0_0_10px_rgba(57,255,20,0.45)]">FITNESS</span>
>>>>>>> 94512aa (final edit)
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
<<<<<<< HEAD
              className={`font-heading text-sm tracking-widest uppercase transition-colors duration-200 hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground"
=======
              className={`font-heading text-sm tracking-widest uppercase transition-all duration-200 ease-in-out hover:text-primary ${
                location.pathname === link.path ? "nav-link-active" : "text-muted-foreground"
>>>>>>> 94512aa (final edit)
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
<<<<<<< HEAD
            className="gradient-neon text-primary-foreground font-heading text-sm tracking-wider px-5 py-2 rounded-md hover:opacity-90 transition-opacity"
=======
            className="cta-button cta-button--sm"
>>>>>>> 94512aa (final edit)
          >
            JOIN NOW
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
            className="md:hidden bg-background border-b border-border overflow-hidden"
=======
            className="md:hidden bg-background border-b border-primary/15 overflow-hidden"
>>>>>>> 94512aa (final edit)
          >
            <div className="flex flex-col px-4 py-4 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
<<<<<<< HEAD
                  className={`font-heading text-sm tracking-widest uppercase py-2 transition-colors ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
=======
                  className={`font-heading text-sm tracking-widest uppercase py-2 transition-all duration-200 ${
                    location.pathname === link.path ? "nav-link-active" : "text-muted-foreground hover:text-primary"
>>>>>>> 94512aa (final edit)
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="gradient-neon text-primary-foreground font-heading text-sm tracking-wider px-5 py-2 rounded-md text-center mt-2"
=======
                className="cta-button cta-button--sm w-full text-center mt-2"
>>>>>>> 94512aa (final edit)
              >
                JOIN NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
