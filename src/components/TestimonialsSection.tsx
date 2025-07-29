import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import doctorImage from "@/assets/doctor-testimonial.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dra. Maria Silva",
      role: "Cardiologista",
      hospital: "Hospital São Paulo",
      image: doctorImage,
      rating: 5,
      text: "A EMMEHUB revolucionou minha gestão de plantões. Agora tenho flexibilidade total no recebimento e ainda posso contratar seguros específicos para cada operação. Recomendo para todos os colegas.",
    },
    {
      name: "Dr. João Santos",
      role: "Cirurgião",
      hospital: "Hospital Albert Einstein",
      image: doctorImage,
      rating: 5,
      text: "O sistema é incrível! A transparência nos pagamentos e a possibilidade de D+0 até D+30 me deram muito mais controle financeiro. O suporte também é excepcional.",
    },
    {
      name: "Dra. Ana Costa",
      role: "Pediatra",
      hospital: "Hospital Sírio-Libanês",
      image: doctorImage,
      rating: 5,
      text: "Além da facilidade para encontrar plantões, a assessoria de investimentos me ajudou muito no planejamento da aposentadoria. Uma plataforma completa para médicos.",
    },
  ];

  const hospitalTestimonials = [
    {
      name: "Carlos Mendes",
      role: "Diretor Médico",
      hospital: "Hospital das Clínicas",
      text: "A EMMEHUB otimizou nossa alocação de médicos. O dashboard em tempo real é fantástico e o processo de contratação é muito mais simples e seguro.",
    },
    {
      name: "Patricia Oliveira",
      role: "Coordenadora de RH",
      hospital: "Hospital Alemão Oswaldo Cruz",
      text: "Conseguimos reduzir significativamente o tempo de contratação de médicos para plantões. A plataforma é intuitiva e oferece total segurança.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que dizem nossos <span className="text-primary">parceiros</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Médicos e hospitais confiam na EMMEHUB para uma gestão de plantões 
            mais eficiente, segura e transparente.
          </p>
        </div>

        {/* Depoimentos de Médicos */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-primary">
            Depoimentos de Médicos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-primary/20 mb-2" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-primary">{testimonial.hospital}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Depoimentos de Hospitais */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-secondary">
            Depoimentos de Hospitais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {hospitalTestimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 border-0 shadow-card">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-secondary/20 mb-4" />
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-secondary">{testimonial.hospital}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;