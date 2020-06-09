import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from './Title';
import Colors from '../../variables';
import Button from '../Button/Button';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  padding: 15px;
  background-color: ${(props) =>
    props.darkmode ? Colors.DarkBlue : Colors.Beige};
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
`;

const Form = ({ children, text, darkmode }) => {
  return (
    <div>
      <StyledForm darkmode={darkmode}>
        <Title text={text} />
        {children}
        <Button>Bli medlem!</Button>
      </StyledForm>
    </div>
  );
};

Form.propTypes = {
  children: PropTypes.element,
  text: String,
  darkmode: PropTypes.bool,
};

Form.defaultProps = {
  children: PropTypes.element,
  text: String,
  darkmode: false,
};

export default Form;
