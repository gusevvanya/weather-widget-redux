import {
  ADD_CITY,
  DELETE_CITY,
} from '../constants';

const initialState = ['London', 'Kiev'];

const deleteCity = (state, city) => (
  state.filter(el => (city !== el))
);

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CITY:
      return [...state, action.city];

    case DELETE_CITY:
      return deleteCity(state, action.city);

    default:
      return state;
  }
}

export const isCityExist = (state, city) => {
  for (let i = 0; i < state.cities.length; i += 1) {
    const value = state.cities[i];

    if (city === value) {
      return true;
    }
  }

  return false;
};
