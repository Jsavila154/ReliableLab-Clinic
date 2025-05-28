import React from "react";
import Contact from "@/components/Contact"; // Reutilizamos el componente de contacto existente

const ContactPage = () => {
  return (
    // El componente Contact ya tiene su propio padding y estructura de sección
    // por lo que no necesitamos envolverlo adicionalmente aquí a menos que se requiera un layout específico para la página
    <Contact />
  );
};

export default ContactPage;