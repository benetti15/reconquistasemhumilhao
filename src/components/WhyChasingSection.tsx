const WhyChasingSection = () => (
  <section className="section-padding" style={{
    background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--dark2)) 100%)"
  }}>
    <div className="section-container">
      <p className="section-label">Por que correr atrás piora tudo</p>
      <h2 className="section-title text-center">
        Quanto mais você se diminui, <em className="text-pink-soft italic">menos espaço sobra para ele perceber o seu valor.</em>
      </h2>
      <div className="section-divider mb-8" />

      <div className="space-y-5 text-[15px] leading-[1.85] max-w-[640px] mx-auto" style={{ color: "hsl(330 25% 75%)" }}>
        <p>
          Cada mensagem enviada por impulso, cada tentativa de "mostrar que ainda está ali", cada vez que você abre mão do seu orgulho para manter um fio de conexão — <strong className="text-foreground">você está ensinando ele a não te valorizar.</strong>
        </p>
        <p>
          Não porque ele seja mau. Mas porque o comportamento de quem corre atrás comunica o oposto do que você quer transmitir: comunica desespero onde deveria haver dignidade. Comunica disponibilidade onde deveria haver escassez. Comunica medo onde deveria haver força.
        </p>
      </div>

      <div className="highlight-box text-center mt-10">
        <p className="font-serif text-[clamp(18px,3vw,24px)] italic font-normal leading-[1.55] text-foreground relative z-10 max-w-[600px] mx-auto">
          "Talvez o erro não seja amar. Talvez seja <em className="text-pink-soft not-italic font-bold">se abandonar</em> para não perder. A mudança que ele precisa notar começa na postura que você precisa recuperar."
        </p>
      </div>

      {/* Mid-page CTA */}
      <div className="text-center mt-10">
        <a href="#oferta" className="cta-button inline-flex flex-col items-center">
          Quero recuperar meu valor
          <small>Acesso imediato por R$ 1,99</small>
        </a>
      </div>
    </div>
  </section>
);

export default WhyChasingSection;
