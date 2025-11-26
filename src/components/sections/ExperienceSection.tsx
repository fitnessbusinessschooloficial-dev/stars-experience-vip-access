import { TrendingDown, TrendingUp, AlertCircle } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[200px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              O momento da virada não acontece por acaso.{" "}
              <span className="text-gradient-gold">Ele é provocado.</span>
            </h2>
          </div>

          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 lg:p-12 shadow-card">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Há um ponto na jornada de todo empreendedor fitness onde o esforço não é mais suficiente.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Você trabalha, estuda, tenta… mas continua preso no mesmo ciclo:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span className="text-foreground">cresce um mês</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingDown className="h-6 w-6 text-destructive flex-shrink-0" />
                  <span className="text-foreground">desce no outro</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                  <span className="text-foreground">depois volta a estagnar</span>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <p className="text-xl font-bold text-primary text-center">
                  O Stars Experience existe para quebrar esse ciclo.
                </p>
              </div>
            </div>

            <div className="bg-gradient-section border border-primary/20 rounded-2xl p-8 lg:p-12 space-y-6 shadow-glow animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg leading-relaxed">
                É uma imersão criada para te colocar em um ambiente onde <span className="text-primary font-semibold">crescimento é norma, não exceção</span>.
              </p>
              
              <p className="text-lg leading-relaxed">
                Onde você <span className="text-foreground font-semibold">aprende, aplica, conecta, cria</span> e sai com o seu próximo passo definido — sem dúvidas, sem confusão, sem travas.
              </p>

              <div className="pt-6 border-t border-border">
                <p className="text-2xl font-bold text-center">
                  Este não é um evento para "se motivar".
                </p>
                <p className="text-xl text-gradient-gold text-center mt-2 font-semibold">
                  É um evento para mudar de fase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
