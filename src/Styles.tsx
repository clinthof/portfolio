import styled from "styled-components";
import { Link } from 'wouter';

const Greeting = styled.div`
    margin: 5%;
    border: 2px solid red;
    font-size: 300%;
    color: black;
`;

const Logo = styled.h3`
    align-self: center; 
    display: flex;
    color: black;
    font-size: x-large;
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

    &:before, &:after {
  
    }
    &:before {
    
    }
    &:after {
    
    }
    @-webkit-keyframes left-up {
        0% {

        }
        50% {

        }
        100% {

        }
    }
    @-webkit-keyframes right-dn {
        0% {

        }
        50% {

        }
        100% {

        }
    }
    &:hover {

    }
    &:hover:after, &:hover:before {

    }
    &:hover:before {
        
    }
    &:hover:after {
        
    }
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
    Greeting,
    Logo,
    CustomNav,
    NavLinks,
    CustomLink,
    CardWrapper,
    ContactDiv,
}