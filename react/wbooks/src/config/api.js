import { create } from 'apisauce';

export const signUpApi = create({
  baseURL: process.env.REACT_APP_API_SIGNUP_URL,
  timeout: 20000
});
