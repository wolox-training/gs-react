import { create } from 'apisauce';

export const api = create({
  baseURL: process.env.REACT_APP_API_AUTH_URL,
  timeout: 20000
});

export const setHeader = token => api.setHeader('Authorization', token);
