import React from 'react';
import Button from './Button';
import Colors from '../../variables';

export default { title: 'Button' };

const StorybookWhiteCentered = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  background: Colors.Beige,
};

export const PrimaryButton = () => {
  return (
    <div style={StorybookWhiteCentered}>
      <Button primary>Logga in</Button>
    </div>
  );
};

export const NormalButton = () => {
  return <Button>Hej brush</Button>;
};
