import { Gem } from "lucide-react";
import expoAgropecuaria from "@/assets/expo-agropecuaria.png";

const cases = [
  {
    title: "Copa do Mundo de Mountainbike Araxá",
    badge: "Evento Esportivo | 5.000+ pessoas",
    problem: "Controle de acesso complexo + gestão de estacionamento",
    solution: "Check-in por categorias + sistema integrado",
    result: "Zero filas, controle total",
    highlight: "Gerenciamos até o estacionamento!",
    image: "🚴",
  },
  {
    title: "Exposição Agropecuária",
    badge: "Feira Multi-dia | 3.000+ visitantes",
    problem: "Múltiplos pontos de acesso, expositores vs visitantes",
    solution: "Ingressos diferenciados + controle preciso",
    result: "Primeira vez com dados reais de público",
    highlight: "Controle preciso em tempo real",
    image: expoAgropecuaria,
  },
  {
    title: "Eventos Locais Diversos",
    badge: "150+ eventos | 500-2.000 pessoas",
    problem: "Filas gigantes, fraudes, controle manual",
    solution: "Venda online + check-in digital",
    result: "Filas -70%, vendas +25%",
    highlight: "Produtores tranquilos",
    image: "🎉",
  },
];

const CasesSection = () => {
  return (
    <section id="cases" className="section-padding bg-page-gray">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Eventos que <span className="text-primary">Confiaram em Nós</span>
          </h2>
        </div>

        {/* Cases */}
        <div className="space-y-6">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl overflow-hidden card-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="grid md:grid-cols-[120px_1fr] lg:grid-cols-[180px_1fr] gap-0">
                {/* Image placeholder */}
                <div className="hidden md:flex items-center justify-center overflow-hidden">
                  {typeof caseItem.image === 'string' && caseItem.image.length <= 2 ? (
                    <span className="text-6xl lg:text-8xl">{caseItem.image}</span>
                  ) : (
                    <img src={caseItem.image} alt={caseItem.title} className="w-full h-full object-cover" />
                  )}
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {typeof caseItem.image === 'string' && caseItem.image.length <= 2 ? (
                      <span className="text-4xl md:hidden">{caseItem.image}</span>
                    ) : (
                      <img src={caseItem.image} alt={caseItem.title} className="w-16 h-16 rounded-lg object-cover md:hidden" />
                    )}
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground">{caseItem.title}</h3>
                    <span className="bg-primary/20 text-primary text-xs font-medium px-3 py-1 rounded-full">
                      {caseItem.badge}
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Problema</p>
                      <p className="text-foreground/80 text-sm">{caseItem.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Solução</p>
                      <p className="text-foreground/80 text-sm">{caseItem.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Resultado</p>
                      <p className="text-primary font-semibold">{caseItem.result}</p>
                    </div>
                  </div>

                  {/* Highlight */}
                  <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
                    <Gem className="w-4 h-4 text-primary" />
                    <span className="text-primary font-medium text-sm">{caseItem.highlight}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;