import { Check, Users, Award, Target, Sparkles, Zap, Briefcase, Heart, Star } from "lucide-react";

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
    <section className="py-24 bg-gradient-section relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Um evento feito para <span className="text-gradient-gold">transformar</span>
            </h2>
            <p className="text-2xl text-muted-foreground">— não para entreter.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {differentials.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 transition-smooth group"
              >
                <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0 group-hover:bg-primary/20 transition-smooth">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-primary/10 border border-primary/30 rounded-2xl p-8 lg:p-12 text-center shadow-glow animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Trophy className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">Ritual de transformação</h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Você não apenas participará de um evento — você entrará para a <span className="text-primary font-semibold">comunidade STARS</span>, um grupo de profissionais de elite comprometidos com a excelência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Trophy = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);
