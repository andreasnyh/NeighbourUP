import React from 'react';
import Header from 'components/Header/Header';
import Form from 'components/Form/Form';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import styled from 'styled-components';

const SplitContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async createUser(data) {
    const response = await fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.createUser(this.state).then((data) => console.log(data));
  }

  handleInputChange(event) {
    const { name, checked, value } = event.target;
    const newValue = name === 'terms' ? checked : value;

    this.setState({
      [name]: newValue,
    });
  }

  render() {
    return (
      <>
        <Header />
        <Form text="Bli Medlem">
          <Input
            onChange={this.handleInputChange}
            name="firstName"
            placeholder="Förnamn"
          />
          <Input
            onChange={this.handleInputChange}
            name="lastName"
            placeholder="Efternamn"
          />
          <Input
            onChange={this.handleInputChange}
            name="adress"
            placeholder="Adress"
          />
          <Input
            onChange={this.handleInputChange}
            name="coAdress"
            placeholder="C/O"
          />
          <SplitContainer>
            <Input
              onChange={this.handleInputChange}
              small
              name="postalNumber"
              placeholder="Postnummer"
            />
            <Input
              onChange={this.handleInputChange}
              medium
              name="postalAdress"
              placeholder="Postadress"
            />
          </SplitContainer>
          <Input
            onChange={this.handleInputChange}
            name="email"
            placeholder="Epost"
          />
          <Input
            onChange={this.handleInputChange}
            name="password"
            placeholder="Lösenord"
          />
          <Input
            onChange={this.handleInputChange}
            name="password"
            placeholder="Upprepa lösenord"
          />
          <label htmlFor="terms">
            Jag godkänner alla villor
            <input
              onChange={this.handleInputChange}
              style={{ marginLeft: '13px' }}
              name="terms"
              type="checkbox"
            />
          </label>
          <Button type="submit" onClick={this.handleSubmit}>
            Bli medlem!
          </Button>
        </Form>
      </>
    );
  }
}
export default Register;
