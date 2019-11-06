const actions = {
  getDetailOfBokk: 'getDetailOfBokk'
};

const actionCreators = {
  getDetailOfBokk: books => ({
    type: actions.getDetailOfBokk,
    payload: books
  })
};

export default actionCreators;
