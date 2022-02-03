import styled from 'styled-components';
import { Link } from 'wouter';

const Logo = styled.h3`
    display: flex;
    font-size: x-large;
`;

const CustomNav = styled.nav`
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0 5rem;
    z-index: 999;
    position: sticky;
    top: 0;
    background-color: #131516;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 
    'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const NavLinks = styled.div`
    display: flex;
    margin-left: auto;
    font-weight: 600;
`;

const CustomLink = styled(Link)`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    text-decoration: none;
    padding: 0 0.5rem;
    margin: 0 20px;
    height: 60%;
    color: white;
    &:hover {
        color: rgb(107, 237, 204);
    }
`;

const ContactDiv = styled.div`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border-radius: 4px;
    box-sizing: border-box;
`;

export { 
    Logo,
    CustomNav,
    NavLinks,
    CustomLink,
    ContactDiv,
}