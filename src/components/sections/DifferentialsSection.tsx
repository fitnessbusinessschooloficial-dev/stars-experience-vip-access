import { Check, Users, Award, Target, Sparkles, Zap, Briefcase, Heart, Star, Trophy } from "lucide-react";

export const DifferentialsSection = () => {
  const differentials = [
    { icon: Users, text: "Apenas 40 participantes" },
    { icon: Award, text: "Palestrantes renomados de dentro e fora do mercado fitness" },
    { icon: Star, text: "Convidados VIPs surpresa" },
    { icon: Target, text: "Alta proximidade e profundidade" },
    { icon: Heart, text: "Dinâmicas de impacto emocional" },
    { icon: Sparkles, text: "Laboratório prático de Inteligência Artificial" },
    { icon: Zap, text: "Hot Seats reais (análise de negócios dos participantes)" },
    { icon: Briefcase, text: "Criação da sua oferta e campanha de vendas" },
    { icon: Users, text: "Networking guiado e poderoso" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-section relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
          <div className="text-center space-y-2 md:space-y-4 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
              Um evento feito para <span className="text-gradient-gold">transformar</span>
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground">não para entreter.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {differentials.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 md:gap-4 bg-card/50 p-4 md:p-6 rounded-xl border border-border transition-smooth"
              >
                <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <p className="text-foreground text-sm md:text-base">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-primary/30 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
              <Trophy className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              <h3 className="text-lg md:text-2xl font-bold">Ritual de transformação</h3>
            </div>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
              Você não apenas participará de um evento — você entrará para a <span className="text-primary font-semibold">comunidade STARS</span>, um grupo de profissionais de elite comprometidos com a excelência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
