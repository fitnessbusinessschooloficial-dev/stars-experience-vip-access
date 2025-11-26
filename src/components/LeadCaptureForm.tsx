import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Sparkles } from "lucide-react";

interface LeadCaptureFormProps {
  variant?: "hero" | "section";
}

export const LeadCaptureForm = ({ variant = "section" }: LeadCaptureFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "🎉 Cadastro realizado com sucesso!",
        description: "Você está na lista VIP. Em breve enviaremos mais informações.",
      });
      setLoading(false);
      setName("");
      setEmail("");
      setPhone("");
    }, 1500);
  };

  const isHero = variant === "hero";

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground">
          Nome Completo
        </Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Digite seu nome"
          className="bg-card border-border text-foreground h-12 transition-smooth focus:border-primary"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground">
          E-mail
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="seu@email.com"
          className="bg-card border-border text-foreground h-12 transition-smooth focus:border-primary"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-foreground">
          Telefone (WhatsApp)
        </Label>
        <Input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="(11) 99999-9999"
          className="bg-card border-border text-foreground h-12 transition-smooth focus:border-primary"
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className={`w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg uppercase tracking-wide shadow-gold transition-smooth group ${isHero ? 'animate-glow' : ''}`}
      >
        {loading ? (
          "Processando..."
        ) : (
          <>
            <Sparkles className="mr-2 h-5 w-5" />
            Quero meu acesso prioritário
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
      
      <p className="text-xs text-muted-foreground text-center">
        Sem compromisso. Ao se cadastrar, você garante prioridade antes da abertura oficial.
      </p>
    </form>
  );
};
