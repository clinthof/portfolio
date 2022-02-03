import './Navbar.css';
import { CustomNav, NavLink, Logo, NavLinks, LogoLink, } from '../../Styles';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Link, useRoute } from 'wouter';
import { navLinks } from '../../data';

const Navbar: React.FC = () => {
    const [isActive] = useRoute('');

    return (
        <CustomNav>
            <Logo>
                <LogoLink to='/'>felix.</LogoLink>
            </Logo>
            <NavLinks>
                {navLinks.map(link => 
                        <Link to={link.url} key={link.id}>
                            <NavLink className={isActive ? 'active' : ''}>
                                {link.text}
                            </NavLink>
                        </Link>
                    )}
            </NavLinks>
            <MenuSharpIcon id='hamburger-menu-btn'/>
        </CustomNav>
    )
};

export default Navbar;
