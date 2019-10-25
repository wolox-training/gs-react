import { signUpApi } from '../config/api';
import { normalizeCreateUser, normalizeLogin } from '../app/utils/AuthUtils';

export const serviceCreateUser = body => signUpApi.post('/users', body);

export const serviceLogin = body => signUpApi.post('/users/sessions', body);

export const createUser = user =>
  serviceCreateUser(normalizeCreateUser(user)).then(({ ok, data, problem }) =>
    ok ? { ok: true, data } : { ok: false, problem }
  );

export const login = async user => {
  const userNormalize = normalizeLogin(user);
  const userCreated = await serviceLogin(userNormalize);
  return userCreated.ok ? { ok: true, data: userCreated.data } : { ok: false, problem: userCreated.problem };
};

export const setToken = token => localStorage.setItem('token_id', token);
