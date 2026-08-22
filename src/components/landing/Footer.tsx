import logo from "@/assets/Logo_PAGE_Eventos_branca_v4.png";
import { Instagram, MessageCircle, Mail, MapPin, Heart } from "lucide-react";
import { trackWhatsappClick, buildWhatsappUrl } from "@/lib/tracking";
import { scrollToSection } from "@/lib/scroll";

type FooterLink =
  | { label: string; kind: "scroll"; section: string }
  | { label: string; kind: "external"; href: string };

const aboutLinks: FooterLink[] = [
  { label: "Como Funciona", kind: "scroll", section: "como-funciona" },
  { label: "Cases", kind: "scroll", section: "cases" },
  { label: "Sobre Nós", kind: "scroll", section: "como-funciona" },
  { label: "Contato", kind: "scroll", section: "contato" },
];

const eventLinks: FooterLink[] = [
  { label: "Criar Evento", kind: "scroll", section: "contato" },
  { label: "Meus Ingressos", kind: "external", href: "https://pageeventos.com.br/meus-ingressos" },
  { label: "Central de Ajuda", kind: "external", href: "https://pageeventos.com.br/faq" },
];

const legalLinks = [
  { label: "Política de Privacidade", href: "https://pageeventos.com.br/docs/politica-de-privacidade.pdf" },
  { label: "Termos de Uso", href: "https://pageeventos.com.br/docs/termos-de-uso-pageeventos.pdf" },
];

const Footer = () => {
  const renderLink = (link: FooterLink) => {
    if (link.kind === "scroll") {
      return (
        <a
          href={`#${link.section}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(link.section);
          }}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {link.label}
        </a>
      );
    }
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        {link.label}
      </a>
    );
  };

  return (
    <footer className="bg-page-black pt-16 pb-8">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Page Eventos" className="h-[80px] w-auto mb-4" />
            <p className="text-muted-foreground">
              A plataforma que movimenta os eventos do Triângulo Mineiro e Alto Paranaíba
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Links</h4>
            <ul className="space-y-2">
              {aboutLinks.map((link, index) => (
                <li key={index}>{renderLink(link)}</li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Eventos</h4>
            <ul className="space-y-2">
              {eventLinks.map((link, index) => (
                <li key={index}>{renderLink(link)}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle className="w-4 h-4 text-primary" />
                <a href={buildWhatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" onClick={() => trackWhatsappClick("rodape")}>
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
        <div className="border-t border-border/30 pt-8 flex flex-col items-center gap-4">
          <p className="text-muted-foreground inline-flex items-center gap-1 flex-wrap justify-center">
            © {new Date().getFullYear()} Page Eventos. Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> em Araxá, Minas Gerais
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
