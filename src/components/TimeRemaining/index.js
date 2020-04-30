import React from 'react';
import PropTypes from 'prop-types';

const TimeRemaining = (props) => {
return <h4>{props.text} {props.value}</h4>;
};

TimeRemaining.propTypes = {
  text: PropTypes.string,
  value: PropTypes.number
};

export default TimeRemaining;
