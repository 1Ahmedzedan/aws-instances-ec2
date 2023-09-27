import { useState } from "react";
import styles from "./SignForm.module.css";
import Button from "../components/Button.jsx";
import { Link } from "react-router-dom";


const PASSWORD_REGULAR_EXPRESSION = /^(?=.*[a-zA-Z])[A-Za-z\d0-9]{8,20}/ ;
const EMAIL_REGULAR_EXPRESSION = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ ;

function SignupForm() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");

  const [usernameValidMassege , setUsernameValidMassege] = useState("") ; 
  const [emailValidMassege , setEmailValidMassege] = useState("") ; 
  const [passwordValidMassege , setpasswordValidMassege] = useState("") ; 
  const [confirmPasswordValidMassege , setConfirmPasswordValidMassege] = useState("") ; 
  const [genderValidMassege , setGenderValidMassege] = useState("") ; 
  const [isSubmited , setIsSubmited] = useState(0) ; 
  const [showPassword , setShowPassword] = useState(false) ; 

  function validationForm(){
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

      if(email.length===0){
          setEmailValidMassege("you should fill your  account email") ;
          setIsSubmited(1) ;
      }
      else if(!EMAIL_REGULAR_EXPRESSION.test(email)){
          setEmailValidMassege("this is invalid email") ; 
          setIsSubmited(1) ;
      }
      else{
        setEmailValidMassege("") ;
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

      if(confirmPassword.length===0){
          setConfirmPasswordValidMassege("you should confirm your password") ; 
          setIsSubmited(1) ; 
      }
      else if(password!==confirmPassword){
          setConfirmPasswordValidMassege("no match with password") ; 
          setIsSubmited(1) ; 
      }
      else {
        setConfirmPasswordValidMassege("") ;
        setIsSubmited(1) ;
      }

      if(gender.length===0){
        setGenderValidMassege("should select your gender") ; 
        setIsSubmited(1) ; 
      }
      else{
        setGenderValidMassege("") ; 
        setIsSubmited(2) ; 
      }

  }


  function handleFormSubmit(e){
    e.preventDefault(); 
    validationForm() ;
  }

  return (
    <div className={styles.loginForm}>

      <div className={styles.title}>
        <h1>Sign up</h1>
        <div>
          have an account? <Link to="/login">Login here</Link>
        </div>
      </div>
      
      <form onSubmit={(e)=>handleFormSubmit(e)}>
        <div>
          <label htmlFor="userName">Username</label>
          <div className={styles.input}>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className={isSubmited?usernameValidMassege?styles.error:styles.succes:""}
            />
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
          <label htmlFor="email">Email</label>
          <div className={styles.input}>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={isSubmited?emailValidMassege?styles.error:styles.succes:""}
            />
            {isSubmited!==0&&
                <>
                    <small>{emailValidMassege}</small>
                    {emailValidMassege && <img src="img/cross.png" alt="cross"/>}
                    {!emailValidMassege && <img src="img/approved.png" alt="approved"/>}
                </>
            }
          </div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div className={styles.input}>
            <input
              type={showPassword?"type":"password"}
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={isSubmited?passwordValidMassege?styles.error:styles.succes:""}
            />
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
        <div>
          <label htmlFor="passwordConfirm"> Password<br/>Confirm</label>
          <div className={styles.input}>
            <input
              type={showPassword?"type":"password"}
              name="passwordConfirm"
              id="passwordConfirm"
              placeholder="confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={isSubmited?confirmPasswordValidMassege?styles.error:styles.succes:""}
            />
            {isSubmited!==0&&
                  <>
                      <small>{confirmPasswordValidMassege}</small>
                      {confirmPasswordValidMassege && <img src="img/cross.png" alt="cross"/>}
                      {!confirmPasswordValidMassege && <img src="img/approved.png" alt="approved"/>}
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

        <div>
          <label>Gender</label>
          <div className={styles.input}>
            <div>
              <input type="radio" value="male" id="male" name="gender" onChange={(e)=>setGender(e.target.value)}/>
              <label htmlFor="male">Male</label>
              <input type="radio" value="female" id="female" name="gender" onChange={(e)=>setGender(e.target.value)}/>
              <label htmlFor="female">Female</label>
            </div>
            {isSubmited!==0&&
                <>
                    <small>{genderValidMassege}</small>
                    {genderValidMassege && <img src="img/cross.png" alt="cross"/>}
                    {!genderValidMassege && <img src="img/approved.png" alt="approved"/>}
                </>
            }
          </div>
        </div>
        <Button className={styles.btn}>Submit</Button>
      </form>
    </div>
  );
}
export default SignupForm;
