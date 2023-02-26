import React from "react";

const Project = () => {
  return (
    <>
      <section className="project">
        <h4 className="project__title">PROYECTOS</h4>
      </section>
      <section className="project__container">
        <section className="project__card card">
          <section className="card__header header">
            {/* <img className="card__img" src="#" alt="Imagen proyecto" /> */}
            <p className="header__p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              iste dolores quia consequuntur, minima aperiam deserunt optio
              rerum nulla corrupti porro tempora, unde enim ab ad. Provident
              incidunt ipsa consectetur?
            </p>
          </section>
          {/* <h5 className="card__title"></h5> */}
          <section className="card__buttons">
            <button className="card__button">GITHUB</button>
            <button className="card__button">DEPLOY</button>
          </section>
        </section>
      </section>
    </>
  );
};

export default Project;
