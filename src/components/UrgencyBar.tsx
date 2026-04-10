import { Zap } from "lucide-react";

const UrgencyBar = () => (
  <div className="py-3.5 px-6 text-center" style={{
    background: "linear-gradient(90deg, hsl(var(--pink-deep)), hsl(var(--pink)))"
  }}>
    <p className="text-sm font-medium text-white flex items-center justify-center gap-2">
      <Zap className="w-4 h-4" />
      Oferta por tempo limitado — Acesso imediato por apenas{" "}
      <strong className="text-gold">R$ 1,99</strong>
    </p>
  </div>
);

export default UrgencyBar;
