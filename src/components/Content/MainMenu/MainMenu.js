import React from 'react';
import styled from 'styled-components';
import Colors from 'variables';
import MainMenuItem from './components/MainMenuItem';
// import PropTypes from 'prop-types';

const StyledMainMenu = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 50px;
  justify-items: center;
`;

const MainMenu = () => {
  return (
    <StyledMainMenu>
      <MainMenuItem
        text="Titel"
        icon="icon"
        bgColor={Colors.Beige}
        bgColorText={Colors.Green}
        bgColorIcon={Colors.Pink}
      />
      <MainMenuItem
        text="Titel"
        icon="icon"
        bgColor={Colors.Beige}
        bgColorText={Colors.Green}
        bgColorIcon={Colors.Pink}
      />
      <MainMenuItem
        text="Titel"
        icon="icon"
        bgColor={Colors.Beige}
        bgColorText={Colors.Green}
        bgColorIcon={Colors.Pink}
      />
      <MainMenuItem
        text="Titel"
        icon="icon"
        bgColor={Colors.Beige}
        bgColorText={Colors.Green}
        bgColorIcon={Colors.Pink}
      />
      <MainMenuItem
        text="Titel"
        icon="icon"
        bgColor={Colors.Beige}
        bgColorText={Colors.Green}
        bgColorIcon={Colors.Pink}
      />
      <MainMenuItem
        text="Titel"
        icon="icon"
        bgColor={Colors.Beige}
        bgColorText={Colors.Green}
        bgColorIcon={Colors.Pink}
      />
    </StyledMainMenu>
  );
};

export default MainMenu;
