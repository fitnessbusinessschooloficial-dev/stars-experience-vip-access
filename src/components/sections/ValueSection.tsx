import { Shield, TrendingUp, Users } from "lucide-react";

export const ValueSection = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Alto impacto. <span className="text-gradient-gold">Baixo risco.</span>
            </h2>
          </div>

          <div className="bg-gradient-section border border-border rounded-2xl p-8 lg:p-12 shadow-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Criamos o Stars Experience para ser um evento <span className="text-primary font-semibold">premium, acessível e com entrega real</span>.
            </p>
            
            <p className="text-lg text-muted-foreground">
              A pré-lista tem acesso a condições especiais antes da abertura oficial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-smooth">
              <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Garantia de Valor</h3>
              <p className="text-sm text-muted-foreground">
                Conteúdo aplicável e transformador
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-smooth">
              <TrendingUp className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">ROI Comprovado</h3>
              <p className="text-sm text-muted-foreground">
                Estratégias que geram resultados reais
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-smooth">
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Networking Premium</h3>
              <p className="text-sm text-muted-foreground">
                Conexões que aceleram seu crescimento
              </p>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/30 rounded-xl p-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-xl font-bold text-primary">
              Cadastre-se para receber os benefícios prioritários.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
