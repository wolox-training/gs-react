import React from 'react';
import * as Yup from 'yup';
import i18next from 'i18next';

import SignUp from './screens/SignUp';
import styles from './styles.module.scss';

const initialValues = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const handleSubmit = (values, actions) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
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

function App() {
  return (
    <div className={styles.container}>
      <SignUp initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
