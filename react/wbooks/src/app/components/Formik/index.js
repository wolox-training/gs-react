import { withFormik } from 'formik';

const formik = WrappedComponent => {
  const MyEnhancedForm = withFormik({
    mapPropsToValues: () => ({ name: '', lastName: '', email: '', password: '', confirmPassword: '' }),

    // Custom sync validation
    validate: values => {
      const errors = {};
      console.log(values);
      if (!values.name) {
        errors.name = 'El nombre es requerido';
      }
      if (!values.lastName) {
        errors.lastName = 'El apellido es requerido';
      }
      if (!values.email) {
        errors.email = 'El email es requerido';
      }
      if (!values.password) {
        errors.password = 'La contraseña es requerida';
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = 'La confirmación de la contraseña es requerida';
      }
      if (values.password !== values.confirmPassword) {
        errors.password = 'La contraseñas no coinciden';
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
