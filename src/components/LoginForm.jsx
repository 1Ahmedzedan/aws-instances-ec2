import { Link, useNavigate } from "react-router-dom";
import styles from "./SignForm.module.css" ;
import Button from "../components/Button.jsx" 
import { useEffect, useState } from "react";

const PASSWORD_REGULAR_EXPRESSION = /^(?=.*[a-zA-Z])[A-Za-z\d0-9]{8,20}/ ;
const USER_NAME = "user1" ; 
const PASSWORD = "H12345678" ;
function LoginForm(){
    const navigate = useNavigate();

    const [username , setUserName] = useState("")  ; 
    const [password , setPassword] = useState("")  ; 
    
    const [usernameValidMassege , setUsernameValidMassege] = useState("") ; 
    const [passwordValidMassege , setpasswordValidMassege] = useState("") ; 
    const [isSubmited , setIsSubmited] = useState(0) ; 
    const [showPassword , setShowPassword] = useState(false) ; 

    async function validationForm(){
        if(username.length===0){
            setUsernameValidMassege("you should fill your  account username") ; 
            setIsSubmited(1) ; 
        }
        else if(username.length<5){
            setUsernameValidMassege("username is very short") ; 
            setIsSubmited(1) ; 
        }
        else{
            setUsernameValidMassege("") ;
            setIsSubmited(2) ; 
        }
        
        if(password.length===0){
            setpasswordValidMassege("you should fill your account password") ; 
            setIsSubmited(1) ; 
        }
        else if(password.length<8 || password.length>20){
            setpasswordValidMassege("password length should between 6 and 16") ;
            setIsSubmited(1) ; 
        }
        else if(!PASSWORD_REGULAR_EXPRESSION.test(password)){
            setpasswordValidMassege("password should mix of letter and numbers") ; 
            setIsSubmited(1) ; 
        }
        else{
            setpasswordValidMassege("") ; 
            setIsSubmited(2) ; 
        }
        // console.log(isSubmited) ; 
    }

    useEffect(function(){
        if(isSubmited!==2) return;

        if(isSubmited===2){
            if(username !== USER_NAME){
                setIsSubmited(1) ; 
                setUsernameValidMassege("not found this user name!") ;
                setpasswordValidMassege("your user name is wrong!") 
                return ; 
            }

            if(password !== PASSWORD){
                setIsSubmited(1) ; 
                setUsernameValidMassege("") ;
                setpasswordValidMassege("this password not match with user name password!") ; 
                return ; 
            }

            setUsernameValidMassege("") ;
            setpasswordValidMassege("") ; 
            navigate("/mainpage") ; 
        }

    } , [isSubmited , password , username , navigate]) 

    function handleSubmit(e){
        e.preventDefault() ; 
        validationForm() ; 
    }

    return(
        <div className={styles.loginForm}>
            <div className={styles.title}>
                <h1>Login</h1>
                <div>Don't have account? <Link to="/signup">Sign up here</Link> </div>
            </div>

            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label htmlFor="username">
                        Username
                    </label>
                    <div className={styles.input}>
                        <input placeholder="Enter your username" 
                        type="text" 
                        name="username" 
                        id="username" 
                        onChange={(e)=>setUserName(e.target.value)}
                        value={username}
                        className={isSubmited?usernameValidMassege?styles.error:styles.succes:""}/>
                        {isSubmited!==0&&
                            <>
                                <small>{usernameValidMassege}</small>
                                {usernameValidMassege && <img src="img/cross.png" alt="cross"/>}
                                {!usernameValidMassege && <img src="img/approved.png" alt="approved"/>}
                            </>
                        }
                    </div>
                </div>

                <div>
                    <label htmlFor="password">
                        Password
                    </label>
                    <div className={styles.input}>
                        <input placeholder="Enter your password" 
                        type={showPassword ? "text" : "password"} 
                        name="password" 
                        id="password"
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                        className={isSubmited?passwordValidMassege?styles.error:styles.succes:""}/>
                        {isSubmited!==0&&
                            <>
                                <small>{passwordValidMassege}</small>
                                {passwordValidMassege && <img src="img/cross.png" alt="cross"/>}
                                {!passwordValidMassege && <img src="img/approved.png" alt="approved"/>}
                            </>
                        }
                        {!showPassword && <img src="img/show.png" alt="show" 
                        className={styles.hide_show}
                        onClick={()=>setShowPassword((e)=>!e)}/>}
                        {showPassword && <img src="img/hide.png" alt="hide" 
                        className={styles.hide_show}
                        onClick={()=>setShowPassword((e)=>!e)}/>}
                    </div>
                </div>
                <Button>
                    Login
                </Button>
            </form>
        </div>
    );
}

export default LoginForm ; 