import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";

function LGPDBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary/5 border-t border-primary/30 py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Este site utiliza cookies e tecnologias similares para melhorar sua experiência. Ao continuar navegando, você concorda com nossa <a href="#" className="text-primary hover:underline">Política de Privacidade</a> e <a href="#" className="text-primary hover:underline">Política de Cookies</a> conforme a LGPD.
          </p>
          <Button className="button-primary whitespace-nowrap" onClick={() => setIsVisible(false)}>
            Aceitar Tudo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar seções visíveis
      const sections = document.querySelectorAll("[data-section]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const id = section.getAttribute("data-section");
        if (id && rect.top < window.innerHeight * 0.75) {
          setVisibleSections((prev) => ({ ...prev, [id]: true }));
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
            transition: "all 0.3s ease-out",
          }}
        />
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2 animate-slideDown">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center hover-glow">
              <span className="text-primary-foreground font-bold text-sm">PR</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">Protocolo Resgate</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {["O Problema", "A Solução", "O Plano", "Diferencial"].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>
          <Button className="button-primary text-sm hover-lift">Começar Agora</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Animated Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663416505971/3indN6AbNmV863dJhpFVoQ/hero-abstract-geometric-ZMXv6WVc5fZ3BTNkvCCnWz.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
            animation: "parallaxMove 20s ease-in-out infinite",
          }}
        />

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 z-0 opacity-30 gradient-animated" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 animate-fadeInUp hover-lift">
              <span className="text-primary font-semibold text-sm flex items-center gap-2">
                <Zap className="w-4 h-4" />
                MENTORIA ESPECIALIZADA
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeInUp block" style={{ animationDelay: "0.1s" }}>
              <span className="text-yellow-400">PROTOCOLO RESGATE:</span> <span className="accent-text gradient-text">Operação Aposentadoria</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              Se você não começou aos 20, você precisa de uma estratégia de aceleração. O Protocolo Resgate foi criado para resgatar o potencial do seu capital que está parado, transformando o pouco tempo que resta em uma vantagem tática através do mercado de ações, com segurança e inteligência comportamental.
            </p>

            <p className="text-lg md:text-xl italic text-accent mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: "0.25s" }}>
              "Mudar sua realidade não tem nada a ver com fórmula mágica, mas com estratégia e disciplina."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
              <Button className="button-primary group hover-lift shine-effect">
                Quero Garantir Minha Aposentadoria Agora
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats with Animation */}
            <div className="mt-16 grid grid-cols-3 gap-8 text-center">
              {[
                { value: "15+", label: "Anos de Experiência" },
                { value: "200+", label: "Horas de Mentoria" },
                { value: "95%", label: "Taxa de Satisfação" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="animate-fadeInUp hover-lift"
                  style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                >
                  <div className="text-3xl font-bold text-primary mb-2 animate-pulseGlow">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider with Animation */}
      <div className="relative h-px bg-border">
        <div className="absolute left-0 top-1/2 h-px w-20 bg-accent transform -translate-y-1/2 animate-slideInLeft" />
      </div>

      {/* Seção Introdutória - A Realidade da Aposentadoria */}
      <section id="a-realidade" data-section="realidade" className="py-20 md:py-32 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg%22%3E%3Cg fill=\"none\" fill-rule=\"evenodd%22%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1%22%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Main Title */}
            <div className={`mb-16 transition-all duration-700 ${visibleSections["realidade"] ? "animate-fadeInUp" : "opacity-0"}`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                O Tempo Não Perdoa,
                <br />
                <span className="accent-text">mas a Estratégia Pode Te Salvar.</span>
              </h2>
            </div>

            {/* Subsection 1 */}
            <div className={`mb-16 transition-all duration-700 ${visibleSections["realidade"] ? "animate-fadeInUp" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
              <h3 className="text-2xl font-bold mb-6 text-primary">A Juventude e o "Milagre" que Ficou para Trás</h3>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                Houve um tempo em que o caminho para uma aposentadoria tranquila parecia simples. Na juventude, o tempo era o seu maior ativo. Poucos reais poupados mensalmente, sob o efeito dos juros compostos, teriam o poder de se transformar em uma fortuna ao longo de décadas.
              </p>
              <p className="text-lg leading-relaxed">
                Esse é o <span className="font-semibold text-primary">"milagre"</span> que muitos deixaram passar enquanto priorizavam as urgências do dia a dia.
              </p>
            </div>

            {/* Subsection 2 */}
            <div className={`mb-16 transition-all duration-700 ${visibleSections["realidade"] ? "animate-fadeInUp" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-6 text-primary">A Realidade dos 50: Onde a Matemática Tradicional Falha</h3>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                O problema é que a maioria dos brasileiros só acorda para a seriedade da aposentadoria por volta dos 50 anos. E, nesse estágio, a conta não fecha mais pelos métodos convencionais.
              </p>
              <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6 mb-4 hover-lift transition-all">
                <p className="text-lg leading-relaxed">
                  Na Renda Fixa tradicional, para compensar o tempo perdido e chegar ao mesmo resultado, você precisaria de <span className="font-bold text-primary">aportes mensais astronômicos</span> — valores que, sejamos honestos, não cabem na realidade de quem tem contas a pagar e uma família para sustentar.
                </p>
              </div>
              <p className="text-lg leading-relaxed font-semibold text-destructive">
                Pelas "vias normais", você teria que trabalhar o triplo para receber o mínimo.
              </p>
            </div>

            {/* Subsection 3 */}
            <div className={`mb-16 transition-all duration-700 ${visibleSections["realidade"] ? "animate-fadeInUp" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
              <h3 className="text-2xl font-bold mb-6 text-primary">O Mito do INSS: Um Barco que Parece Estar Afundando</h3>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Se a sua esperança é o sistema público, o cenário é ainda mais alarmante. O INSS tornou-se um jogo onde as regras mudam sempre que você está prestes a ganhar:
              </p>

              <div className="space-y-4 mb-6">
                {[
                  { icon: "⚠️", title: "O Teto é uma Ilusão", desc: "Receber o valor máximo é uma raridade burocrática." },
                  { icon: "📉", title: "Desvalorização Constante", desc: "Políticas de desindexação e a inflação corroem o seu poder de compra ano após ano." },
                  { icon: "💔", title: "O Rombo Estrutural", desc: "Com cada vez menos jovens contribuindo e mais pessoas se aposentando, a conta simplesmente não fecha. Insegurança política e adiamentos constantes da idade mínima são apenas os sintomas de um sistema difícil de prever no futuro." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 hover-lift transition-all">
                    <span className="text-3xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 hover-lift transition-all">
                <p className="text-lg font-semibold text-destructive">
                  Depender apenas do governo ou da caderneta de poupança aos 50 anos não é conservadorismo. É um risco altíssimo.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className={`bg-accent/10 border border-accent/30 rounded-lg p-8 md:p-12 text-center transition-all duration-700 hover-lift animate-borderGlow ${visibleSections["realidade"] ? "animate-fadeInUp" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
              <div className="mb-4">
                <div className="text-2xl md:text-4xl font-bold mb-2">
                  <span className="accent-text">PROTOCOLO RESGATE:</span>
                </div>
                <div className="text-2xl md:text-3xl font-bold leading-tight">
                  <span className="text-primary">Operação Aposentadoria</span>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-8">
                Se você não começou aos 20, você precisa de uma <span className="font-bold text-primary">estratégia de aceleração</span>. O Protocolo Resgate foi criado para resgatar o potencial do seu capital que está parado, transformando o pouco tempo que resta em uma vantagem tática através do mercado de ações, com segurança e inteligência comportamental.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-center text-accent italic font-semibold">
                "Mudar sua realidade não tem nada a ver com fórmula mágica, mas com estratégia e disciplina."
              </p>
              <Button className="button-primary group hover-lift shine-effect">
                Quero Garantir Minha Aposentadoria Agora
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-px bg-border">
        <div className="absolute left-0 top-1/2 h-px w-20 bg-accent transform -translate-y-1/2" />
      </div>

      {/* O Problema Section */}
      <section id="o-problema" data-section="problema" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold mb-8 transition-all duration-700 ${visibleSections["problema"] ? "animate-fadeInUp" : "opacity-0"}`}>
              O Problema
            </h2>

            <div className="space-y-6 text-lg leading-relaxed">
              {[
                "O relógio é implacável e o mercado tradicional pode não ser mais uma opção para você. Se você passou dos 50 anos e seu capital está \"preso\" na Renda Fixa ou na Poupança, você não está apenas sendo conservador.",
                "Você está deixando o seu futuro para trás.",
                "E se você ainda nem começou... boa sorte! Pelas vias normais da Renda Fixa, os números dificilmente fecharão a tempo. Mas existe uma saída estratégica.",
              ].map((text, i) => (
                <p
                  key={i}
                  className={`transition-all duration-700 ${text.includes("futuro") ? "text-xl font-semibold text-primary" : ""} ${visibleSections["problema"] ? "animate-fadeInUp" : "opacity-0"}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-px bg-border">
        <div className="absolute left-0 top-1/2 h-px w-20 bg-accent transform -translate-y-1/2" />
      </div>

      {/* A Missão Section */}
      <section id="a-solucao" data-section="solucao" className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold mb-8 transition-all duration-700 ${visibleSections["solucao"] ? "animate-fadeInUp" : "opacity-0"}`}>
              A Missão: <span className="accent-text">Resgatar Seu Tempo Perdido</span>
            </h2>

            <p className={`text-lg leading-relaxed mb-8 transition-all duration-700 ${visibleSections["solucao"] ? "animate-fadeInUp" : "opacity-0"}`}>
              Auxiliar você, de forma prática, a usar todo o sobe e desce da bolsa a seu favor. Minha missão é te mostrar como mudar o jogo através de uma visão tática das oportunidades que o mercado oferece, focando no crescimento exponencial do seu capital para a aposentadoria, com risco totalmente controlado.
            </p>

            <div className={`bg-primary/5 border border-primary/20 rounded-lg p-8 transition-all duration-700 hover-lift animate-borderGlow ${visibleSections["solucao"] ? "animate-fadeInUp" : "opacity-0"}`}>
              <p className="text-lg font-semibold text-primary">
                Aqui, a gestão do risco é levada muito a sério — ela é blindada pela estratégia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-px bg-border">
        <div className="absolute left-0 top-1/2 h-px w-20 bg-accent transform -translate-y-1/2" />
      </div>

      {/* Dignidade Financeira Section */}
      <section id="dignidade" data-section="dignidade" className="py-32 md:py-48 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-24">
            {/* Opening Statement - Full Width */}
            <div className={`transition-all duration-700 ${visibleSections["dignidade"] ? "animate-fadeInUp" : "opacity-0"}`}>
              <p className="text-3xl md:text-5xl font-bold text-center mb-8 leading-tight">
                <span className="text-accent">O tempo não é mais seu inimigo</span>
                <br />
                quando você tem um plano.
              </p>
              <p className="text-xl leading-relaxed text-center text-muted-foreground max-w-3xl mx-auto">
                Você não precisa de uma "tacada de sorte" ou de retornos milagrosos. Você precisa de um método que resgate sua tranquilidade e proteja o que você ainda vai construir.
              </p>
            </div>

            {/* The Problem - Left Aligned Box */}
            <div className={`transition-all duration-700 ${visibleSections["dignidade"] ? "animate-fadeInUp" : "opacity-0"}`}
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-destructive/15 border-l-4 border-destructive pl-8 pr-8 py-8 rounded-r-lg hover-lift">
                <p className="text-lg leading-relaxed">
                  Muitas pessoas chegam aos 50 anos com uma sensação amarga: a de que <span className="font-bold text-destructive">"perderam o bonde" dos investimentos</span>. Olham para trás e veem oportunidades perdidas; olham para a frente e sentem o peso da incerteza.
                </p>
              </div>
            </div>

            {/* The Reframe - Right Aligned Box */}
            <div className={`transition-all duration-700 ${visibleSections["dignidade"] ? "animate-fadeInUp" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-primary/15 border-r-4 border-primary pl-8 pr-8 py-8 rounded-l-lg hover-lift ml-auto max-w-3xl">
                <p className="text-lg leading-relaxed mb-6">
                  Se você sente que sua aposentadoria é um ponto de interrogação, entenda uma coisa:
                </p>
                <p className="text-lg leading-relaxed">
                  O Protocolo Resgate não é sobre transformar você em um trader ou te ensinar a "vencer o mercado". <span className="font-bold text-primary">É sobre dignidade financeira.</span>
                </p>
              </div>
            </div>



            {/* The Three Pillars - Varied Layouts */}
            <div className={`transition-all duration-700 ${visibleSections["dignidade"] ? "animate-fadeInUp" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-2xl font-semibold text-center mb-16 text-muted-foreground leading-relaxed">
                Nesta mentoria, nós vamos construir o seu Plano de Operação Aposentadoria focado em três pilares que o mercado tradicional ignora:
              </p>

              <div className="space-y-12">
                {[
                  {
                    icon: "1",
                    title: "A Reversão de Cenário",
                    desc: "Vamos identificar onde seu dinheiro está \"sangrando\" e redirecionar seus recursos para ativos que geram renda real, corrigindo a rota enquanto ainda há tempo.",
                    style: "bg-gradient-to-r from-primary/20 to-transparent border-l-4 border-primary"
                  },
                  {
                    icon: "2",
                    title: "Consistência sobre Euforia",
                    desc: "Chega de apostas. Vamos implementar uma estratégia de fluxo de caixa mensal que permita que você saiba exatamente quanto terá no futuro, sem depender da sorte.",
                    style: "bg-gradient-to-l from-accent/20 to-transparent border-r-4 border-accent"
                  },
                  {
                    icon: "3",
                    title: "A Blindagem dos Sonhos",
                    desc: "Investir aos 50+ exige uma proteção que um jovem de 20 não precisa. Nosso foco é garantir que o seu patrimônio sobreviva a crises para que os seus planos de descanso, viagens e legado permaneçam vivos e intocáveis.",
                    style: "bg-gradient-to-r from-secondary/20 to-transparent border-l-4 border-secondary"
                  }
                ].map((pillar, i) => (
                  <div
                    key={i}
                    className={`${pillar.style} p-8 rounded-lg hover-lift transition-all duration-500`}
                    style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                  >
                    <div className="flex gap-6 items-start">
                      <div className="text-8xl font-black text-accent flex-shrink-0 leading-none" style={{
                        backgroundImage: "linear-gradient(135deg, #D4AF37 0%, #FFE066 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      }}>{pillar.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-primary">{pillar.title}</h3>
                        <p className="text-base leading-relaxed text-muted-foreground">{pillar.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Promise - Full Width Highlight */}
            <div className={`transition-all duration-700 ${visibleSections["dignidade"] ? "animate-fadeInUp" : "opacity-0"}`}
              style={{ animationDelay: "0.8s" }}
            >
              <div className="bg-accent/20 border-2 border-accent rounded-2xl p-12 text-center hover-lift">
                <p className="text-lg leading-relaxed italic">
                  Você não está apenas investindo em números. Você está comprando o direito de <span className="font-bold text-accent">dormir tranquilo</span>, sabendo que o seu "eu" do futuro terá o conforto que você tanto trabalhou para construir.
                </p>
              </div>
            </div>

            {/* The Line in the Sand - Bold Closing */}
            <div className={`transition-all duration-700 ${visibleSections["dignidade"] ? "animate-fadeInUp" : "opacity-0"}`}
              style={{ animationDelay: "0.9s" }}
            >
              <div className="space-y-4 text-center">
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-primary">O Protocolo Resgate é um divisor de águas:</span> o momento onde você para de se preocupar com o que não fez e assume o controle total do que fará daqui por diante.
                </p>
                <p className="text-lg leading-relaxed">
                  O Protocolo é muito mais do que uma mentoria. É uma <span className="font-bold text-accent">filosofia de como tentar virar o jogo a seu favor estrategicamente.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-px bg-border">
        <div className="absolute left-0 top-1/2 h-px w-20 bg-accent transform -translate-y-1/2" />
      </div>

      {/* O Plano Section */}
      <section id="o-plano" data-section="plano" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <h2 className={`text-3xl md:text-4xl font-bold mb-16 text-center transition-all duration-700 ${visibleSections["plano"] ? "animate-fadeInUp" : "opacity-0"}`}>
            O Plano de Ação
          </h2>

          <p className={`text-lg text-center mb-16 max-w-2xl mx-auto transition-all duration-700 ${visibleSections["plano"] ? "animate-fadeInUp" : "opacity-0"}`}>
            Esqueça o caos das notícias e o vício em telas de computador. Nossa operação é simples, objetiva e exige apenas alguns minutos da sua semana ou mês.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "1. Inteligência Teórica",
                desc: (<><span className="font-bold text-primary">Aulas gravadas</span>, detalhadas e claras, sem teoria desnecessária, onde desintegramos a complexidade do mercado.</>
                ),
              },
              {
                icon: Users,
                title: "2. Treinamento Tático ao Vivo",
                desc: (<><span className="font-bold text-primary">4 encontros de 1h30m cada</span>, por semana, no primeiro mês + <span className="font-bold text-accent">1 encontro mensal, todo mês, durante 5 meses</span>, sempre em grupos de <span className="font-bold text-primary">máximo 5 alunos</span>, para tirar dúvidas em tempo real e te acompanhar de perto.</>
                ),
              },
              {
                icon: Shield,
                title: "3. Acompanhamento de Elite",
                desc: (<><span className="font-bold text-accent">6 meses de suporte</span> direto via WhatsApp após a mentoria para monitoramento da execução e dos seus resultados.</>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group transition-all duration-700 ${visibleSections["plano"] ? "animate-fadeInUp" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 hover-lift animate-pulseGlow">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <div className="text-muted-foreground">{typeof item.desc === 'string' ? item.desc : item.desc}</div>
              </div>
            ))}
          </div>

          {/* Bônus Especial Box */}
          <div className={`mt-16 bg-gradient-to-r from-accent/20 to-primary/20 border-2 border-accent rounded-lg p-8 md:p-12 transition-all duration-700 hover-lift ${visibleSections["plano"] ? "animate-fadeInUp" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-accent">🎉 Bônus Especial</h3>
            <p className="text-lg leading-relaxed mb-6">
              Ganhe um <span className="font-bold text-accent">planejamento financeiro</span> para ajudar você a organizar sua vida e criar sua estratégia pessoal.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Só este bônus custa em média <span className="font-bold text-accent text-lg sm:text-2xl">R$ 2.400,00</span>
            </p>
            <a href="https://wa.me/5531982910530?text=Ol%C3%A1%20Ubiratan!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Protocolo%20Resgate%20e%20o%20b%u00f4nus%20de%20planejamento%20financeiro." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-bold hover:bg-accent/90 transition-all duration-300 hover-lift">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.2-5.02 5.97-5.02 9.981 0 1.396.264 2.823.786 4.171L2.585 21.99l4.693-1.232c1.228.664 2.561 1.01 3.886 1.01 5.487 0 9.86-4.157 10.948-9.869.846-4.537-.649-8.276-4.038-10.456-1.974-1.422-4.592-2.205-7.214-2.16zm8.139 17.013h-.003a10.976 10.976 0 01-1.571-.08c-.548-.052-1.045-.174-1.479-.358l-.423.11 1.41-5.352c.47 1.577 1.314 3.019 2.634 4.11.826.677 1.623 1.078 2.428 1.479zm5.355-18.186C19.761 1.993 15.017 0 9.936 0 4.595 0 .16 4.334.16 9.675c0 1.708.379 3.342 1.076 4.788L0 24l5.11-1.345C6.51 23.387 8.163 24 9.936 24c5.341 0 9.776-4.335 9.776-9.675 0-2.591-.744-5.01-2.162-7.112z"/></svg>
              Quero Participar do Programa
            </a>
          </div>
          
          {/* O que você ganha */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-primary/10 border-2 border-primary rounded-lg p-8 hover-lift">
              <h4 className="text-xl font-bold mb-6 text-primary">Ao fazer a mentoria você ganha:</h4>
              <ul className="space-y-4 text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-3xl text-primary">✓</span>
                  <span>Organização financeira geral</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-3xl text-primary">✓</span>
                  <span>Planejamento personalizado para sua aposentadoria</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-3xl text-primary">✓</span>
                  <span>Aprendizagem de estratégias no mercado de ações para acelerar o processo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-3xl text-primary">✓</span>
                  <span>Alinhamento comportamental</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-accent/10 border-2 border-accent rounded-lg p-8 hover-lift">
              <h4 className="text-xl font-bold mb-6 text-accent">Mais especificamente:</h4>
              <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-2xl sm:text-3xl text-yellow-400 font-bold">+</span>
                  <span>1 sessão individual com 2h de duração para montagem do seu plano</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl sm:text-3xl text-yellow-400 font-bold">+</span>
                  <span>+6 reuniões mensais para acompanhamento individualizado com 1h de duração</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl sm:text-3xl text-yellow-400 font-bold">+</span>
                  <span>Além de todos os encontros e dos 6 meses de suporte pelo WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl sm:text-3xl text-yellow-400 font-bold">+</span>
                  <span>Totalizando 12 meses de programa</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-px bg-border">
        <div className="absolute left-0 top-1/2 h-px w-20 bg-accent transform -translate-y-1/2" />
      </div>

      {/* O Diferencial Section */}
      <section id="diferencial" data-section="diferencial" className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold mb-8 transition-all duration-700 ${visibleSections["diferencial"] ? "animate-fadeInUp" : "opacity-0"}`}>
              O Diferencial: <span className="accent-text">O Condicionamento Mental</span>
            </h2>

            <p className={`text-lg leading-relaxed mb-8 transition-all duration-700 ${visibleSections["diferencial"] ? "animate-fadeInUp" : "opacity-0"}`}>
              Por que a maioria falha onde você terá sucesso? <span className="font-semibold">Porque eles não dominam a própria mente.</span>
            </p>

            <p className={`text-lg leading-relaxed mb-8 transition-all duration-700 ${visibleSections["diferencial"] ? "animate-fadeInUp" : "opacity-0"}`}>
              O coração do Protocolo Resgate é a parte psicológica. Como consultor, vou te ajudar a condicionar sua mentalidade para aplicar a estratégia com disciplina.
            </p>

            <div className={`bg-accent/10 border border-accent/30 rounded-lg p-8 transition-all duration-700 hover-lift ${visibleSections["diferencial"] ? "animate-fadeInUp" : "opacity-0"}`}>
              <h3 className="text-xl font-bold mb-6 text-accent">Para Quem é o Protocolo Resgate</h3>
              <div className="space-y-3">
                {[
                  "Nunca investiu na vida e quer começar agora",
                  "Só investe em Renda Fixa e quer usar o poder da renda variável",
                  "Quer recuperar o tempo perdido após os 50",
                  "Busca uma chance de ter uma aposentadoria mais tranquila e segura",
                  "Quer aproveitar as oportunidades do mercado de ações, sem abrir mão da segurança",
                  "Para quem morre de medo do mercado de ações",
                  "Para quem é conservador e não abre mão da segurança",
                  "Para quem não dispõe de muito dinheiro para começar",
                  "Para quem quer se comprometer de verdade com seu resgate",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 hover-lift transition-all">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 animate-pulseGlow" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`bg-destructive/5 border border-destructive/30 rounded-lg p-8 transition-all duration-700 hover-lift mt-8 ${visibleSections["diferencial"] ? "animate-fadeInUp" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-bold mb-6 text-destructive">Para Quem NÃO É</h3>
              <div className="space-y-3">
                {[
                  "Para quem não tem disciplina",
                  "Para quem não está comprometido com seu projeto de aposentadoria e crescimento de capital",
                  "Para quem acha que o dinheiro gasto na mentoria será uma despesa",
                  "Para quem acredita em fórmula mágica",
                  "Para quem não tem paciência de esperar os frutos crescerem ao longo do tempo",
                  "Para quem quer algo da noite para o dia",
                  "Para quem está buscando um esquema de enriquecimento",
                  "Para quem não tem dinheiro algum para começar",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0 mt-0.5 text-red-500">✗</span>
                    <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-px bg-border">
        <div className="absolute left-0 top-1/2 h-px w-20 bg-accent transform -translate-y-1/2" />
      </div>

      {/* O Tempo Parou de Ser um Recurso Section */}
      <section id="urgencia" data-section="urgencia" className="py-20 md:py-32 bg-secondary/20">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className={`transition-all duration-700 ${visibleSections["urgencia"] ? "animate-fadeInUp" : "opacity-0"}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                O tempo <span className="text-accent">parou de ser um recurso</span> e se tornou o seu maior desafio.
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Se você já passou dos 50, a sensação de frustração e o peso da desilusão têm um nome: <span className="font-bold text-foreground">urgência</span>. Aquele futuro que parecia distante bateu à sua porta, e a pergunta que não quer calar é: "Ainda dá tempo?"
              </p>
            </div>

            <div className={`bg-primary/10 border-l-4 border-primary rounded-r-lg p-8 transition-all duration-700 hover-lift ${visibleSections["urgencia"] ? "animate-fadeInUp" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
              <p className="text-xl leading-relaxed">
                Quero ser direto com você: <span className="font-bold text-primary">Sim, ainda há uma saída.</span> Mas a era dos ensaios acabou. Você não tem mais o luxo de errar, de testar fórmulas mágicas ou de "ver no que dá". Cada tentativa e erro agora consome o seu ativo mais escasso — <span className="font-bold text-primary">o tempo que resta para construir sua liberdade.</span>
              </p>
            </div>

            <div className={`transition-all duration-700 ${visibleSections["urgencia"] ? "animate-fadeInUp" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Agora, o jogo mudou. Não é sobre correr riscos desnecessários; isso ficou no passado. É sobre <span className="font-bold text-foreground">estratégia cirúrgica, alvo definido e foco total.</span>
              </p>
            </div>

            <div className={`bg-accent/15 border-r-4 border-accent rounded-l-lg p-8 transition-all duration-700 hover-lift ${visibleSections["urgencia"] ? "animate-fadeInUp" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
              <h3 className="text-2xl font-bold mb-6 text-accent">O Protocolo Resgate: Sua última e mais sólida linha de defesa.</h3>
              <p className="text-lg leading-relaxed mb-6">
                Diferente de tudo o que você já viu, o Protocolo Resgate não entrega apenas planilhas. Ele entrega um <span className="font-bold text-accent">plano de guerra dividido em quatro frentes inegociáveis:</span>
              </p>
              <ul className="space-y-4 text-base leading-relaxed">
                <li className="flex gap-4">
                  <span className="text-accent font-bold text-2xl flex-shrink-0">1.</span>
                  <div>
                    <span className="font-bold text-accent">Organização Financeira Tática:</span>
                    <p className="text-muted-foreground mt-1">Arrumar a casa não é mais uma opção, é a fundação para o que vem a seguir.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent font-bold text-2xl flex-shrink-0">2.</span>
                  <div>
                    <span className="font-bold text-accent">Planejamento Blindado de Aposentadoria:</span>
                    <p className="text-muted-foreground mt-1">Um roteiro personalizado para que você saiba exatamente onde estará nos próximos 5, 10 e 15 anos.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent font-bold text-2xl flex-shrink-0">3.</span>
                  <div>
                    <span className="font-bold text-accent">Aceleração Inteligente em Renda Variável:</span>
                    <p className="text-muted-foreground mt-1">Usar o mercado não para apostar, mas para alavancar seu patrimônio com segurança e método.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent font-bold text-2xl flex-shrink-0">4.</span>
                  <div>
                    <span className="font-bold text-accent">O Ajuste de Mentalidade (O Fator Decisivo):</span>
                    <p className="text-muted-foreground mt-1">Olhe para trás com honestidade. Por que você ainda não chegou onde gostaria?</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className={`transition-all duration-700 ${visibleSections["urgencia"] ? "animate-fadeInUp" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Seja sincero: foram os gastos emocionais, as oportunidades ignoradas, o medo que te fez travar na renda fixa enquanto a inflação devorava seu poder de compra, ou talvez o fato de ter torrado um bom capital que você já tinha acumulado. Isto é, provavelmente o que te trouxe aqui foi uma série de decisões ruins. Então, está na hora de começar a escolher as alternativas certas usando o poder da matemática e da estatística a seu favor.
              </p>
              <p className="text-lg leading-relaxed font-semibold text-foreground">
                <span className="text-accent">Tudo isso é comportamento.</span> Sem o alinhamento mental correto, a melhor estratégia do mundo falha. É por isso que o diferencial do Protocolo Resgate é <span className="text-accent">tratar a raiz do problema: sua mentalidade em relação ao dinheiro.</span>
              </p>
            </div>

            <div className={`bg-gradient-to-r from-accent/20 to-primary/20 border-2 border-accent rounded-lg p-8 text-center transition-all duration-700 hover-lift ${visibleSections["urgencia"] ? "animate-fadeInUp" : "opacity-0"}`} style={{ animationDelay: "0.5s" }}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-accent">A decisão que separa o seu "sonho" da sua "realidade".</h3>
              <p className="text-lg leading-relaxed mb-6">
                O Protocolo Resgate é o <span className="font-bold text-accent">divisor de águas</span> entre continuar apenas sobrevivendo à espera do amanhã ou assumir o comando da sua história financeira.
              </p>
              <p className="text-lg leading-relaxed font-semibold">
                O tempo está correndo. Mas hoje, ele ainda está a seu favor para uma última e vitoriosa manobra. <span className="text-accent">Vamos resgatar o seu futuro?</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-px bg-border">
        <div className="absolute left-0 top-1/2 h-px w-20 bg-accent transform -translate-y-1/2" />
      </div>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10 gradient-animated" />

        <div className="container text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground animate-slideDown">
            O Momento da Decisão
          </h2>

          <p className="text-lg text-primary-foreground/90 mb-12 max-w-2xl mx-auto animate-fadeInUp">
            Você pode continuar no caminho em que está e abrir mão de seus sonhos de uma aposentadoria merecida depois de tantos anos de trabalho ou pode iniciar o seu Protocolo Resgate hoje mesmo.
          </p>

          <p className="text-2xl font-bold text-primary-foreground mb-12 animate-fadeInUp">
            O tempo está correndo. Você está pronto para o resgate ou prefere se entregar?
          </p>

          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-4 text-xl md:text-2xl font-bold group hover-lift shine-effect animate-pulseGlow">
            Quero Iniciar o Protocolo Resgate
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* LGPD/Cookies Banner */}
      <LGPDBanner />

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              {
                title: "Protocolo Resgate",
                content: "Mentoria especializada para construir patrimônio e aposentadoria segura.",
              },
              {
                title: "Navegação",
                links: ["O Problema", "A Solução", "O Plano"],
              },
              {
                title: "Redes Sociais",
                links: ["LinkedIn", "Instagram"],
              },
              {
                title: "Contato",
                links: ["Email", "WhatsApp"],
              },
              {
                title: "Documentos",
                links: ["Política de Privacidade", "Política de Cookies"],
              },
              {
                title: "Sobre",
                content: "Consultor de Investimentos CEA-ANBIMA com especialização em Psicologia do Trader.",
              },
            ].map((col, i) => {
              if (col.title === "Redes Sociais") {
                return (
                  <div key={i} className="hover-lift transition-all">
                    <h4 className="font-bold mb-4">{col.title}</h4>
                    <div className="flex gap-4">
                      <a href="https://linkedin.com/in/ubiratan-meireles-consultor-de-investimentos-cea" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="LinkedIn">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                      </a>
                      <a href="https://instagram.com/consultor_meireles" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="Instagram">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/></svg>
                      </a>
                    </div>
                  </div>
                );
              }
              if (col.title === "Contato") {
                return (
                  <div key={i} className="hover-lift transition-all">
                    <h4 className="font-bold mb-4">{col.title}</h4>
                    <div className="space-y-3 text-sm">
                      <a href="mailto:contato@marketmind.net.br" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <span>contato@marketmind.net.br</span>
                      </a>
                      <a href="https://wa.me/5531982910530" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        <span>+55 31 98291-0530</span>
                      </a>
                    </div>
                  </div>
                );
              }
              return (
                <div key={i} className="hover-lift transition-all">
                  <h4 className="font-bold mb-4">{col.title}</h4>
                  {col.content && <p className="text-sm text-muted-foreground">{col.content}</p>}
                  {col.links && (
                    <ul className="space-y-2 text-sm">
                      {col.links.map((link, j) => {
                        let href = "#";
                        if (link === "Política de Privacidade") href = "/privacidade";
                        if (link === "Política de Cookies") href = "/cookies";
                        return (
                          <li key={j}>
                            <a href={href} className="text-muted-foreground hover:text-primary transition-colors">
                              {link}
                            </a>
                          </li>
                        );
                      })}
                    
                    </ul>
                  )}
                </div>
              );
            })
            }
          </div>

          <div className="border-t border-border pt-8 space-y-4">
            <div className="text-xs text-muted-foreground space-y-2">
              <p><strong>Aviso de Risco:</strong> Resultados passados não garantem resultados futuros. O mercado de ações envolve risco de perdas, ainda que controladas.</p>
              <p><strong>Disclaimer:</strong> Este conteúdo é apenas para fins educacionais e não constitui aconselhamento financeiro profissional. O idealizador do Protocolo Resgate não se responsabiliza por perdas decorrentes de decisões de investimento.</p>
              <p><strong>LGPD:</strong> Ao utilizar este site, você concorda com nossa Política de Privacidade e aceita o tratamento de dados conforme a Lei Geral de Proteção de Dados (LGPD).</p>
            </div>
            <div className="text-center text-sm text-muted-foreground border-t border-border pt-4">
              <p>&copy; 2026 Protocolo Resgate. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
