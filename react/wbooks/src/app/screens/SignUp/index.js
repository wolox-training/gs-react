import React, { useReducer, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
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

const onSubmit = values => {
  localStorage.setItem('myData', values);
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
  }, 1000);
};

function SignUp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    createUser(initialValuesSignUp).then(response => {
      setToken(response.data.access_token || '');
      dispatch(actionCreators.createUser(response));
    });
  }, []);

  const onSubmitSignUp = useCallback(values => () => onSubmit(values), []);

  return (
    <FormWrapper
      initialValues={initialValuesSignUp}
      validationSchema={validationSchemaSignUp}
      handleSubmit={onSubmitSignUp(state)}
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
            <Link className={styles.loginButton} to="/Login">
              {i18next.t('SIGNUP:login')}
            </Link>
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
