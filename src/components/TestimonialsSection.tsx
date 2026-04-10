import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Camila R.",
    age: 28,
    text: "Eu estava prestes a mandar aquele textão desesperado. Li o mini-guia e consegui me segurar. Pela primeira vez em semanas, dormi em paz.",
    stars: 5,
  },
  {
    name: "Juliana M.",
    age: 34,
    text: "Achei que ia ser mais um conteúdo genérico, mas me vi em cada linha. Chorei, respirei e decidi parar de me humilhar. Melhor R$1,99 que já investi.",
    stars: 5,
  },
  {
    name: "Fernanda S.",
    age: 31,
    text: "Depois de ler, percebi que tudo que eu fazia achando que era amor, na verdade só afastava ele mais. Mudei minha postura e ele voltou a me procurar.",
    stars: 5,
  },
  {
    name: "Beatriz L.",
    age: 26,
    text: "Eu deletei o textão que ia mandar e reli o guia. Pela primeira vez eu escolhi minha dignidade. Obrigada por esse material.",
    stars: 5,
  },
  {
    name: "Amanda P.",
    age: 29,
    text: "O checklist de valorização abriu meus olhos. Eu estava fazendo tudo errado achando que estava lutando pelo amor. Agora tenho clareza.",
    stars: 5,
  },
  {
    name: "Mariana T.",
    age: 33,
    text: "Li em 20 minutos e já mudou completamente minha perspectiva. Simples, direto e exatamente o que eu precisava ouvir naquele momento.",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-cream relative overflow-hidden">
    <div className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          O que elas dizem{" "}
          <span className="text-primary italic">depois de ler</span>
        </h2>
        <div className="section-divider" />
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Mulheres reais que decidiram parar de se humilhar e recuperar o próprio valor.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <Quote className="w-8 h-8 text-primary/20 mb-3" />
            <p className="text-foreground/85 text-sm leading-relaxed italic">
              "{t.text}"
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="font-serif font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.age} anos</p>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
