import React from 'react'
import { links } from '../../data'
import { CustomNav, CustomLink } from '../../Styles'

const Navbar: React.FC = () => {
    return (
        <>
            <CustomNav>
                {links.map(link => 
                    <CustomLink to={link.url} key={link.id}>
                        {link.text}
                    </CustomLink>
                    )}
            </CustomNav>
        </>
    )
}

export default Navbar
