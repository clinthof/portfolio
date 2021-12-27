import styled from "styled-components";

const CustomNav = styled.nav`
    float: right;
    right: 5%;
    position: relative;
`;

const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    grid-template: 150px / auto auto auto;
`;

export { CustomNav, CardWrapper, }