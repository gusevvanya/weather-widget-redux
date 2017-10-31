import { combineReducers } from 'redux';

import cities from './cities';
import currentWeather from './currentWeather';
import ui from './ui';

export default combineReducers({
  cities,
  currentWeather,
  ui,
});
