import womanImg from "@/assets/woman-empowerment.jpg";

const ClosingSection = () => (
  <section className="section-padding relative overflow-hidden">
    {/* Background image overlay */}
    <div className="absolute inset-0">
      <img src={womanImg} alt="" className="w-full h-full object-cover opacity-[0.07]" />
    </div>
    <div className="absolute inset-0 bg-card/80" />

    <div className="section-container max-w-2xl text-center relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        Você não precisa implorar{" "}
        <span className="text-primary italic">para ser escolhida</span>
      </h2>
      <div className="section-divider" />
      <div className="mt-8 space-y-4 text-foreground/80 text-base md:text-lg leading-relaxed">
        <p>Ele pode até não ver sua dor agora.<br />Mas ele percebe o que a sua postura comunica.</p>
        <p>Quando sua postura transmite desespero, você se enfraquece.<br />Quando sua postura transmite valor, a dinâmica muda.</p>
        <p>Talvez o que esteja faltando não seja mais esforço.<br />Seja menos humilhação, menos impulso e mais direção.</p>
      </div>
      <div className="highlight-box mt-8">
        <p className="text-primary font-bold text-lg md:text-xl italic">
          Você não precisa implorar para ser amada. Precisa voltar a ser percebida com valor.
        </p>
      </div>
      <a href="#oferta" className="cta-button inline-block mt-8 animate-pulse-soft">
        Quero acessar o mini-guia agora
      </a>
      <p className="text-sm text-muted-foreground mt-3">
        Acesso imediato por apenas <strong className="text-cta font-bold text-base">R$1,99</strong>
      </p>
    </div>
  </section>
);

export default ClosingSection;
