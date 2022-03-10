import styles from '../styles/main.module.css';
import { Nav } from './Nav';
import Header from './Header';
import NavMobile from './NavMobile';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <div className={styles.wrapper}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
