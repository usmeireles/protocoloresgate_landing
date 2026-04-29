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
              Pode ser sua última grande chance de construir patrimônio para sua aposentadoria depois dos 50, de forma segura e
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
            <div className={`bg-primary/10 border border-primary/30 rounded-lg p-8 md:p-12 text-center transition-all duration-700 hover-lift animate-borderGlow ${visibleSections["realidade"] ? "animate-fadeInUp" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
              <div className="mb-4">
                <div className="text-4xl md:text-6xl font-bold mb-2">
                  <span className="accent-text">PROTOCOLO RESGATE:</span>
                </div>
                <div className="text-2xl md:text-3xl font-bold">
                  <span className="text-primary">OPERAÇÃO APOSENTADORIA</span>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Sua última grande chance de construir patrimônio para sua aposentadoria depois dos 50, de forma segura.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Se você não começou aos 20, você precisa de uma <span className="font-bold text-primary">estratégia de aceleração</span>. O Protocolo Resgate foi criado para resgatar o potencial do seu capital que está parado, transformando o pouco tempo que resta em uma vantagem tática através do mercado de ações, com segurança e inteligência comportamental.
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
                desc: "Aulas gravadas, detalhadas e claras, sem teoria desnecessária, onde desintegramos a complexidade do mercado.",
              },
              {
                icon: Users,
                title: "2. Treinamento Tático ao Vivo",
                desc: "4 encontros de 1h30m cada, por semana, no primeiro mês + 1 encontro mensal, todo mês, durante 5 meses, sempre em grupos de no máximo 5 alunos, para tirar dúvidas em tempo real e te acompanhar de perto.",
              },
              {
                icon: Shield,
                title: "3. Acompanhamento de Elite",
                desc: "6 meses de suporte direto via WhatsApp após a mentoria para monitoramento da execução e dos seus resultados.",
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

            <div className={`bg-primary/5 border-l-4 border-primary rounded-r-lg p-6 mb-8 hover-lift transition-all ${visibleSections["diferencial"] ? "animate-fadeInUp" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
              <p className="text-lg font-semibold text-primary italic">
                "Mudar sua realidade não tem nada a ver com fórmula mágica, mas com estratégia e disciplina."
              </p>
            </div>

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
                    <span className="text-xl flex-shrink-0 mt-0.5">✗</span>
                    <span className="text-muted-foreground">{item}</span>
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
