import { create } from 'apisauce';

export const signUpApi = create({
  baseURL: 'http://private-anon-f5ac8b3d43-wbooksapi.apiary-mock.com/api/v1',
  timeout: 20000
});
