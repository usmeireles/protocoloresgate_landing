import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";

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

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
              Protocolo Resgate:
              <br />
              <span className="accent-text gradient-text">Operação Aposentadoria</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              Sua última grande chance de construir patrimônio para sua aposentadoria depois dos 50, de forma segura e
              <span className="accent-text"> começando do zero.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
              <Button className="button-primary group hover-lift shine-effect">
                Quero Iniciar o Protocolo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="button-secondary hover-scale">Conhecer Mais</Button>
            </div>

            {/* Stats with Animation */}
            <div className="mt-16 grid grid-cols-3 gap-8 text-center">
              {[
                { value: "15+", label: "Anos de Experiência" },
                { value: "500+", label: "Alunos Transformados" },
                { value: "95%", label: "Taxa de Sucesso" },
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
              Mentoria prática desenhada para quem nunca investiu em ações e quer usar todo o sobe e desce da bolsa a seu favor. Minha missão é te mostrar como mudar o jogo através de uma visão tática das oportunidades que o mercado oferece, focando no crescimento exponencial do seu capital para a aposentadoria, com risco totalmente controlado.
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

      {/* O Plano Section */}
      <section id="o-plano" data-section="plano" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <h2 className={`text-3xl md:text-4xl font-bold mb-16 text-center transition-all duration-700 ${visibleSections["plano"] ? "animate-fadeInUp" : "opacity-0"}`}>
            O Plano de Ação
          </h2>

          <p className={`text-lg text-center mb-16 max-w-2xl mx-auto transition-all duration-700 ${visibleSections["plano"] ? "animate-fadeInUp" : "opacity-0"}`}>
            Esqueça o caos das notícias e o vício em telas de computador. Nossa operação é simples, objetiva e exige apenas alguns minutos da sua semana.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "1. Inteligência Teórica",
                desc: "Aulas gravadas, detalhadas e claras, sem teoria desnecessária, onde desintegramos a complexidade do mercado.",
              },
              {
                icon: Users,
                title: "2. Treinamento Tático ao Vivo",
                desc: "4 encontros de 1h30m cada, por semana, em grupos de no máximo 5 alunos, para tirar dúvidas em tempo real.",
              },
              {
                icon: Shield,
                title: "3. Acompanhamento de Elite",
                desc: "3 meses de suporte direto via WhatsApp após a mentoria para monitorarmos seus resultados.",
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
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
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
                  "Só investe em Renda Fixa e quer crescimento exponencial",
                  "Quer recuperar o tempo perdido após os 50",
                  "Busca uma chance de ter uma aposentadoria mais tranquila e segura",
                  "Quer aproveitar as oportunidades do mercado de ações, sem abrir mão da segurança",
                  "Não dispõe de muito dinheiro para começar",
                  "Quer se comprometer de verdade com seu resgate",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 hover-lift transition-all">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 animate-pulseGlow" />
                    <span>{item}</span>
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

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10 gradient-animated" />

        <div className="container text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground animate-slideDown">
            O Momento da Decisão
          </h2>

          <p className="text-lg text-primary-foreground/90 mb-12 max-w-2xl mx-auto animate-fadeInUp">
            Você pode continuar que ainda dá tempo de se aposentar com seu salário ou apenas com a renda fixa, ou pode iniciar o seu Protocolo Resgate hoje mesmo.
          </p>

          <p className="text-2xl font-bold text-primary-foreground mb-12 animate-fadeInUp">
            O tempo está correndo. Você está pronto para o resgate ou prefere se entregar?
          </p>

          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-lg font-bold group hover-lift shine-effect animate-pulseGlow">
            Quero Iniciar o Protocolo Resgate
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

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
                title: "Contato",
                links: ["LinkedIn", "Instagram"],
              },
              {
                title: "Sobre",
                content: "Consultor de Investimentos CEA-ANBIMA com especialização em Psicologia do Trader.",
              },
            ].map((col, i) => (
              <div key={i} className="hover-lift transition-all">
                <h4 className="font-bold mb-4">{col.title}</h4>
                {col.content && <p className="text-sm text-muted-foreground">{col.content}</p>}
                {col.links && (
                  <ul className="space-y-2 text-sm">
                    {col.links.map((link, j) => (
                      <li key={j}>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Protocolo Resgate. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
