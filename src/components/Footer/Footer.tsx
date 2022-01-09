import React from 'react';
import { FooterContainer } from './FooterStyles';

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <h3 
                style={{ 
                    color: "white", 
                    textAlign: "center", 
                    marginTop: "-60px" 
                }}
            >
        Check me out elsewhere:
      </h3>
        </FooterContainer>
    )
}

export default Footer;
