const initialState = ['London', 'Kiev'];

export default function cities(state = initialState, action) {
  let cities;

  switch (action.type) {
    case 'ADD_CITY':
      return [...state, action.city];

    case 'DELETE_CITY':
    
      cities = state.filter((el) => {
        return (action.city === el) ? false : true;
      });

      return cities;

    default:
      return state;
  }
};

export const isCityExist = (state, city) => {
  for(let i = 0; i < state.cities.length; i++) {
    const value = state.cities[i];

    if(city === value) {
      return true;
    }
  }
    
    return false;
};
