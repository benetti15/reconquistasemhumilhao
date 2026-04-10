import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Como vou receber o guia?", a: "Imediatamente após o pagamento, você recebe o link de acesso por e-mail. O guia está em formato PDF — você pode ler no celular, tablet ou computador, quando e onde quiser." },
  { q: "Funciona mesmo que eu já tenha corrido atrás antes?", a: 'Sim. O guia foi criado exatamente para quem já cometeu alguns dos erros clássicos — e quer entender como reconstruir o valor percebido mesmo depois disso.' },
  { q: "E se eu não quiser meu dinheiro de volta?", a: "Se dentro de 7 dias você sentir que o guia não valeu, basta pedir o reembolso e devolvemos 100% do valor — sem perguntas, sem burocracia. O risco é zero." },
  { q: "Isso é sobre manipulação ou joguinhos?", a: "Não. A abordagem é honesta e focada em você — em quem você se torna nesse processo, não em técnicas para forçar o outro a fazer algo." },
  { q: "E se ele não voltar depois que eu ler?", a: 'O guia tem um capítulo inteiro sobre isso — porque isso precisa ser dito com honestidade. O processo tem valor independente do resultado: você para de agir de formas que te envergonham e se torna a versão de você que qualquer homem vai ter que se esforçar para merecer.' },
];

const FaqSection = () => (
  <section className="section-padding" style={{ background: "hsl(var(--dark2))" }}>
    <div className="section-container max-w-[800px]">
      <p className="section-label">Dúvidas frequentes</p>
      <h2 className="section-title">Antes de decidir.</h2>
      <Accordion type="single" collapsible className="space-y-2.5 mt-9">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl overflow-hidden px-5" style={{
            background: "hsl(0 0% 100% / 0.025)",
            border: "1px solid hsl(0 0% 100% / 0.06)"
          }}>
            <AccordionTrigger className="text-left font-sans font-medium text-white text-[15px] py-4 hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-[1.8] pb-4">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection;
