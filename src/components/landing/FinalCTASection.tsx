import { Button } from "@/components/ui/button";
import { Calendar, Calculator, MessageCircle, Check } from "lucide-react";
import { trackWhatsappClick, trackCtaClick, buildWhatsappUrl } from "@/lib/tracking";
import { scrollToSection } from "@/lib/scroll";

const benefits = [
  "Zero estresse operacional",
  "Público satisfeito (sem filas!)",
  "Dados reais para decisões",
  "Filas -70% nos eventos com Page",
  "Equipe local no Triângulo Mineiro e Alto Paranaíba",
];

const FinalCTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-[linear-gradient(135deg,hsl(0_0%_10%)_0%,hsl(152_82%_14%)_100%)]">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-foreground/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 animate-fade-up">
            Pronto para transformar seu próximo evento?
          </h2>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground/90 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl shadow-lg btn-scale"
            >
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  trackCtaClick("final_cta_crie_seu_evento");
                  scrollToSection("contato");
                }}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Crie seu evento agora
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-transparent border-2 border-primary text-white hover:bg-primary/10 text-lg px-8 py-6 rounded-xl btn-scale"
            >
              <a href={buildWhatsappUrl()} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsappClick("final_cta")}>
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar Demonstração Gratuita
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;