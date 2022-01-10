import React from 'react';
import { navLinks } from '../../data';
import { CustomNav, CustomLink, Logo, NavLinks, } from '../../Styles';

const Navbar: React.FC = () => {
    return (
        <CustomNav>
            <Logo>
                <CustomLink to='/'>felix.</CustomLink>
            </Logo>
            <NavLinks>
                {navLinks.map(link => 
                        <CustomLink
                            to={link.url}
                            key={link.id}
                        >
                            {link.text}
                        </CustomLink>
                    )}
            </NavLinks>
        </CustomNav>
    )
};

export default Navbar;
