import React, { useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { t } from 'i18next';

import FormWrapper from '../../components/Formik';
import CustomField from '../../components/CustomField';
import logoWolox from '../../assets/LogoWolox.png';
import { validationSchemaLogin } from '../../utils/validations';
import { initialValuesSignUp } from '../../constants/auth';
import { login, setToken } from '../../../services/AuthServices';

import actionCreators from './reducer/actions';
import styles from './styles.module.scss';
import reducer, { initialState } from './reducer/reducer';

function Login({ history }) {
  const [, dispatch] = useReducer(reducer, initialState);

  const onSubmitLogin = useCallback(
    values => {
      login(values).then(response => {
        if (response.ok) {
          setToken(response.data.access_token || '');
          dispatch(actionCreators.login(response));
          history.push('/home');
        } else {
          alert(JSON.stringify(t('LOGIN:error'), null, 2));
        }
      });
    },
    [history]
  );

  return (
    <FormWrapper
      initialValues={initialValuesSignUp}
      validationSchema={validationSchemaLogin}
      handleSubmit={onSubmitLogin}
    >
      {({ handleSubmit, ...props }) => (
        <div className={styles.formContainer}>
          <img className={styles.logoImage} src={logoWolox} />
          <form className={styles.formContent} onSubmit={handleSubmit}>
            <CustomField type="email" nameInput="email" nameLabel="Email" {...props} />
            <CustomField type="password" nameInput="password" nameLabel="Contraseña" {...props} />
            <button className={styles.loginButton} type="submit">
              {t('LOGIN:login')}
            </button>
            <Link className={styles.SignupButton} to="/sign_up">
              {t('LOGIN:signUp')}
            </Link>
          </form>
        </div>
      )}
    </FormWrapper>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Login;
