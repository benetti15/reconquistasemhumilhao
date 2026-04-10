import { X, Check } from "lucide-react";
import transformImg from "@/assets/transform-woman.jpg";

const before = [
  "Ansiosa e disponível demais",
  "Impulsiva — age antes de pensar",
  "Rastreando sinais obsessivamente",
  "Se diminuindo por migalhas de atenção",
  "Emocionalmente refém da situação",
  "Em posição de desvantagem constante",
  "Fingindo força por fora, destruída por dentro",
];

const after = [
  "Centrada e emocionalmente mais forte",
  "Lúcida — age com estratégia",
  "Focada em si mesma e na própria vida",
  "Reconhecendo e protegendo seu valor",
  "No controle das próprias decisões",
  "Em posição de respeito e dignidade",
  "Genuinamente mais segura e atraente",
];

const TransformSection = () => (
  <section className="section-padding" style={{ background: "hsl(var(--dark2))" }}>
    <div className="section-container">
      <p className="section-label">A transformação</p>
      <h2 className="section-title text-center">
        A maior virada não começa com ele voltando.{" "}
        <em className="text-pink-soft italic">Começa quando você para de se abandonar.</em>
      </h2>
      <div className="section-divider mb-10" />

      {/* Image */}
      <div className="rounded-2xl overflow-hidden mb-10 max-w-[450px] mx-auto" style={{ border: "1px solid hsl(var(--pink) / 0.15)" }}>
        <img src={transformImg} alt="Mulher confiante e centrada" loading="lazy" width={800} height={512} className="w-full h-auto" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl p-6" style={{
          background: "hsl(0 0% 100% / 0.02)",
          border: "1px solid hsl(0 0% 100% / 0.06)"
        }}>
          <h3 className="font-serif font-bold text-lg text-muted-foreground mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
              <X className="w-4 h-4 text-destructive" />
            </span>
            Antes do guia
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
            Depois do guia
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

      {/* Quote */}
      <div className="text-center mt-10">
        <p className="font-serif text-[17px] italic text-pink-soft max-w-[500px] mx-auto">
          "Nem toda reconquista começa com uma mensagem. Muitas começam com silêncio, lucidez e dignidade."
        </p>
      </div>
    </div>
  </section>
);

export default TransformSection;
