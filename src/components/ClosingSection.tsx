const ClosingSection = () => (
  <section className="section-padding text-center">
    <div className="section-container">
      <h2 className="section-title text-center mb-3">Você já esperou tempo demais.</h2>
      <p className="text-[15px] text-muted-foreground mb-7 leading-[1.8]">
        Por R$ 1,99 — menos do que um café — você tem acesso a tudo o que precisa saber para parar de sabotar suas próprias chances agora.
      </p>
      <div>
        <p className="text-sm text-muted-foreground mb-2">
          Acesso imediato por <strong className="text-gold">R$ 1,99</strong>
        </p>
        <a href="#oferta" className="cta-button inline-flex flex-col items-center">
          Quero meu guia agora
          <small>Garantia de 7 dias · sem risco</small>
        </a>
      </div>
    </div>
  </section>
);

export default ClosingSection;
