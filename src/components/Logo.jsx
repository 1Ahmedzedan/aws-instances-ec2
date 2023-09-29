import styles from './Logo.module.css'

function Logo(){
  return (
    <div className={styles.logo}>
      <img src="img/awslogo.svg" alt="logo" />
    </div>
  );
}
export default Logo ;