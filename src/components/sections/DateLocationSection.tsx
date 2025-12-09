import { MapPin, Calendar, Clock } from "lucide-react";

export const DateLocationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background - hidden on mobile */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              Marque na sua agenda
            </h2>
            <p className="text-base md:text-xl text-muted-foreground">
              Dois dias que podem transformar o seu negócio
            </p>
          </div>

          <div className="bg-card/80 border border-primary/20 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-card space-y-6 md:space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left">
              <div className="bg-primary/10 p-3 md:p-4 rounded-xl md:rounded-2xl flex-shrink-0">
                <MapPin className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Local</h3>
                <p className="text-lg md:text-xl text-muted-foreground">São Paulo – SP</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
                  (Local completo revelado apenas aos confirmados)
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left">
              <div className="bg-primary/10 p-3 md:p-4 rounded-xl md:rounded-2xl flex-shrink-0">
                <Calendar className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Datas</h3>
                <p className="text-lg md:text-xl text-foreground font-semibold">31 de janeiro e 1 de fevereiro de 2026</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left">
              <div className="bg-primary/10 p-3 md:p-4 rounded-xl md:rounded-2xl flex-shrink-0">
                <Clock className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Horários</h3>
                <div className="space-y-1 md:space-y-2 text-base md:text-lg">
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-semibold">Dia 31:</span> das 8h30 às 20h
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-semibold">Dia 1:</span> das 8h30 às 17h
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-primary/30 rounded-xl p-4 md:p-6 mt-6 md:mt-8">
              <p className="text-center text-sm md:text-lg">
                <span className="text-primary font-semibold">Imersão completa:</span> café da manhã, almoço e coffee breaks inclusos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
