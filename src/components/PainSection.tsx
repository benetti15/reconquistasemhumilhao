const pains = [
  "Você relê conversas antigas procurando sinais",
  "Entra no perfil dele em silêncio, esperando algo mudar",
  "Sente vontade de mandar mensagem e depois se arrepende",
  "Imagina ele com outra e seu coração afunda",
  "Tenta parecer forte, mas por dentro está em guerra",
  "Quer voltar, mas não quer mais se rastejar",
  "Sente medo de ser esquecida enquanto finge estar bem",
  "Se culpa por ainda amar alguém que te deixou confusa",
  "Se apega a qualquer sinal mínimo dele",
  "Aceita migalhas emocionais só para não perder contato",
];

const PainSection = () => (
  <section className="section-padding bg-card/50">
    <div className="section-container text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
        Se você chegou até aqui, provavelmente<br className="hidden md:block" />{" "}
        <span className="text-primary italic">está vivendo algo assim</span>
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-10 text-left">
        {pains.map((p, i) => (
          <div key={i} className="pain-card flex items-start gap-3">
            <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            <p className="text-foreground/85 text-sm md:text-base leading-relaxed">{p}</p>
          </div>
        ))}
      </div>
      <div className="highlight-box mt-10 max-w-2xl mx-auto">
        <p className="text-primary font-semibold text-lg italic">
          O problema não é amar. O problema é se abandonar por medo de perder alguém.
        </p>
      </div>
    </div>
  </section>
);

export default PainSection;
