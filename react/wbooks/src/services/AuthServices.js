import { signUpApi } from '../config/api';
import { normalizeCreateUser, normalizeLogin } from '../app/utils/AuthUtils';

export const serviceCreateUser = body => signUpApi.post('/users', body);

export const serviceLogin = body => signUpApi.post('/users/sessions', body);

export const createUser = async user => {
  const userNormalize = normalizeCreateUser(user);
  const userCreated = await serviceCreateUser(userNormalize);
  return userCreated.ok ? { ok: true, data: userCreated.data } : { ok: false, problem: userCreated.problem };
};

export const login = async user => {
  const userNormalize = normalizeLogin(user);
  const userCreated = await serviceLogin(userNormalize);
  return userCreated.ok ? { ok: true, data: userCreated.data } : { ok: false, problem: userCreated.problem };
};

export const setToken = token => localStorage.setItem('token_id', token);
