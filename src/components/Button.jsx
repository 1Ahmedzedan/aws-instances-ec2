import styles from './Button.module.css' ; 
function Button({onClick , children , style={}}){
  return (
    <button onClick={onClick} className={styles.btn} style={style}>
        {children}
    </button>
  );
}
export default Button ;