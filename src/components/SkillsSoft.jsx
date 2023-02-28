import React from 'react'
import { motion } from 'framer-motion'

const SkillsSoft = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="skills__section softskills">
      <h5 className="skills__h5 softskills">SOFTSKILLS</h5>
      <section className="skills__text">
        <span className="skills__span"><span className='skills__span--bold'>+</span> COMUNICACIÓN EFECTIVA, COLABORÉ EN COORDINACIÓN DE PROYECTOS</span>
        <span className="skills__span"><span className='skills__span--bold'>+</span> TRABAJO EN EQUIPO, TRABAJE EN EQUIPOS DE DISEÑO Y PROYECTO UNIFICADOS</span>
        <span className="skills__span"><span className='skills__span--bold'>+</span> RESOLUCIÓN DE PROBLEMAS, PARTICIPE EN MESAS PARTICIPATIVAS EN LOS BARRIOS</span>
      </section>
    </motion.section>
  );
}

export default SkillsSoft