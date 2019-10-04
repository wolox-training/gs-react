import { withFormik } from 'formik';

const formik = WrappedComponent => {
  const MyEnhancedForm = withFormik({
    mapPropsToValues: () => ({ name: '' }),

    // Custom sync validation
    validate: values => {
      const errors = {};

      if (!values.name) {
        errors.name = ' Name Required';
      }

      return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },

    displayName: 'BasicForm'
  })(WrappedComponent);

  return MyEnhancedForm;
};

export default formik;
