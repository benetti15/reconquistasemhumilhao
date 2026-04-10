const tags = [
  "Ainda sente pelo ex",
  "Já correu atrás — e arrependeu",
  "Quer ele de volta, mas com dignidade",
  "Está exausta de ficar esperando uma resposta",
  "Não quer mais se justificar",
  "Sente que perdeu seu valor na relação",
  "Quer parar de sabotar suas próprias chances",
  "Precisa de clareza — não de falsas esperanças",
];

const ForWhomSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <p className="section-label">Para quem é este guia</p>
      <h2 className="section-title">
        Você está no lugar <em className="text-pink-soft italic">certo</em> se...
      </h2>

      <div className="flex flex-wrap gap-2.5 mt-7">
        {tags.map((t) => (
          <span key={t} className="tag-pill">{t}</span>
        ))}
      </div>

      <div className="mt-7 rounded-2xl p-5 text-[13px] text-muted-foreground leading-[1.8]" style={{
        background: "hsl(0 0% 100% / 0.02)",
        border: "1px solid hsl(0 0% 100% / 0.05)"
      }}>
        <p>
          <strong className="text-muted-foreground/70">Este guia não é para você</strong> se você busca técnicas de manipulação, jogos psicológicos ou receitas mágicas para fazer alguém fazer o que você quer. Aqui a abordagem é honesta, emocional e focada em quem <em>você</em> se torna no processo.
        </p>
      </div>
    </div>
  </section>
);

export default ForWhomSection;
