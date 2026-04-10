import ebookImg from "@/assets/ebook-mockup.png";

const chapters = [
  { num: "1", title: "Os erros que fazem você perder valor sem perceber", desc: "Os 5 comportamentos que afastam mais do que qualquer briga — e que você provavelmente está repetindo agora." },
  { num: "2", title: "O que é valor emocional — e como reconstruir o seu", desc: "Entenda o que realmente faz alguém perceber sua presença como algo precioso — e como voltar a ser essa mulher." },
  { num: "3", title: "Reposicionamento: como mudar o que ele sente sem dizer uma palavra", desc: "Os 3 pilares — silêncio com propósito, presença com identidade e limites reais — que recriam desejo à distância." },
  { num: "4", title: "O timing certo — quando e como voltar a agir", desc: "Os sinais de que o momento chegou e exemplos reais de mensagens que abrem espaço sem jogar fora sua dignidade." },
  { num: "5", title: "A mulher que ele sente falta vs. a que ele não quer de volta", desc: "Uma comparação honesta que vai te mostrar em qual papel você está — e como mudar isso antes que seja tarde." },
  { num: "+", title: "Plano de 7 dias para parar recaídas e recuperar o controle", desc: "Do entendimento à prática: o que fazer no Dia 1, Dias 3-4, Dias 5-6 e Dia 7. Concreto, direto, possível." },
];

const InsideSection = () => (
  <section className="section-padding" style={{ background: "hsl(var(--dark2))" }}>
    <div className="section-container">
      <p className="section-label">O que está dentro do mini-guia</p>
      <h2 className="section-title">
        Cada capítulo é uma <em className="text-pink-soft italic">mini-vitória emocional.</em>
      </h2>
      <p className="text-[15px] text-muted-foreground leading-[1.8] mb-3">
        Não é um ebook genérico. É um freio emocional. Um mapa de reposicionamento. Uma virada de postura — para não piorar tudo antes da próxima recaída.
      </p>

      {/* Ebook mockup */}
      <div className="flex justify-center my-8">
        <img src={ebookImg} alt="Mini-guia Reconquista Sem Humilhação" loading="lazy" width={800} height={800} className="w-[160px] md:w-[200px]" style={{ filter: "drop-shadow(0 16px 32px hsl(var(--pink) / 0.25))" }} />
      </div>

      <div className="flex flex-col gap-3">
        {chapters.map((c, i) => (
          <div key={i} className="chapter-item">
            <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-foreground" style={{
              background: "linear-gradient(135deg, hsl(var(--pink)), hsl(var(--pink-deep)))"
            }}>
              {c.num}
            </div>
            <div>
              <p className="text-[15px] font-medium text-foreground mb-1">{c.title}</p>
              <p className="text-[13px] text-muted-foreground leading-[1.6]">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <a href="#oferta" className="cta-button inline-flex flex-col items-center">
          Quero acessar o mini-guia agora
          <small>R$ 1,99 · Leitura rápida · Entrega imediata</small>
        </a>
      </div>
    </div>
  </section>
);

export default InsideSection;
