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
            <CustomField type="text" nameInput="name" nameLabel="Nombre" {...props} />
            <CustomField type="text" nameInput="lastName" nameLabel="Apellido" {...props} />
            <CustomField type="email" nameInput="email" nameLabel="Email" {...props} />
            <CustomField type="password" nameInput="password" nameLabel="Contraseña" {...props} />
            <CustomField
              type="password"
              nameInput="confirmPassword"
              nameLabel="Confirmar contraseña"
              {...props}
            />
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
  onSubmit: PropTypes.func.isRequired
};

export default SignUp;
