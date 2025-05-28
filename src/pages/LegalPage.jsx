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
        <Section title="Marco legal" icon={FileText} delay={0.1}>
          <p><strong>LEY 9 DE 1.979</strong></p>
          <p>Mediante la cual se dictan medidas sanitarias para la protección del medio ambiente.</p>

          <p><strong>Decreto 1917/1994</strong></p>
          <p>Por el cual se adoptan los requisitos y condiciones técnico-sanitarias para el funcionamiento, acreditación y licenciamiento de laboratorios clínicos y de salud pública.</p>

          <p><strong>Decreto 77/1997</strong></p>
          <p>Por el cual se deroga totalmente el Decreto 1917 del 5 de agosto de 1994 y se reglamenta el título VII de la Ley 9ª de 1979, en cuanto a los requisitos y condiciones técnico-sanitarias para el funcionamiento de los laboratorios clínicos y se dictan otras disposiciones sobre la materia.</p>
          <p>La salud es un bien de interés público, en consecuencia, son de orden público las disposiciones contenidas en el presente decreto, que regulan todas las actividades relacionadas con los laboratorios clínicos tanto públicos como privados y las condiciones técnico-sanitarias que deben cumplir estos, para su funcionamiento.</p>

          <p><strong>Decreto 3770/2004</strong></p>
          <p>Mediante el cual se reglamenta el régimen de registros sanitarios y la vigilancia sanitaria de los reactivos de diagnóstico in vitro para exámenes de especímenes de origen humano con todo lo concerniente a su producción, almacenamiento, distribución, importación, exportación comercialización y uso.</p>

          <p><strong>Decreto 4741/2.005</strong></p>
          <p>Por el cual se reglamenta parcialmente la prevención y manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral.</p>

          <p><strong>Decreto 3518/2006</strong></p>
          <p>Por el cual se crea y reglamenta el Sistema de Vigilancia en Salud Pública y se dictan otras disposiciones.</p>
          <p>Su objeto es crear y reglamentar el Sistema de Vigilancia en Salud Pública, sivigila, para la provisión en forma sistemática y oportuna, de información sobre la dinámica de los eventos que afecten o puedan afectar la salud de la población, con el fin de orientar las políticas y la planificación en salud pública; tomar las decisiones para la prevención y control de enfermedades y factores de riesgo en salud; optimizar el seguimiento y evaluación de las intervenciones; racionalizar y optimizar los recursos disponibles y lograr la efectividad de las acciones en esta materia, propendiendo por la protección de la salud individual y colectiva.</p>

          <p><strong>Decreto 1011/2006</strong></p>
          <p>Por el cual se establece el Sistema obligatorio de Garantía de Calidad de la Atención de Salud del Sistema General de Seguridad Social en Salud.</p>

          <p><strong>Decreto 2323/2.006</strong></p>
          <p>Por el cual se reglamenta parcialmente la ley 9ª de 1979 en relación con la Red Nacional de Laboratorios y se dictan otras disposiciones.</p>
          <p>Tiene por objeto organizar la red nacional de laboratorios y reglamentar su gestión, con el fin de garantizar su adecuado funcionamiento y operación en las líneas estratégicas del laboratorio para la vigilancia en salud pública, la gestión de la calidad, la prestación de servicios y la investigación.</p>
        </Section>



          <Section title="Politicas de calidad" icon={FileText} delay={0.1}>
          <p><strong>1. Compromiso con la Calidad</strong></p>
          <p>Reliablelab-clinic se compromete a garantizar la precisión, confiabilidad y seguridad de los análisis clínicos, cumpliendo con las normas nacionales e internacionales de calidad.</p>

          <p><strong>2. Cumplimiento Normativo</strong></p>
          <p>Nuestro laboratorio opera bajo los siguientes estándares y regulaciones:</p>
          <ul>
            <li>ISO 15189: Norma internacional que establece requisitos específicos para la calidad y competencia de los laboratorios clínicos.</li>
            <li>ISO 9001: Sistema de gestión de calidad que garantiza la mejora continua en los procesos.</li>
            <li>Resolución 207 de 2020 del Ministerio de Salud de Colombia: Define estándares de acreditación para laboratorios clínicos en el país.</li>
            <li>Decreto 2323 de 2006: Regula la Red Nacional de Laboratorios y establece requisitos de calidad en salud pública.</li>
            <li>Normas de bioseguridad de la OMS: Protocolos internacionales para la seguridad en el manejo de muestras biológicas.</li>
          </ul>

          <p><strong>3. Seguridad y Protección del Paciente</strong></p>
          <p>Garantizamos la seguridad de los pacientes y del personal mediante la implementación rigurosa de Elementos de Protección Personal (EPP), protocolos de bioseguridad y monitoreo constante de la flora bacteriana.</p>

          <p><strong>4. Gestión de Procesos Logísticos</strong></p>
          <p>Nos aseguramos de la correcta gestión en la recolección, transporte, almacenamiento y procesamiento de muestras, cumpliendo con requisitos de trazabilidad y conservación de la cadena de frío.</p>

          <p><strong>5. Mejora Continua</strong></p>
          <p>Implementamos procesos de auditoría interna y externa para evaluar constantemente el desempeño, identificando oportunidades de mejora y adoptando nuevas tecnologías que optimicen nuestros servicios.</p>

          <p><strong>6. Ética y Responsabilidad</strong></p>
          <p>Promovemos la transparencia y ética profesional en cada etapa del proceso, garantizando el respeto por la confidencialidad y los derechos de nuestros pacientes.</p>
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