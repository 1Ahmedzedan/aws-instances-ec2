import { useState } from "react";
import styles from "./Signupform.module.css";
import { Link } from "react-router-dom";

function SignupForm() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className={styles.signUpForm}>
      <div>
        <h1 className={styles.heading}>Sign up</h1>
        <div className>
          have an account? <Link to="/">Login here</Link>{" "}
        </div>
      </div>
      <form className={styles.form}>
        <div className>
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="PasswordConfirm"> Password Confirm</label>
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder="confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className={styles.btn}>Submit</button>
      </form>
    </div>
  );
}
export default SignupForm;
