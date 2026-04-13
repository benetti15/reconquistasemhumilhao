import { Check, Shield, Lock, Layers } from "lucide-react";
import ebookImg from "@/assets/ebook-mockup.png";

const items = [
  { text: "6 capítulos completos", desc: "do diagnóstico ao reposicionamento, do timing à reabertura de contato" },
  { text: "Plano de ação de 7 dias", desc: "o que fazer exatamente, dia a dia, para parar recaídas e recuperar o controle" },
  { text: "Exemplos reais de mensagens", desc: "que reabrem contato sem jogar fora sua dignidade no primeiro contato" },
  { text: "Checklist de valorização", desc: "para entender onde você está errando e corrigir antes da próxima recaída" },
  { text: "Design premium e leitura rápida", desc: "leia em 20 minutos no celular — direto, prático, sem enrolação" },
];

const OfferSection = () => (
  <section id="oferta" className="section-padding relative overflow-hidden" style={{
    background: "linear-gradient(135deg, hsl(330 20% 5%) 0%, hsl(330 30% 8%) 50%, hsl(330 20% 5%) 100%)"
  }}>
    {/* Radial glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{
      background: "radial-gradient(ellipse, hsl(var(--pink) / 0.1) 0%, transparent 70%)"
    }} />

    <div className="section-container relative z-10">
      {/* Emotional contrast */}
      <div className="text-center mb-10">
        <p className="text-[15px] leading-[1.8] max-w-[520px] mx-auto" style={{ color: "hsl(330 25% 70%)" }}>
          O custo de continuar agindo por impulso é a sua dignidade, a sua paz e as suas chances reais. O custo de ter clareza agora é <strong className="text-cta font-bold">menos do que um café.</strong>
        </p>
      </div>

      <div className="offer-card">
        {/* Mockup */}
        <div className="flex justify-center mb-6">
          <img src={ebookImg} alt="Mini-guia Reconquista Sem Humilhação" loading="lazy" width={800} height={800} className="w-[140px] md:w-[170px]" style={{ filter: "drop-shadow(0 12px 24px hsl(var(--pink) / 0.25))" }} />
        </div>

        <h2 className="font-serif text-[28px] font-bold text-foreground mb-1">Reconquista Sem Humilhação</h2>
        <p className="text-[13px] text-muted-foreground mb-1">Mini-guia de Emergência Emocional</p>
        <p className="text-[12px] text-muted-foreground mb-7 leading-[1.6]">PDF completo · Leitura rápida · Entrega imediata</p>

        <div className="text-left mb-8">
          <p className="text-[11px] tracking-[0.1em] uppercase text-pink-soft mb-3.5">O que você recebe agora</p>
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 py-2.5" style={{ borderBottom: i < items.length - 1 ? "1px solid hsl(0 0% 100% / 0.04)" : "none" }}>
              <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ background: "hsl(var(--pink) / 0.2)" }}>
                <Check className="w-2.5 h-2.5 text-pink-soft" />
              </div>
              <p className="text-sm leading-[1.5]" style={{ color: "hsl(330 25% 75%)" }}>
                <strong className="text-foreground">{item.text}</strong> — {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="mb-6">
          <p className="text-sm line-through" style={{ color: "hsl(330 15% 28%)" }}>De R$ 27,00</p>
          <div className="font-serif text-[60px] md:text-[72px] font-black text-foreground leading-none mt-1">
            <sup className="text-[22px] align-super text-cta">R$</sup> 5<sup className="text-[30px] align-middle text-cta">,90</sup>
          </div>
          <p className="text-xs text-muted-foreground mt-1.5">pagamento único · sem mensalidade · acesso vitalício</p>
          <p className="text-[13px] mt-3 font-medium" style={{ color: "hsl(var(--gold))" }}>
            Menos do que um café. Mais do que um recomeço.
          </p>
        </div>

        <a href="https://pay.cakto.com.br/acfjdj2_845016" target="_blank" rel="noopener noreferrer" className="cta-button block w-full text-center mb-3.5">
          Sim, eu quero sair do impulso
          <small>Garantia de 7 dias · Risco zero</small>
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
