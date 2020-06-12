import React from 'react';
import Header from 'components/Header/Header';
import Form from 'components/Form/Form';
import Input from 'components/Input/Input';
import styled from 'styled-components';

const RegisterContainer = {
  display: 'flex',
  justifyContent: 'center',
  height: '130vh',
};

const SplitContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

function Register() {
  return (
    <div style={RegisterContainer}>
      <Header />
      <Form text="Bli Medlem">
        <Input placeholder="Förnamn" />
        <Input placeholder="Efternamn" />
        <Input placeholder="Adress" />
        <Input placeholder="C/O" />
        <SplitContainer>
          <Input small placeholder="Postnummer" />
          <Input medium placeholder="Postadress" />
        </SplitContainer>
        <Input placeholder="Epost" />
        <Input placeholder="Lösenord" />
        <Input placeholder="Upprepa lösenord" />
        <label Htmlfor="terms">
          Jag godkänner alla villor
          <input style={{ marginLeft: '13px' }} name="terms" type="checkbox" />
        </label>
      </Form>
    </div>
  );
}

export default Register;
