import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import Formik from '../../components/Formik';

import styles from './styles.module.scss';

const logo = require('../../assets/LogoWolox.png');

function Login({ values, touched, errors, handleChange, handleBlur, handleSubmit }) {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <img className={styles.logoImage} src={logo} />
        <form className={styles.formContent} onSubmit={handleSubmit}>
          <Field
            className={styles.input}
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="name"
          />
          <Field
            className={styles.input}
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="lastName"
          />
          <Field
            className={styles.input}
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="email"
          />
          <Field
            className={styles.input}
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="password"
          />
          <Field
            className={styles.input}
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="confirmPassword"
          />

          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  errors: PropTypes.shape(),
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  touched: PropTypes.func,
  values: PropTypes.shape()
};

export default Formik(Login);
