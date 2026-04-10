import mockup from "@/assets/mockup-guide.png";
import { Zap, FileText, BookOpen, Clock, Target } from "lucide-react";

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
      <div className="max-w-2xl mx-auto rounded-3xl border-2 border-primary/20 bg-background p-8 md:p-12 shadow-xl text-center">
        <img src={mockup} alt="Mini-guia" loading="lazy" width={800} height={1024} className="w-36 mx-auto drop-shadow-lg mb-6" />
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
        <div className="mt-8">
          <p className="text-sm text-muted-foreground">Hoje por apenas</p>
          <p className="text-5xl md:text-6xl font-bold text-primary mt-1">
            R$1<span className="text-3xl">,99</span>
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
