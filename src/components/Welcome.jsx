import Button from "./Button";
import styles from "./welcome.module.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <div className={styles.heading}>
        <h1>Welcome to our website!</h1>

        <div className={styles.msgBtn}>
          <div className={styles.msg}>
            <h4>To explore aws ec2 instances species and prices,</h4>
            <h4>Login to your account or signup if you don't have one ...</h4>
          </div>

          <div className={styles.btns}>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Welcome;
