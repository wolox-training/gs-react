import React, { useReducer, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { Link } from 'react-router-dom';

import FormWrapper from '../../components/Formik';
import CustomField from '../../components/CustomField';
import logoWolox from '../../assets/LogoWolox.png';
import { validationSchemaLogin } from '../../utils/validations';
import { initialValuesSignUp } from '../../constants/auth';
import { login, setToken } from '../../../services/AuthServices';

import actionCreators from './reducer/actions';
import styles from './styles.module.scss';
import reducer, { initialState } from './reducer/reducer';

const onSubmit = values => {
  localStorage.setItem('logged_user', values);
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
  }, 1000);
};

function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    login(initialValuesSignUp).then(response => {
      setToken(response.data.access_token || '');
      dispatch(actionCreators.login(response));
    });
  }, []);

  const onSubmitLogin = useCallback(values => () => onSubmit(values), []);

  return (
    <FormWrapper
      initialValues={initialValuesSignUp}
      validationSchema={validationSchemaLogin}
      handleSubmit={onSubmitLogin(state)}
    >
      {({ handleSubmit, ...props }) => (
        <div className={styles.formContainer}>
          <img className={styles.logoImage} src={logoWolox} />
          <form className={styles.formContent} onSubmit={handleSubmit}>
            <CustomField type="email" nameInput="email" nameLabel="Email" {...props} />
            <CustomField type="password" nameInput="password" nameLabel="Contraseña" {...props} />
            <button className={styles.loginButton} type="submit">
              {i18next.t('LOGIN:login')}
            </button>
            <Link className={styles.SignupButton} to="/sign_up">
              {i18next.t('LOGIN:signUp')}
            </Link>
          </form>
        </div>
      )}
    </FormWrapper>
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Login;
