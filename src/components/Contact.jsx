import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = ({ icon: Icon, title, content, delay }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

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
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay } }
      }}
      className="flex items-start gap-4"
    >
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
      <div>
        <h3 className="font-medium text-lg text-gray-800">{title}</h3>
        <p className="text-gray-600 whitespace-pre-line">{content}</p>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const sectionControls = useAnimation();
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 }); // Trigger when 10% of section is visible

  useEffect(() => {
    if (sectionInView) {
      sectionControls.start("visible");
    }
  }, [sectionControls, sectionInView]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar formulario (localStorage por ahora)
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      timestamp: new Date().toISOString(),
    };

    try {
      const existingMessages = JSON.parse(localStorage.getItem("contactMessages")) || [];
      localStorage.setItem("contactMessages", JSON.stringify([...existingMessages, formData]));
      
      toast({
        title: "Mensaje Enviado ¡Gracias!",
        description: "Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.",
        variant: "default",
      });
      e.target.reset(); // Limpiar el formulario
    } catch (error) {
      console.error("Error al guardar mensaje:", error);
      toast({
        title: "Error al Enviar",
        description: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.section 
      id="contact" 
      ref={sectionRef}
      initial="hidden"
      animate={sectionControls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 } }
      }}
      className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Ponte en Contacto</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para responder tus preguntas, agendar tus citas o cualquier consulta que tengas. ¡No dudes en contactarnos!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <motion.div
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            className="lg:col-span-2 bg-white p-8 rounded-xl shadow-xl space-y-8"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">Información de Contacto</h3>
            
            <ContactInfo 
              icon={MapPin} 
              title="Nuestra Ubicación" 
              content="Av. Principal 123, Ciudad Médica, CP 12345"
              delay={0.1}
            />
            
            <ContactInfo 
              icon={Phone} 
              title="Llámanos" 
              content="+1 (555) 123-4567 (Principal)\n+1 (555) 987-6543 (Citas)"
              delay={0.2}
            />
            
            <ContactInfo 
              icon={Mail} 
              title="Escríbenos" 
              content="informes@reliablelab-clinic.com\ncitas@reliablelab-clinic.com"
              delay={0.3}
            />
            
            <ContactInfo 
              icon={Clock} 
              title="Horario de Atención" 
              content="Lunes a Viernes: 7:00 AM - 7:00 PM\nSábados: 8:00 AM - 2:00 PM\nDomingos: Cerrado"
              delay={0.4}
            />
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
            className="lg:col-span-3 bg-white p-8 rounded-xl shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 border-b pb-3">Envíanos un Mensaje Directo</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Nombre Completo*
                  </label>
                  <Input id="name" name="name" placeholder="Ej: María López" required />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Correo Electrónico*
                  </label>
                  <Input id="email" name="email" type="email" placeholder="Ej: maria.lopez@correo.com" required />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Teléfono (Opcional)
                </label>
                <Input id="phone" name="phone" placeholder="Ej: (555) 123-4567" />
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  Asunto*
                </label>
                <Input id="subject" name="subject" placeholder="Ej: Consulta sobre análisis" required />
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Tu Mensaje*
                </label>
                <Textarea id="message" name="message" placeholder="Escribe aquí tu consulta o mensaje detallado..." rows={5} required />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
                Enviar Mensaje
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;