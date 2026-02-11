import { MapPin } from "lucide-react";

const cities = [
  { name: "Araxá", main: true },
  { name: "Patos de Minas", main: false },
  { name: "Uberaba", main: false },
  { name: "Patrocínio", main: false },
  { name: "Uberlândia", main: false },
];

const RegionSection = () => {
  return (
    <section id="regiao" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-primary rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-primary rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border-2 border-primary rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Atendemos todo o <span className="text-primary">Triângulo Mineiro</span>
            <br />e <span className="text-primary">Alto Paranaíba</span>
          </h2>
        </div>

        {/* Map representation */}
        <div className="relative max-w-3xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="aspect-[16/9] bg-card rounded-2xl border border-border overflow-hidden relative">
            {/* Stylized map background */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/10" />
            
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />

            {/* Cities positioned on map */}
            <div className="absolute inset-0 p-8">
              {/* Araxá - center right */}
              <div className="absolute top-1/3 right-1/4 transform -translate-x-1/2 group">
                <div className="relative">
                  <div className="w-6 h-6 bg-primary rounded-full animate-pulse-soft shadow-button" />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                    Araxá 📍
                  </div>
                </div>
              </div>

              {/* Patos de Minas - top right */}
              <div className="absolute top-1/4 right-1/3">
                <div className="w-4 h-4 bg-primary/60 rounded-full" />
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-foreground/70 text-xs whitespace-nowrap">Patos de Minas</span>
              </div>

              {/* Uberaba - bottom center */}
              <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2">
                <div className="w-4 h-4 bg-primary/60 rounded-full" />
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-foreground/70 text-xs whitespace-nowrap">Uberaba</span>
              </div>

              {/* Patrocínio - top center */}
              <div className="absolute top-1/3 left-1/3">
                <div className="w-4 h-4 bg-primary/60 rounded-full" />
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-foreground/70 text-xs whitespace-nowrap">Patrocínio</span>
              </div>

              {/* Uberlândia - bottom left */}
              <div className="absolute bottom-1/3 left-1/4">
                <div className="w-5 h-5 bg-primary/70 rounded-full" />
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-foreground/70 text-xs whitespace-nowrap">Uberlândia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cities list */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {cities.map((city, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                city.main
                  ? "bg-primary text-primary-foreground font-bold"
                  : "bg-card border border-border text-foreground"
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>{city.name}</span>
            </div>
          ))}
        </div>

        {/* Text */}
        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
          Somos locais. Conhecemos cada cidade. Falamos presencialmente no seu evento.
        </p>
      </div>
    </section>
  );
};

export default RegionSection;