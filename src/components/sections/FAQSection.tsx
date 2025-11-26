import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "É um evento para iniciantes ou avançados?",
      answer: "Para ambos. A metodologia é prática e personalizada — cada participante avança a partir do seu nível atual. Trabalhamos com hot seats e conteúdos adaptáveis para garantir relevância para todos.",
    },
    {
      question: "Vou aprender estratégias aplicáveis ao meu negócio?",
      answer: "Sim. O evento é 100% prático, com Hot Seats onde analisamos negócios reais dos participantes e construção de campanhas e ofertas que você poderá implementar imediatamente após o evento.",
    },
    {
      question: "Preciso já ter um negócio estruturado?",
      answer: "Não. Você só precisa querer crescer e ter disposição para agir. Seja você dono de studio, personal trainer ou gestor, o conteúdo foi desenhado para acelerar seu crescimento a partir de onde você está.",
    },
    {
      question: "O que preciso levar?",
      answer: "Vontade de aprender, celular e/ou notebook para as atividades práticas — e abertura para viver uma experiência transformadora. Todo o material e recursos necessários serão fornecidos durante o evento.",
    },
    {
      question: "Quando recebo o link para garantir minha vaga?",
      answer: "Assim que as inscrições forem liberadas oficialmente, a pré-lista VIP recebe primeiro, com acesso prioritário e condições especiais. Você será notificado por e-mail e WhatsApp.",
    },
    {
      question: "Por que apenas 40 vagas?",
      answer: "A limitação de vagas garante alta proximidade, permitindo hot seats individuais, networking profundo e atenção personalizada. É um evento de transformação real, não de massificação.",
    },
    {
      question: "Há certificado?",
      answer: "Sim, todos os participantes recebem certificado de conclusão. Mas o verdadeiro certificado é a transformação no seu negócio e as conexões que você vai fazer.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Perguntas <span className="text-gradient-gold">Frequentes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo o que você precisa saber sobre o Stars Experience
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-6 lg:p-8 shadow-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 bg-card/30 hover:bg-card/50 transition-smooth"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-smooth">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
