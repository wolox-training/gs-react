export const initialState = { user: {} };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'login':
      return { user: action.payload };
    default:
      return state;
  }
}
