import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ShieldCheck, FileText, Users, Lock } from 'lucide-react';

const Section = ({ title, icon: Icon, children, delay }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
      }}
      className="mb-10 p-6 bg-white rounded-lg shadow-md"
    >
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-primary mr-3" />
        <h2 className="text-2xl font-semibold text-primary">{title}</h2>
      </div>
      <div className="prose max-w-none text-gray-700">
        {children}
      </div>
    </motion.section>
  );
};


const LegalPage = () => {
  const pageControls = useAnimation();
  const pageRef = useRef(null);
  const pageInView = useInView(pageRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (pageInView) {
      pageControls.start("visible");
    }
  }, [pageControls, pageInView]);

  return (
    <motion.div 
      ref={pageRef}
      initial="hidden"
      animate={pageControls}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 }} }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-16"
    >
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Información Legal</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Consulta nuestros términos, condiciones y políticas de privacidad.
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        <Section title="Términos y Condiciones del Servicio" icon={FileText} delay={0.1}>
          <p>Bienvenido a Reliablelab-Clinic. Al utilizar nuestros servicios, usted acepta estar sujeto a los siguientes términos y condiciones. Por favor, léalos cuidadosamente.</p>
          <p><strong>Uso de los Servicios:</strong> Nuestros servicios están destinados a proporcionar análisis clínicos con fines diagnósticos y de seguimiento de la salud. Los resultados deben ser interpretados por personal médico cualificado.</p>
          <p><strong>Resultados y Confidencialidad:</strong> Nos comprometemos a mantener la confidencialidad de sus resultados y datos personales de acuerdo con las leyes aplicables. Los resultados se entregan directamente al paciente o a su médico tratante, según lo autorizado.</p>
          <p><strong>Pagos:</strong> Los pagos por los servicios deben realizarse al momento de la toma de muestra, a menos que existan acuerdos previos con aseguradoras o convenios.</p>
          <p><strong>Limitación de Responsabilidad:</strong> Reliablelab-Clinic no se hace responsable por interpretaciones incorrectas de los resultados por parte de terceros no autorizados o por decisiones médicas tomadas sin la consulta de un profesional de la salud cualificado.</p>
        </Section>

        <Section title="Política de Privacidad y Protección de Datos" icon={ShieldCheck} delay={0.2}>
          <p>En Reliablelab-Clinic, la privacidad y seguridad de sus datos personales son de suma importancia. Esta política describe cómo recopilamos, usamos y protegemos su información.</p>
          <p><strong>Información Recopilada:</strong> Recopilamos información personal necesaria para la prestación de nuestros servicios, incluyendo datos de identificación, historial médico relevante y datos de contacto.</p>
          <p><strong>Uso de la Información:</strong> Su información se utiliza para procesar sus análisis, generar resultados, fines de facturación y para comunicarnos con usted o su médico. No compartimos su información con terceros sin su consentimiento explícito, excepto cuando sea requerido por ley.</p>
          <p><strong>Seguridad de los Datos:</strong> Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos contra acceso no autorizado, alteración, divulgación o destrucción.</p>
          <p><strong>Derechos ARCO:</strong> Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, por favor contáctenos.</p>
        </Section>

        <Section title="Consentimiento Informado" icon={Users} delay={0.3}>
          <p>Antes de realizar cualquier análisis, se le solicitará su consentimiento informado. Esto implica que usted ha sido informado sobre el propósito del análisis, el procedimiento, los posibles riesgos (mínimos, como una leve molestia en la punción) y cómo se utilizarán sus resultados.</p>
          <p>Usted tiene derecho a hacer preguntas y a retirar su consentimiento en cualquier momento antes de la toma de muestra, sin que esto afecte la calidad de la atención que recibe.</p>
        </Section>
        
        <Section title="Política de Cookies" icon={Lock} delay={0.4}>
          <p>Nuestro sitio web puede utilizar cookies para mejorar su experiencia de usuario. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo.</p>
          <p><strong>Tipos de Cookies:</strong> Usamos cookies esenciales para el funcionamiento del sitio, cookies de rendimiento para analizar cómo los usuarios interactúan con el sitio (de forma anónima), y cookies funcionales para recordar sus preferencias.</p>
          <p><strong>Gestión de Cookies:</strong> Puede gestionar sus preferencias de cookies a través de la configuración de su navegador. Tenga en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio.</p>
          <p>No utilizamos cookies para recopilar información personal identificable sin su consentimiento.</p>
        </Section>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center text-sm text-gray-500"
        >
          <p>Última actualización: 27 de mayo de 2025.</p>
          <p>Si tiene alguna pregunta sobre nuestra información legal, no dude en <a href="/contacto" className="text-secondary hover:underline">contactarnos</a>.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LegalPage;