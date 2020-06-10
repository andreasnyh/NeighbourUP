import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from './components/Title';
import Colors from '../../variables';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background-color: ${(props) =>
    props.darkmode ? Colors.DarkBlue : Colors.Beige};
`;

const Form = ({ children, text, darkmode }) => {
  return (
    <div>
      <StyledForm darkmode={darkmode}>
        <Title text={text} />
        {children}
      </StyledForm>
    </div>
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
