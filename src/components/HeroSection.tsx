import { Shield, Layers, Lock } from "lucide-react";
import heroImg from "@/assets/hero-woman.jpg";
import ebookImg from "@/assets/ebook-mockup.png";

const HeroSection = () => (
  <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center px-6 py-20 md:py-24">
    {/* Background gradient */}
    <div className="absolute inset-0 z-0" style={{
      background: "radial-gradient(ellipse 80% 60% at 50% -10%, hsl(338 80% 30%) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 90% 80%, hsl(338 80% 18% / 0.27) 0%, transparent 60%), radial-gradient(ellipse 30% 30% at 10% 90%, hsl(338 72% 42% / 0.13) 0%, transparent 60%), hsl(var(--background))"
    }} />

    {/* Hero image overlay */}
    <div className="absolute inset-0 z-0 opacity-[0.12]">
      <img src={heroImg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, transparent 30%, transparent 70%, hsl(var(--background)) 100%)" }} />
    </div>

    {/* Floating orbs */}
    <div className="absolute w-[400px] h-[400px] rounded-full top-[-100px] right-[-100px] opacity-[0.08] z-0" style={{ background: "hsl(var(--pink))", filter: "blur(60px)", animation: "float1 8s ease-in-out infinite" }} />
    <div className="absolute w-[300px] h-[300px] rounded-full bottom-0 left-[-80px] opacity-[0.06] z-0" style={{ background: "hsl(340 80% 55%)", filter: "blur(60px)", animation: "float2 10s ease-in-out infinite" }} />

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
        Para mulheres que ainda amam — mas estão cansadas de se humilhar
      </p>

      <h1 className="font-serif text-[clamp(36px,7vw,68px)] font-black leading-[1.05] text-foreground mb-3">
        Pare de correr atrás.
        <em className="block text-pink-soft italic">Volte a ser desejada.</em>
      </h1>

      {/* Divider */}
      <div className="flex items-center justify-center gap-3 my-5">
        <span className="w-10 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--pink)))" }} />
        <span className="text-sm text-pink-soft">✦</span>
        <span className="w-10 h-px" style={{ background: "linear-gradient(90deg, hsl(var(--pink)), transparent)" }} />
      </div>

      <p className="text-[clamp(15px,2.5vw,18px)] leading-[1.7] max-w-[600px] mx-auto mb-4" style={{ color: "hsl(330 25% 75%)" }}>
        Descubra em poucas horas como <strong className="text-foreground font-medium">parar de destruir suas chances</strong>, sair do desespero e criar as condições emocionais certas para ele voltar a te enxergar com outros olhos —{" "}
        <strong className="text-foreground font-medium">sem implorar, sem perseguir, sem perder sua dignidade.</strong>
      </p>

      <p className="text-[14px] italic max-w-[500px] mx-auto mb-8" style={{ color: "hsl(var(--pink-soft))" }}>
        "Saudade não exige humilhação. Amar alguém não deveria custar o seu valor."
      </p>

      {/* Ebook mockup */}
      <div className="flex justify-center mb-8">
        <img src={ebookImg} alt="Mini-guia Reconquista Sem Humilhação" className="w-[180px] md:w-[220px] drop-shadow-2xl" style={{ filter: "drop-shadow(0 20px 40px hsl(var(--pink) / 0.3))" }} />
      </div>

      {/* CTA */}
      <div>
        <p className="text-sm text-muted-foreground mb-2 tracking-wide">
          De <s className="text-muted-foreground/50">R$ 27,00</s> por apenas{" "}
          <strong className="text-cta text-lg font-black">R$ 5,90</strong>
        </p>
        <a href="https://pay.cakto.com.br/acfjdj2_845016" target="_blank" rel="noopener noreferrer" className="cta-button inline-flex flex-col items-center">
          Quero parar de me humilhar agora
          <small>Acesso imediato · PDF completo · Garantia de 7 dias</small>
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
