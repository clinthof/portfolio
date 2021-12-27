import styled from "styled-components";
import { Link } from 'wouter';

const CustomNav = styled.nav`
    float: right;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: right;
    padding: 0.5rem;
    z-index:999;
    position: sticky;
    top: 0px;
    background-color: white;
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
`;

const CustomLink = styled(Link)`
    color: #508ddd;
    display: flex;
    align-items: center;
    align-self: flex-end;
    text-decoration: none;
    padding: 0 1rem;
    margin: 0 12px;
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
}