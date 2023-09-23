import LoginForm from "./components/LoginForm";
import styles from "./login.module.css" ; 

function Login(){
    return (
        <div className={styles.login}>
            <LoginForm />
            <img src="/img/login_img.svg" alt="login" className={styles.img}/>
        </div>
    ); 
}

export default Login ; 