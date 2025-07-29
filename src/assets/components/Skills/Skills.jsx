import styles from "./Skills.module.css";
export default function Skills() {
  return (
    <section className={styles.Skills}>
      <h2 className={styles.Title}>Skills</h2>
      <p className={styles.Description}>
        Como estudiante de Física, he desarrollado una fuerte capacidad
        analítica y un pensamiento estructurado que aplico directamente en mi
        enfoque como desarrollador Frontend. Estas son las tecnologias que uso
        para desarrollar actualmente:
      </p>
      <div className={styles.WorkTechs}>
        <article className={styles.TechCont}>
          <header className={styles.SkillHead}>Tecnologias Frontend</header>
          <figure className={styles.Tech}>
            <img
              src="images/JavaScriptIcon.svg"
              alt="JavaScript"
              className={styles.Image}
            />
            <figcaption className={styles.Caption}>JavaScript</figcaption>
          </figure>
          <figure className={styles.Tech}>
            <img
              src="images/TailwindCSSIcon.svg"
              alt="JavaScript"
              className={styles.Image}
            />
            <figcaption className={styles.Caption}>Tailwind CSS</figcaption>
          </figure>
          <figure className={styles.Tech}>
            <img
              src="images/HtmlIcon.svg"
              alt="HTML"
              className={styles.Image}
            />
            <figcaption className={styles.Caption}>HTML</figcaption>
          </figure>

          <figure className={styles.Tech}>
            <img src="images/CssIcon.svg" alt="CSS" className={styles.Image} />
            <figcaption className={styles.Caption}>CSS</figcaption>
          </figure>
          <figure className={styles.Tech}>
            <img
              src="images/ReactIcon.svg"
              alt="React"
              className={styles.Image}
            />
            <figcaption className={styles.Caption}>React</figcaption>
          </figure>
        </article>
        <article className={styles.TechCont}>
          <header className={styles.SkillHead}>Entorno de desarrollo</header>
          <figure className={styles.Tech}>
            <img
              src="images/LinuxIcon.svg"
              alt="Linux"
              className={styles.Image}
            />
            <figcaption className={styles.Caption}>Linux Ubuntu</figcaption>
          </figure>
          <figure className={styles.Tech}>
            <img
              src="images/VsCodeIcon.svg"
              alt="VsCode"
              className={styles.Image}
            />
            <figcaption className={styles.Caption}>
              Visual Studio Code
            </figcaption>
          </figure>
          <figure className={styles.Tech}>
            <img src="images/GitIcon.svg" alt="Git" className={styles.Image} />
            <figcaption className={styles.Caption}>Git</figcaption>
          </figure>
        </article>
        <article className={styles.TechCont}>
          <header className={styles.SkillHead}>Tecnologias Backend</header>
          <figure className={styles.Tech}>
            <img
              src="images/CsharpIcon.svg"
              alt="C#"
              className={styles.Image}
            />
            <figcaption className={styles.Caption}>C#</figcaption>
          </figure>
          <figure className={styles.Tech}>
            <img src="images/DotNet.svg" alt=".NET" className={styles.Image} />
            <figcaption className={styles.Caption}>.NET</figcaption>
          </figure>
          <figure className={styles.Tech}>
            <img
              src="images/NodeJsIcon.svg"
              alt="Node.Js"
              className={styles.Image}
            />
            <figcaption className={styles.Caption}>Node.js</figcaption>
          </figure>
        </article>
      </div>
      <h3>
        Tambien entre las tecnologias se encuentran librerias como puede ser
        Zustand y React-Router DOM{" "}
      </h3>
    </section>
  );
}
