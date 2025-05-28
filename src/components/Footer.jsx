import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/b86d968a-7879-41d4-9b0a-b4bb3f4ea4fa/aee24181bde75c6000f07d9b6e4ba315.png";
  const socialLinks = {
    facebook: "https://www.facebook.com/profile.php?id=61576637048138",
    instagram: "https://www.instagram.com/reliablelab_clinic/",
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img src={logoUrl} alt="Reliablelab-Clinic Logo" className="h-16" />
            </Link>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              Laboratorio clínico de vanguardia, comprometidos con tu salud y bienestar a través de diagnósticos precisos y atención de calidad profesional.
            </p>
            <div className="flex space-x-4">
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors" aria-label="Facebook">
                  <Facebook size={22} />
                </a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors" aria-label="Instagram">
                  <Instagram size={22} />
                </a>
              )}
            </div>
          </div>
          
          <div>
            <p className="font-semibold text-lg mb-5 text-slate-100">Navegación</p>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-secondary transition-colors text-sm">Inicio</Link></li>
              <li><Link to="/servicios" className="text-slate-400 hover:text-secondary transition-colors text-sm">Servicios</Link></li>
              <li><Link to="/paquetes-descuentos" className="text-slate-400 hover:text-secondary transition-colors text-sm">Paquetes y Descuentos</Link></li>
              <li><Link to="/calendario-eventos" className="text-slate-400 hover:text-secondary transition-colors text-sm">Eventos</Link></li>
              <li><Link to="/contacto" className="text-slate-400 hover:text-secondary transition-colors text-sm">Contacto</Link></li>
            </ul>
          </div>
          
          <div>
             <p className="font-semibold text-lg mb-5 text-slate-100">Información Legal</p>
            <ul className="space-y-3">
              <li><Link to="/legal" className="text-slate-400 hover:text-secondary transition-colors text-sm">Aviso Legal Completo</Link></li>
              <li><Link to="/legal" className="text-slate-400 hover:text-secondary transition-colors text-sm">Política de Privacidad</Link></li>
              <li><Link to="/legal" className="text-slate-400 hover:text-secondary transition-colors text-sm">Términos y Condiciones</Link></li>
               <li><Link to="/legal" className="text-slate-400 hover:text-secondary transition-colors text-sm">Política de Cookies</Link></li>
            </ul>
          </div>
          
          <div>
            <p className="font-semibold text-lg mb-5 text-slate-100">Contáctanos</p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <Mail className="h-4 w-4 mr-3 mt-1 text-slate-400 flex-shrink-0" />
                <a href="mailto:contacto@reliablelab-clinic.com" className="text-slate-400 hover:text-secondary transition-colors">reliablelabclinic@gmail.com</a>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 mr-3 mt-1 text-slate-400 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-slate-400 hover:text-secondary transition-colors">+57 320 906 5503</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-1 text-slate-400 flex-shrink-0" />
                <span className="text-slate-400">Carrera #7 52 - 58 Chapinero, sede Bogotá</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 mt-8">
          <div className="text-center text-slate-500 text-xs">
            <p>
              © {new Date().getFullYear()} Reliablelab-Clinic. Todos los derechos reservados.
            </p>
             <p className="mt-1">Un proyecto de Hostinger Horizons AI con 💜</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;