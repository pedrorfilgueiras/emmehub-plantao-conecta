import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Building2, 
  Users, 
  BarChart3, 
  Shield, 
  Clock, 
  CheckCircle,
  Monitor,
  FileText,
  Zap
} from "lucide-react";
import hospitalImage from "@/assets/hospital-dashboard.jpg";

const Hospitais = () => {
  const benefits = [
    {
      icon: Users,
      title: "Rede Qualificada de Médicos",
      description: "Acesso a mais de 5.000 médicos verificados e qualificados em diversas especialidades."
    },
    {
      icon: BarChart3,
      title: "Dashboard em Tempo Real",
      description: "Gerencie plantões, visualize métricas e tome decisões baseadas em dados atualizados."
    },
    {
      icon: Shield,
      title: "Segurança e Conformidade",
      description: "Plataforma em conformidade com LGPD e padrões internacionais de segurança médica."
    },
    {
      icon: Clock,
      title: "Contratação Rápida",
      description: "Processo simplificado que reduz o tempo de contratação de dias para minutos."
    },
    {
      icon: FileText,
      title: "Documentação Automática",
      description: "Todos os documentos e contratos gerados automaticamente e armazenados com segurança."
    },
    {
      icon: Zap,
      title: "Integração Simplificada",
      description: "APIs e integrações que se conectam facilmente aos seus sistemas existentes."
    }
  ];

  const features = [
    {
      title: "Busca Inteligente",
      description: "Encontre médicos por especialidade, localização, disponibilidade e avaliações."
    },
    {
      title: "Gestão Financeira",
      description: "Controle total sobre pagamentos, relatórios financeiros e previsões de gastos."
    },
    {
      title: "Análise de Performance",
      description: "Métricas detalhadas sobre ocupação, satisfação e eficiência operacional."
    },
    {
      title: "Comunicação Integrada",
      description: "Chat seguro entre coordenação e médicos para alinhamento eficaz."
    }
  ];

  const stats = [
    { value: "+200", label: "Hospitais Parceiros" },
    { value: "98%", label: "Taxa de Satisfação" },
    { value: "15min", label: "Tempo Médio de Resposta" },
    { value: "24/7", label: "Suporte Disponível" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                Para Hospitais
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Gestão inteligente de <br />
                <span className="text-primary-glow">plantões médicos</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Simplifique a contratação de médicos, otimize seus recursos e 
                garanta cobertura completa com nossa plataforma especializada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="xl">
                  Solicitar Demonstração
                </Button>
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                  Falar com Especialista
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={hospitalImage}
                alt="Dashboard hospitalar mostrando gestão de plantões"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que hospitais confiam na <span className="text-primary">EMMEHUB</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Uma solução completa que moderniza a gestão de plantões médicos, 
              oferecendo eficiência, segurança e transparência para sua instituição.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="p-3 bg-secondary/10 rounded-lg w-fit group-hover:bg-secondary/20 transition-colors">
                      <benefit.icon className="h-6 w-6 text-secondary" />
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

      {/* Dashboard Features */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Dashboard que <span className="text-secondary">simplifica</span> sua gestão
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Tenha controle total sobre seus plantões médicos com uma interface 
                intuitiva e funcionalidades avançadas de gestão hospitalar.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-success mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">{feature.title}</p>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="secondary" size="lg">
                  <Monitor className="mr-2 h-5 w-5" />
                  Ver Demonstração do Dashboard
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-elegant">
                <CardContent className="p-0">
                  <div className="bg-gradient-primary p-6 text-primary-foreground rounded-t-lg">
                    <h3 className="text-xl font-semibold mb-2">Dashboard em Tempo Real</h3>
                    <p className="text-primary-foreground/90">Visão geral dos seus plantões</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Plantões Ativos</span>
                      <span className="font-semibold text-success">127</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Médicos Disponíveis</span>
                      <span className="font-semibold text-primary">89</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Taxa de Ocupação</span>
                      <span className="font-semibold text-secondary">94%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{width: '94%'}}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Segurança e <span className="text-success">confiabilidade</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Protegemos os dados médicos e financeiros da sua instituição com os 
              mais altos padrões de segurança e conformidade regulatória.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-card text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-success mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Conformidade LGPD
                </h3>
                <p className="text-muted-foreground">
                  Totalmente adequado à Lei Geral de Proteção de Dados
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card text-center">
              <CardContent className="p-6">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Documentação Segura
                </h3>
                <p className="text-muted-foreground">
                  Armazenamento criptografado de todos os documentos
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card text-center">
              <CardContent className="p-6">
                <Building2 className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Auditoria Completa
                </h3>
                <p className="text-muted-foreground">
                  Logs detalhados de todas as atividades na plataforma
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforme a gestão de plantões do seu hospital
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8">
            Junte-se a mais de 200 hospitais que já utilizam a EMMEHUB para 
            otimizar sua gestão médica e garantir cobertura completa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="xl">
              Solicitar Demonstração
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-secondary">
              Falar com Consultor
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hospitais;