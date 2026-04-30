import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Privacidade() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-secondary/50 border-b border-border backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">PR</span>
            </div>
            <span className="font-bold">Protocolo Resgate</span>
          </div>
          <a href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="container py-12 md:py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Política de Privacidade</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
            <p>
              A Protocolo Resgate ("nós", "nosso" ou "nos") opera o site do Protocolo Resgate. Esta página informa nossa política sobre a coleta, uso e divulgação de dados pessoais quando você usa nosso site e as escolhas que você tem associadas a esses dados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Coleta de Dados</h2>
            <p>
              Coletamos informações que você nos fornece diretamente, como quando você preenche um formulário, entra em contato conosco via WhatsApp ou email, ou se inscreve em nossos serviços.
            </p>
            <p>
              As informações que coletamos podem incluir:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Nome completo</li>
              <li>Endereço de email</li>
              <li>Número de telefone</li>
              <li>Informações sobre seus interesses em investimentos</li>
              <li>Qualquer outra informação que você opte por compartilhar</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso de Dados</h2>
            <p>
              Usamos os dados coletados para:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fornecer e melhorar nossos serviços</li>
              <li>Comunicar com você sobre o Protocolo Resgate</li>
              <li>Responder a suas perguntas e solicitações</li>
              <li>Enviar atualizações e informações relevantes</li>
              <li>Cumprir com obrigações legais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartilhamento de Dados</h2>
            <p>
              Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Segurança de Dados</h2>
            <p>
              Implementamos medidas de segurança apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Seus Direitos</h2>
            <p>
              Você tem o direito de acessar, corrigir ou solicitar a exclusão de suas informações pessoais. Para exercer esses direitos, entre em contato conosco através do email contato@marketmind.net.br.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Conformidade com LGPD</h2>
            <p>
              Estamos em conformidade com a Lei Geral de Proteção de Dados (LGPD) brasileira. Seus dados pessoais são processados de acordo com os princípios e direitos estabelecidos pela LGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
            </p>
            <ul className="space-y-2 ml-4">
              <li>Email: contato@marketmind.net.br</li>
              <li>WhatsApp: +55 31 98291-0530</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Alterações a Esta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre qualquer mudança publicando a nova política neste site.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <a href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar para a página inicial
          </a>
        </div>
      </main>
    </div>
  );
}
