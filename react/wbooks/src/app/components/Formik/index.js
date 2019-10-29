import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function FormWrapper({ initialValues, validationSchema, handleSubmit, children }) {
  return (
    <div className={styles.container}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {props => children({ ...props })}
      </Formik>
    </div>
  );
}

FormWrapper.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({}),
  validationSchema: PropTypes.shape({})
};

export default FormWrapper;
