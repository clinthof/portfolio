import styled from 'styled-components';

const FooterContainer = styled.div`
    padding: 60px;
    background: black;
    position: relative;
    bottom: 0;
    width: 100%;

    @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export { FooterContainer }