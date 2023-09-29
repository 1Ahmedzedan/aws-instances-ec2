import styles from "./root.module.css";
import Welcome from "../components/Welcome.jsx";
import Logo from "../components/Logo";

function Root() {
  return (
    <div className={styles.root}>
      <Logo />
      <div className={styles.main}>
        <Welcome />
        <img src="img/rafiki.svg" alt="welcome" className={styles.img} />
      </div>
    </div>
  );
}

export default Root;
