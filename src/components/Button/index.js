import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  height: 65px;
  width: 200px;
  background-color: red;
  color: #fff;
  font-size: 36px;
  text-transform: uppercase;
  border: none;
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
