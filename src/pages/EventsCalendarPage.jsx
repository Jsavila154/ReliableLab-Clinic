import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// Button ya no es necesario aquí si eliminamos el botón "Más Información"
import { CalendarDays, MapPin, Clock } from 'lucide-react'; // Info icon removido

const EventCard = ({ title, date, time, location, description, delay }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
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
      <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-primary bg-white">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl md:text-2xl text-primary">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow space-y-3">
          <div className="flex items-center text-gray-700">
            <CalendarDays className="h-5 w-5 mr-2 text-secondary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Clock className="h-5 w-5 mr-2 text-secondary" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <MapPin className="h-5 w-5 mr-2 text-secondary" />
            <span>{location}</span>
          </div>
          <CardDescription className="text-base pt-2 text-gray-600">{description}</CardDescription>
        </CardContent>
        {/* CardFooter y Button eliminados */}
      </Card>
    </motion.div>
  );
};

const EventsCalendarPage = () => {
  const pageControls = useAnimation();
  const pageRef = useRef(null);
  const pageInView = useInView(pageRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (pageInView) {
      pageControls.start("visible");
    }
  }, [pageControls, pageInView]);

  const eventsList = [
    {
      title: "Jornada de Detección de Diabetes",
      date: "Sábado, 15 de Junio, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "Instalaciones de Reliablelab-Clinic",
      description: "Realizaremos pruebas gratuitas de glucosa en ayunas y ofreceremos asesoramiento sobre prevención y manejo de la diabetes. ¡Cupos limitados!"
    },
    {
      title: "Campaña de Salud Cardiovascular",
      date: "Viernes, 12 de Julio, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Plaza Central de la Ciudad",
      description: "Medición de presión arterial, perfil lipídico básico con descuento especial y charlas informativas sobre cuidado del corazón."
    },
    {
      title: "Semana de la Salud Femenina",
      date: "Lunes 5 - Viernes 9 de Agosto, 2025",
      time: "Durante horario de atención",
      location: "Instalaciones de Reliablelab-Clinic",
      description: "Paquetes especiales de Papanicolaou, densitometría ósea (referencia) y perfiles hormonales con descuentos. Agenda tu cita."
    },
    {
      title: "Webinar: Importancia de los Chequeos Preventivos",
      date: "Miércoles, 25 de Septiembre, 2025",
      time: "6:00 PM - 7:00 PM",
      location: "Online (Zoom)",
      description: "Únete a nuestro webinar gratuito donde nuestros especialistas discutirán la importancia de los análisis preventivos para mantener una buena salud. Regístrate en nuestro sitio web."
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
          Calendario de Eventos y Campañas
        </motion.h1>
        <motion.p 
          initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.2}}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Mantente informado sobre nuestras próximas jornadas de salud, campañas de prevención y eventos especiales. ¡Tu bienestar es nuestra prioridad!
        </motion.p>
      </header>

      {eventsList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventsList.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
              delay={index * 0.15}
            />
          ))}
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-12"
        >
          <CalendarDays className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">No hay eventos programados por el momento.</h2>
          <p className="text-gray-500">Vuelve pronto para conocer nuestras próximas actividades o síguenos en redes sociales.</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default EventsCalendarPage;