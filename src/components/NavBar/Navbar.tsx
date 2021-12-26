import React from 'react'
import { Link } from 'wouter'
import { links } from '../../data'

const Navbar: React.FC  = () => {
    return (
        <div className='navbar'>
            {links.map(link => <Link to={link.url} key={link.id}>{link.text}</Link>)}
        </div>
    )
}

export default Navbar
