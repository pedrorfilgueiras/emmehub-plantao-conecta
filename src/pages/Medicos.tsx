import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  UserPlus, 
  Clock, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  DollarSign,
  Calendar,
  Phone
} from "lucide-react";

const Medicos = () => {
  const benefits = [
    {
      icon: UserPlus,
      title: "Cadastro Fácil e Seguro",
      description: "Processo simplificado de cadastro com verificação de documentos e credenciais médicas."
    },
    {
      icon: Clock,
      title: "Flexibilidade no Recebimento",
      description: "Escolha receber de D+0 até D+30, com total flexibilidade conforme sua necessidade."
    },
    {
      icon: Shield,
      title: "Seguros Específicos",
      description: "Contrate seguros para determinados plantões e operações, garantindo sua proteção."
    },
    {
      icon: TrendingUp,
      title: "Assessoria de Investimentos",
      description: "Acesso exclusivo ao nosso escritório de assessoria para planejamento de aposentadoria."
    },
    {
      icon: Calendar,
      title: "Gestão Inteligente",
      description: "Dashboard personalizado para gerenciar seus plantões, histórico e pagamentos."
    },
    {
      icon: Phone,
      title: "Suporte 24/7",
      description: "Atendimento especializado disponível a qualquer hora para resolver suas dúvidas."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Cadastre-se",
      description: "Crie sua conta fornecendo suas informações profissionais e documentos."
    },
    {
      number: "02",
      title: "Verificação",
      description: "Nossa equipe valida suas credenciais e documentos médicos."
    },
    {
      number: "03",
      title: "Encontre Plantões",
      description: "Navegue pelas oportunidades disponíveis em sua região e especialidade."
    },
    {
      number: "04",
      title: "Comece a Trabalhar",
      description: "Aceite plantões e comece a trabalhar com total segurança e transparência."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Para Médicos
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sua carreira médica, <br />
              <span className="text-primary-glow">mais flexível</span> que nunca
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Conecte-se com hospitais de forma segura, tenha flexibilidade total nos 
              recebimentos e conte com assessoria especializada para seu futuro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl">
                Cadastre-se Gratuitamente
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                Fale com um Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que escolher a <span className="text-primary">EMMEHUB</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Uma plataforma completa que vai além da simples conexão com plantões, 
              oferecendo um ecossistema completo para sua carreira médica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como <span className="text-secondary">funciona</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Em apenas alguns passos simples, você estará conectado a uma rede 
              de hospitais confiáveis e começará a trabalhar com total segurança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto shadow-card group-hover:shadow-glow transition-all duration-300">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-border"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Benefits */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Flexibilidade financeira que você <span className="text-success">merece</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Com a EMMEHUB, você tem total controle sobre seus recebimentos e 
                ainda conta com benefícios exclusivos para proteger seu futuro.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Recebimento Flexível</p>
                    <p className="text-muted-foreground">De D+0 até D+30, você escolhe quando receber</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Seguros Específicos</p>
                    <p className="text-muted-foreground">Proteja-se em procedimentos de alto risco</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Assessoria Gratuita</p>
                    <p className="text-muted-foreground">Planejamento de aposentadoria sem custos extras</p>
                  </div>
                </div>
              </div>

              <Button variant="success" size="lg">
                <DollarSign className="mr-2 h-5 w-5" />
                Saiba Mais Sobre os Benefícios
              </Button>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-elegant">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">R$ 25.000</div>
                    <p className="text-muted-foreground">Média mensal dos nossos médicos</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">+98%</div>
                      <p className="text-sm text-muted-foreground">Satisfação</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">15min</div>
                      <p className="text-sm text-muted-foreground">Tempo médio para encontrar plantão</p>
                    </div>
                  </div>

                  <Badge className="bg-gradient-primary text-primary-foreground">
                    Junte-se a +5.000 médicos
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar sua carreira médica?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Cadastre-se agora e tenha acesso a milhares de oportunidades de plantões, 
            com total segurança e flexibilidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl">
              Criar Conta Gratuita
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              Falar com Consultor
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Medicos;