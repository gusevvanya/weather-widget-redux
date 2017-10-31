import { combineReducers } from 'redux';

import currentCity from './currentCity';
import messages from './messages';

export default combineReducers({
  currentCity,
  messages,
});
