
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplet, Heart, Dna, Biohazard as Bacteria, Stethoscope, Syringe as Vial } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
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
      <Card className="service-card h-full border-t-4 border-t-primary hover:border-t-secondary transition-colors">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="ghost" className="p-0 h-auto group">
            <span className="mr-2">Ver detalles</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  const services = [
    {
      icon: Droplet,
      title: "Análisis de sangre",
      description: "Análisis completos de sangre para evaluar su salud general, detectar infecciones y monitorear enfermedades crónicas."
    },
    {
      icon: Bacteria,
      title: "Microbiología",
      description: "Identificación de microorganismos causantes de infecciones mediante cultivos y pruebas de sensibilidad a antibióticos."
    },
    {
      icon: Dna,
      title: "Genética",
      description: "Pruebas genéticas para identificar predisposiciones a enfermedades hereditarias y personalizar tratamientos."
    },
    {
      icon: Heart,
      title: "Cardiología",
      description: "Evaluación de marcadores cardíacos para diagnosticar y monitorear enfermedades cardiovasculares."
    },
    {
      icon: Stethoscope,
      title: "Chequeos preventivos",
      description: "Paquetes de análisis preventivos personalizados según edad, género y factores de riesgo."
    },
    {
      icon: Vial,
      title: "Análisis hormonales",
      description: "Evaluación completa del perfil hormonal para diagnosticar desequilibrios y trastornos endocrinos."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de análisis clínicos con la más alta precisión y tecnología de vanguardia para el diagnóstico y seguimiento de su salud.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
