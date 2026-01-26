import { Button } from "@/components/ui/button";
import { Check, Star, Gift } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    audience: "Para eventos até 500 pessoas",
    price: "R$ 500",
    commission: "+ 6% por ingresso",
    features: [
      "Venda online",
      "Check-in digital",
      "Relatório básico",
      "Suporte remoto",
    ],
    highlighted: false,
    cta: "Contratar",
  },
  {
    name: "Profissional",
    audience: "Para eventos 500-2.000 pessoas",
    price: "R$ 1.200",
    commission: "+ 5% por ingresso",
    features: [
      "Tudo do Essencial",
      "Suporte presencial",
      "Relatórios avançados",
      "Customizações",
    ],
    highlighted: true,
    popular: true,
    cta: "Contratar",
  },
  {
    name: "Enterprise",
    audience: "Para eventos 2.000+ pessoas",
    price: "A partir de R$ 2.500",
    commission: "+ 4%",
    features: [
      "Tudo do Profissional",
      "Equipe dedicada",
      "Customizações ilimitadas",
      "Account Manager",
    ],
    highlighted: false,
    cta: "Falar com Especialista",
  },
];

const PricingSection = () => {
  return (
    <section id="precos" className="section-padding bg-page-gray">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Investimento Justo para <span className="text-gradient">Seu Evento</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 animate-fade-up ${
                plan.highlighted
                  ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary shadow-button"
                  : "bg-card border border-border"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full shadow-button">
                    <Star className="w-4 h-4" />
                    POPULAR
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.audience}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="text-3xl lg:text-4xl font-extrabold text-foreground">{plan.price}</div>
                <div className="text-primary font-medium">{plan.commission}</div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.highlighted ? "bg-primary" : "bg-primary/20"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full py-6 text-lg font-bold rounded-xl btn-scale ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-button"
                    : "bg-page-gray-light text-foreground hover:bg-muted"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Special offer banner */}
        <div className="max-w-2xl mx-auto mt-12 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="bg-warning text-warning-foreground rounded-2xl p-6 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <Gift className="w-8 h-8" />
            <p className="text-lg font-bold">
              🎁 Oferta Especial: 30% de desconto no primeiro evento!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;