import React, { useContext } from 'react'
import Project from '../components/Project'
import { GlobalContext } from '../context/GlobalContext';

const ProjectContainer = () => {

  const { projects } = useContext(GlobalContext);


  return (


    <section className='projects__section'>
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
    </section>


  )
}

export default ProjectContainer