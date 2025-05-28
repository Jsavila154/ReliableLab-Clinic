import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplet, Heart, Dna, Biohazard as Bacteria, Stethoscope, Syringe as Vial, TestTube, Microscope, MessageSquare } from 'lucide-react'; // MessageSquare para WhatsApp

const ServiceItemCard = ({ icon: Icon, title, description, delay, features }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const whatsappNumber = "1234567890"; // Reemplaza con tu número de WhatsApp
  const whatsappMessage = `Hola, estoy interesado/a en el servicio "${title}". ¿Podrían darme más información?`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
      }}
    >
      <Card className="service-card h-full flex flex-col border-t-4 border-t-primary hover:border-t-secondary transition-colors shadow-lg hover:shadow-xl bg-white">
        <CardHeader className="pb-4">
          <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl text-gray-800">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-base mb-4 text-gray-600">{description}</CardDescription>
          {features && features.length > 0 && (
            <>
              <p className="font-semibold mb-2 text-gray-700">Principales análisis incluidos:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </>
          )}
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full group border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary focus:ring-secondary">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-4 w-4 mr-2" />
              Solicitar por WhatsApp
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const ServicesPage = () => {
  const pageControls = useAnimation();
  const pageRef = useRef(null);
  const pageInView = useInView(pageRef, { once: true, amount: 0.05 });

  useEffect(() => {
    if (pageInView) {
      pageControls.start("visible");
    }
  }, [pageControls, pageInView]);

  const servicesList = [
    {
      icon: Droplet,
      title: "Análisis de Sangre Completos",
      description: "Evaluaciones exhaustivas de hematología y bioquímica para un panorama completo de tu salud.",
      features: ["Hemograma completo", "Perfil lipídico", "Glucosa", "Función renal y hepática"]
    },
    {
      icon: Bacteria,
      title: "Microbiología Clínica",
      description: "Detección e identificación de microorganismos patógenos y estudios de sensibilidad a antibióticos.",
      features: ["Cultivos bacterianos", "Urocultivo", "Coprocultivo", "Pruebas micológicas"]
    },
    {
      icon: Dna,
      title: "Pruebas Genéticas",
      description: "Análisis de ADN para predisposición a enfermedades, farmacogenética y estudios de paternidad.",
      features: ["Paneles de cáncer hereditario", "Pruebas de intolerancia alimentaria", "Estudios de portadores"]
    },
    {
      icon: Heart,
      title: "Marcadores Cardíacos",
      description: "Evaluación de enzimas y proteínas clave para el diagnóstico y seguimiento de la salud cardiovascular.",
      features: ["Troponina", "CK-MB", "Mioglobina", "Péptido natriurético cerebral (BNP)"]
    },
    {
      icon: Stethoscope,
      title: "Chequeos Preventivos Integrales",
      description: "Paquetes diseñados para la detección temprana de enfermedades según edad, género y factores de riesgo.",
      features: ["Chequeo básico", "Chequeo ejecutivo", "Chequeo femenino/masculino"]
    },
    {
      icon: Vial,
      title: "Perfiles Hormonales",
      description: "Medición de niveles hormonales para evaluar el funcionamiento endocrino y detectar desequilibrios.",
      features: ["Perfil tiroideo", "Hormonas sexuales", "Cortisol", "Insulina"]
    },
    {
      icon: TestTube,
      title: "Inmunología y Alergias",
      description: "Estudios del sistema inmune y detección de anticuerpos específicos para alergias.",
      features: ["Paneles de alérgenos", "Inmunoglobulinas", "Pruebas de autoinmunidad"]
    },
    {
      icon: Microscope,
      title: "Análisis de Orina y Fluidos",
      description: "Exámenes microscópicos y químicos de orina y otros fluidos corporales.",
      features: ["Examen general de orina", "Análisis de líquido cefalorraquídeo", "Estudios citológicos"]
    }
  ];

  return (
    <motion.div
      ref={pageRef}
      initial="hidden"
      animate={pageControls}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 }} }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-16"
    >
      <header className="text-center mb-12 md:mb-16">
        <motion.h1 
          initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}
          className="text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          Nuestros Servicios Clínicos
        </motion.h1>
        <motion.p 
          initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.2}}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          En Reliablelab-Clinic, ofrecemos una amplia gama de análisis con la más alta precisión y tecnología para el cuidado integral de tu salud. Contáctanos para más detalles.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          <ServiceItemCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            features={service.features}
            delay={index * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesPage;