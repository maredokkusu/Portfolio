import styles from "./Projects.module.css";
export default function Projects() {
  return (
    <div>
      <header>
        <h2 className={styles.Header}>Projects</h2>
      </header>
      <section className={styles.Projects}>

          <figure className={styles.Project}>
            <figcaption className={styles.ProjectHeader
            }>Youtube Clon</figcaption>
            <img
              className={styles.ProjectImg}
              src="ProjectsImg/Logo.jpeg"
              alt=""
            />
            <figcaption className={styles.ProjectCaption}>
              Este proyecto fue creado usando una mezcla interesante y es mi mas
              grande proyecto hasta el momento
            </figcaption>
          </figure>
    <figure className={styles.Project}>
            <figcaption className={styles.ProjectHeader
            }>Youtube Clon</figcaption>
            <img
              className={styles.ProjectImg}
              src="ProjectsImg/Logo.jpeg"
              alt=""
            />
            <figcaption className={styles.ProjectCaption}>
              Este proyecto fue creado usando una mezcla interesante y es mi mas
              grande proyecto hasta el momento
            </figcaption>
          </figure>
          
      </section>
    </div>
  );
}
