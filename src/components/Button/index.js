import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  height: 75px;
  width: 200px;
  background-color: red;
  font-size: 36px;
  text-transform: uppercase;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  user-select: none;
  outline: none;

`;

const Button = (props) => {
  return (
    <ButtonStyled onClick={props.handleClick} disabled={props.disabled}>
      {props.text}
    </ButtonStyled>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
  text: PropTypes.string,
};

export default Button;
