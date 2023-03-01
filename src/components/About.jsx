import { useContext } from "react";
import { motion } from "framer-motion";
import { GlobalContext } from "../context/GlobalContext";

const About = () => {

  const { scrollingSkills } = useContext(GlobalContext)

  return (

    <motion.section 
    // initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    variants={scrollingSkills}
    initial="hidden"
    whileInView={"visible"}
    className="about">
      <section className="about__title title">
        <h1 className="title__h1">A FRONT END ARCHITECT</h1>
        <img
          className="title__img"
          src="./media/about/portfolio_profile.jpg"
          alt="Imagen de perfil Ramsés González"
        />
      </section>
      <section className="about__description description">
        <p className="description__p">
          HOLA! ☻, MI NOMBRE ES RAMSÉS PERO ALGUNOS ME DICEN RAAM. SOY UN
          ARQUITECTO APASIONADO DE LA PROGRAMACIÓN. ESTOY EMOCIONADO DE
          COMENZAR MI CARRERA EN ESTE CAMPO. A TRAVÉS DE MI
          EXPERIENCIA EN LA ARQUITECTURA, HE ADQUIRIDO HABILIDADES EN EL DISEÑO,
          PLANIFICACIÓN Y RESOLUCIÓN DE PROBLEMAS COMPLEJOS
        </p>
        <p className="description__p description__p--margin">
          COMENCÉ A EXPLORAR LA PROGRAMACIÓN COMO UN HOBBY Y RÁPIDAMENTE ME DI
          CUENTA DE QUE ES UNA HERRAMIENTA PODEROSA PARA CREAR SOLUCIONES
          INNOVADORAS ☼. ME ENCANTA EXPERIMENTAR CON DIFERENTES LENGUAJES DE
          PROGRAMACIÓN Y FRAMEWORKS, Y SIEMPRE ESTOY BUSCANDO NUEVOS DESAFÍOS
          PARA MEJORAR MIS HABILIDADES.
        </p>
      </section>
    </motion.section>

  );
};

export default About;
