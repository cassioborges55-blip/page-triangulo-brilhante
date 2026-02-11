import { Trophy, BarChart3, Ticket, Heart } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Badge {
  icon: LucideIcon;
  text: string;
}

const badges: Badge[] = [
  { icon: Trophy, text: "Copa MTB Araxá" },
  { icon: BarChart3, text: "150+ eventos realizados" },
  { icon: Ticket, text: "50.000+ ingressos vendidos" },
  { icon: Heart, text: "100% suporte local" },
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
              <badge.icon className="w-5 h-5 text-primary" />
              <span className="text-foreground/90 text-sm font-medium whitespace-nowrap">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityBadges;