import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: black;
`;

const TitleBg = styled.div`
  text-align: center;
`;

const Title = ({ text }) => {
  return (
    <div>
      <TitleBg>
        <StyledTitle>{text}</StyledTitle>
      </TitleBg>
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string,
};

Title.defaultProps = {
  text: 'Titel',
};

export default Title;
