import { Link } from 'react-router-dom';
import Button from './Button';
import styles from './Header.module.css'; 
import SearchForm from './SearchForm.jsx' ;

function Header(){
  return (
    <header className={styles.header}>
      <img src="img/awslogo.svg" alt="logo"/>
      <SearchForm />
      <Link to="/"><Button>Log out</Button></Link>
    </header>
  );
}

export default Header ;