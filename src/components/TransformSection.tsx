import { X, Check } from "lucide-react";

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
  <section className="section-padding bg-cream">
    <div className="section-container">
      <h2 className="text-3xl md:text-4xl font-bold text-center leading-tight">
        A mudança começa quando você{" "}
        <span className="text-primary italic">para de se perder por alguém</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="rounded-2xl border border-border p-6 bg-background">
          <h3 className="font-serif font-bold text-lg text-muted-foreground mb-4">Antes</h3>
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
          <h3 className="font-serif font-bold text-lg text-primary mb-4">Depois</h3>
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
