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
    height: 100px;
    width: 100px;
  `;

  const MenuItemText = styled.div`
    background-color: ${bgColorText};
    font-size: 15px;
    font-family: Roboto;
    padding: 10px;
    position: absolute;
    top: -25px;
    border-radius: 7px;
  `;

  const IconBackground = styled.div`
    display: flex;
    border-radius: 50%;
    background-color: ${bgColorIcon};
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
  `;
  return (
    <MenuItemContainer>
      <MenuItemText bgColorText={bgColorText}>{text}</MenuItemText>
      <IconBackground icon={icon} />
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
