import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, ShieldPlus, HeartPulse, Activity, MessageSquare } from 'lucide-react'; // MessageSquare para WhatsApp

const PackageCard = ({ icon: Icon, title, description, price, originalPrice, items, delay }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const whatsappNumber = "573209065503"; // Reemplaza con tu número de WhatsApp
  const whatsappMessage = `Hola, estoy interesado/a en el paquete "${title}" por $${price}. ¿Podrían darme más información?`;
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
      <Card className="h-full flex flex-col border-t-4 border-t-secondary hover:border-t-primary transition-colors shadow-xl hover:shadow-2xl bg-white">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between mb-3">
            <div className="w-16 h-16 rounded-lg bg-secondary/10 flex items-center justify-center mr-4 flex-shrink-0">
              <Icon className="h-8 w-8 text-secondary" />
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold text-primary">${price}</span>
              {originalPrice && (
                <span className="block text-sm text-gray-500 line-through">
                  Antes ${originalPrice}
                </span>
              )}
            </div>
          </div>
          <CardTitle className="text-2xl text-gray-800">{title}</CardTitle>
          <CardDescription className="text-base text-gray-600">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="font-semibold mb-2 text-gray-700">Este paquete incluye:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full group bg-secondary hover:bg-secondary/90 text-white focus:ring-secondary">
             <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-4 w-4 mr-2" />
              Adquirir por WhatsApp
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const PackagesPage = () => {
  const pageControls = useAnimation();
  const pageRef = useRef(null);
  const pageInView = useInView(pageRef, { once: true, amount: 0.05 });

  useEffect(() => {
    if (pageInView) {
      pageControls.start("visible");
    }
  }, [pageControls, pageInView]);

  const packagesList = [
    {
      icon: ShieldPlus,
      title: "Paquete Salud Básico",
      description: "Evaluación esencial para monitoreo anual de salud en adultos jóvenes (18-34 años).",
      price: "152.577",
      originalPrice: "217.968",
      items: [
        "Colesterol total", 
        "Colesterol HDL", 
        "Colesterol LDL", 
        "Triglicéridos", 
        "Glucosa", 
        "Hemograma IV", 
        "Uroanálisis/FFV", 
        "Prueba de treponema (VDRL)"
      ]
    },
    {
      icon: HeartPulse,
      title: "Paquete Salud Plus",
      description: "Evaluación ampliada con estudios especializados para diagnóstico preventivo.",
      price: "503.850",
      originalPrice: "719.786",
      items: [
        "Perfil lipídico completo", 
        "Creatinina", 
        "Hemograma IV", 
        "Uroanálisis", 
        "Prueba VDRL", 
        "Ecografía testicular Doppler", 
        "Hepatitis B (HBsAg)", 
        "VIH 1 y 2", 
        "TSH (tiroides)"
      ]
    },
    {
      icon: Activity,
      title: "Paquete Salud Premium",
      description: "Evaluación exhaustiva con tecnología avanzada para análisis integral.",
      price: "862.560",
      originalPrice: "1.232.259",
      items: [
        "Hemoglobina glicosilada", 
        "Nitrógeno ureico", 
        "Vitamina D", 
        "Radiografía de tórax", 
        "Ecografía abdominal total", 
        "Electrocardiograma", 
        "Perfil tiroideo completo", 
        "Estudios hepáticos y renales"
      ]
    },
    {
      icon: Gift,
      title: "Chequeo Salud Sexual",
      description: "Detección de enfermedades de transmisión sexual para vida sexual segura.",
      price: "278.587",
      originalPrice: "397.941",
      items: [
        "Chlamydia IgM", 
        "Herpes II IgM", 
        "Hepatitis B (HBsAg)", 
        "VIH 1 y 2 anticuerpos", 
        "Examen directo uretral", 
        "Serología VDRL"
      ]
    }
];

  const whatsappNumberContact = "573209065503"; // Reemplaza con tu número de WhatsApp
  const whatsappMessageContact = "Hola, me gustaría información sobre un paquete personalizado.";
  const whatsappLinkContact = `https://wa.me/${whatsappNumberContact}?text=${encodeURIComponent(whatsappMessageContact)}`;

  return (
    <motion.div
      ref={pageRef}
      initial="hidden"
      animate={pageControls}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 }} }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-16 bg-gradient-to-b from-purple-50 via-blue-50 to-white"
    >
      <header className="text-center mb-12 md:mb-16">
        <motion.h1 
          initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}
          className="text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          Paquetes y Descuentos Especiales
        </motion.h1>
        <motion.p 
          initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.2}}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Aprovecha nuestros paquetes diseñados para cuidar tu salud de forma integral y con ahorros significativos. Contáctanos por WhatsApp para más detalles.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {packagesList.map((pkg, index) => (
          <PackageCard
            key={index}
            icon={pkg.icon}
            title={pkg.title}
            description={pkg.description}
            price={pkg.price}
            originalPrice={pkg.originalPrice}
            items={pkg.items}
            delay={index * 0.15}
          />
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity:0, y:20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.6, delay: packagesList.length * 0.15 + 0.2}}
        className="text-center mt-16"
      >
        <p className="text-gray-700 text-lg mb-4">¿No encuentras el paquete que necesitas o tienes dudas?</p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white focus:ring-primary">
          <a href={whatsappLinkContact} target="_blank" rel="noopener noreferrer">
            <MessageSquare className="h-5 w-5 mr-2" />
            Consulta por WhatsApp
          </a>
        </Button>
      </motion.div>

    </motion.div>
  );
};

export default PackagesPage;