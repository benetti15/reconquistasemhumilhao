const WhyChasingSection = () => (
  <section className="section-padding" style={{
    background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--dark2)) 100%)"
  }}>
    <div className="section-container">
      <div className="highlight-box text-center">
        <p className="font-serif text-[clamp(18px,3vw,26px)] italic font-normal leading-[1.55] text-white relative z-10 max-w-[640px] mx-auto">
          "Você pode querer ele de volta <em className="text-pink-soft not-italic">e ainda assim se respeitar.</em> Você pode sentir tudo o que está sentindo e ainda assim não agir de qualquer jeito. Reconquistar sem se humilhar não é sobre jogar duro — é sobre saber quem você é, e não abrir mão disso nem pelo amor."
        </p>
      </div>
    </div>
  </section>
);

export default WhyChasingSection;
