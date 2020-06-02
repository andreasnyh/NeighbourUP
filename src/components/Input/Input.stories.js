import React from 'react';
import styled from 'styled-components';
import Colors from '../../variables';
import Input from './Input';

export default { title: 'Input' };

const StorybookWhiteCentered = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
};

const normalmode = {
  backgroundColor: `${Colors.Beige}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
const darkmode = {
  paddingTop: '20px',
  backgroundColor: `${Colors.DarkBlue}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const margin = {
  marginBottom: '20px',
  marginTop: '10px',
};

const StorybookInput = styled(Input)`
  ::placeholder {
    color: ${(props) => (props.darkmode ? Colors.White : Colors.Black)};
  }
`;

export const NormalInput = () => {
  return (
    <div>
      <div style={(StorybookWhiteCentered, normalmode)}>
        <p>Normal mode</p>
        <StorybookInput style={margin} placeholder="Adress" />
        <StorybookInput style={margin} placeholder="Name" />
        <StorybookInput style={margin} placeholder="Password" />
      </div>
      <div style={darkmode}>
        <p>Dark</p>
        <StorybookInput darkmode style={margin} placeholder="Adress" />
        <StorybookInput darkmode style={margin} placeholder="Name" />
        <StorybookInput darkmode style={margin} placeholder="Password" />
      </div>
    </div>
  );
};
