import styles from "./root.module.css";
import Welcome from "../components/Welcome.jsx";

function Root() {
  return (
    <div className={styles.root}>
      <Welcome />
      <img src="img/rafiki.svg" alt="welcome" className={styles.img} />
    </div>
  );
}

export default Root;
