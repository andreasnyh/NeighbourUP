import React from 'react';
import Input from 'components/Input/Input';
import StoryBook from 'storybook.style';
import Form from './Form';

export default { title: 'Forms' };

export const DarkModeForm = () => {
  return (
    <StoryBook darkmode>
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
    </StoryBook>
  );
};

export const LightModeForm = () => {
  return (
    <StoryBook>
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
    </StoryBook>
  );
};
