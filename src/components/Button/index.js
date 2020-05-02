import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  height: 65px;
  width: 200px;
  color: var(--color-primary);
  background-color: #fff;
  font-family: Helvetica, sans-serif;
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  user-select: none;
  outline: none;
  text-decoration: none;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background: var(--color-primary);
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
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
