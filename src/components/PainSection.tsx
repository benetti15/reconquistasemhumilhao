const pains = [
  { emoji: "💬", text: 'Você manda mensagem de madrugada perguntando "você está bem?" — mas o que você realmente quer perguntar é "você ainda pensa em mim?"' },
  { emoji: "📱", text: "Você checa o status dele, analisa as fotos curtidas, verifica se ele está online — e cada checagem rouba um pedaço da sua paz." },
  { emoji: "😔", text: 'Você já disse "vou sumir" mais de uma vez. Mas três dias depois estava mandando mensagem de novo. E você sabe disso.' },
  { emoji: "🙈", text: "Por fora você posta foto feliz. Por dentro, está em colapso. Essa incoerência vaza — e ele sente, mesmo sem você perceber." },
];

const PainSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <p className="section-label">Você se reconhece nisso?</p>
      <h2 className="section-title">
        Quando o amor vira <em className="text-pink-soft italic">desespero</em> — e você sente que está perdendo o controle.
      </h2>
      <p className="text-[15px] text-muted-foreground leading-[1.8] mb-2">
        Existe uma cruel ironia no amor: quanto mais você quer alguém, mais você faz exatamente o que afasta essa pessoa.
      </p>

      <div className="grid sm:grid-cols-2 gap-3.5 mt-9">
        {pains.map((p, i) => (
          <div key={i} className="pain-card">
            <div className="text-[22px] mb-2.5">{p.emoji}</div>
            <p className="text-sm leading-[1.7]" style={{ color: "hsl(330 25% 75%)" }}>
              {p.text.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                part.startsWith("**") ? (
                  <strong key={j} className="text-white font-medium">{part.slice(2, -2)}</strong>
                ) : part
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PainSection;
