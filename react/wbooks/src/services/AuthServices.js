import { signUpApi } from '../config/api';

export const createUser = body => signUpApi.post('/users', body);
