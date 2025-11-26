import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { Lock, Sparkles, Star } from "lucide-react";

export const CaptureSection = () => {
  return (
    <section className="py-24 bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-2 rounded-full border border-primary/30">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Pré-Lista VIP</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold">
              Garanta <span className="text-gradient-gold">prioridade</span> na abertura das vagas
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Por ser um evento ultra limitado (apenas 40 vagas), a pré-lista recebe <span className="text-primary font-semibold">acesso antecipado</span> e benefícios exclusivos.
            </p>
          </div>

          <div className="bg-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 lg:p-12 shadow-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-center">Cadastro Prioritário</h3>
              </div>
              <p className="text-center text-muted-foreground">
                Preencha seus dados para garantir acesso VIP
              </p>
            </div>

            <LeadCaptureForm variant="section" />

            <div className="mt-8 flex items-start gap-3 bg-primary/5 border border-primary/20 rounded-xl p-6">
              <Sparkles className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-semibold text-primary mb-1">Benefícios da Pré-Lista VIP:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ Acesso antecipado às vagas antes da abertura pública</li>
                  <li>✓ Condições especiais exclusivas</li>
                  <li>✓ Prioridade em caso de lista de espera</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
