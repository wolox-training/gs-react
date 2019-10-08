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
  handleSubmit: PropTypes.func.isRequired, // eslint-disable-line react/forbid-prop-types
  initialValues: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  validationSchema: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

export default FormWrapper;
