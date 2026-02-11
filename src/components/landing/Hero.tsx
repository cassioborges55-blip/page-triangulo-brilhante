import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import logo from "@/assets/page-eventos-logo.png";
import phoneScreen from "@/assets/phone-screen.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-foreground/10 backdrop-blur-sm border border-foreground/20 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-foreground/90 text-sm font-medium">De Araxá para toda região</span>
            </div>
            
            {/* Logo mobile */}
            <div className="lg:hidden flex justify-center mb-6">
              <img src={logo} alt="Page Eventos" className="h-20 w-auto" />
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-tight mb-6">
              A Plataforma de Eventos do{" "}
              <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]">Triângulo Mineiro</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 mb-8 max-w-2xl lg:max-w-none">
              Tecnologia profissional. Suporte presencial. Preço justo para sua região.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl shadow-button btn-scale animate-pulse-soft">

                <Calendar className="mr-2 h-5 w-5" />
                Agendar Demonstração
              </Button>
            </div>
          </div>
          
          {/* Hero Image - Mockup */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative w-72 h-[580px] bg-page-black rounded-[3rem] border-4 border-page-gray-light shadow-2xl overflow-hidden animate-float">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-page-black rounded-b-2xl z-10" />
                
                {/* Screen content */}
                <div className="absolute inset-2 rounded-[2.5rem] overflow-hidden">
                  <img src={phoneScreen} alt="Page Eventos App" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-8 bg-primary rounded-2xl px-4 py-2 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-primary-foreground font-bold">+150 eventos</span>
              </div>
              <div className="absolute -bottom-4 -left-8 bg-card rounded-2xl px-4 py-2 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-foreground font-bold">⚡ Check-in 2s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        


      </div>
    </section>);

};

export default Hero;