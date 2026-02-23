import { Headset, Rocket, Wrench, Sparkles, Clock, Zap, Upload, PartyPopper, Users, Settings, TestTube } from "lucide-react";
import { useState } from "react";

const selfServiceSteps = [
  {
    day: "Hora 1",
    title: "Cadastro e Configuração",
    icon: Upload,
    description: "Crie sua conta, cadastre seu evento e configure ingressos",
    duration: "~30min",
  },
  {
    day: "Hora 2-3",
    title: "Personalização e Testes",
    icon: Settings,
    description: "Personalize sua página, teste o checkout e publique",
    duration: "~1-2h",
  },
  {
    day: "Evento",
    title: "Execução",
    icon: PartyPopper,
    description: "Tudo funciona. Estamos lá se precisar",
    duration: "Evento completo",
  },
];

const premiumSteps = [
  {
    day: "Dia 1",
    title: "Reunião de Kickoff e Treinamento",
    icon: Headset,
    description: "Entendemos seu evento, configuramos e treinamos sua equipe juntos",
    duration: "2-3h",
  },
  {
    day: "Dia 2",
    title: "Setup e Testes",
    icon: Wrench,
    description: "Tudo configurado, você testa, ajustamos e garantimos perfeição",
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
  const [activeTab, setActiveTab] = useState<"self" | "premium">("self");

  const steps = activeTab === "self" ? selfServiceSteps : premiumSteps;

  return (
    <section id="como-funciona" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simples. Rápido. <span className="text-primary">Sem complicação.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 animate-fade-up">
          <div className="inline-flex bg-card border border-border rounded-2xl p-1.5 gap-1">
            <button
              onClick={() => setActiveTab("self")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "self"
                  ? "bg-primary text-primary-foreground shadow-button"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Zap className="w-4 h-4" />
              Self-Service Digital
            </button>
            <button
              onClick={() => setActiveTab("premium")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "premium"
                  ? "bg-primary text-primary-foreground shadow-button"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Users className="w-4 h-4" />
              Eventos Maiores
            </button>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto animate-fade-up">
          {activeTab === "self"
            ? "Em poucas horas você sobe seu evento sozinho na plataforma."
            : "Reunimos presencialmente com você para garantir tudo perfeito."}
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto`}>
            {steps.map((step, index) => (
              <div
                key={`${activeTab}-${index}`}
                className="relative text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step number circle */}
                <div className="relative mx-auto w-20 h-20 bg-card border-4 border-primary rounded-full flex items-center justify-center mb-6 shadow-card transition-shadow z-10">
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
