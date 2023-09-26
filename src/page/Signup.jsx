import SignupForm from "../components/SignupForm.jsx";
import styles from "./signup.module.css";

function Signup() {
  return (
    <div className={styles.signUp}>
      <SignupForm />
      <img className={styles.img} src="img/pana.svg" alt=""/>
    </div>
  );
}

export default Signup;
