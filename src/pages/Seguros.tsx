import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Shield, 
  TrendingUp, 
  Heart, 
  Users, 
  CheckCircle,
  Calculator,
  FileText,
  DollarSign,
  PiggyBank,
  Award
} from "lucide-react";
import financeImage from "@/assets/medical-finance.jpg";

const Seguros = () => {
  const insuranceTypes = [
    {
      icon: Heart,
      title: "Seguro para Cirurgias",
      description: "Proteção específica para procedimentos cirúrgicos de alto risco.",
      coverage: "Até R$ 5 milhões",
      features: ["Cobertura internacional", "Sem carência", "Atendimento 24h"]
    },
    {
      icon: Shield,
      title: "Responsabilidade Civil",
      description: "Cobertura contra ações judiciais e danos a terceiros.",
      coverage: "Até R$ 2 milhões",
      features: ["Defesa jurídica", "Custos processuais", "Danos morais"]
    },
    {
      icon: FileText,
      title: "Erro Médico",
      description: "Proteção contra alegações de erro ou negligência médica.",
      coverage: "Até R$ 3 milhões",
      features: ["Perícia especializada", "Assessoria jurídica", "Cobertura retroativa"]
    }
  ];

  const investmentServices = [
    {
      title: "Planejamento de Aposentadoria",
      description: "Estratégias personalizadas para garantir sua independência financeira.",
      icon: PiggyBank
    },
    {
      title: "Investimentos Conservadores",
      description: "Opções de baixo risco para preservação e crescimento do patrimônio.",
      icon: TrendingUp
    },
    {
      title: "Previdência Privada",
      description: "Planos de previdência com benefícios fiscais para médicos.",
      icon: Award
    },
    {
      title: "Gestão Patrimonial",
      description: "Administração profissional dos seus recursos e investimentos.",
      icon: Calculator
    }
  ];

  const benefits = [
    "Assessoria financeira gratuita para usuários EMMEHUB",
    "Simulações e projeções personalizadas",
    "Acompanhamento mensal da carteira",
    "Relatórios detalhados de performance",
    "Acesso a produtos exclusivos",
    "Consultoria para planejamento sucessório"
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
                Seguros & Investimentos
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Proteja seu presente e <br />
                <span className="text-primary-glow">garanta seu futuro</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Seguros específicos para médicos e assessoria de investimentos 
                especializada para construir uma aposentadoria segura e tranquila.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="xl">
                  Simular Seguro
                </Button>
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                  Consultoria Gratuita
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={financeImage}
                alt="Planejamento financeiro e seguros para médicos"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Seguros <span className="text-success">específicos</span> para médicos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Parcerias com as melhores seguradoras do mercado para oferecer 
              coberturas específicas para sua especialidade e tipo de procedimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insuranceTypes.map((insurance, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="p-4 bg-success/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-success/20 transition-colors">
                      <insurance.icon className="h-8 w-8 text-success" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {insurance.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {insurance.description}
                    </p>
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      {insurance.coverage}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    {insurance.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="success" className="w-full mt-6">
                    Solicitar Cotação
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Advisory */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Assessoria de <span className="text-primary">investimentos</span> especializada
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nossa equipe de consultores especializados entende as necessidades 
                específicas dos profissionais da saúde e desenvolve estratégias 
                personalizadas para cada perfil.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg">
                <Calculator className="mr-2 h-5 w-5" />
                Fazer Simulação Gratuita
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {investmentServices.map((service, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Resultados que <span className="text-secondary">comprovam</span> nossa expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">R$ 2.5B</div>
              <p className="text-muted-foreground">Patrimônio sob gestão</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">+3.000</div>
              <p className="text-muted-foreground">Médicos atendidos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2">15%</div>
              <p className="text-muted-foreground">Rentabilidade média anual</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-warning mb-2">98%</div>
              <p className="text-muted-foreground">Satisfação dos clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como <span className="text-primary">funciona</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Um processo simples e transparente para proteger seu presente e 
              construir um futuro financeiro sólido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Análise do Perfil
              </h3>
              <p className="text-muted-foreground">
                Avaliamos suas necessidades, objetivos e perfil de risco.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Proposta Personalizada
              </h3>
              <p className="text-muted-foreground">
                Criamos uma estratégia específica para suas necessidades.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Implementação
              </h3>
              <p className="text-muted-foreground">
                Colocamos o plano em ação com total transparência.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Acompanhamento
              </h3>
              <p className="text-muted-foreground">
                Monitoramos e ajustamos a estratégia continuamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-success text-success-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Proteja sua carreira e construa seu patrimônio
          </h2>
          <p className="text-xl text-success-foreground/90 mb-8">
            Fale com nossos especialistas e descubra como podemos ajudar você a 
            ter mais segurança no presente e tranquilidade no futuro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl">
              <DollarSign className="mr-2 h-5 w-5" />
              Consultoria Gratuita
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-success">
              Simular Investimento
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Seguros;