import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import persistState from 'redux-localstorage';

import weatherWidget from '../reducers';

const store = createStore(
	weatherWidget, 
	composeWithDevTools(
		applyMiddleware(thunk), 
		persistState(['cities', 'currentWeather', 'currentCity'])
	)
);

export default store;