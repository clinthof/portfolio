import React from 'react'
import styled from 'styled-components'
import { Link } from 'wouter'
import { links } from '../../data'

const CustomNav = styled.div`
    float: right;
    right: 5%;
    position: relative;
`;

const Navbar: React.FC = () => {
    return (
        <>
            <CustomNav>
                {links.map(link => 
                    <Link to={link.url} key={link.id}>
                        {link.text}
                    </Link>
                    )}
            </CustomNav>        
        </>
    )
}

export default Navbar
