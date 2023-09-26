import Button from './Button';
import styles from './Header.module.css'; 
import SearchForm from './SearchForm.jsx' ;
function Header(){
  return (
    <header className={styles.header}>
      <img src="img/awslogo.svg" alt="logo"/>
      <SearchForm />
      <Button>Log out</Button>
    </header>
  );
}
export default Header ;