const tags = [
  "Ainda sente pelo ex — e não tem vergonha disso",
  "Já correu atrás e se arrependeu",
  "Quer ele de volta, mas com dignidade",
  "Está exausta de esperar uma resposta",
  "Sente que perdeu seu valor na relação",
  "Quer parar de sabotar suas próprias chances",
  "Precisa de clareza — não de falsas esperanças",
  "Está cansada de fingir força enquanto desmorona",
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
          <strong className="text-muted-foreground/70">Este guia não é para você</strong> se busca técnicas de manipulação, jogos psicológicos ou receitas mágicas. A abordagem aqui é honesta, emocional e focada em quem <em>você</em> se torna no processo — não em controlar o outro.
        </p>
      </div>

      {/* Honesty block */}
      <div className="mt-6 text-center">
        <p className="text-[14px] text-muted-foreground leading-[1.8] max-w-[560px] mx-auto">
          O guia não garante que ele vai voltar. <strong className="text-foreground">Mas garante que você vai parar de agir de formas que te envergonham</strong> — e vai se tornar a versão de você que qualquer pessoa vai ter que se esforçar para merecer.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-8">
        <a href="https://pay.cakto.com.br/acfjdj2_845016" target="_blank" rel="noopener noreferrer" className="cta-button inline-flex flex-col items-center">
          Quero me reposicionar com dignidade
          <small>R$ 5,90 · Sem risco · Acesso imediato</small>
        </a>
      </div>
    </div>
  </section>
);

export default ForWhomSection;
