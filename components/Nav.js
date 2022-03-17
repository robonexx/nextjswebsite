import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import NavMobile from './NavMobile';
import styles from '../styles/nav.module.css'

export const Nav = () => {
  const [active, setActive] = useState(false);
  const navbar = useRef(null);

  
  const handleClick = () => {
    setActive(!active);
  };


  
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    window.addEventListener("scroll", () => {
      let currentScrollPos = window.pageYOffset;
      
        if (prevScrollpos > currentScrollPos) {
          navbar.current.classList.remove(`${styles.nav_hidden}`);
          navbar.current.classList.add(`${styles.nav_show}`)
        }
        else {
          navbar.current.classList.add(`${styles.nav_hidden}`);
          navbar.current.classList.remove(`${styles.nav_show}`)
          
      }
      prevScrollpos = currentScrollPos;
      })
  },[]);


  return (
    <>
      <nav className={`flex items-center flex-wrap bg-black p-3 mt-8 ${styles.nav_show} `} ref={navbar}>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              Learning next 
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-black rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <NavMobile />
         
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }  w-full lg:inline-flex lg:flex-grow lg:w-auto ${styles.nav_bg}`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-end  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white '>
                Home
              </a>
            </Link>
            <Link href='/services'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-pink-600 hover:text-white'>
                Services
              </a>
            </Link>
            <Link href='/about'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-lime-600 hover:text-white'>
                About
              </a>
            </Link>
            <Link href='/contact'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white'>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};


