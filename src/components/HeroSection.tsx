import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Conecte-se a plantões médicos de forma{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  segura e transparente
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A EMMEHUB é a plataforma que conecta médicos e hospitais de forma eficaz, 
                oferecendo flexibilidade no recebimento, seguros específicos e assessoria 
                de investimentos para garantir seu futuro.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="medical" size="xl" className="group">
                Cadastre-se Agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Saiba Mais
              </Button>
            </div>

            {/* Benefícios */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">100% Seguro</p>
                  <p className="text-sm text-muted-foreground">Dados protegidos</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Clock className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">D+0 a D+30</p>
                  <p className="text-sm text-muted-foreground">Flexibilidade total</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-success/10 rounded-lg">
                  <Users className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="font-medium text-foreground">+5.000 médicos</p>
                  <p className="text-sm text-muted-foreground">Rede confiável</p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="Médicos e enfermeiros usando tecnologia para gerenciar plantões"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Card flutuante */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-card">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <div>
                  <p className="font-medium text-sm">Sistema Online</p>
                  <p className="text-xs text-muted-foreground">24/7 disponível</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;