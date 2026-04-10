import mockup from "@/assets/mockup-guide-premium.png";
import { Zap, FileText, BookOpen, Clock, Target, ShieldCheck } from "lucide-react";

const bullets = [
  { icon: Zap, text: "Acesso imediato" },
  { icon: FileText, text: "Formato digital" },
  { icon: BookOpen, text: "Leitura prática" },
  { icon: Clock, text: "Conteúdo aplicável" },
  { icon: Target, text: "Ideal para quem precisa de direção agora" },
];

const OfferSection = () => (
  <section id="oferta" className="section-padding bg-cream">
    <div className="section-container">
      <div className="max-w-2xl mx-auto rounded-3xl border-2 border-primary/20 bg-background p-8 md:p-12 text-center relative overflow-hidden"
        style={{ boxShadow: "0 20px 60px -12px hsl(14 30% 53% / 0.15)" }}>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{
          background: "linear-gradient(90deg, hsl(var(--primary) / 0.2), hsl(var(--primary)), hsl(var(--primary) / 0.2))"
        }} />

        <img src={mockup} alt="Mini-guia" loading="lazy" width={800} height={1024} className="w-36 mx-auto drop-shadow-lg mb-6 rounded-lg" />
        <h2 className="text-3xl md:text-4xl font-bold">
          Reconquista <span className="text-primary italic">Sem Humilhação</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Mini-guia digital prático para voltar a ser desejada sem correr atrás, implorar ou perder seu valor.
        </p>
        <div className="flex flex-col items-start gap-3 mt-8 max-w-xs mx-auto">
          {bullets.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-sm text-foreground">
              <Icon className="w-4 h-4 text-primary" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Guarantee badge */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="w-5 h-5 text-primary" />
          <span>Compra 100% segura</span>
        </div>

        <div className="mt-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Hoje por apenas</p>
          <p className="text-6xl md:text-7xl font-bold text-cta mt-2 drop-shadow-sm">
            R$1<span className="text-4xl">,99</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2 max-w-sm mx-auto">
            Um valor simbólico para te ajudar a evitar mais uma recaída, mais uma humilhação e mais um erro movido pela saudade.
          </p>
        </div>
        <a href="#oferta" className="cta-button inline-block mt-8 animate-pulse-soft">
          Sim, eu quero parar de me humilhar
        </a>
        <p className="text-xs text-muted-foreground mt-3">Acesso imediato após a confirmação</p>
      </div>
    </div>
  </section>
);

export default OfferSection;
