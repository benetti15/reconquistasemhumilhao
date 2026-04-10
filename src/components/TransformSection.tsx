import { X, Check } from "lucide-react";
import womanImg from "@/assets/woman-empowerment.jpg";

const before = [
  "Ansiedade constante",
  "Recaída emocional",
  "Impulso para mandar mensagem",
  "Vigilância em redes sociais",
  "Humilhação silenciosa",
  "Medo de ser esquecida",
  "Dependência emocional disfarçada de amor",
];

const after = [
  "Mais clareza",
  "Mais postura",
  "Mais controle",
  "Mais dignidade",
  "Menos impulso",
  "Mais valor percebido",
  "Mais inteligência emocional prática",
];

const TransformSection = () => (
  <section className="section-padding bg-cream relative overflow-hidden">
    <div className="section-container relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center leading-tight">
        A mudança começa quando você{" "}
        <span className="text-primary italic">para de se perder por alguém</span>
      </h2>
      <div className="section-divider" />

      {/* Image banner */}
      <div className="mt-10 rounded-2xl overflow-hidden max-w-2xl mx-auto">
        <img src={womanImg} alt="Mulher confiante ao pôr do sol" loading="lazy" width={1024} height={680} className="w-full h-48 md:h-64 object-cover object-top" />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="rounded-2xl border border-border p-6 bg-background">
          <h3 className="font-serif font-bold text-lg text-muted-foreground mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-rose-warm/20 flex items-center justify-center">
              <X className="w-4 h-4 text-rose-warm" />
            </span>
            Antes
          </h3>
          <div className="space-y-3">
            {before.map((b) => (
              <div key={b} className="flex items-center gap-3 text-sm text-muted-foreground">
                <X className="w-4 h-4 text-rose-warm flex-shrink-0" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-primary/20 p-6 bg-highlight/50">
          <h3 className="font-serif font-bold text-lg text-primary mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Check className="w-4 h-4 text-primary" />
            </span>
            Depois
          </h3>
          <div className="space-y-3">
            {after.map((a) => (
              <div key={a} className="flex items-center gap-3 text-sm text-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="highlight-box mt-10 max-w-2xl mx-auto text-center">
        <p className="text-primary font-semibold text-lg italic">
          Reconquistar com valor não começa no contato com ele. Começa no jeito como você para de se abandonar.
        </p>
      </div>
    </div>
  </section>
);

export default TransformSection;
