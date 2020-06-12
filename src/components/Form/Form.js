import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Colors from 'variables';
import Button from 'components/Button/Button';
import Title from './components/Title';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 500px;
  flex-direction: column;
  margin-top: 120px;
  padding: 15px;
  background-color: ${(props) =>
    props.darkmode ? Colors.DarkBlue : Colors.Beige};
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
`;

const Form = ({ id, children, text, darkmode }) => {
  return (
    <div>
      <StyledForm id={id} darkmode={darkmode}>
        <Title text={text} />
        {children}
        <Button>Bli medlem!</Button>
      </StyledForm>
    </div>
  );
};

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  text: PropTypes.string,
  id: PropTypes.string,
  darkmode: PropTypes.bool,
};

Form.defaultProps = {
  children: PropTypes.element,
  text: 'Titel',
  id: 'unnamedForm',
  darkmode: false,
};

export default Form;
