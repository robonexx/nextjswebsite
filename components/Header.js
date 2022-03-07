import headerStyles from '../styles/Header.module.css'
import navstyles from '../styles/nav.module.css'

const Header = () => {
    return ( 
        <div>
            <h1 className={headerStyles.title} >
                <span>ˌkriːeɪˈtɪvɪti </span>
               <code> =  Inspiration</code>
            </h1>
        </div>
     );
}
 
export default Header;