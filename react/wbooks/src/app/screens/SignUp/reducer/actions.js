const actions = {
  createUser: 'createUser'
};

const actionCreators = {
  createUser: newUser => ({
    type: actions.createUser,
    payload: newUser
  })
};

export default actionCreators;
