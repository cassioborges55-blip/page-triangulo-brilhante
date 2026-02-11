import { Button } from "@/components/ui/button";
import { Calendar, Calculator, MessageCircle, Check } from "lucide-react";

const benefits = [
  "Zero estresse operacional",
  "Público satisfeito (sem filas!)",
  "Dados reais para decisões",
  "ROI de 100-200% comprovado",
  "Somos de Araxá, como você",
];

const FinalCTASection = () => {
  return (
    <section className="section-padding gradient-cta relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-foreground/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-8 animate-fade-up">
            Pronto para transformar seu próximo evento?
          </h2>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-primary-foreground/90 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Button
              size="lg"
              asChild
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 rounded-xl shadow-lg btn-scale"
            >
              <a href="https://pageeventos.com.br/" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Crie seu evento agora
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-[#25D366] text-white hover:bg-[#20BD5A] text-lg px-8 py-6 rounded-xl shadow-lg btn-scale"
            >
              <a href="https://wa.me/5534998093337" target="_blank" rel="noopener noreferrer">
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