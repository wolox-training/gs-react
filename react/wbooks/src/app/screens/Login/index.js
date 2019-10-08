import React from 'react';
import PropTypes from 'prop-types';

import FormWrapper from '../../components/Formik';
import CustomField from '../../components/CustomField';

import styles from './styles.module.scss';

const logo = require('../../assets/LogoWolox.png');

function Login({ initialValues, validationSchema, onSubmit }) {
  return (
    <FormWrapper initialValues={initialValues} validationSchema={validationSchema} handleSubmit={onSubmit}>
      {({ handleSubmit, ...props }) => (
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <img className={styles.logoImage} src={logo} />
            <form className={styles.formContent} onSubmit={handleSubmit}>
              <CustomField type="text" name="name" id="Nombre" {...props} />
              <CustomField type="text" name="lastName" id="Apellido" {...props} />
              <CustomField type="email" name="email" id="Email" {...props} />
              <CustomField type="password" name="password" id="Contraseña" {...props} />
              <CustomField type="password" name="confirmPassword" id="Confirmar Contraseña" {...props} />
              <button className={styles.SignupButton} type="submit">
                Signup
              </button>
              <button className={styles.loginButton} type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </FormWrapper>
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape(),
  validationSchema: PropTypes.shape()
};

export default Login;
