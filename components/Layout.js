import styles from '../styles/main.module.css'
import Nav from './Navbar'

const Layout = ({children}) => {
    return ( 
        <>
        <Nav />
        <div className={styles.wrapper}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        </>
     );
}
 
export default Layout;