import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Cookies() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Política de Cookies</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita nosso site. Eles ajudam a melhorar sua experiência de navegação e nos permitem entender como você usa nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Tipos de Cookies que Usamos</h2>
            <p>
              Utilizamos os seguintes tipos de cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site</li>
              <li><strong>Cookies de Análise:</strong> Nos ajudam a entender como você usa o site</li>
              <li><strong>Cookies de Preferência:</strong> Lembram suas preferências e configurações</li>
              <li><strong>Cookies de Marketing:</strong> Usados para fins publicitários e de marketing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Por que Usamos Cookies?</h2>
            <p>
              Usamos cookies para:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Melhorar a funcionalidade do site</li>
              <li>Entender o comportamento dos visitantes</li>
              <li>Personalizar sua experiência</li>
              <li>Medir a eficácia de campanhas de marketing</li>
              <li>Cumprir com requisitos legais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Consentimento</h2>
            <p>
              Ao continuar navegando em nosso site após ser informado sobre nossa política de cookies, você concorda com o uso de cookies conforme descrito nesta política.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Como Controlar Cookies</h2>
            <p>
              Você pode controlar e/ou deletar cookies da seguinte forma:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Através das configurações do seu navegador</li>
              <li>Limpando o histórico de navegação</li>
              <li>Usando ferramentas de privacidade do navegador</li>
            </ul>
            <p className="mt-4">
              Observe que desabilitar cookies pode afetar a funcionalidade do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies de Terceiros</h2>
            <p>
              Alguns cookies podem ser colocados por terceiros, como provedores de análise e redes publicitárias. Não temos controle total sobre esses cookies, mas você pode gerenciá-los através das configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Conformidade com LGPD</h2>
            <p>
              Nossa política de cookies está em conformidade com a Lei Geral de Proteção de Dados (LGPD) brasileira. Coletamos consentimento antes de usar cookies não essenciais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contato</h2>
            <p>
              Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco:
            </p>
            <ul className="space-y-2 ml-4">
              <li>Email: contato@marketmind.net.br</li>
              <li>WhatsApp: +55 31 98291-0530</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Alterações a Esta Política</h2>
            <p>
              Podemos atualizar esta Política de Cookies periodicamente. Notificaremos você sobre qualquer mudança publicando a nova política neste site.
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
