import { AlertTriangle, Heart, Shield, Calendar, Snowflake, Users, MessageCircle, ClipboardCheck } from "lucide-react";

const items = [
  { icon: AlertTriangle, title: "Os erros invisíveis que afastam ainda mais", desc: "Entenda os comportamentos que parecem amor, mas passam carência e descontrole." },
  { icon: Heart, title: "O que realmente significa reconquistar sem humilhação", desc: "Aprenda a diferença entre postura e orgulho, entre dignidade e frieza." },
  { icon: Shield, title: "Os 4 pilares da reconquista com valor", desc: "Silêncio inteligente, controle emocional, reposicionamento e comunicação de alto valor." },
  { icon: Calendar, title: "O protocolo inicial de 7 dias", desc: "Um caminho prático para interromper recaídas e começar sua virada emocional." },
  { icon: Snowflake, title: "Como agir se ele estiver frio, distante ou confuso", desc: "Sem fantasiar, sem insistir e sem se enganar por migalhas." },
  { icon: Users, title: "O que fazer se ele estiver com outra", desc: "Sem entrar em disputa, sem se diminuir e sem piorar sua dor." },
  { icon: MessageCircle, title: "Como responder se ele reaparecer", desc: "Para não transformar uma abertura em nova humilhação." },
  { icon: ClipboardCheck, title: "Checklist de valorização ou humilhação", desc: "Um diagnóstico rápido para perceber se sua postura está te fortalecendo ou te enfraquecendo." },
];

const InsideSection = () => (
  <section className="section-padding bg-background">
    <div className="section-container">
      <h2 className="text-3xl md:text-4xl font-bold text-center leading-tight">
        Dentro do mini-guia,{" "}
        <span className="text-primary italic">você vai descobrir</span>
      </h2>
      <div className="section-divider" />
      <div className="grid sm:grid-cols-2 gap-5 mt-10">
        {items.map(({ icon: Icon, title, desc }, i) => (
          <div key={i} className="benefit-card group">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-serif font-bold text-foreground">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InsideSection;
