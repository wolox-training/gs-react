const actions = {
  login: 'login'
};

const actionCreators = {
  login: user => ({
    type: actions.login,
    payload: user
  })
};

export default actionCreators;
