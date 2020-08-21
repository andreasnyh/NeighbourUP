import React from 'react';
import styled from 'styled-components';
import Colors from 'variables';
import logo from './white-logo.png';

const StyledHeader = styled.header`
  background-color: ${Colors.DarkBlue};
  width: 100%;
  height: 150px;
  text-align: center;
`;
// border-radius: 0 0 10px 10px;

const LogoContainer = styled.div`
  width: 210px;
  margin: 0 auto;
`;

const StyledLogo = styled.img`
  width: 180px;
  margin: 10px;
  margin-top: 30px;
`;

const StyledSlogan = styled.p`
  font-family: Roboto, sans-serif;
  color: ${Colors.White};
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  margin: 0;
`;

const Header = () => {
  return (
    <StyledHeader>
      <LogoContainer>
        <StyledLogo src={logo} alt="NeighbourUp logo" />
        <StyledSlogan>
          Bli medlem och ta kontakt med dina grannar redan idag!
        </StyledSlogan>
      </LogoContainer>
    </StyledHeader>
  );
};

export default Header;
