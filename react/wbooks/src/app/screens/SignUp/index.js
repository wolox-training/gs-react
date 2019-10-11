import React, { useReducer, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';

import FormWrapper from '../../components/Formik';
import CustomField from '../../components/CustomField';
import logoWolox from '../../assets/LogoWolox.png';
import { validationSchemaSignUp } from '../../utils/validations';
import { initialValuesSignUp } from '../../constants/auth';

import { actionCreateUser, setToken } from './actions';
import styles from './styles.module.scss';

const onSubmit = values => {
  localStorage.setItem('myData', values);
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
  }, 1000);
};

const initialState = { user: {} };

function reducer(state, action) {
  switch (action.type) {
    case 'createUser':
      return { user: action.payload };
    default:
      return state;
  }
}

function SignUp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    actionCreateUser(initialValuesSignUp).then(response => {
      setToken(response.data.access_token || '');
      dispatch({
        type: 'createUser',
        payload: response
      });
    });
  }, []);

  const onSubmitSignUp = useCallback(
    values => () => {
      onSubmit(values);
    },
    []
  );

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
