import evento1 from "@/assets/evento1.png";
import evento2 from "@/assets/evento2.png";
import evento3 from "@/assets/evento3.png";
import evento4 from "@/assets/evento4.png";
import evento5 from "@/assets/evento5.png";
import evento6 from "@/assets/evento6.png";
import evento7 from "@/assets/evento7.png";
import evento8 from "@/assets/evento8.png";

const logos = [
  { src: evento1, alt: "UCI Mountain Bike World Series Araxá" },
  { src: evento2, alt: "Copa Internacional de Mountain Bike" },
  { src: evento3, alt: "Arraiá da APAE" },
  { src: evento4, alt: "MD Clinic Sports On" },
  { src: evento5, alt: "Forrest Run" },
  { src: evento6, alt: "Bocaina Park Trail" },
  { src: evento7, alt: "Festa do Branco" },
  { src: evento8, alt: "Festa Junina da Equoterapia" },
];


const EventLogosSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container-custom">
        <h2 className="text-center text-xl sm:text-2xl font-bold text-foreground mb-8">
          Eventos que já usaram a PAGE
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center rounded-xl bg-card border border-border/40 p-4"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-[44px] md:h-[56px] w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventLogosSection;
