import React from 'react';
import Color, { BoxShadow } from 'variables';
import propTypes from 'prop-types';
import styled from 'styled-components';

const MainMenuItem = ({ bgColor, bgColorIcon, bgColorText, text, icon }) => {
  const MenuItemContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: ${bgColor};
    padding: 20px;
    box-shadow: ${BoxShadow.Normal};
    border-radius: 7px;
    height: 125px;
    width: 130px;
  `;

  const MenuItemText = styled.div`
    background-color: ${bgColorText};
    color: ${Color.White};
    font-size: 16px;
    padding: 10px;
    position: absolute;
    top: -25px;
    border-radius: 7px;
    text-align: center;
  `;

  const IconBackground = styled.div`
    display: flex;
    border-radius: 50%;
    background-color: ${bgColorIcon};
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
  `;
  return (
    <MenuItemContainer>
      <MenuItemText bgColorText={bgColorText}>{text}</MenuItemText>
      <IconBackground>{icon}</IconBackground>
    </MenuItemContainer>
  );
};

MainMenuItem.propTypes = {
  bgColor: propTypes.string,
  bgColorIcon: propTypes.string,
  bgColorText: propTypes.string,
  text: propTypes.string,
  icon: propTypes.element,
};

MainMenuItem.defaultProps = {
  bgColor: Color.Beige,
  bgColorIcon: Color.White,
  bgColorText: Color.White,
  text: 'text',
  icon: 'länk till ikon',
};
export default MainMenuItem;
