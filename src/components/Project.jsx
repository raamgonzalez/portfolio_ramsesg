import { useContext } from "react";

const Project = (props) => {

  const { id, name, description, media, urlgit, urldeploy } = props.project

  return (
    <>
      <section className="project__container">
        <section className="project__card card">
          <section className="card__header header">
            <img className="header__img" src={media} alt={name} />
            <p className="header__p">
              {description}
            </p>
          </section>
          <section className="card__buttons">
            <button className="card__button"><a href={urlgit}  target="_noblank" rel="noopenner">GITHUB</a></button>
            <button className="card__button"><a href={urldeploy} target="_noblank" >DEPLOY</a></button>
          </section>
        </section>
      </section>
    </>
  );
};


export default Project;
