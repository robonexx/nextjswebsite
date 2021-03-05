import navstyles from '../styles/nav.module.css'
import Link from 'next/link'

const Navbar = () => {
    return ( 
        <div className={navstyles.header}>
            <h1 className={navstyles.logo}>NEXT UP! SKILL UP!</h1>
            <div className={navstyles.nav}>
                <ul>
                    <li><Link href="/home">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            
        </div>
     );
}
 
export default Navbar;