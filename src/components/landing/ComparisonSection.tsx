import { Check, X, Handshake } from "lucide-react";

const comparisons = [
{ aspect: "Investimento", others: "R$ 30.000+", page: "R$ 500-8.000", pageIsGood: true },
{ aspect: "Implementação", others: "2-6 meses", page: "3-7 dias", pageIsGood: true },
{ aspect: "Suporte evento", others: "Remoto", page: "Presencial", othersIsBad: true, pageIsGood: true },
{ aspect: "Conhece região", others: "Zero", page: "Profundo", othersIsBad: true, pageIsGood: true },
{ aspect: "Flexibilidade", others: "Burocrático", page: "Total", othersIsBad: true, pageIsGood: true },
{ aspect: "Contato", others: "Ticket", page: "WhatsApp", othersIsBad: true, pageIsGood: true }];


const ComparisonSection = () => {
  return (
    <section id="comparacao" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Por Que Escolher <span className="text-primary">Page Eventos</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enquanto grandes plataformas ignoram eventos regionais...
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-page-gray">
              <div className="p-4 md:p-6 font-bold text-foreground">Aspecto</div>
              <div className="p-4 md:p-6 font-bold text-muted-foreground text-center">Grandes Plataformas</div>
              <div className="p-4 md:p-6 font-bold text-primary text-center">Page Eventos</div>
            </div>

            {/* Table Body */}
            {comparisons.map((row, index) =>
            <div
              key={index}
              className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-card' : 'bg-page-gray/50'} border-t border-border/50`}>

                <div className="p-4 md:p-6 font-medium text-foreground">{row.aspect}</div>
                <div className="p-4 md:p-6 text-center flex items-center justify-center gap-2">
                  {row.othersIsBad && <X className="w-4 h-4 text-destructive shrink-0" />}
                  <span className="text-muted-foreground text-sm md:text-base">{row.others}</span>
                </div>
                <div className="p-4 md:p-6 text-center flex items-center justify-center gap-2">
                  {row.pageIsGood && <Check className="w-4 h-4 text-primary shrink-0" />}
                  <span className="text-primary font-medium text-sm md:text-base">{row.page}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Differentiator Card */}
        <div className="max-w-3xl mx-auto mt-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="gradient-cta rounded-2xl p-8 text-center shadow-button">
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Handshake className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-4"> Nosso Diferencial Único

            </h3>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              Somos de Araxá. Vamos ao seu evento. Respondemos seu WhatsApp em minutos. 
              Somos seu parceiro, não um fornecedor distante.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default ComparisonSection;