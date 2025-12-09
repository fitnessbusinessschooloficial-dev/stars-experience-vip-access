import { Check, Dumbbell, Building2, User, Users2, TrendingUp } from "lucide-react";

export const ForWhoSection = () => {
  const profiles = [
    { icon: Building2, text: "Donos de studios" },
    { icon: Dumbbell, text: "Donos de academias" },
    { icon: User, text: "Personal trainers que querem se tornar empresários" },
    { icon: Users2, text: "Gestores e líderes do mercado fitness" },
    { icon: TrendingUp, text: "Profissionais que querem crescer no físico e no digital" },
  ];

  const benefits = [
    "Vender mais",
    "Crescer de forma previsível",
    "Se posicionar melhor",
    "Dominar marketing",
    "Acelerar resultados com IA",
    "Entrar para uma comunidade de alto nível",
  ];

  return (
    <section className="py-16 md:py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
          <div className="text-center space-y-3 md:space-y-4 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
              Se você sente que está <span className="text-gradient-gold">dando o seu máximo</span>, mas não rompe…
            </h2>
            <p className="text-lg md:text-2xl text-primary font-semibold">
              Este evento é para você.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-center">O Stars Experience é feito para:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {profiles.map((profile, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 md:gap-4 bg-card p-4 md:p-6 rounded-xl border border-border transition-smooth"
                  >
                    <div className="bg-primary/10 p-2.5 md:p-3 rounded-lg flex-shrink-0">
                      <profile.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <p className="text-foreground text-sm md:text-base font-medium">{profile.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-section rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 shadow-card animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg md:text-2xl font-bold mb-6 md:mb-8 text-center">Ideal para quem deseja:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-primary/20 p-1 md:p-1.5 rounded-full flex-shrink-0">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                    </div>
                    <span className="text-foreground text-sm md:text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
