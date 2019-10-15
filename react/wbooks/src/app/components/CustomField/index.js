import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function CustomField({
  type,
  nameInput,
  errors,
  values,
  handleFocus,
  handleBlur,
  handleChange,
  nameLabel,
  ...props
}) {
  return (
    <div className={styles.containerInput}>
      <label htmlFor={nameInput} className={styles.label}>
        {nameLabel}
      </label>
      <input
        className={styles.input}
        type={type}
        name={nameInput}
        id={nameInput}
        value={values[nameInput]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...props}
      />
      {errors[nameInput] && <p className={styles.inputError}>{errors[nameInput]}</p>}
    </div>
  );
}

CustomField.propTypes = {
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  errors: PropTypes.shape({}),
  id: PropTypes.string,
  name: PropTypes.string,
  nameInput: PropTypes.string,
  nameLabel: PropTypes.string,
  type: PropTypes.string,
  values: PropTypes.shape({})
};

export default CustomField;
