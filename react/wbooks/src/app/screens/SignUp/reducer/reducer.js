export const initialState = { user: {} };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'createUser':
      return { user: action.payload };
    default:
      return state;
  }
}
