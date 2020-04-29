import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
console.log(props);
  return (
  <p>{props.text} {props.value}</p>
  );
};

Counter.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.number
};

export default Counter;
