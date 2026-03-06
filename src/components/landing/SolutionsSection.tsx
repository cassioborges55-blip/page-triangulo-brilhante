import { Banknote, ScanQrCode, LineChart, HeartHandshake, Car, UtensilsCrossed, Check } from "lucide-react";

const solutions = [
  {
    icon: Banknote,
    title: "Split de receita e antecipação",
    description: "Divisão automática entre organizador, fornecedor e plataforma com otimização fiscal",
    features: ["Split automático entre as partes", "Otimização de impostos integrada", "PIX e débito: resgate na hora", "Crédito: 50% antecipado, restante D+2"],
  },
  {
    icon: ScanQrCode,
    title: "Check-in Digital",
    description: "QR Code único por ingresso, validação instantânea",
    features: ["Filas 60% menores", "Zero fraude garantido", "Controle total de acesso"],
  },
  {
    icon: LineChart,
    title: "Relatórios em Tempo Real",
    description: "Dashboard ao vivo com vendas, público e métricas",
    features: ["Vendas minuto a minuto", "Perfil do público", "Decisões baseadas em dados"],
  },
  {
    icon: HeartHandshake,
    title: "Suporte Personalizado",
    description: "Nossa equipe VAI AO SEU EVENTO. Sempre que precisar, estamos lá.",
    features: ["Suporte presencial", "WhatsApp direto", "Somos de Araxá"],
  },
  {
    icon: Car,
    title: "Gestão de Estacionamento",
    description: "Controle integrado de vagas e check-in de veículos",
    features: ["Controle de vagas em tempo real", "Check-in de veículos por QR Code", "Receita adicional com estacionamento"],
  },
  {
    icon: UtensilsCrossed,
    title: "Módulo F&B (praça de alimentação)",
    description: "Venda antecipada de comida e bebida com controle por pulseira",
    features: ["Venda de consumações antes do evento", "Controle de consumo por pulseira digital", "Reduz desperdício em 15-20%"],
  },
];

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="section-padding bg-page-gray">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Page Eventos <span className="text-primary">resolve tudo isso</span>
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-8 card-hover overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:bg-primary/20 transition-colors" />

              {/* Icon */}
              <div className="relative w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-button group-hover:scale-110 transition-transform">
                <solution.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="relative text-2xl font-bold text-foreground mb-3">{solution.title}</h3>
              <p className="relative text-muted-foreground mb-6">{solution.description}</p>

              {/* Features */}
              <ul className="relative space-y-3">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
