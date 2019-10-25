import { signUpApi } from '../config/api';
import { normalizeCreateUser } from '../app/utils/AuthUtils';

export const serviceCreateUser = body => signUpApi.post('/users', body);

export const createUser = user =>
  serviceCreateUser(normalizeCreateUser(user)).then(({ ok, data, problem }) =>
    ok ? { ok: true, data } : { ok: false, problem }
  );

export const setToken = token => localStorage.setItem('token_id', token);
