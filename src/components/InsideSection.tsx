const chapters = [
  { num: "1", title: "O que está destruindo suas chances agora", desc: "Os 5 comportamentos que afastam mais do que qualquer briga — e que você provavelmente está cometendo sem perceber." },
  { num: "2", title: "O que é valor — e por que você perdeu o seu", desc: "Entenda o que realmente faz alguém perceber sua presença como algo precioso — e como reconstruir isso agora." },
  { num: "3", title: "Reposicionamento emocional", desc: "Como mudar o que ele sente sem dizer uma palavra. Os 3 pilares: silêncio com propósito, presença com identidade e limites reais." },
  { num: "4", title: "O timing — quando e como voltar a agir", desc: "Os sinais de que o momento chegou — e exemplos reais de mensagens que abrem espaço sem criar pressão." },
  { num: "5", title: "A mulher que ele sente falta vs. a que ele não quer de volta", desc: "Uma comparação honesta e direta que vai te mostrar em qual papel você está agindo — e como mudar isso." },
  { num: "+", title: "Plano de ação de 7 dias", desc: "Do entendimento para a prática: o que fazer no Dia 1, Dias 3-4, Dias 5-6 e Dia 7. Concreto, direto, possível." },
];

const InsideSection = () => (
  <section className="section-padding" style={{ background: "hsl(var(--dark2))" }}>
    <div className="section-container">
      <p className="section-label">O que está dentro do guia</p>
      <h2 className="section-title">
        Tudo o que você precisa saber <em className="text-pink-soft italic">agora,</em> em poucas horas de leitura.
      </h2>

      <div className="flex flex-col gap-3 mt-9">
        {chapters.map((c, i) => (
          <div key={i} className="chapter-item">
            <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{
              background: "linear-gradient(135deg, hsl(var(--pink)), hsl(var(--pink-deep)))"
            }}>
              {c.num}
            </div>
            <div>
              <p className="text-[15px] font-medium text-white mb-1">{c.title}</p>
              <p className="text-[13px] text-muted-foreground leading-[1.6]">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InsideSection;
