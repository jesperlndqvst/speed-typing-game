import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputFieldStyled = styled.textarea`
  font-size: 24px;
  border: none;
  background-color: var(--color-light-grey);
  margin: 0 auto;
  outline: none;
  width: 100%;
  height: 400px;
  margin-top: 40px;
  resize: none;
  padding: 10px 20px;
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
