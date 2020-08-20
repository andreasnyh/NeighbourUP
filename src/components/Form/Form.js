import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Colors from 'variables';
import Title from './components/Title';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: -25px auto 40px auto;
  padding: 15px;
  width: 90%;
  z-index: 0;
  background-color: ${(props) =>
    props.darkmode ? Colors.DarkBlue : Colors.Beige};
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
`;

const Form = ({ children, text, darkmode }) => {
  return (
    <StyledForm darkmode={darkmode}>
      <Title text={text} />
      {children}
    </StyledForm>
  );
};

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  text: PropTypes.string,
  darkmode: PropTypes.bool,
};

Form.defaultProps = {
  children: PropTypes.element,
  text: 'Titel',
  darkmode: false,
};

export default Form;
