import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';

import FormWrapper from '../../components/Formik';
import CustomField from '../../components/CustomField';

import styles from './styles.module.scss';

const logo = require('../../assets/LogoWolox.png');

function Login({ initialValues, validationSchema, onSubmit }) {
  return (
    <FormWrapper initialValues={initialValues} validationSchema={validationSchema} handleSubmit={onSubmit}>
      {({ handleSubmit, ...props }) => (
        <div className={styles.formContainer}>
          <img className={styles.logoImage} src={logo} />
          <form className={styles.formContent} onSubmit={handleSubmit}>
            <CustomField type="text" name="name" id="Nombre" {...props} />
            <CustomField type="text" name="lastName" id="Apellido" {...props} />
            <CustomField type="email" name="email" id="Email" {...props} />
            <CustomField type="password" name="password" id="Contraseña" {...props} />
            <CustomField type="password" name="confirmPassword" id="Confirmar Contraseña" {...props} />
            <button className={styles.SignupButton} type="submit">
              {i18next.t('SIGNUP:signUp')}
            </button>
            <button className={styles.loginButton} type="button">
              {i18next.t('SIGNUP:login')}
            </button>
          </form>
        </div>
      )}
    </FormWrapper>
  );
}

Login.propTypes = {
  initialValues: PropTypes.shape({
    confirmPassword: PropTypes.string,
    email: PropTypes.string,
    lastName: PropTypes.string,
    name: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  validationSchema: PropTypes.shape({
    confirmPassword: PropTypes.func,
    email: PropTypes.func,
    lastName: PropTypes.func,
    name: PropTypes.func,
    password: PropTypes.func
  }).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Login;
