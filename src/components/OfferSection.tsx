import { Check, Shield, Lock, Layers } from "lucide-react";

const items = [
  { text: "6 capítulos completos", desc: "do diagnóstico ao reposicionamento, do timing à reabertura de contato" },
  { text: "Plano de ação de 7 dias", desc: "o que fazer exatamente, dia a dia, para mudar a dinâmica" },
  { text: "Exemplos reais de mensagens", desc: "que reabrem contato sem criar pressão ou mostrar desespero" },
  { text: "Design premium", desc: "leitura agradável com cards, destaques e layout visual profissional" },
];

const OfferSection = () => (
  <section id="oferta" className="section-padding relative overflow-hidden" style={{
    background: "linear-gradient(135deg, hsl(330 20% 5%) 0%, hsl(330 30% 8%) 50%, hsl(330 20% 5%) 100%)"
  }}>
    {/* Radial glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{
      background: "radial-gradient(ellipse, hsl(var(--pink) / 0.08) 0%, transparent 70%)"
    }} />

    <div className="section-container relative z-10">
      <div className="offer-card">
        <h2 className="font-serif text-[28px] font-bold text-white mb-2">Reconquista Sem Humilhação</h2>
        <p className="text-sm text-muted-foreground mb-7 leading-[1.6]">Guia de Emergência Emocional — PDF completo com entrega imediata</p>

        <div className="text-left mb-8">
          <p className="text-[11px] tracking-[0.1em] uppercase text-pink-soft mb-3.5">O que você recebe hoje</p>
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 py-2.5" style={{ borderBottom: i < items.length - 1 ? "1px solid hsl(0 0% 100% / 0.04)" : "none" }}>
              <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ background: "hsl(var(--pink) / 0.2)" }}>
                <Check className="w-2.5 h-2.5 text-pink-soft" />
              </div>
              <p className="text-sm leading-[1.5]" style={{ color: "hsl(330 25% 75%)" }}>
                <strong className="text-white">{item.text}</strong> — {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="mb-6">
          <p className="text-sm line-through" style={{ color: "hsl(330 15% 28%)" }}>De R$ 27,00</p>
          <div className="font-serif text-[52px] font-black text-white leading-none mt-1">
            <sup className="text-[22px] align-super text-pink-soft">R$</sup> 1<sup className="text-[28px] align-middle text-pink-soft">,99</sup>
          </div>
          <p className="text-xs text-muted-foreground mt-1.5">pagamento único · sem mensalidade · acesso vitalício</p>
        </div>

        <a href="#oferta" className="cta-button block w-full text-center mb-3.5">
          🔒 Quero meu acesso agora — R$ 1,99
        </a>

        <div className="flex justify-center gap-4 flex-wrap">
          {[
            { icon: Shield, text: "Garantia de 7 dias" },
            { icon: Lock, text: "Pagamento seguro" },
            { icon: Layers, text: "Entrega imediata" },
          ].map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-1.5 text-[11px]" style={{ color: "hsl(330 18% 35%)" }}>
              <Icon className="w-3 h-3" />
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default OfferSection;
