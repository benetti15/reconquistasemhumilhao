import painImg from "@/assets/pain-phone.jpg";

const pains = [
  { emoji: "📱", text: "Você checa o status dele, analisa cada foto curtida, verifica se está online — e cada checagem rouba um pedaço da sua paz. Mas você não consegue parar." },
  { emoji: "💬", text: 'Você escreve uma mensagem enorme, apaga, reescreve, manda algo "casual" — e depois fica olhando a tela esperando a resposta que talvez nunca venha.' },
  { emoji: "😔", text: 'Já disse "vou sumir" mais de uma vez. Mas três dias depois estava mandando mensagem de novo. E se odeia por isso.' },
  { emoji: "🙈", text: "Por fora posta foto feliz. Por dentro, está em colapso. Aceita migalhas só para não perder o último fio de contato." },
  { emoji: "💔", text: "Imagina ele com outra e sente que foi substituída. A dor de ser esquecida enquanto ele parece bem é insuportável." },
  { emoji: "😰", text: "Sente vergonha de ainda estar presa. Sabe que está perdendo valor cada vez que corre atrás — mas o impulso é mais forte que a razão." },
];

const PainSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <p className="section-label">Você se reconhece nisso?</p>
      <h2 className="section-title">
        A dor que ninguém vê — mas que <em className="text-pink-soft italic">controla cada decisão sua.</em>
      </h2>
      <p className="text-[15px] text-muted-foreground leading-[1.8] mb-3">
        Existe uma cruel ironia no amor: quanto mais você quer alguém, mais você faz exatamente o que afasta essa pessoa. E quanto mais você sente que está perdendo, mais age de formas que destroem suas chances.
      </p>

      {/* Image */}
      <div className="rounded-2xl overflow-hidden mb-8 max-w-[500px] mx-auto" style={{ border: "1px solid hsl(var(--pink) / 0.15)" }}>
        <img src={painImg} alt="A hesitação antes de mandar uma mensagem" loading="lazy" width={800} height={512} className="w-full h-auto" />
      </div>

      <div className="grid sm:grid-cols-2 gap-3.5">
        {pains.map((p, i) => (
          <div key={i} className="pain-card">
            <div className="text-[22px] mb-2.5">{p.emoji}</div>
            <p className="text-sm leading-[1.7]" style={{ color: "hsl(330 25% 75%)" }}>
              {p.text}
            </p>
          </div>
        ))}
      </div>

      {/* Emotional quote */}
      <div className="mt-10 text-center">
        <p className="font-serif text-[18px] md:text-[22px] italic leading-[1.6] text-pink-soft max-w-[550px] mx-auto">
          "A sua dor não pode continuar decidindo por você."
        </p>
        <div className="section-divider mt-4" />
      </div>
    </div>
  </section>
);

export default PainSection;
