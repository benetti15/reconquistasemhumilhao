import mockup from "@/assets/mockup-guide.png";
import { Zap, Clock, BookOpen, Tag } from "lucide-react";

const micros = [
  { icon: Zap, text: "Acesso imediato" },
  { icon: Clock, text: "Leitura rápida" },
  { icon: BookOpen, text: "Conteúdo prático" },
  { icon: Tag, text: "Apenas R$1,99" },
];

const HeroSection = () => (
  <section className="section-padding bg-background pt-10 md:pt-16">
    <div className="section-container">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
            Reconquista{" "}
            <span className="text-primary italic">Sem Humilhação</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
            Descubra como voltar a ser desejada sem correr atrás, implorar ou perder seu valor depois do término
          </p>
          <p className="mt-6 text-base text-foreground/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Você ainda sente saudade. Ainda pensa nele. Mas no fundo já percebeu que correr atrás, mandar mensagem no impulso e aceitar migalha emocional só faz você se diminuir ainda mais.
          </p>
          <div className="highlight-box mt-6 max-w-lg mx-auto lg:mx-0">
            <p className="text-primary font-semibold text-base md:text-lg italic leading-relaxed">
              "Pare de se humilhar por alguém que só vai te enxergar diferente quando perceber o seu valor."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-8 max-w-sm mx-auto lg:mx-0">
            {micros.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="w-4 h-4 text-primary" />
                <span>{text}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
            <a href="#oferta" className="cta-button text-center animate-pulse-soft">
              Quero recuperar meu valor agora
            </a>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Acesso imediato por apenas <strong className="text-primary">R$1,99</strong>
          </p>
        </div>
        {/* Mockup */}
        <div className="flex-shrink-0 w-64 md:w-80 lg:w-96">
          <img
            src={mockup}
            alt="Mini-guia Reconquista Sem Humilhação"
            width={800}
            height={1024}
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
