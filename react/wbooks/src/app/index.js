import React, { useReducer, useEffect } from 'react';
import * as Yup from 'yup';
import i18next from 'i18next';

import SignUp from './screens/SignUp';
import styles from './styles.module.scss';
import { actionCreateUser } from './actions';

const initialValues = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const handleSubmit = (dispatch, state) => (values, actions) => {
  setTimeout(() => {
    alert(JSON.stringify(state, null, 2));
    actions.setSubmitting(false);
  }, 1000);
};

const validationSchema = Yup.object().shape({
  confirmPassword: Yup.string().required(i18next.t('Validations:fieldEmpty')),
  email: Yup.string()
    .email(i18next.t('Validations:invalidEmail'))
    .required(i18next.t('Validations:fieldEmpty')),
  lastName: Yup.string()
    .min(2, i18next.t('Validations:shortLastName'))
    .max(70, i18next.t('Validations:LongLastName'))
    .required(i18next.t('Validations:fieldEmpty')),
  name: Yup.string()
    .min(2, i18next.t('Validations:shortName'))
    .max(70, i18next.t('Validations:LongName'))
    .required(i18next.t('Validations:fieldEmpty')),
  password: Yup.string().required(i18next.t('Validations:fieldEmpty'))
});
const initialState = { user: {} };

function reducer(state, action) {
  switch (action.type) {
    case 'createUser':
      return { user: action.payload };
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    actionCreateUser(initialValues).then(response => {
      dispatch({
        type: 'createUser',
        payload: response
      });
    });
  }, []);

  return (
    <div className={styles.container}>
      <SignUp
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit(dispatch, state)}
      />
    </div>
  );
}

export default App;
