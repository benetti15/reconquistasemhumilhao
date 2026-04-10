import mockup from "@/assets/mockup-guide.png";
import { Check } from "lucide-react";

const benefits = [
  "Pare de agir no desespero",
  "Entenda o que está afastando ainda mais",
  "Recupere postura emocional",
  "Volte a se enxergar com mais valor",
  "Saiba como se posicionar com inteligência",
  "Tenha clareza antes da próxima recaída",
];

const SolutionSection = () => (
  <section className="section-padding bg-cream">
    <div className="section-container">
      <h2 className="text-3xl md:text-4xl font-bold text-center leading-tight">
        É exatamente para isso que existe o mini-guia{" "}
        <span className="text-primary italic">Reconquista Sem Humilhação</span>
      </h2>
      <p className="mt-5 text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Esse mini-guia foi criado para ajudar você a parar de agir por impulso, recuperar seu valor emocional e se reposicionar com mais inteligência — sem joguinho infantil, sem implorar e sem se destruir no processo.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
        <div className="w-48 md:w-56 flex-shrink-0">
          <img src={mockup} alt="Mini-guia Reconquista Sem Humilhação" loading="lazy" width={800} height={1024} className="w-full drop-shadow-xl" />
        </div>
        <div className="flex-1 space-y-4">
          {benefits.map((b) => (
            <div key={b} className="flex items-start gap-3">
              <div className="mt-0.5 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <p className="text-foreground text-base">{b}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 text-center">
        <a href="#oferta" className="cta-button inline-block">
          Quero parar de me humilhar
        </a>
      </div>
    </div>
  </section>
);

export default SolutionSection;
