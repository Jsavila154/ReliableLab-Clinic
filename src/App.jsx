import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import useScrollAnimation from "@/hooks/useScrollAnimation";

// Pages
import HomePage from "@/pages/HomePage";
// AboutUsPage ya no existe, su contenido se integra en HomePage
import ServicesPage from "@/pages/ServicesPage";
import LegalPage from "@/pages/LegalPage";
import PackagesPage from "@/pages/PackagesPage";
import EventsCalendarPage from "@/pages/EventsCalendarPage";
import ContactPage from "@/pages/ContactPage"; 

const App = () => {
  const location = useLocation();

  useEffect(() => {
    let pageTitle = "Reliablelab-Clinic - Laboratorio Clínico de Confianza";
    let metaDescriptionContent = "Reliablelab-Clinic: Laboratorio clínico de vanguardia con tecnología de última generación y profesionales altamente calificados para análisis precisos y confiables.";

    switch (location.pathname) {
      case "/":
        pageTitle = "Inicio | Reliablelab-Clinic";
        metaDescriptionContent = "Reliablelab-Clinic: Conoce nuestra misión, visión y servicios. Laboratorio clínico de vanguardia para análisis precisos y confiables.";
        break;
      // Ya no hay /sobre-nosotros
      case "/servicios":
        pageTitle = "Servicios | Reliablelab-Clinic";
        metaDescriptionContent = "Descubre la amplia gama de servicios y análisis clínicos que ofrecemos en Reliablelab-Clinic.";
        break;
      case "/legal":
        pageTitle = "Aviso Legal | Reliablelab-Clinic";
        metaDescriptionContent = "Información legal, términos y condiciones de Reliablelab-Clinic.";
        break;
      case "/paquetes-descuentos":
        pageTitle = "Paquetes y Descuentos | Reliablelab-Clinic";
        metaDescriptionContent = "Consulta nuestros paquetes especiales y descuentos en análisis clínicos en Reliablelab-Clinic.";
        break;
      case "/calendario-eventos":
        pageTitle = "Calendario de Eventos | Reliablelab-Clinic";
        metaDescriptionContent = "Mantente al día con los próximos eventos, campañas y jornadas de salud de Reliablelab-Clinic.";
        break;
      case "/contacto":
        pageTitle = "Contacto | Reliablelab-Clinic";
        metaDescriptionContent = "Ponte en contacto con Reliablelab-Clinic para consultas, citas y más información.";
        break;
      default:
        pageTitle = "Reliablelab-Clinic";
    }
    
    document.title = pageTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", metaDescriptionContent);
    } else {
      const newMetaDescription = document.createElement("meta");
      newMetaDescription.name = "description";
      newMetaDescription.content = metaDescriptionContent;
      document.head.appendChild(newMetaDescription);
    }
  }, [location.pathname]);

  useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 md:pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/sobre-nosotros" element={<AboutUsPage />} />  Eliminada */}
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/paquetes-descuentos" element={<PackagesPage />} />
          <Route path="/calendario-eventos" element={<EventsCalendarPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster />
    </div>
  );
};

export default App;