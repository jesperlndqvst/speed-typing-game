import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button onClick={props.handleClick} disabled={props.disabled}>
      {props.text}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
  text: PropTypes.string,
};


export default Button;
