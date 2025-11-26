import { MapPin, Calendar, Clock } from "lucide-react";

export const DateLocationSection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Marque na sua agenda
            </h2>
            <p className="text-xl text-muted-foreground">
              Dois dias que podem transformar o seu negócio
            </p>
          </div>

          <div className="bg-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 lg:p-12 shadow-card space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-6">
              <div className="bg-primary/10 p-4 rounded-2xl">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Local</h3>
                <p className="text-xl text-muted-foreground">São Paulo – SP</p>
                <p className="text-sm text-muted-foreground mt-2">
                  (Local completo revelado apenas aos confirmados)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-primary/10 p-4 rounded-2xl">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Datas</h3>
                <p className="text-xl text-foreground font-semibold">31 de janeiro e 1 de fevereiro de 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-primary/10 p-4 rounded-2xl">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Horários</h3>
                <div className="space-y-2 text-lg">
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-semibold">Dia 31:</span> das 8h30 às 20h
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-semibold">Dia 1:</span> das 8h30 às 17h
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-primary/10 border border-primary/30 rounded-xl p-6 mt-8">
              <p className="text-center text-lg">
                <span className="text-primary font-semibold">Imersão completa:</span> café da manhã, almoço e coffee breaks inclusos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
