import React from 'react';
import Colors from 'variables';
import Input from 'components/Input/Input';
import Form from './Form';

export default { title: 'Forms' };

const StorybookWhiteCentered = {
  display: 'flex',
  padding: '100px',
  justifyContent: 'center',
  height: '130vh',
  width: '50%',
  margin: '0 auto',
};

const StorybookBlueCentered = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '130vh',
  background: Colors.DarkBlue,
  width: '50%',
  margin: '0 auto',
};

export const DarkModeForm = () => {
  return (
    <div style={StorybookBlueCentered}>
      <Form darkmode text="Bli Medlem">
        <Input darkmode placeholder="Förnamn" />
        <Input darkmode placeholder="Efternamn" />
        <Input darkmode placeholder="Adress" />
        <Input darkmode placeholder="C/O" />
        <Input darkmode placeholder="Postnummer" />
        <Input darkmode placeholder="Postadress" />
        <Input darkmode placeholder="Epost" />
        <Input darkmode placeholder="Lösenord" />
        <Input darkmode placeholder="Upprepa lösenord" />
      </Form>
    </div>
  );
};

export const LightModeForm = () => {
  return (
    <div>
      <div style={StorybookWhiteCentered}>
        <Form text="Bli Medlem">
          <Input placeholder="Förnamn" />
          <Input placeholder="Efternamn" />
          <Input placeholder="Adress" />
          <Input placeholder="C/O" />
          <Input placeholder="Postnummer" />
          <Input placeholder="Postadress" />
          <Input placeholder="Epost" />
          <Input placeholder="Lösenord" />
          <Input placeholder="Upprepa lösenord" />
        </Form>
      </div>
    </div>
  );
};
