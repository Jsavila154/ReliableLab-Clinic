
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Equipment = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const equipment = [
    {
      name: "Analizador Hematológico",
      description: "Equipo automatizado para análisis completos de sangre con alta precisión y rapidez.",
      image: "analizador-hematologico"
    },
    {
      name: "Espectrofotómetro",
      description: "Tecnología avanzada para medir concentraciones de sustancias en muestras biológicas.",
      image: "espectrofotometro"
    },
    {
      name: "Secuenciador Genético",
      description: "Equipo de última generación para análisis de ADN y estudios genéticos personalizados.",
      image: "secuenciador-genetico"
    },
    {
      name: "Microscopio Digital",
      description: "Microscopio de alta resolución con capacidad de captura digital para análisis detallados.",
      image: "microscopio-digital"
    }
  ];

  return (
    <section id="equipment" className="py-20">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Equipamiento de Vanguardia</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Contamos con tecnología de última generación para garantizar resultados precisos y confiables en todos nuestros análisis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {equipment.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.6, 
                    delay: index * 0.2 
                  } 
                }
              }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img  alt={`Equipo de laboratorio: ${item.name}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1657778752500-9da406aa813f" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
