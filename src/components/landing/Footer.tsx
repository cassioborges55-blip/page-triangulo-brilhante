import logo from "@/assets/Logo_PAGE_Eventos_branco-2.png";
import { Instagram, MessageCircle, Mail, MapPin, Heart } from "lucide-react";

const footerLinks = {
  about: [
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Cases", href: "#cases" },
    { label: "Sobre Nós", href: "#" },
    { label: "Contato", href: "#" },
  ],
  events: [
    { label: "Criar Evento", href: "#" },
    { label: "Meus Ingressos", href: "#" },
    { label: "Central de Ajuda", href: "#" },
    { label: "Blog", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-page-black pt-16 pb-8">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Page Eventos" className="h-[100px] w-auto mb-4" />
            <p className="text-muted-foreground">
              A plataforma que movimenta os eventos do Triângulo Mineiro e Alto Paranaíba
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Links</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Eventos</h4>
            <ul className="space-y-2">
              {footerLinks.events.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle className="w-4 h-4 text-primary" />
                <a href="https://wa.me/5534998093337" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  (34) 99809-3337
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@pageeventos.com.br</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Araxá - MG | Uberaba - MG</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Instagram className="w-4 h-4 text-primary" />
                <a href="https://instagram.com/page.eventos" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  @page.eventos
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/30 pt-8 text-center">
          <p className="text-muted-foreground inline-flex items-center gap-1 flex-wrap justify-center">
            © 2025 Page Eventos. Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> em Araxá, Minas Gerais
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;