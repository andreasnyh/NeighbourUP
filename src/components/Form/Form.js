import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from './Title';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid white;
`;

const Form = ({ children, text }) => {
  return (
    <div>
      <StyledForm>
        <Title text={text} />
        {children}
      </StyledForm>
    </div>
  );
};

Form.propTypes = {
  children: PropTypes.element,
  text: String,
};

Form.defaultProps = {
  children: PropTypes.element,
  text: String,
};

export default Form;
