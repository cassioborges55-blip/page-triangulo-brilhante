import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-page-branco.png";

const navLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Cases", href: "#cases" },
  { label: "Como Funciona", href: "#como-funciona" },
  
  { label: "Região", href: "#regiao" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="Page Eventos" className="h-10 md:h-12 w-auto" />
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;