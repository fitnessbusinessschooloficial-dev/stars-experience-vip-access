import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { Star, Users, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Copy */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Evento Presencial Exclusivo</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Pare de sobreviver.{" "}
              <span className="text-gradient-gold">Jogue para vencer.</span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Domine Marketing, Vendas e Inteligência Empresarial para crescer de forma previsível no mercado fitness.
            </p>

            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-card">
              <p className="text-lg leading-relaxed">
                A virada definitiva para empreendedores fitness que querem sair da estagnação e construir negócios <span className="text-primary font-semibold">fortes, lucrativos e capazes de crescer mês após mês.</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Apenas <strong className="text-foreground">40 vagas</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Alta conversão</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:pl-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card/80 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-primary/20 shadow-card">
              <div className="mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  Garanta sua vaga prioritária
                </h3>
                <p className="text-muted-foreground">
                  Preencha os dados abaixo para acessar a pré-lista VIP
                </p>
              </div>
              
              <LeadCaptureForm variant="hero" origemForm="hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
