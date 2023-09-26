import styles from './Button.module.css' ; 
function Button({onClick , children}){
  return (
    <button onClick={onClick} className={styles.btn}>
        {children}
    </button>
  );
}
export default Button ;