const comparisons = [
  "Mais uma madrugada chorando com o celular na mão custa mais",
  "Mais uma mensagem enviada no impulso custa mais",
  "Mais uma humilhação silenciosa custa mais",
  "Mais uma recaída emocional custa mais",
  "Mais uma migalha aceita custa mais",
  "Mais um dia se abandonando custa mais",
];

const ValueVsPriceSection = () => (
  <section className="section-padding bg-background">
    <div className="section-container text-center">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        Quanto custa{" "}
        <span className="text-primary italic">continuar errando?</span>
      </h2>
      <div className="mt-10 max-w-lg mx-auto space-y-4">
        {comparisons.map((c, i) => (
          <div key={i} className="pain-card text-left">
            <p className="text-foreground/85 text-sm md:text-base">{c}</p>
          </div>
        ))}
      </div>
      <div className="highlight-box mt-10 max-w-xl mx-auto">
        <p className="text-primary font-semibold text-base md:text-lg italic leading-relaxed">
          Por R$1,99, você não está comprando só um mini-guia. Está comprando clareza antes da próxima besteira emocional.
        </p>
      </div>
      <a href="#oferta" className="cta-button inline-block mt-8">
        Quero essa clareza agora
      </a>
    </div>
  </section>
);

export default ValueVsPriceSection;
