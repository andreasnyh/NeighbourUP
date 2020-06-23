import React from 'react';
import Colors from 'variables';
import styled from 'styled-components';
import MainMenuItem from './MainMenuItem';

export default { title: 'MainMenuItem' };

const StoryBook = styled.div`
  padding: 50px 0;
  background-color: ${(props) =>
    props.darkmode ? Colors.DarkBlue : Colors.Beige};
  color: ${(props) => (props.darkmode ? Colors.White : Colors.Black)};
`;

export const MainMenuItemStory = () => {
  return (
    <StoryBook>
      <MainMenuItem />
    </StoryBook>
  );
};
