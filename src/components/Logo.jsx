import styles from './Logo.module.css'
import DarkMode from './DarkMode.jsx' ; 
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppProvider';

function Logo(){

  const {dark} = useApp() ; 

  return (
    <div className={styles.logo}>
      <Link to="/"><img src="img/awslogo.svg" alt="logo" className={styles.logoImg} style={dark ? {filter:"invert(100%)"} : {}}/></Link>
      <DarkMode/>
    </div>
  );
}
export default Logo ;