import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputFieldStyled = styled.textarea`
  font-family: sans-serif;
  font-size: 24px;
  border: 3px solid black;
  margin: 0 auto;
  outline: none;
  width: 100%;
  height: 400px;
  margin-top: 40px;
  resize: none;
  padding: 20px;
`;

const InputField = (props) => {
  return (
    <InputFieldStyled
      onChange={props.onChange}
      value={props.value}
      disabled={props.disabled}
    />
  );
};

InputField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputField;
