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
    <section className="py-16 md:py-32 bg-gradient-section relative overflow-hidden">
      {/* Background - hidden on mobile */}
      <div className="absolute inset-0 opacity-20 hidden md:block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[200px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
          <div className="space-y-4 md:space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-primary/30 mb-2 md:mb-4">
              <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-primary" />
              <span className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider">Última Chance</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-2">
              Você está a um passo da sua <span className="text-gradient-gold">virada</span>.
            </h2>
            
            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto px-2">
              Entre para a lista VIP e receba prioridade na abertura das vagas.
            </p>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button
              onClick={scrollToForm}
              size="lg"
              className="h-12 md:h-16 px-6 md:px-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm md:text-xl uppercase tracking-wide shadow-gold transition-smooth group animate-glow w-full sm:w-auto"
            >
              <Sparkles className="mr-2 md:mr-3 h-4 w-4 md:h-6 md:w-6" />
              <span className="hidden sm:inline">Quero garantir meu acesso prioritário</span>
              <span className="sm:hidden">Quero acesso prioritário</span>
              <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-6 pt-8 md:pt-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-card/30 border border-border rounded-xl p-4 md:p-6">
              <div className="text-2xl md:text-4xl font-bold text-primary mb-1 md:mb-2">40</div>
              <div className="text-xs md:text-sm text-muted-foreground">Vagas limitadas</div>
            </div>
            <div className="bg-card/30 border border-border rounded-xl p-4 md:p-6">
              <div className="text-2xl md:text-4xl font-bold text-primary mb-1 md:mb-2">2</div>
              <div className="text-xs md:text-sm text-muted-foreground">Dias intensos</div>
            </div>
            <div className="bg-card/30 border border-border rounded-xl p-4 md:p-6">
              <div className="text-2xl md:text-4xl font-bold text-primary mb-1 md:mb-2">1</div>
              <div className="text-xs md:text-sm text-muted-foreground">Virada definitiva</div>
            </div>
          </div>

          <div className="pt-4 md:pt-8">
            <p className="text-sm md:text-base text-muted-foreground px-2">
              Não deixe para depois. <span className="text-primary font-semibold">A lista VIP fecha em breve.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
