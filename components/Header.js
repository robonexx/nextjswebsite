import styles from '../styles/Header.module.css'

const Header = () => {
    
    return ( 
        <div className={styles.header}>
            <h1 className={styles.title} >
                <span>Header title</span>
            </h1>
        </div>
     );
}
 
export default Header;