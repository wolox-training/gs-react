export const initialState = { book: { data: null } };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'getDetailOfBokk':
      return { books: action.payload };
    default:
      return state;
  }
}
