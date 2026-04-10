const cards = [
  {
    behavior: "Mandar mensagem toda hora",
    seems: "No calor da dor parece conexão.",
    reality: "Na prática, transmite ansiedade e necessidade.",
  },
  {
    behavior: "Aceitar qualquer migalha",
    seems: "Você acha que está mantendo espaço.",
    reality: "Mas ele sente que não precisa te valorizar para continuar tendo acesso.",
  },
  {
    behavior: "Tentar explicar tudo",
    seems: "Parece maturidade.",
    reality: "Mas quase sempre vira excesso emocional em cima de alguém já distante.",
  },
  {
    behavior: "Postar indiretas",
    seems: "Parece força.",
    reality: "Mas geralmente revela que você ainda está emocionalmente presa à reação dele.",
  },
  {
    behavior: "Cobrar definição",
    seems: "Parece clareza.",
    reality: "Mas quando vem da dor, quase sempre comunica medo e urgência.",
  },
  {
    behavior: "Ficar disponível demais",
    seems: "Parece generosidade e entrega.",
    reality: "Mas remove o peso da sua presença e te torna previsível.",
  },
];

const WhyChasingSection = () => (
  <section className="section-padding bg-background">
    <div className="section-container">
      <h2 className="text-3xl md:text-4xl font-bold text-center leading-tight">
        Por que quanto mais você corre atrás,{" "}
        <span className="text-primary italic">mais ele se afasta?</span>
      </h2>
      <p className="mt-5 text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Saudade não nasce de pressão. Desejo não volta com insistência. Valor não cresce com carência.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {cards.map((c, i) => (
          <div key={i} className="benefit-card">
            <h3 className="font-serif font-bold text-lg text-foreground">{c.behavior}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.seems}</p>
            <p className="mt-1 text-sm text-primary font-medium">{c.reality}</p>
          </div>
        ))}
      </div>
      <div className="highlight-box mt-10 max-w-2xl mx-auto text-center">
        <p className="text-primary font-semibold text-lg italic">
          Quem está com medo de perder age para aliviar a própria dor. Quem quer ser valorizada age com postura.
        </p>
      </div>
    </div>
  </section>
);

export default WhyChasingSection;
