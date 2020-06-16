import React from 'react';
import styled from 'styled-components';
import Colors from 'variables';
import Input from './Input';

export default { title: 'Input' };

// Styling for storybook
const StorybookWhiteCentered = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',
  height: '100%',
};

const normalmode = {
  backgroundColor: `${Colors.Beige}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',
  margin: ' 0 auto',
};

const darkmode = {
  paddingTop: '20px',
  backgroundColor: `${Colors.DarkBlue}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',
  margin: ' 0 auto',
};

const margin = {
  marginBottom: '20px',
  marginTop: '10px',
};
// End styling for storybook

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
        <StorybookInput type="text" style={margin} placeholder="Adress" />
        <StorybookInput type="text" style={margin} placeholder="Name" />
        <StorybookInput type="password" style={margin} placeholder="Password" />
      </div>
      <div style={darkmode}>
        <p>Dark</p>
        <StorybookInput
          type="text"
          darkmode
          style={margin}
          placeholder="Adress"
        />
        <StorybookInput
          type="text"
          darkmode
          style={margin}
          placeholder="Name"
        />
        <StorybookInput
          type="password"
          darkmode
          style={margin}
          placeholder="Password"
        />
      </div>
    </div>
  );
};
