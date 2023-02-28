import React, { useContext } from 'react'
import Project from '../components/Project'
import { GlobalContext } from '../context/GlobalContext';
import { motion } from 'framer-motion'

const ProjectContainer = () => {

  const { projects } = useContext(GlobalContext);


  return (

    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='projects__section'>
      <section className="projects">
        <h4 className="projects__title">PROYECTOS</h4>
      </section>
      <section className='projects__container'>
      {
        projects.map((project) => (
          <Project key={project.id} project={project}/>
        ))
      }
      </section>
    </motion.section>


  )
}

export default ProjectContainer