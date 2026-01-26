const badges = [
  { icon: "🏆", text: "Copa MTB Araxá" },
  { icon: "📊", text: "150+ Eventos Realizados" },
  { icon: "🎫", text: "50.000+ Ingressos Vendidos" },
  { icon: "💚", text: "100% Suporte Local" },
];

const CredibilityBadges = () => {
  return (
    <section className="relative z-20 -mt-12 pb-8">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-foreground/10 backdrop-blur-md border border-foreground/10 rounded-full px-4 py-3 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-xl">{badge.icon}</span>
              <span className="text-foreground/90 text-sm font-medium whitespace-nowrap">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityBadges;