import navstyles from '../styles/nav.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={navstyles.header}>
      <h1 className={navstyles.logo}>Coffee & Code</h1>
      <div className={navstyles.nav}>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
          <li>
            <Link href='/navpage'>Nav page</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
