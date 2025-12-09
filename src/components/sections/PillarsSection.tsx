import { Brain, Crown, TrendingUp, Sparkles, Users, Rocket } from "lucide-react";

export const PillarsSection = () => {
  const pillars = [
    {
      icon: Brain,
      title: "Mindset de Virada",
      description: "A mentalidade que tira você do modo sobrevivência e te coloca no modo crescimento.",
    },
    {
      icon: Crown,
      title: "Liderança e Autoridade",
      description: "Postura, clareza e comportamento para se tornar um empresário de verdade.",
    },
    {
      icon: TrendingUp,
      title: "Marketing & Vendas",
      description: "Estratégias práticas para atrair, converter e escalar com previsibilidade.",
    },
    {
      icon: Sparkles,
      title: "IA Aplicada",
      description: "Ferramentas e processos para multiplicar sua produtividade e vendas.",
    },
    {
      icon: Users,
      title: "Networking Inteligente",
      description: "Conexões reais com pessoas que crescem e decidem.",
    },
    {
      icon: Rocket,
      title: "Execução e Plano de Ação",
      description: "Você sai com campanhas e ofertas prontas para rodar.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background - hidden on mobile */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-10 md:space-y-16">
          <div className="text-center space-y-4 animate-slide-up">
            <div className="inline-block bg-primary/10 px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-primary/30 mb-2 md:mb-4">
              <span className="text-primary font-semibold uppercase tracking-wider text-xs md:text-sm">6 Pilares Fundamentais</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
              Os pilares que vão <span className="text-gradient-gold">transformar</span> seu negócio
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-card/50 border border-border rounded-xl md:rounded-2xl p-5 md:p-8 transition-smooth animate-slide-up text-center sm:text-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto sm:mx-0">
                  <pillar.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3 text-foreground">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
