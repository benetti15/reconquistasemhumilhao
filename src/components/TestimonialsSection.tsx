import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Camila R.", age: 28, text: "Eu estava prestes a mandar aquele textão desesperado. Li o mini-guia e consegui me segurar. Pela primeira vez em semanas, dormi em paz. Aquela mensagem teria acabado com tudo." },
  { name: "Juliana M.", age: 34, text: "Achei que ia ser mais um conteúdo genérico, mas me vi em cada linha. Chorei, respirei e decidi parar de me humilhar. Melhor R$5,90 que já investi na minha vida." },
  { name: "Fernanda S.", age: 31, text: "Depois de ler, percebi que tudo que eu fazia achando que era amor só afastava ele mais. Mudei minha postura. Duas semanas depois, ele voltou a me procurar." },
  { name: "Beatriz L.", age: 26, text: "Eu deletei o textão que ia mandar e reli o guia. Pela primeira vez eu escolhi minha dignidade. Esse material salvou meu autorrespeito." },
  { name: "Amanda P.", age: 29, text: "O checklist de valorização abriu meus olhos. Eu estava fazendo tudo errado achando que estava lutando pelo amor. Agora tenho clareza e direção." },
  { name: "Mariana T.", age: 33, text: "Li em 20 minutos e já mudou completamente minha perspectiva. Simples, direto e exatamente o que eu precisava ouvir naquele momento de desespero." },
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <p className="section-label">Depoimentos reais</p>
      <h2 className="section-title">
        Mulheres que pararam de correr atrás — <em className="text-pink-soft italic">e se recuperaram.</em>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-9">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <Quote className="w-7 h-7 text-pink-soft/20 mb-3" />
            <p className="text-sm leading-relaxed italic" style={{ color: "hsl(330 25% 75%)" }}>
              "{t.text}"
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="font-serif font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.age} anos</p>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-gold text-gold" />
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
