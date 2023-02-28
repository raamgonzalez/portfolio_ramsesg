import React from 'react'
import { motion } from 'framer-motion'

const SkillsSoftwares = () => {
  return (
    <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="skills__section softwares">
      <h5 className="skills__h5">SOFTWARES</h5>
      <section className="skills__description skills__description--gap">
        <section className="skills__text">
          <span className="skills__span"> <span className='skills__span--bold'>⤑</span> HTML</span>
          <span className="skills__span"> <span className='skills__span--bold'>⤑</span> CSS</span>
          <span className="skills__span"> <span className='skills__span--bold'>⤑</span> JAVASCRIPT</span>
          <span className="skills__span"> <span className='skills__span--bold'>⤑</span> REACT</span>
          <span className="skills__span"> <span className='skills__span--bold'>⤑</span> PYTHON</span>
          <span className="skills__span"> <span className='skills__span--bold'>⤑</span> DJANGO</span>
        </section>
        <section className="skills__text">
          <span className="skills__span"> <span className='skills__span--bold'>⤑</span> SASS</span>
          <span className="skills__span"> <span className='skills__span--bold'>⤑</span> CLI</span>
          <span className="skills__span"> <span className='skills__span--bold'>⤑</span> FIGMA</span>
          <span className="skills__span"> <span className='skills__span--bold'>⤑</span> PHOTOSHOP</span>
          <span className="skills__span"> <span className='skills__span--bold'>⤑</span> ASTRO</span>
          <span className="skills__span"> <span className='skills__span--bold'>⤑</span> FIREBASE</span>
        </section>
      </section>
    </motion.section>
  );
}

export default SkillsSoftwares