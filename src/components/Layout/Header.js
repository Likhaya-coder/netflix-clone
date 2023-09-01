import classes from './Header.module.css';
import Button from '../Utils/Button';
import Logo from '../../assets/Logo.png';

const Header = () => {
    return ( 
        <header>
            <img src={Logo} alt="Netflix Logo" />
            <Button ClassName={classes.signIn}>Sign In</Button>
        </header>
     );
}
 
export default Header;