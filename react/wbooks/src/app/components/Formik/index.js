import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

function FormWrapper({ initialValues, validationSchema, handleSubmit, children }) {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {props => children({ ...props })}
    </Formik>
  );
}

FormWrapper.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({}),
  validationSchema: PropTypes.shape({})
};

export default FormWrapper;
