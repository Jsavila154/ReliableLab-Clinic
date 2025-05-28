import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact"; // El formulario de contacto se mostrará aquí
import { Target, Eye, Briefcase, Award, Users, Clock } from 'lucide-react'; // Iconos para Sobre Nosotros

// Componentes de la sección "Sobre Nosotros" integrados
const SectionTitle = ({ children, className = "" }) => (
  <h2 className={`text-3xl md:text-4xl font-bold mb-10 text-center text-primary ${className}`}>{children}</h2>
);

const TimelineItem = ({ year, title, description, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.2 } }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className="relative pl-8 sm:pl-32 py-6 group"
    >
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-200 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-primary bg-primary/10 rounded-full">
          {year}
        </time>
        <div className="text-xl font-bold text-slate-900">{title}</div>
      </div>
      <div className="text-slate-500">{description}</div>
    </motion.div>
  );
};

const AboutUsSection = () => {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (sectionInView) {
      controls.start("visible");
    }
  }, [controls, sectionInView]);

  const timelineEvents = [
    { year: "2019", title: "Fundación", description: "El proyecto nació como una iniciativa de un grupo de profesionales en ciencias de la salud, biotecnología y gestión sanitaria, quienes compartían una visión común: crear un laboratorio de referencia nacional e internacional que operara bajo los más altos estándares de calidad, seguridad y ética profesional." },
    { year: "2021", title: "Expansión Tecnológica", description: "Gracias a la capacitación, tuvimos una mejora continua, aumentamos nuestra capacidad, con respecto al recurso humano, elementos a implementar en el laboratorio, junto con la expansión de nuestros servicios." },
    { year: "2023", title: "Reconocimiento", description: "Nuestro laboratorio ha alcanzado importantes reconocimientos en el sector salud. Hoy, ReliableLab-Clinic se posiciona como un centro de referencia en diagnóstico clínico, sin manejo de contrarreferencia, recibiendo muestras de diversas regiones del país y participando activamente en redes internacionales de control de calidad." },
    { year: "2025", title: "Presente", description: "Nuestro crecimiento sostenido, compromiso con la innovación, la atención centrada en el paciente, han convertido a ReliableLab-Clinic en un ejemplo de excelencia y liderazgo en el ámbito del laboratorio clínico de alta complejidad." },
  ];

  const objectives = [
    "Optimizar la calidad de los resultados.",
    "Optimizar los procesos mediante tecnología y talento humano.",
    "Cumplir con normativas y estándares de acreditación.",
    "Mejorar la eficiencia operativa.",
    "Fortalecer la confianza y satisfacción de los clientes."
  ];

  return (
    <motion.section 
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, duration: 0.5 }} }}
      className="py-16 md:py-20 bg-white" // Fondo blanco para esta sección
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle>Conócenos Mejor</SectionTitle>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12 mb-16 items-center"
          variants={{ hidden: { opacity: 0, y:20 }, visible: { opacity: 1, y:0, transition: { duration: 0.6, delay: 0.1 }}}}
        >
          <div className="bg-primary/5 p-8 rounded-lg shadow-md">
            <Briefcase className="h-12 w-12 text-primary mx-auto md:mx-0 mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-3 text-center md:text-left">Nuestra Misión</h3>
            <p className="text-gray-700 text-center md:text-left">
              En ReliableLab-Clinic lideramos el diagnóstico clínico de alta complejidad con resultados confiables, precisos y oportunos. Impulsamos decisiones médicas con tecnología avanzada, ciencia rigurosa y un equipo humano excepcional. Con ética, innovación y calidad, transformamos la salud y posicionamos nuestro laboratorio como referente dentro y fuera de fronteras.
            </p>
          </div>
          <div className="bg-primary/5 p-8 rounded-lg shadow-md">
            <Eye className="h-12 w-12 text-primary mx-auto md:mx-0 mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-3 text-center md:text-left">Nuestra Visión</h3>
            <p className="text-gray-700 text-center md:text-left">
              En ReliableLab-Clinic proyectamos un crecimiento sólido y estratégico con metas claras. En los próximos cuatro años, nos consolidaremos como un laboratorio de alta complejidad reconocido a nivel nacional por nuestra precisión diagnóstica, eficiencia operativa y excelencia en el servicio.

              Ampliaremos nuestra cobertura con ocho sedes en Colombia, garantizando acceso oportuno, procesos confiables y atención de calidad. Aspiramos a ser líderes en el apoyo al diagnóstico médico, respaldados por un equipo humano calificado, comprometido con la mejora continua e impulsado por la ética, la innovación y la excelencia.

            </p>
          </div>
        </motion.div>
        
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-primary mb-10">Nuestra Trayectoria</h3>
          <div className="max-w-3xl mx-auto">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index} year={event.year} title={event.title} description={event.description} index={index} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-primary mb-10">Nuestros Objetivos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {objectives.map((objective, index) => (
               <motion.div 
                key={index}
                className="flex items-start p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={controls} // Usa los controles de la sección principal
                variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 + index * 0.1 }}}}
              >
                <Target className="h-8 w-8 text-secondary mr-4 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{objective}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};


const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUsSection /> {/* Sección "Sobre Nosotros" integrada */}
      {/* Las secciones Services, Equipment, Specialties y Testimonials se eliminan de HomePage */}
      {/* La sección Contact se renderiza directamente */}
      <Contact /> 
    </>
  );
};

export default HomePage;