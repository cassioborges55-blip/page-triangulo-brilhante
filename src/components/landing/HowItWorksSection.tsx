import { Headset, Rocket, Wrench, Sparkles, Clock } from "lucide-react";

const steps = [
  {
    day: "Dia 1",
    title: "Reunião de Kickoff",
    icon: Headset,
    description: "Entendemos seu evento, configuramos juntos",
    duration: "1h",
  },
  {
    day: "Dia 2-3",
    title: "Setup e Treinamento",
    icon: Rocket,
    description: "Tudo pronto, equipe treinada",
    duration: "2-3h",
  },
  {
    day: "Dia 4-7",
    title: "Testes",
    icon: Wrench,
    description: "Você testa, ajustamos, garantimos perfeição",
    duration: "Suporte contínuo",
  },
  {
    day: "Evento",
    title: "Execução",
    icon: Sparkles,
    description: "Tudo funciona. Estamos lá se precisar",
    duration: "Evento completo",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simples. Rápido. <span className="text-primary">Sem Complicação.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step number circle */}
                <div className="relative mx-auto w-20 h-20 bg-card border-4 border-primary rounded-full flex items-center justify-center mb-6 shadow-card group-hover:shadow-button transition-shadow z-10">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Day badge */}
                <div className="inline-flex bg-primary/20 text-primary text-sm font-bold px-4 py-1 rounded-full mb-3">
                  {step.day}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground mb-3">{step.description}</p>

                {/* Duration */}
                <div className="inline-flex items-center gap-2 text-sm text-primary/80">
                  <Clock className="w-4 h-4" />
                  <span>{step.duration}</span>
                </div>

                {/* Arrow - mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <div className="w-8 h-8 text-primary/40">↓</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;