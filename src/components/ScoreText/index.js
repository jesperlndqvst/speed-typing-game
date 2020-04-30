import React from 'react';
import PropTypes from 'prop-types';

const ScoreText = (props) => {
  return (
  <p>{props.text} {props.value}</p>
  );
};

ScoreText.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.number
};


export default ScoreText;
