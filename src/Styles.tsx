import styled from 'styled-components';
import { Link } from 'wouter';

const Logo = styled.h3`
    display: flex;
    color: black;
    font-size: x-large;
`;

const Button = styled.button`
    background-color: transparent;
    display: flex;
    align-items: center;
    padding: 6px 20px;
    border: 2px solid black;
    border-radius: 20px;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        background-color: #eeeeee;
    }
`;

const CustomNav = styled.nav`
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
    z-index: 999;
    position: sticky;
    top: 0;
    background-color: white;
`;

const NavLinks = styled.div`
    display: flex;
    margin-left: auto;
    font-weight: 600;
`;

const CustomLink = styled(Link)`
    color: black;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    text-decoration: none;
    padding: 0 0.5rem;
    margin: 0 20px;
    height: 60%;
`;

const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px 10px;
    grid-template: auto auto auto;
    border: 4px solid black;
`;

const ContactDiv = styled.div`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border-radius: 4px;
    box-sizing: border-box;
`;

const FooterWrapper = styled.div`
    height: 50%;
`;

// TODO: make footer buttons; animate
// const InstagramButton = styled
// const LinkedInButton = styled

export { 
    Logo,
    Button,
    CustomNav,
    NavLinks,
    CustomLink,
    CardWrapper,
    ContactDiv,
    FooterWrapper,
}