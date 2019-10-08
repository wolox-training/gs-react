import React from 'react';
import PropTypes from 'prop-types';

import Formik from '../Formik';

import styles from './styles.module.scss';

function CustomField({ type, handleChange, handleBlur, values, name, touched, errors, id }) {
  return (
    <div className={styles.containerInput}>
      <label htmlFor={id} className={styles.label}>
        {id}
      </label>
      <input
        className={styles.input}
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        name={name}
        id={id}
      />
      {errors[name] && touched[name] && <p className={styles.inputError}>{errors[name]}</p>}
    </div>
  );
}

CustomField.propTypes = {
  errors: PropTypes.shape(),
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  touched: PropTypes.shape(),
  type: PropTypes.string,
  values: PropTypes.shape()
};

export default Formik(CustomField);
