import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm.jsx";
import Logo from "../components/Logo.jsx";
import styles from "./login.module.css" ; 

function Login(){
    return (
        <div className={styles.login}>
            <Link to="/"><Logo /></Link>
            <div className={styles.main}>
                <LoginForm />
                <img src="img/login_img.svg" alt="login" className={styles.img}/>
            </div>
        </div>
    ); 
}

export default Login ; 