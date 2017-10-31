import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ onTextFieldChange, value }) => {
  const textFieldChangeHandler = (e) => {
    onTextFieldChange(e.target.value);
  };
  return (
    <input
      type="text"
      value={value}
      onChange={textFieldChangeHandler}
    />
  );
};

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  onTextFieldChange: PropTypes.func.isRequired,
};

export default TextField;
