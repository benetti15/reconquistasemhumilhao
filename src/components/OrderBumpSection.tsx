import { Headphones, ShieldCheck } from "lucide-react";

const OrderBumpSection = () => (
  <section className="section-padding bg-card/50">
    <div className="section-container">
      <div className="max-w-2xl mx-auto rounded-2xl border-2 border-dashed border-primary/30 bg-background p-6 md:p-8 relative overflow-hidden"
        style={{ boxShadow: "0 8px 32px -8px hsl(14 30% 53% / 0.1)" }}>
        {/* Accent tag */}
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-bl-xl">
          Oferta especial
        </div>
        <div className="flex items-center gap-2 mb-4">
          <Headphones className="w-5 h-5 text-primary" />
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Adicione por mais R$4,90</span>
        </div>
        <h3 className="text-2xl font-bold font-serif text-foreground">
          Áudios Anti-Impulso
        </h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Áudios curtos para ouvir quando bater vontade de mandar mensagem, stalkear, correr atrás ou implorar por atenção.
        </p>
        <div className="flex items-start gap-3 mt-4">
          <ShieldCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <p className="text-sm text-foreground">
            Ajuda você a interromper a recaída no exato momento em que a emoção tenta tomar o controle.
          </p>
        </div>
        <button className="mt-6 w-full sm:w-auto px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300">
          Sim, quero me proteger das recaídas
        </button>
      </div>
    </div>
  </section>
);

export default OrderBumpSection;
