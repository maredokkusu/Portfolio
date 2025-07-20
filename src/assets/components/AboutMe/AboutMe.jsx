import styles from "./AboutMe.module.css";
export default function AboutMe() {
  return (
    <section className={styles.container}>
      <div className={styles.HeaderSpace}></div>
      <section className={styles.Hello}>
        <h1 className={styles.Name}>Leonardo Conde Frontend Developer</h1>
      </section>
      <h2 className={styles.AboutMe}>About me</h2>
      <section className={styles.AroundMe}>
        <p className={styles.Info}>
          Mi nombre es Leonardo y soy un desarrollador Frontend con una
          mentalidad enfocada en la resolución de problemas mediante soluciones
          prácticas y modernas.
        </p>
        <p className={styles.Info}>
          Combino mi formación en Física con mi amor y gusto por la
          programación, lo que me permite abordar los desafíos con una
          perspectiva lógica y estructurada.
        </p>
        <p className={styles.Info}>
          Me encanta aprender continuamente y mantenerme actualizado con nuevas
          tecnologías que potencien mi crecimiento profesional.
        </p>
        <img
          className={styles.Avatar}
          title="Avatar de Leonardo"
          src="images/Avatar.webp"
          alt="Avatar de Leonardo"
        />
      </section>
    </section>
  );
}
