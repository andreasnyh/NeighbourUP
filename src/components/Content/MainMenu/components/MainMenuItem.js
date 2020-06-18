import React from 'react';
import Color, { BoxShadow } from 'variables';
import propTypes from 'prop-types';
import styled from 'styled-components';

const MenuItemContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  padding: 20px;
  box-shadow: ${BoxShadow.Normal};
  border-radius: 7px;
  height: 125px;
  width: 130px;
`;
const MenuItemText = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bgColorText};
  color: ${Color.White};
  font-size: 16px;
  padding: 0 0;
  position: absolute;
  top: -35px;
  border-radius: 7px;
  text-align: center;
  min-height: 50px;
  width: 110px;
  justify-content: center;
`;

const IconBackground = styled.div`
  display: flex;
  border-radius: 50%;
  background-color: ${(props) => props.bgColorIcon};
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
`;

const MainMenuItem = ({ bgColor, bgColorIcon, bgColorText, text, icon }) => {
  return (
    <MenuItemContainer bgColor={bgColor}>
      <MenuItemText bgColorText={bgColorText}>{text}</MenuItemText>
      <IconBackground bgColorIcon={bgColorIcon}>{icon}</IconBackground>
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
  bgColorIcon: Color.DarkBlue,
  bgColorText: Color.Green,
  text: 'Title',
  icon: <></>,
};
export default MainMenuItem;
