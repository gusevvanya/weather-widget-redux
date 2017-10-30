import {combineReducers} from 'redux';

import cities from './cities';
import currentWeather from './currentWeather';
import currentCity from './ui/currentCity';
import messages from './ui/messages';

export default combineReducers({
  cities,
  currentWeather,
  currentCity,
  messages
});
