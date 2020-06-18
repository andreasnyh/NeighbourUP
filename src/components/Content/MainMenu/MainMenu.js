import React from 'react';
import styled from 'styled-components';
import Colors from 'variables';
// logos
import {
  Build,
  Settings,
  Person,
  Chat,
  People,
  DateRange,
} from '@material-ui/icons/';

import MainMenuItem from './components/MainMenuItem';
// import PropTypes from 'prop-types';

const StyledMainMenu = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 50px;
  justify-items: center;
  font-size: 24px;
`;

// ⬆ font-size controlls icon size ⬇

const MainMenu = () => {
  return (
    <StyledMainMenu>
      <MainMenuItem
        text="Prylar &amp; Tjänster"
        icon={<Build style={{ fill: Colors.White, fontSize: '2em' }} />}
        bgColor={Colors.Beige}
        bgColorText={Colors.Green}
        bgColorIcon={Colors.DarkBlue}
      />
      <MainMenuItem
        text="Meddelanden"
        icon={<Chat style={{ fill: Colors.White, fontSize: '2em' }} />}
        bgColor={Colors.Beige}
        bgColorText={Colors.Green}
        bgColorIcon={Colors.Yellow}
      />
      <MainMenuItem
        text="Kalender"
        icon={<DateRange style={{ fill: Colors.White, fontSize: '2.25em' }} />}
        bgColor={Colors.Beige}
        bgColorText={Colors.Green}
        bgColorIcon={Colors.Pink}
      />
      <MainMenuItem
        text="Mina Grannar"
        icon={<People style={{ fill: Colors.White, fontSize: '2.5em' }} />}
        bgColor={Colors.Beige}
        bgColorText={Colors.Green}
        bgColorIcon={Colors.LightBlue}
      />
      <MainMenuItem
        text="Min Profil"
        icon={<Person style={{ fill: Colors.White, fontSize: '2.5em' }} />}
        bgColor={Colors.Beige}
        bgColorText={Colors.Green}
        bgColorIcon={Colors.Yellow}
      />
      <MainMenuItem
        text="Inställningar"
        icon={<Settings style={{ fill: Colors.White, fontSize: '2.5em' }} />}
        bgColor={Colors.Beige}
        bgColorText={Colors.Green}
        bgColorIcon={Colors.DarkBlue}
      />
    </StyledMainMenu>
  );
};

export default MainMenu;
