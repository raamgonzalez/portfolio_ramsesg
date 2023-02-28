import { useContext } from "react";
import { motion } from 'framer-motion'
import SkillsSoft from "./SkillsSoft";
import SkillsSoftwares from "./SkillsSoftwares";
import SkillsStudy from "./SkillsStudy";
import { GlobalContext } from "../context/GlobalContext";

const Skills = () => {

  const { scrollingProjects } = useContext(GlobalContext)

  return (
    <section className="skills">
      <h4 className="skills__title">HABILIDADES</h4>
      <motion.section 
        variants={scrollingProjects}
        initial="hidden"
        whileInView={"visible"}
        className="skills__container">
        <SkillsSoftwares />
        <SkillsSoft />
        <SkillsStudy />
      </motion.section>
    </section>
  );
};

export default Skills;
