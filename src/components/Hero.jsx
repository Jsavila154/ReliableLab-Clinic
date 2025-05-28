import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, Activity, FlaskRound as Flask } from 'lucide-react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <motion.div
          initial={{ opacity: 0, scale:0.5 }}
          animate={{ opacity: 1, scale:1 }}
          transition={{ duration: 2, ease: "circOut" }}
          className="w-96 h-96 rounded-full bg-purple-300 blur-3xl blob-animation"
        />
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-10">
        <motion.div
          initial={{ opacity: 0, scale:0.5 }}
          animate={{ opacity: 1, scale:1 }}
          transition={{ duration: 2, delay: 0.5, ease: "circOut" }}
          className="w-80 h-80 rounded-full bg-blue-300 blur-3xl blob-animation animation-delay-2000"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Análisis clínicos de <span className="text-gradient">alta precisión</span> y confianza
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto lg:mx-0">
              En Reliablelab-Clinic, combinamos tecnología de vanguardia con un equipo de profesionales altamente calificados para ofrecerte resultados diagnósticos confiables y un servicio excepcional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="group bg-secondary hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <Link to="/servicios">
                  Nuestros Servicios
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <Link to="/contacto">
                  Contáctanos
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex flex-col items-center lg:items-start p-4 rounded-lg bg-white/50 shadow-md"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-secondary mb-3">
                  <Microscope size={28} />
                </div>
                <h3 className="text-3xl font-bold text-primary">+50</h3>
                <p className="text-gray-600">Tipos de análisis</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-col items-center lg:items-start p-4 rounded-lg bg-white/50 shadow-md"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-secondary mb-3">
                  <Activity size={28} />
                </div>
                <h3 className="text-3xl font-bold text-primary">+10K</h3>
                <p className="text-gray-600">Pacientes atendidos</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-col items-center lg:items-start p-4 rounded-lg bg-white/50 shadow-md"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-secondary mb-3">
                  <Flask size={28} />
                </div>
                <h3 className="text-3xl font-bold text-primary">15+</h3>
                <p className="text-gray-600">Años de experiencia</p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Hero image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/50 shadow-2xl">
                <img  alt="Equipo de laboratorio clínico moderno con microscopio y tubos de ensayo en un entorno profesional y limpio" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1602052577122-f73b9710adba" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;