import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Eventos realizados" },
  { value: 50000, suffix: "+", label: "Ingressos vendidos" },
  { value: 8, suffix: " seg", label: "Check-in médio" },
  { value: 0, suffix: "", label: "reclamações — Reclame Aqui" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = target / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return num.toLocaleString("pt-BR");
    }
    return num.toString();
  };

  return (
    <div ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground">
      {formatNumber(count)}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="section-padding gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-foreground/70 text-lg mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;