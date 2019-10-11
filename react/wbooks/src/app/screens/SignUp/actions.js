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
