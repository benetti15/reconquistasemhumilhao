import { X, Check } from "lucide-react";

const before = [
  "Ansiedade constante",
  "Recaída emocional",
  "Impulso para mandar mensagem",
  "Vigilância em redes sociais",
  "Humilhação silenciosa",
  "Medo de ser esquecida",
];

const after = [
  "Mais clareza e postura",
  "Mais controle emocional",
  "Mais dignidade",
  "Menos impulso destrutivo",
  "Mais valor percebido",
  "Mais inteligência emocional",
];

const TransformSection = () => (
  <section className="section-padding" style={{ background: "hsl(var(--dark2))" }}>
    <div className="section-container">
      <p className="section-label">Antes vs. Depois</p>
      <h2 className="section-title text-center">
        A mudança começa quando você{" "}
        <em className="text-pink-soft italic">para de se perder por alguém</em>
      </h2>
      <div className="section-divider mb-10" />

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl p-6" style={{
          background: "hsl(0 0% 100% / 0.02)",
          border: "1px solid hsl(0 0% 100% / 0.06)"
        }}>
          <h3 className="font-serif font-bold text-lg text-muted-foreground mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
              <X className="w-4 h-4 text-destructive" />
            </span>
            Antes
          </h3>
          <div className="space-y-3">
            {before.map((b) => (
              <div key={b} className="flex items-center gap-3 text-sm text-muted-foreground">
                <X className="w-4 h-4 text-destructive/60 flex-shrink-0" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl p-6" style={{
          background: "hsl(var(--pink) / 0.06)",
          border: "1px solid hsl(var(--pink) / 0.2)"
        }}>
          <h3 className="font-serif font-bold text-lg text-pink-soft mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "hsl(var(--pink) / 0.2)" }}>
              <Check className="w-4 h-4 text-pink-soft" />
            </span>
            Depois
          </h3>
          <div className="space-y-3">
            {after.map((a) => (
              <div key={a} className="flex items-center gap-3 text-sm text-foreground">
                <Check className="w-4 h-4 text-pink-soft flex-shrink-0" />
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TransformSection;
