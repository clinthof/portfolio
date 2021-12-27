import React from 'react'
// import { Link } from 'wouter'
import { links } from '../../data'
import { CustomNav, CustomLink } from '../../Styles'

const Navbar: React.FC = () => {
    return (
        <div>
            <CustomNav>
                {links.map(link => 
                    <CustomLink to={link.url} key={link.id}>
                        {link.text}
                    </CustomLink>
                    )}
            </CustomNav>
        </div>
    )
}

export default Navbar
