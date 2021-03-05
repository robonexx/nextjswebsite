import styles from '../styles/main.module.css'
import Nav from './Navbar'
import Header from './Header'

const Layout = ({children}) => {
    return ( 
        <>
        <Nav />
        <div className={styles.wrapper}>
            <main className={styles.main}>
            <Header />
                {children}
            </main>
        </div>
        </>
     );
}
 
export default Layout;