import { motion } from "framer-motion"
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Project = (props) => {

  const { id, name, description, media, urlgit, urldeploy } = props.project

  const { scrollingProjects } = useContext(GlobalContext)

  return (
    <>
      <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="project__container">
        <motion.section
          variants={scrollingProjects}
          initial="hidden"
          whileInView={"visible"}
          className="project__card card">
          <section className="card__header header">
            <img className="header__img" src={media} alt={name} />
            <p className="header__p">
              {description}
            </p>
          </section>
          <section className="card__buttons">
            <motion.a 
            whileTap={{scale: 0.90}}
            whileHover={{scale: 1.05, border: "1px solid #F2F2F2", transition: "all 1s ease-in-out"}}
            className="card__a" href={urlgit}  target="_noblank" rel="noopenner">GITHUB</motion.a>
            <motion.a 
            whileTap={{scale: 0.90}}
            whileHover={{scale: 1.05, border: "1px solid #F2F2F2", transition: "all 1s ease-in-out"}}
            className="card__a" href={urldeploy} target="_noblank" >DEPLOY</motion.a>
          </section>
        </motion.section>
      </motion.section>
    </>
  );
};


export default Project;

