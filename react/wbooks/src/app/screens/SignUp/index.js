import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';

import FormWrapper from '../../components/Formik';
import CustomField from '../../components/CustomField';
import logoWolox from '../../assets/LogoWolox.png';
import { validationSchemaSignUp } from '../../utils/validations';
import { initialValuesSignUp } from '../../constants/auth';

import styles from './styles.module.scss';

const onSubmit = (values, actions) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, 1000);
};

function SignUp() {
  const onSubmitSignUp = useCallback((values, actions) => {
    onSubmit(values, actions);
  }, []);
  return (
    <FormWrapper
      initialValues={initialValuesSignUp}
      validationSchema={validationSchemaSignUp}
      handleSubmit={onSubmitSignUp}
    >
      {({ handleSubmit, ...props }) => (
        <div className={styles.formContainer}>
          <img className={styles.logoImage} src={logoWolox} />
          <form className={styles.formContent} onSubmit={handleSubmit}>
            <CustomField type="text" name="Nombre" id="name" {...props} />
            <CustomField type="text" name="Apellido" id="lastName" {...props} />
            <CustomField type="email" name="Email" id="email" {...props} />
            <CustomField type="password" name="Contraseña" id="password" {...props} />
            <CustomField type="password" name="Confirmar contraseña" id="confirmPassword" {...props} />
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

SignUp.propTypes = {
  // initialValues: PropTypes.shape({
  //   confirmPassword: PropTypes.string,
  //   email: PropTypes.string,
  //   lastName: PropTypes.string,
  //   name: PropTypes.string,
  //   password: PropTypes.string
  // }).isRequired,
  // validationSchema: PropTypes.shape({
  //   confirmPassword: PropTypes.func,
  //   email: PropTypes.func,
  //   lastName: PropTypes.func,
  //   name: PropTypes.func,
  //   password: PropTypes.func
  // }).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SignUp;
