import styled from "styled-components";
import { Link } from 'wouter';

const Logo = styled.h3`
    align-self: center; 
    display: flex;
    flex: 0;
    padding: 1em;
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
    background-color: black;
    box-shadow: 0 4px 10px -2px #000000cc;
`;

const NavLinks = styled.div`
    display: flex;
    margin-left: auto;
`;

const CustomLink = styled(Link)`
    color: white;
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
    gap: 10px;
    grid-template: 150px / auto auto auto;
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

export { 
    CustomNav,
    CardWrapper,
    ContactDiv,
    CustomLink,
    Logo,
    NavLinks,
}