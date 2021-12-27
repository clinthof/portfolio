import React from 'react'
import { Link } from 'wouter'
import { links } from '../../data'
import { CustomNav } from '../../Styles'

const Navbar: React.FC = () => {
    return (
        <div>
            <CustomNav>
                {links.map(link => 
                    <Link to={link.url} key={link.id}>
                        {link.text}
                    </Link>
                    )}
            </CustomNav>        
        </div>
    )
}

export default Navbar
