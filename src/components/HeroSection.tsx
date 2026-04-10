import { Shield, Layers, Lock } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center px-6 py-20 md:py-24">
    {/* Background gradient */}
    <div className="absolute inset-0 z-0" style={{
      background: "radial-gradient(ellipse 80% 60% at 50% -10%, hsl(338 80% 30%) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 90% 80%, hsl(338 80% 18% / 0.27) 0%, transparent 60%), radial-gradient(ellipse 30% 30% at 10% 90%, hsl(338 72% 42% / 0.13) 0%, transparent 60%), hsl(var(--background))"
    }} />

    {/* Floating orbs */}
    <div className="absolute w-[400px] h-[400px] rounded-full top-[-100px] right-[-100px] opacity-[0.08] z-0" style={{ background: "hsl(var(--pink))", filter: "blur(60px)", animation: "float1 8s ease-in-out infinite" }} />
    <div className="absolute w-[300px] h-[300px] rounded-full bottom-0 left-[-80px] opacity-[0.06] z-0" style={{ background: "hsl(340 80% 55%)", filter: "blur(60px)", animation: "float2 10s ease-in-out infinite" }} />
    <div className="absolute w-[200px] h-[200px] rounded-full top-[40%] right-[10%] opacity-[0.04] z-0" style={{ background: "hsl(var(--gold))", filter: "blur(60px)", animation: "float1 12s ease-in-out infinite reverse" }} />

    <div className="relative z-10 text-center max-w-[780px]">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full px-5 py-1.5 text-[11px] font-medium tracking-[0.12em] uppercase text-pink-soft mb-8" style={{
        background: "hsl(var(--pink) / 0.18)",
        border: "1px solid hsl(var(--pink) / 0.35)"
      }}>
        <span className="w-1.5 h-1.5 rounded-full bg-pink-soft" style={{ animation: "pulse-dot 1.5s ease-in-out infinite" }} />
        Guia de Emergência Emocional
      </div>

      <p className="text-[13px] tracking-[0.08em] text-muted-foreground mb-4">
        Para mulheres que amam com intensidade — e querem se respeitar também
      </p>

      <h1 className="font-serif text-[clamp(38px,7vw,72px)] font-black leading-[1.05] text-foreground mb-3">
        Reconquiste
        <em className="block text-pink-soft italic">sem se humilhar.</em>
      </h1>

      {/* Divider */}
      <div className="flex items-center justify-center gap-3 my-5">
        <span className="w-10 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--pink)))" }} />
        <span className="text-sm text-pink-soft">✦</span>
        <span className="w-10 h-px" style={{ background: "linear-gradient(90deg, hsl(var(--pink)), transparent)" }} />
      </div>

      <p className="text-[clamp(15px,2.5vw,18px)] leading-[1.7] max-w-[580px] mx-auto mb-9" style={{ color: "hsl(330 25% 75%)" }}>
        Descubra em poucas horas como <strong className="text-white font-medium">parar de destruir suas chances</strong>, recuperar seu valor e criar o cenário emocional certo para seu ex voltar a te enxergar com outros olhos —{" "}
        <strong className="text-white font-medium">sem implorar, sem correr atrás, sem se abaixar.</strong>
      </p>

      {/* CTA */}
      <div>
        <p className="text-sm text-muted-foreground mb-2 tracking-wide">
          De <s className="text-muted-foreground/50">R$ 27,00</s> por apenas{" "}
          <strong className="text-gold text-base">R$ 1,99</strong>
        </p>
        <a href="#oferta" className="cta-button inline-flex flex-col items-center">
          Quero acesso agora
          <small>Entrega imediata · PDF completo</small>
        </a>
        <div className="flex justify-center gap-5 mt-4 flex-wrap">
          {[
            { icon: Shield, text: "7 dias de garantia" },
            { icon: Layers, text: "Acesso instantâneo" },
            { icon: Lock, text: "Compra 100% segura" },
          ].map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <Icon className="w-3.5 h-3.5 text-pink-soft" />
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-7 left-1/2 opacity-40 z-10" style={{ animation: "bounce-arrow 2s ease-in-out infinite" }}>
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </div>
  </section>
);

export default HeroSection;
