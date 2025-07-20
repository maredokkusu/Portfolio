import styles from "./NavBar.module.css";
export default function NavBar() {
  const NavElements = {
    topleft: "Maredokkusu",
    img: "https://avatars.githubusercontent.com/maredokkusu",
  };
  const ProfLinks = {
    GitHub: "https://github.com/maredokkusu",
    GitHubImg: "src/assets/components/images/github-mark.svg",
    Linkedin:
      "https://www.linkedin.com/in/leonardo-yael-conde-flores-562b64315/",
    LinkedinImg: "./src/assets/components/images/LinkedinIcon.svg",
    Indeed:
      "https://profile.indeed.com/?hl=es_MX&co=MX&from=gnav-jobseeker-profile--profile-one-frontend",
    IndeedImg: "./src/assets/components/images/IndeedLogo.svg",
  };
  return (
    <div className={styles.container}>
      <header className={styles.NavBar}>
        <img
          title="Imagen de perfil de Leonardo"
          className={styles.ProfGitImg}
          src={NavElements.img}
          alt="Maredokkusu img"
        />
        <h2 className={styles.Title}>{NavElements.topleft}</h2>
        <nav className={styles.NavLinks}>
          <a className={styles.Parts} href="#About-me">
            About me
          </a>
          <a className={styles.Parts} href="#Skills">
            Skills
          </a>
          <a className={styles.Parts} href="#Projects">
            Projects
          </a>
        </nav>
        <div
          aria-label="Perfiles Profesionales de Leonardo"
          className={styles.WorkLinks}
        >
          <a target="_blank" className={styles.Icons} href={ProfLinks.GitHub}>
            <img
              title="Github de Leonardo"
              className={styles.WorkIcons}
              src={ProfLinks.GitHubImg}
              alt="Github de Leonardo"
            />
          </a>
          <a target="_blank" className={styles.Icons} href={ProfLinks.Linkedin}>
            <img
              title="Linkedin de Leonardo"
              className={styles.WorkIcons}
              src={ProfLinks.LinkedinImg}
              alt="Linkedin de Leonardo"
            />
          </a>
          <a target="_blank" className={styles.Icons} href={ProfLinks.Indeed}>
            <img
              title="Indeed de Leonardo"
              className={styles.WorkIcons}
              src={ProfLinks.IndeedImg}
              alt="Indeed de Leonardo"
            />
          </a>
        </div>
      </header>
    </div>
  );
}
