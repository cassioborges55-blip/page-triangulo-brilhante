import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
const eventTypes = [
  "Show/Festa",
  "Evento Esportivo",
  "Feira/Exposição",
  "Evento Corporativo",
  "Evento Religioso/Comunitário",
  "Outro",
];

const audienceSizes = [
  "Até 300 pessoas",
  "300-1.000",
  "1.000-3.000",
  "3.000+",
];

const ContactFormSection = () => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [eventType, setEventType] = useState("");
  const [audience, setAudience] = useState("");
  const [loading, setLoading] = useState(false);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWhatsapp(formatPhone(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Save lead (fire-and-forget, don't block WhatsApp)
    supabase.from("leads").insert({
      name: name.trim(),
      whatsapp: whatsapp.trim(),
      event_type: eventType,
      audience,
    }).then(({ error }) => {
      if (error) console.error("Erro ao salvar lead:", error);
    });

    // Always open WhatsApp
    const message = encodeURIComponent(
      `Olá! Sou ${name.trim()}.\nTipo de evento: ${eventType}\nPúblico estimado: ${audience}\nMeu WhatsApp: ${whatsapp}`
    );
    window.open(`https://wa.me/5534998093337?text=${message}`, "_blank");

    toast({ title: "Enviado com sucesso!", description: "Entraremos em contato em breve." });
    setName("");
    setWhatsapp("");
    setEventType("");
    setAudience("");
    setLoading(false);
  };
    }
  };

  return (
    <section id="contato" className="section-padding bg-page-gray">
      <div className="container-custom">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Fale com a equipe <span className="text-primary">Page</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Preencha e retornamos em até 2 horas pelo WhatsApp.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6 shadow-card animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp</Label>
              <Input
                id="whatsapp"
                placeholder="(34) 99999-9999"
                value={whatsapp}
                onChange={handleWhatsappChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Tipo de evento</Label>
              <Select value={eventType} onValueChange={setEventType} required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Público estimado</Label>
              <Select value={audience} onValueChange={setAudience} required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o público" />
                </SelectTrigger>
                <SelectContent>
                  {audienceSizes.map((size) => (
                    <SelectItem key={size} value={size}>{size}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 rounded-xl shadow-button btn-scale"
            >
              {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <MessageCircle className="mr-2 h-5 w-5" />}
              {loading ? "Enviando..." : "Quero conhecer a Page"}
            </Button>

            <p className="text-center text-muted-foreground text-sm">
              Sem compromisso. Sem spam.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
