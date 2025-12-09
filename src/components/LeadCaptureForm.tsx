import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface LeadCaptureFormProps {
  variant?: "hero" | "section";
  origemForm: "hero" | "footer";
}

export const LeadCaptureForm = ({ variant = "section", origemForm }: LeadCaptureFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('save-lead', {
        body: {
          nome: name,
          email: email,
          telefone: phone,
          origem_form: origemForm
        }
      });

      if (error) {
        throw error;
      }

      toast({
        title: "✅ Dados enviados com sucesso!",
        description: "Redirecionando para o checkout...",
      });

      setName("");
      setEmail("");
      setPhone("");

      // Redirect to checkout after successful submission
      setTimeout(() => {
        window.location.href = "https://pay.kiwify.com.br/5E7xAgI";
      }, 1500);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "❌ Erro ao enviar dados",
        description: "Ocorreu um erro. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const isHero = variant === "hero";

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3 md:space-y-4">
      <div className="space-y-1.5 md:space-y-2">
        <Label htmlFor="name" className="text-foreground text-sm md:text-base">
          Nome Completo
        </Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Digite seu nome"
          className="bg-card border-border text-foreground h-11 md:h-12 text-base transition-smooth focus:border-primary"
        />
      </div>
      
      <div className="space-y-1.5 md:space-y-2">
        <Label htmlFor="email" className="text-foreground text-sm md:text-base">
          E-mail
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="seu@email.com"
          className="bg-card border-border text-foreground h-11 md:h-12 text-base transition-smooth focus:border-primary"
        />
      </div>
      
      <div className="space-y-1.5 md:space-y-2">
        <Label htmlFor="phone" className="text-foreground text-sm md:text-base">
          Telefone (WhatsApp)
        </Label>
        <Input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="(11) 99999-9999"
          className="bg-card border-border text-foreground h-11 md:h-12 text-base transition-smooth focus:border-primary"
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className={`w-full h-12 md:h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base md:text-lg uppercase tracking-wide shadow-gold transition-smooth group ${isHero ? 'animate-glow' : ''}`}
      >
        {loading ? (
          "Processando..."
        ) : (
          <>
            <Sparkles className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            <span className="hidden sm:inline">Quero meu acesso prioritário</span>
            <span className="sm:hidden">Quero acesso VIP</span>
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
      
      <p className="text-xs text-muted-foreground text-center px-2">
        Sem compromisso. Ao se cadastrar, você garante prioridade antes da abertura oficial.
      </p>
    </form>
  );
};
