import React, { useReducer, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { Link } from 'react-router-dom';

import FormWrapper from '../../components/Formik';
import CustomField from '../../components/CustomField';
import logoWolox from '../../assets/LogoWolox.png';
import { validationSchemaSignUp } from '../../utils/validations';
import { initialValuesSignUp } from '../../constants/auth';
import { createUser, setToken } from '../../../services/AuthServices';

import actionCreators from './reducer/actions';
import styles from './styles.module.scss';
import reducer, { initialState } from './reducer/reducer';

function SignUp({ history }) {
  const [, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    createUser(initialValuesSignUp).then(response => {
      setToken(response.data.access_token || '');
      dispatch(actionCreators.createUser(response));
    });
  }, []);

  const onSubmitSignUp = useCallback(
    values => {
      createUser(values).then(response => {
        setToken(response.data.access_token || '');
        dispatch(actionCreators.createUser(response));
        if (response.ok) {
          setTimeout(() => {
            alert(JSON.stringify(t('SIGNUP:successRegistrer'), null, 2));
            history.push('/');
          }, 1000);
        }
      });
    },
    [history]
  );

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
              {t('SIGNUP:signUp')}
            </button>
            <Link className={styles.loginButton} to="/">
              {t('SIGNUP:login')}
            </Link>
          </form>
        </div>
      )}
    </FormWrapper>
  );
}

SignUp.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SignUp;
