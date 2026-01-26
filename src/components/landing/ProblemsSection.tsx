import { Clock, BarChart3, DollarSign, FileText, ShoppingCart, XCircle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Filas Intermináveis",
    description: "Público irritado esperando 40+ minutos na entrada",
    badge: "8-12% desistências",
  },
  {
    icon: BarChart3,
    title: "Zero Controle",
    description: "Você só sabe o resultado dias depois do evento",
    badge: "Decisões atrasadas",
  },
  {
    icon: DollarSign,
    title: "Fraude Constante",
    description: "Ingressos falsificados causando prejuízo",
    badge: "R$ 2-5 mil perdidos",
  },
  {
    icon: FileText,
    title: "Trabalho Manual Excessivo",
    description: "Horas e horas em planilhas e controles",
    badge: "20+ horas desperdiçadas",
  },
  {
    icon: ShoppingCart,
    title: "Vendas Limitadas",
    description: "Depende de bilheteria física ou WhatsApp",
    badge: "30% menos vendas",
  },
  {
    icon: XCircle,
    title: "Reconciliação Caótica",
    description: "Dinheiro que não fecha, erros de caixa",
    badge: "Estresse constante",
  },
];

const ProblemsSection = () => {
  return (
    <section id="problemas" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Você Reconhece Esses Problemas?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Se você já passou por isso, não está sozinho...
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-card border border-primary/20 rounded-2xl p-6 card-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-destructive/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-destructive/30 transition-colors">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2">{problem.title}</h3>
              <p className="text-muted-foreground mb-4">{problem.description}</p>

              {/* Badge */}
              <div className="inline-flex items-center bg-destructive/20 text-destructive text-sm font-medium px-3 py-1 rounded-full">
                {problem.badge}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;