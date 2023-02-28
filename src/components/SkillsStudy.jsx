import React from 'react'
import { motion } from 'framer-motion'

const SkillsStudy = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="skills__section study">
      <h5 className="skills__h5">STUDY</h5>
      <section className="skills__text skills__text--row">
          <span className="skills__span"> <span className='skills__span--bold'>&</span> REACT</span>
          <span className="skills__span"> <span className='skills__span--bold'>&</span> ASTRO</span>
          <span className="skills__span"> <span className='skills__span--bold'>&</span> JQUERY</span>
          <span className="skills__span"> <span className='skills__span--bold'>&</span> JEST</span>
        </section>
    </motion.section>
  );
}

export default SkillsStudy