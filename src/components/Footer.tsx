import { Link } from "react-router-dom";
import { Stethoscope, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-primary rounded-lg shadow-card">
                <Stethoscope className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                EMMEHUB
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Conectando médicos e hospitais de forma eficaz, segura e transparente. 
              A plataforma de gestão de plantões que você pode confiar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/medicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Para Médicos
                </Link>
              </li>
              <li>
                <Link to="/hospitais" className="text-muted-foreground hover:text-primary transition-colors">
                  Para Hospitais
                </Link>
              </li>
              <li>
                <Link to="/seguros" className="text-muted-foreground hover:text-primary transition-colors">
                  Seguros e Investimentos
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contato@emmehub.com.br</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 EMMEHUB. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;