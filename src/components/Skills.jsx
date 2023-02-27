import React from "react";
import SkillsSoft from "./SkillsSoft";
import SkillsSoftwares from "./SkillsSoftwares";
import SkillsStudy from "./SkillsStudy";

const Skills = () => {
  return (
    <section className="skills">
      <h4 className="skills__title">HABILIDADES</h4>
      <section className="skills__container">
        <SkillsSoftwares />
        <SkillsSoft />
        <SkillsStudy />
      </section>
    </section>
  );
};

export default Skills;
