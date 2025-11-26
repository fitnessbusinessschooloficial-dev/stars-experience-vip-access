import { Zap, Target, Brain, Rocket, Network, Trophy } from "lucide-react";

export const EventSection = () => {
  const features = [
    { icon: Target, text: "Marketing e Vendas aplicados ao fitness" },
    { icon: Brain, text: "Mentalidade empreendedora de alta performance" },
    { icon: Zap, text: "Liderança de verdade" },
    { icon: Rocket, text: "Inteligência Artificial aplicada na prática" },
    { icon: Trophy, text: "Criação de produtos e campanhas" },
    { icon: Network, text: "Networking estratégico e seleto" },
  ];

  return (
    <section className="py-24 bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold">
              O evento criado para <span className="text-gradient-gold">acelerar</span> quem está cansado de sobreviver mês a mês no mercado fitness.
            </h2>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p>
              O <span className="text-primary font-semibold">Stars Experience</span> é uma imersão presencial de 2 dias em São Paulo, feita para empreendedores e profissionais que querem crescer com consistência, dominar marketing, vender mais e finalmente assumir o controle do próprio negócio.
            </p>

            <p>
              É uma experiência <span className="text-foreground font-semibold">premium, intensa e transformadora</span>, que combina:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 transition-smooth hover:shadow-glow group"
              >
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-smooth">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-foreground leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-primary/10 border border-primary/30 rounded-2xl p-8 text-center space-y-4 shadow-glow animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-2xl lg:text-3xl font-bold">
              Não é mais um evento.
            </p>
            <p className="text-xl text-muted-foreground">
              É a linha que separa quem sobrevive… de <span className="text-primary font-semibold">quem vence</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
