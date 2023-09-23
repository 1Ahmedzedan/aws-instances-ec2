import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css" ; 
import { useState } from "react";
function LoginForm(){
    const [username , setUserName] = useState("")  ; 
    const [password , setPassword] = useState("")  ; 

    return(
        <div className={styles.loginForm}>
            <div className={styles.title}>
                <h1>Login</h1>
                <div>Don't have account? <Link to="/signup">Sign up here</Link> </div>
            </div>

            <form>
                <div>
                    <label htmlFor="username">
                        Username
                    </label>
                    <input placeholder="Enter your username" 
                    type="text" 
                    name="username" 
                    id="username" 
                    onChange={(e)=>setUserName(e.target.value)}
                    value={username}/>
                </div>

                <div>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input placeholder="Enter your password" 
                    type="password" 
                    name="password" 
                    id="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}/>
                </div>
                <button>
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginForm ; 