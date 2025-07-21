import styles from "./Projects.module.css";
export default function Projects() {
  return (
    <div>
      <header>
        <h2 className={styles.Header}>Projects</h2>
      </header>
      <section className={styles.Projects}>
        <figure className={styles.Project}>
          <figcaption className={styles.ProjectHeader}>Youtube Clon</figcaption>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://youtube-clon-bn4ndscft-maredokkusus-projects.vercel.app/"
          >
            <img
              className={styles.ProjectImg}
              src="ProjectsImg/Youtube Clon.webp"
              alt="Youtube Clon"
            />
          </a>

          <figcaption className={styles.ProjectCaption}>
            <p>
              Este proyecto fue creado usando una mezcla interesante y es mi más
              grande proyecto hasta el momento
            </p>
            <p>
              Implico un gran proceso de aprendizaje sobre React, el zustand y
              el manejo de estilos y media queries en TailwindCss, así tambien
              como el uso de React Router DOM para crear esta conexion entre los
              distintos sitios de el proyecto
            </p>
          </figcaption>
        </figure>
        <figure className={styles.Project}>
          <figcaption className={styles.ProjectHeader}>Second Law</figcaption>
          <a
          target="_blank"
            rel="noopener noreferrer"
            href="https://second-law-r34d5qx7r-maredokkusus-projects.vercel.app/"
          >
            <img
              className={styles.ProjectImg}
              src="ProjectsImg/SecondLaw.webp"
              alt="Second Law"
            />
          </a>

          <figcaption className={styles.ProjectCaption}>
            Este proyecto fue creado como un pequeño desafio de logica bajo un
            gusto muy grande por el gimnasio y los records
          </figcaption>
        </figure>
      </section>
    </div>
  );
}
