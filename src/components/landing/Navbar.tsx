import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/Logo_PAGE_Eventos_branca_v4.png";
import { scrollToSection } from "@/lib/scroll";
import { trackCtaClick } from "@/lib/tracking";

const navLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Cases", href: "#cases" },
  { label: "Como Funciona", href: "#como-funciona" },

  { label: "Região", href: "#regiao" },
];

const handleCtaClick = () => {
  trackCtaClick("navbar");
  scrollToSection("contato");
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-24 md:h-32">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="Page Eventos" className="h-[64px] md:h-[80px] w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={handleCtaClick}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-5 py-2.5 rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Falar com a equipe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-custom py-4 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-foreground/80 hover:text-primary font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                handleCtaClick();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-5 py-3 rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Falar com a equipe
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;