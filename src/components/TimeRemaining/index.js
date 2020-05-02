import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TimeRemainingStyled = styled.h4`
  font-size: 24px;
`;

const TimeRemaining = (props) => {
  return (
    <TimeRemainingStyled>
      {props.text} {props.value}
    </TimeRemainingStyled>
  );
};

TimeRemaining.propTypes = {
  text: PropTypes.string,
  value: PropTypes.number,
};

export default TimeRemaining;
