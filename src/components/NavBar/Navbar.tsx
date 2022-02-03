import { CustomNav, CustomLink, Logo, NavLinks, } from '../../Styles';
import { Link, useRoute } from 'wouter';
import { navLinks } from '../../data';

const Navbar: React.FC = () => {
    const [isActive] = useRoute('');

    return (
        <CustomNav>
            <Logo>
                <CustomLink to='/'>felix.</CustomLink>
            </Logo>
            <NavLinks>
                {navLinks.map(link => 
                        <Link to={link.url} key={link.id}>
                            <CustomLink className={isActive ? 'active' : ''}>
                                {link.text}
                            </CustomLink>
                        </Link>
                    )}
            </NavLinks>
        </CustomNav>
    )
};

export default Navbar;
