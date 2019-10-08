import React from 'react';
import * as Yup from 'yup';

import Login from './app/screens/Login';
import './App.css';

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
  confirmPassword: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required')
});

function App() {
  return (
    <div className="App">
      <Login initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
