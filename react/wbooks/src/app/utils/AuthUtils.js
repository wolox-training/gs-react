/* eslint-disable camelcase */
export const normalizeCreateUser = ({ name, lastName, email, password, confirmPassword }) => ({
  user: {
    email,
    password,
    password_confirmation: confirmPassword,
    first_name: name,
    last_name: lastName,
    locale: 'en'
  }
});
