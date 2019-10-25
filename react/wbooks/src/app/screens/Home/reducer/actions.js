const actions = {
  getBooks: 'getBooks'
};

const actionCreators = {
  getBooks: books => ({
    type: actions.getBooks,
    payload: books
  })
};

export default actionCreators;
