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
    <section className="py-16 md:py-24 bg-gradient-section relative overflow-hidden">
      {/* Background - hidden on mobile */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
              O evento criado para <span className="text-gradient-gold">acelerar</span> quem está cansado de sobreviver mês a mês no mercado fitness.
            </h2>
          </div>

          <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed text-center md:text-left animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p>
              O <span className="text-primary font-semibold">Stars Experience</span> é uma imersão presencial de 2 dias em São Paulo, feita para empreendedores e profissionais que querem crescer com consistência, dominar marketing, vender mais e finalmente assumir o controle do próprio negócio.
            </p>

            <p>
              É uma experiência <span className="text-foreground font-semibold">premium, intensa e transformadora</span>, que combina:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 md:gap-4 bg-card/50 p-4 md:p-6 rounded-xl border border-border transition-smooth"
              >
                <div className="bg-primary/10 p-2.5 md:p-3 rounded-lg flex-shrink-0">
                  <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <p className="text-foreground text-sm md:text-base leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-primary/30 rounded-xl md:rounded-2xl p-6 md:p-8 text-center space-y-3 md:space-y-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold">
              Não é mais um evento.
            </p>
            <p className="text-base md:text-xl text-muted-foreground">
              É a linha que separa quem sobrevive… de <span className="text-primary font-semibold">quem vence</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
