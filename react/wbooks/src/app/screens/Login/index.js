import React from 'react';
import PropTypes from 'prop-types';

import Formik from '../../components/Formik';
import CustomField from '../../components/CustomField';

import styles from './styles.module.scss';

const logo = require('../../assets/LogoWolox.png');

function Login({ values, touched, errors, handleChange, handleBlur, handleSubmit }) {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <img className={styles.logoImage} src={logo} />
        <form className={styles.formContent} onSubmit={handleSubmit}>
          <CustomField
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="name"
            id="Nombre"
            touched={touched}
            errors={errors}
          />
          <CustomField
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
            name="lastName"
            id="Apellido"
            touched={touched}
            errors={errors}
          />
          <CustomField
            type="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="email"
            id="Email"
            touched={touched}
            errors={errors}
          />
          <CustomField
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="password"
            id="Password"
            touched={touched}
            errors={errors}
          />
          <CustomField
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="confirmPassword"
            id="Confirmación de password"
            touched={touched}
            errors={errors}
          />
          <button className={styles.SignupButton} type="button">
            Signup
          </button>
          <button className={styles.loginButton} type="button">
            Login
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
