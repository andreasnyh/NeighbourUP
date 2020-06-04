import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Colors from '../../variables';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${(props) =>
    props.darkmode ? Colors.DarkBlue : Colors.Beige};
`;

const Form = ({ children }) => {
  return (
    <div>
      <StyledForm>{children}</StyledForm>
    </div>
  );
};

Form.propTypes = {
  children: PropTypes.element,
};

Form.defaultProps = {
  children: PropTypes.element,
};

export default Form;
