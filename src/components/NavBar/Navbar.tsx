import React from 'react'
import { links } from '../../data'
import { CustomNav, CustomLink, Logo, NavLinks, } from '../../Styles'

const Navbar: React.FC = () => {
    return (
        <>
            <CustomNav>
                <Logo>LOGO</Logo>
                <NavLinks>
                    {links.map(link => 
                        <CustomLink to={link.url} key={link.id}>
                            {link.text}
                        </CustomLink>
                        )}
                </NavLinks>
            </CustomNav>
        </>
    )
}

export default Navbar
