import styles from "./DarkMode.module.css";
import { useApp } from "../context/AppProvider.jsx";

function DarkMode() {
    const {dark , setDark} = useApp() ;   

    function setDarkMode(){
        document.querySelector("body").setAttribute("data-theme" , "dark") ; 
    }

    function setLightMode(){
        document.querySelector("body").setAttribute("data-theme" , "light") ; 
    }

    function handleClick(){
        if(dark){
            setLightMode() ; 
        }
        else{
            setDarkMode() ; 
        }
        setDark((e)=>!e) ; 
    }

    return (
        <div className={dark ? `${styles.btn} ${styles.darkmode}` : `${styles.btn}`} onClick={handleClick}>
            <div className={styles.btnIndicator}>
                <div className={styles.btnIconContainer}>
                    <i className={`${styles.btnIcon} fa-solid ${dark ? "fa-moon" : "fa-sun"}`}></i>
                </div>
            </div>
        </div>
    );
};

export default DarkMode;
