import navstyles from '../styles/nav.module.css'
import { useState } from 'react'

const NavMobile = () => {
    const [active, setActive] = useState(false)
     
    const handleClick = () => {
        setActive(!active)
        console.log('clicked btn')
    }

    return (
        
        <div className={` ${navstyles.navBtn} ${active ? navstyles.open : navstyles.navBtn } `} onClick={handleClick} >
                    <div className={navstyles.line}></div>
                </div>
           
     );
}
 
export default NavMobile;