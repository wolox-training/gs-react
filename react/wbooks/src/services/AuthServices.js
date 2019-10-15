import { signUpApi } from '../config/api';
import { normalizeCreateUser } from '../app/utils/AuthUtils';

export const serviceCreateUser = body => signUpApi.post('/users', body);

export const createUser = async user => {
  const userNormalize = normalizeCreateUser(user);
  const userCreated = await serviceCreateUser(userNormalize);
  return userCreated.ok ? { ok: true, data: userCreated.data } : { ok: false, problem: userCreated.problem };
};

export const setToken = token => localStorage.setItem('token_id', token);
