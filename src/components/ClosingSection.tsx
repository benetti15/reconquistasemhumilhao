const ClosingSection = () => (
  <section className="section-padding text-center">
    <div className="section-container">
      <h2 className="section-title text-center mb-3">Você já esperou tempo demais.</h2>
      <p className="text-[15px] text-muted-foreground mb-3 leading-[1.8] max-w-[540px] mx-auto">
        Cada dia que passa sem clareza é mais um dia agindo por impulso, se afastando da mulher que ele poderia voltar a desejar. Você não precisa de mais tempo. Precisa de direção.
      </p>
      <p className="font-serif text-[20px] italic text-pink-soft mb-8 max-w-[480px] mx-auto">
        "Você não precisa implorar para ser lembrada. Precisa parar de se abandonar para não perder."
      </p>
      <div>
        <p className="text-sm text-muted-foreground mb-2">
          Acesso imediato por <strong className="text-cta text-lg font-black">R$ 1,99</strong>
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
