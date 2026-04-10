import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Esse material serve se ele estiver distante?", a: "Sim. O mini-guia foi pensado justamente para momentos em que a distância, a frieza ou a confusão fazem você agir no impulso e piorar a situação." },
  { q: "Serve se eu já corri atrás?", a: "Sim. Mesmo que você já tenha cometido erros, ainda é importante reorganizar sua postura e parar de reforçar uma imagem de desespero." },
  { q: "Serve se ele estiver com outra?", a: "Sim. O material também ajuda você a entender como não se diminuir ainda mais diante desse cenário e como agir com mais lucidez." },
  { q: "Isso é curso ou ebook?", a: "É um mini-guia digital, direto e prático, feito para leitura rápida e aplicação imediata." },
  { q: "O acesso é imediato?", a: "Sim. Assim que a compra for confirmada, o acesso ao material é liberado." },
  { q: "Isso garante que ele vai voltar?", a: "Não. O objetivo do mini-guia não é prometer controle sobre o outro, mas ajudar você a parar os comportamentos que diminuem seu valor e a se reposicionar com muito mais inteligência." },
  { q: "Em quanto tempo eu consigo ler?", a: "A leitura é rápida, objetiva e pensada para gerar clareza logo no início." },
  { q: "Esse material é só para quem terminou agora?", a: "Não. Ele também pode ajudar mulheres que já estão afastadas há mais tempo, mas ainda se percebem presas emocionalmente e cometendo os mesmos erros." },
];

const FaqSection = () => (
  <section className="section-padding bg-background">
    <div className="section-container max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center leading-tight mb-10">
        Perguntas <span className="text-primary italic">Frequentes</span>
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-5 bg-card/50">
            <AccordionTrigger className="text-left font-serif font-semibold text-foreground text-base py-4 hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection;
