import React from 'react';
import PropTypes from 'prop-types';

const InputField = (props) => {
    return (
      <textarea
        onChange={props.onChange}
        value={props.value}
        disabled={props.disabled}
      />
    );
}

InputField.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    disabled: PropTypes.bool
};

export default InputField;