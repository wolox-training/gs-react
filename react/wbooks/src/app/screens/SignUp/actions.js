import { createUser } from '../../../services/AuthServices';
import { normalizeCreateUser } from '../../utils/AuthUtils';

export const actionCreateUser = async user => {
  const userNormalize = normalizeCreateUser(user);
  const userCreated = await createUser(userNormalize);
  if (userCreated.ok) {
    return { ok: true, data: userCreated.data };
  }
  return { ok: false, problem: userCreated.problem };
};

// export const actionCreateUser = user =>
//   // eslint-disable-next-line no-async-promise-executor
//   new Promise(async resolve => {
//     // const tokens = await socialAuthApi.post('/oauth2/token', body);
//     const userNormalize = normalizeCreateUser(user);
//     const userCreated = await createUser(userNormalize);
//     if (userCreated.ok) {
//       resolve({ ok: true, data: userCreated.data });
//     } else {
//       resolve({ ok: false, problem: userCreated.problem });
//     }
//   });
