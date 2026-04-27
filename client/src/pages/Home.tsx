import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">PR</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">Protocolo Resgate</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problema" className="text-sm hover:text-primary transition-colors">
              O Problema
            </a>
            <a href="#solucao" className="text-sm hover:text-primary transition-colors">
              A Solução
            </a>
            <a href="#plano" className="text-sm hover:text-primary transition-colors">
              O Plano
            </a>
            <a href="#diferencial" className="text-sm hover:text-primary transition-colors">
              Diferencial
            </a>
          </nav>
          <Button className="button-primary text-sm">Começar Agora</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663416505971/3indN6AbNmV863dJhpFVoQ/hero-abstract-geometric-ZMXv6WVc5fZ3BTNkvCCnWz.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-primary font-semibold text-sm">MENTORIA ESPECIALIZADA</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Protocolo Resgate:
              <br />
              <span className="accent-text">Operação Aposentadoria</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Sua última grande chance de construir patrimônio para sua aposentadoria depois dos 50, de forma segura e
              <span className="accent-text"> começando do zero.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="button-primary group">
                Quero Iniciar o Protocolo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="button-secondary">Conhecer Mais</Button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-sm text-muted-foreground">Anos de Experiência</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Alunos Transformados</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <p className="text-sm text-muted-foreground">Taxa de Sucesso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-px bg-border">
        <div className="absolute left-0 top-1/2 h-px w-20 bg-accent transform -translate-y-1/2" />
      </div>

      {/* O Problema Section */}
      <section id="problema" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">O Problema</h2>

            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                O relógio é implacável e o mercado tradicional pode não ser mais uma opção para você. Se você passou
                dos 50 anos e seu capital está "preso" na Renda Fixa ou na Poupança, você não está apenas sendo
                conservador.
              </p>

              <p className="text-xl font-semibold text-primary">
                Você está deixando o seu futuro para trás.
              </p>

              <p>
                E se você ainda nem começou... boa sorte! Pelas vias normais da Renda Fixa, os números dificilmente
                fecharão a tempo. Mas existe uma saída estratégica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-px bg-border">
        <div className="absolute left-0 top-1/2 h-px w-20 bg-accent transform -translate-y-1/2" />
      </div>

      {/* A Missão Section */}
      <section id="solucao" className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              A Missão: <span className="accent-text">Resgatar Seu Tempo Perdido</span>
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Mentoria prática desenhada para quem nunca investiu em ações e quer usar todo o sobe e desce da bolsa a
              seu favor. Minha missão é te mostrar como mudar o jogo através de uma visão tática das oportunidades que
              o mercado oferece, focando no crescimento exponencial do seu capital para a aposentadoria, com risco
              totalmente controlado.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
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
      <section id="plano" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">O Plano de Ação</h2>

          <p className="text-lg text-center mb-16 max-w-2xl mx-auto">
            Esqueça o caos das notícias e o vício em telas de computador. Nossa operação é simples, objetiva e exige
            apenas alguns minutos da sua semana.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Inteligência Teórica */}
            <div className="group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">1. Inteligência Teórica</h3>
              <p className="text-muted-foreground">
                Aulas gravadas, detalhadas e claras, sem teoria desnecessária, onde desintegramos a complexidade do
                mercado. Você aprende as estratégias e como montá-las no seu ritmo.
              </p>
            </div>

            {/* Treinamento Tático */}
            <div className="group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">2. Treinamento Tático ao Vivo</h3>
              <p className="text-muted-foreground">
                4 encontros de 1h30m cada, por semana, em grupos de no máximo 5 alunos, para tirar dúvidas em tempo
                real. Estarei com você enquanto montamos suas operações.
              </p>
            </div>

            {/* Acompanhamento */}
            <div className="group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">3. Acompanhamento de Elite</h3>
              <p className="text-muted-foreground">
                3 meses de suporte direto via WhatsApp após a mentoria para monitorarmos seus resultados e fazermos as
                intervenções necessárias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-px bg-border">
        <div className="absolute left-0 top-1/2 h-px w-20 bg-accent transform -translate-y-1/2" />
      </div>

      {/* O Diferencial Section */}
      <section id="diferencial" className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              O Diferencial: <span className="accent-text">O Condicionamento Mental</span>
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Por que a maioria falha onde você terá sucesso? <span className="font-semibold">Porque eles não dominam a própria mente.</span>
            </p>

            <p className="text-lg leading-relaxed mb-8">
              O coração do Protocolo Resgate é a parte psicológica. Como consultor, vou te ajudar a condicionar sua
              mentalidade para aplicar a estratégia com disciplina. O mercado é feito de comportamento, e você aprenderá
              a dominar os seus vieses para ter a chance de colher os lucros que a Renda Fixa jamais entregaria.
            </p>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-8 mt-12">
              <h3 className="text-xl font-bold mb-6 text-accent">Para Quem é o Protocolo Resgate</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Nunca investiu na vida e quer começar agora</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Só investe em Renda Fixa e quer crescimento exponencial</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Quer recuperar o tempo perdido após os 50</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Busca uma chance de ter uma aposentadoria mais tranquila e segura</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Quer aproveitar as oportunidades do mercado de ações, sem abrir mão da segurança</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Não dispõe de muito dinheiro para começar</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Quer se comprometer de verdade com seu resgate</span>
                </div>
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
      <section className="py-20 md:py-32 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            O Momento da Decisão
          </h2>

          <p className="text-lg text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Você pode continuar que ainda dá tempo de se aposentar com seu salário ou apenas com a renda fixa, ou pode
            iniciar o seu Protocolo Resgate hoje mesmo e aprender a aproveitar as milhares de oportunidades que o
            mercado lhe oferece.
          </p>

          <p className="text-2xl font-bold text-primary-foreground mb-12">
            O tempo está correndo. Você está pronto para o resgate ou prefere se entregar?
          </p>

          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-lg font-bold group">
            Quero Iniciar o Protocolo Resgate
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4">Protocolo Resgate</h4>
              <p className="text-sm text-muted-foreground">
                Mentoria especializada para construir patrimônio e aposentadoria segura.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#problema" className="text-muted-foreground hover:text-primary transition-colors">
                    O Problema
                  </a>
                </li>
                <li>
                  <a href="#solucao" className="text-muted-foreground hover:text-primary transition-colors">
                    A Solução
                  </a>
                </li>
                <li>
                  <a href="#plano" className="text-muted-foreground hover:text-primary transition-colors">
                    O Plano
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://linkedin.com/in/ubiratan-meireles-consultor-de-investimentos-cea" className="text-muted-foreground hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/consultor_meireles" className="text-muted-foreground hover:text-primary transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Sobre</h4>
              <p className="text-sm text-muted-foreground">
                Consultor de Investimentos CEA-ANBIMA com especialização em Psicologia do Trader e Comportamento Financeiro.
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Protocolo Resgate. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
