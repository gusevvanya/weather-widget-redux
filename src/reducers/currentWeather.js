import { SET_WEATHER } from '../constants';

export default function currentWeather(state = '', action) {
  switch (action.type) {
    case SET_WEATHER:
      return action.weather;

    default:
      return state;
  }
}
