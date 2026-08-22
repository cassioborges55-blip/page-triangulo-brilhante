import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { trackCtaClick } from "@/lib/tracking";
import { scrollToSection } from "@/lib/scroll";

const MobileFloatingCTA = () => {
  const [scrolled, setScrolled] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const footerVisible = useRef(false);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const form = document.getElementById("contato");
    const footer = document.querySelector("footer");
    const observers: IntersectionObserver[] = [];

    if (form) {
      const io = new IntersectionObserver(
        ([entry]) => setFormVisible(entry.isIntersecting),
        { threshold: 0.15 }
      );
      io.observe(form);
      observers.push(io);
    }
    if (footer) {
      const io = new IntersectionObserver(
        ([entry]) => {
          footerVisible.current = entry.isIntersecting;
          setFooterInView(entry.isIntersecting);
        },
        { threshold: 0 }
      );
      io.observe(footer);
      observers.push(io);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const visible = scrolled && !formVisible && !footerInView;

  const handleClick = () => {
    trackCtaClick("botao_flutuante_mobile");
    scrollToSection("contato");
  };

  return (
    <div
      className={`md:hidden fixed bottom-4 left-4 right-4 z-50 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Button
        size="lg"
        onClick={handleClick}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base py-6 rounded-xl shadow-button btn-scale"
      >
        <Calendar className="mr-2 h-5 w-5" />
        Quero uma demonstração
      </Button>
    </div>
  );
};

export default MobileFloatingCTA;
