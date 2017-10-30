import {compose} from 'redux';

import addIntervalUpdateWeather from '../../HOC/addIntervalUpdateWeather';
import connector from './connector';
import Component from './Component';

const WrappedComponent = compose(
	connector,
	addIntervalUpdateWeather
)(Component);

export default WrappedComponent;