export default function ui(state = '', action) {
  switch (action.type) {
    case 'SET_CURRENT_CITY':
      return action.city;

    default:
      return state;
  }
}
