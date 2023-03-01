import { useContext } from "react";
import { motion } from 'framer-motion'
import SkillsSoft from "./SkillsSoft";
import SkillsSoftwares from "./SkillsSoftwares";
import SkillsStudy from "./SkillsStudy";
import { GlobalContext } from "../context/GlobalContext";

const Skills = () => {

  const { scrollingSkills } = useContext(GlobalContext)

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="skills">
      <h4 className="skills__title">HABILIDADES</h4>
      <motion.section 
        variants={scrollingSkills}
        initial="hidden"
        whileInView={"visible"}
        className="skills__container">
          
        <SkillsSoftwares />
        <SkillsSoft />
        <SkillsStudy />
      </motion.section>
    </motion.section>
  );
};

export default Skills;
