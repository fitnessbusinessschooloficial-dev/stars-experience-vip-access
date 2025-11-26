import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const FinalCTASection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('capture-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="py-32 bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[200px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-2 rounded-full border border-primary/30 mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Última Chance</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              Você está a um passo da sua <span className="text-gradient-gold">virada</span>.
            </h2>
            
            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
              Entre para a lista VIP e receba prioridade na abertura das vagas.
            </p>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button
              onClick={scrollToForm}
              size="lg"
              className="h-16 px-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl uppercase tracking-wide shadow-gold transition-smooth group animate-glow"
            >
              <Sparkles className="mr-3 h-6 w-6" />
              Quero garantir meu acesso prioritário
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6">
              <div className="text-4xl font-bold text-primary mb-2">40</div>
              <div className="text-sm text-muted-foreground">Vagas limitadas</div>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6">
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-muted-foreground">Dias intensos</div>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6">
              <div className="text-4xl font-bold text-primary mb-2">1</div>
              <div className="text-sm text-muted-foreground">Virada definitiva</div>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-muted-foreground">
              Não deixe para depois. <span className="text-primary font-semibold">A lista VIP fecha em breve.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
