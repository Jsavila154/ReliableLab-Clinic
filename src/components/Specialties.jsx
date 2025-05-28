
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Heart, Brain, Heart as Lungs, Heart as Kidney, Baby, Dna } from 'lucide-react';

const SpecialtyItem = ({ icon: Icon, title, description, index }) => {
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
        hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
        visible: { 
          opacity: 1, 
          x: 0, 
          transition: { 
            duration: 0.6, 
            delay: index * 0.1 
          } 
        }
      }}
      className="flex gap-4 p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const Specialties = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  const specialties = [
    {
      icon: Heart,
      title: "Cardiología",
      description: "Análisis especializados para la detección y seguimiento de enfermedades cardiovasculares."
    },
    {
      icon: Brain,
      title: "Neurología",
      description: "Pruebas diagnósticas para trastornos neurológicos y enfermedades neurodegenerativas."
    },
    {
      icon: Lungs,
      title: "Neumología",
      description: "Evaluación de la función pulmonar y diagnóstico de enfermedades respiratorias."
    },
    {
      icon: Kidney,
      title: "Nefrología",
      description: "Análisis para evaluar la función renal y detectar enfermedades renales."
    },
    {
      icon: Baby,
      title: "Pediatría",
      description: "Pruebas adaptadas para niños de todas las edades, desde recién nacidos hasta adolescentes."
    },
    {
      icon: Dna,
      title: "Genética Clínica",
      description: "Estudios genéticos avanzados para diagnóstico de enfermedades hereditarias y asesoramiento."
    }
  ];

  return (
    <section id="specialties" className="py-20 bg-gradient-to-b from-white to-gray-50">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Especialidades Médicas</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestro laboratorio ofrece análisis especializados para diversas áreas médicas, garantizando un diagnóstico preciso para cada especialidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <SpecialtyItem
              key={index}
              icon={specialty.icon}
              title={specialty.title}
              description={specialty.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
