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
      title: "Marketing & Vendas que dominam o jogo",
      description: "Estratégias práticas para atrair, converter e escalar com previsibilidade.",
    },
    {
      icon: Sparkles,
      title: "Inteligência Artificial Aplicada",
      description: "Ferramentas e processos para multiplicar sua produtividade, resultados e vendas.",
    },
    {
      icon: Users,
      title: "Networking Inteligente",
      description: "Conexões reais com pessoas que crescem e decidem.",
    },
    {
      icon: Rocket,
      title: "Execução, Hot Seats e Plano de Ação",
      description: "Você sai com campanhas, produtos e ofertas prontas para rodar.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-slide-up">
            <div className="inline-block bg-primary/10 px-6 py-2 rounded-full border border-primary/30 mb-4">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">6 Pilares Fundamentais</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Os pilares que vão <span className="text-gradient-gold">transformar</span> seu negócio
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-smooth hover:shadow-glow group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                  <pillar.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
