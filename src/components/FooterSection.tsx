const FooterSection = () => (
  <footer className="py-10 px-6 text-center" style={{ borderTop: "1px solid hsl(0 0% 100% / 0.05)" }}>
    <p className="text-xs leading-[1.8]" style={{ color: "hsl(330 15% 28%)" }}>
      © 2025 Reconquista Sem Humilhação · Todos os direitos reservados<br />
      <a href="#" className="underline" style={{ color: "hsl(330 18% 38%)" }}>Política de Privacidade</a> ·{" "}
      <a href="#" className="underline" style={{ color: "hsl(330 18% 38%)" }}>Termos de Uso</a> ·{" "}
      <a href="#" className="underline" style={{ color: "hsl(330 18% 38%)" }}>Suporte</a>
    </p>
    <p className="text-xs mt-2.5" style={{ color: "hsl(330 15% 28%)" }}>
      Este produto é um guia informativo de desenvolvimento emocional. Não substitui acompanhamento psicológico profissional.
    </p>
  </footer>
);

export default FooterSection;
