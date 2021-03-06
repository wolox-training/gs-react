export const initialState = { books: { data: [] } };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'getBooks':
      return { books: action.payload };
    default:
      return state;
  }
}
