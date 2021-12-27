import styled from "styled-components";
import { Link } from 'wouter';

const CustomNav = styled.nav`
    float: right;
    right: 5%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    z-index:999;
    border: 4px solid black;
`;

const CustomLink = styled(Link)`
    color: #508ddd;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: pink;
    }

    &.active {
        color: blue;
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
    CustomNav,
    CardWrapper,
    ContactDiv,
    CustomLink,
}