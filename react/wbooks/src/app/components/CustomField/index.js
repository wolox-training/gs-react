import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function CustomField({ type, name, errors, id, values, handleFocus, handleBlur, handleChange, ...props }) {
  return (
    <div className={styles.containerInput}>
      <label htmlFor={id} className={styles.label}>
        {id}
      </label>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={id}
        value={values[name]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...props}
      />
      {errors[name] && <p className={styles.inputError}>{errors[name]}</p>}
    </div>
  );
}

CustomField.propTypes = {
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  errors: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  values: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

export default CustomField;
