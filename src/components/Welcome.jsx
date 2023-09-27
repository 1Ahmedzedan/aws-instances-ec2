import styles from "./welcome.module.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <div className={styles.heading}>
        <div className={styles.title}>Welcome to our website!</div>
        <div className={styles.msgBtn}>
          <div className={styles.msg}>
            To explore aws ec2 instances species and prices, Login to
            <br />
            your account or signup if you don't have one ...
          </div>
          <div className={styles.btns}>
            <Link to="/login">
              {" "}
              <button className={styles.btn}>Login</button>{" "}
            </Link>
            <Link to="/signup">
              {" "}
              <button className={styles.btn}>Sign up</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
