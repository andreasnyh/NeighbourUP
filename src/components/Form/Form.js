import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from './components/Title';
import Colors from '../../variables';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 130px;
  width: 200px;
  border-radius: 9px;
  flex-direction: column;
  padding: 10px 40px;
  background-color: ${(props) =>
    props.darkmode ? Colors.DarkBlue : Colors.Beige};
`;

const Form = ({ id, children, text, darkmode }) => {
  return (
    <div>
      <StyledForm id={id} darkmode={darkmode}>
        <Title text={text} />
        {children}
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
