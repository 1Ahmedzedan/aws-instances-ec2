import SignupForm from "../components/SignupForm.jsx";
import Logo from "../components/Logo.jsx";
import styles from "./signup.module.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className={styles.signUp}>
      <Logo />
      <div className={styles.main}>
        <SignupForm />
        <img className={styles.img} src="img/pana.svg" alt=""/>
      </div>
    </div>
  );
}

export default Signup;
