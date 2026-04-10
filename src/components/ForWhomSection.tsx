import { Check, X } from "lucide-react";

const isFor = [
  "Ainda ama, mas está cansada de sofrer",
  "Quer voltar sem implorar",
  "Sente que já correu atrás demais",
  "Está prestes a agir no impulso",
  "Quer recuperar dignidade emocional",
  "Deseja ser percebida com mais valor",
  "Precisa de direção prática e rápida",
];

const isNotFor = [
  "Quer fórmula mágica",
  "Quer controlar alguém à força",
  "Quer manipular o outro",
  "Quer insistir em quem só te usa como reserva emocional",
  "Quer continuar se humilhando e chamar isso de amor",
];

const ForWhomSection = () => (
  <section className="section-padding bg-background">
    <div className="section-container">
      <h2 className="text-3xl md:text-4xl font-bold text-center leading-tight">
        Esse mini-guia foi feito{" "}
        <span className="text-primary italic">para a mulher certa</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="rounded-2xl border border-primary/20 p-6 bg-highlight/30">
          <h3 className="font-serif font-bold text-lg text-primary mb-4">✓ É para você se…</h3>
          <div className="space-y-3">
            {isFor.map((t) => (
              <div key={t} className="flex items-start gap-3 text-sm text-foreground">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border p-6 bg-background">
          <h3 className="font-serif font-bold text-lg text-muted-foreground mb-4">✗ Não é para você se…</h3>
          <div className="space-y-3">
            {isNotFor.map((t) => (
              <div key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                <X className="w-4 h-4 text-rose-warm mt-0.5 flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ForWhomSection;
