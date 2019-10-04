import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import Formik from '../Formik';

function Login({ values, handleChange, handleBlur, style, errors, touched }) {
  return (
    <>
      <Field
        className={style}
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        name="name"
      />
      {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
    </>
  );
}

Login.propTypes = {
  errors: PropTypes.shape(),
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  style: PropTypes.shape(),
  touched: PropTypes.shape(),
  values: PropTypes.shape()
};

export default Formik(Login);
