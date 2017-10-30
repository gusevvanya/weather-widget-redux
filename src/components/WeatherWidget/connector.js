import {connect} from 'react-redux'
import {deleteCity, fetchCity, deleteMessages } from '../../actions'

const mapStateToProps = (state) => {
	return {
		cities: state.cities,
		currentWeather: state.currentWeather,
		currentCity: state.currentCity,
		messages: state.messages,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onDeleteCityClick: (city) => {
			dispatch(deleteCity(city));
		},
		onCityClick: (city) => {
			dispatch(fetchCity(city));
		},
		onSearchSubmit: (city) => {
			dispatch(fetchCity(city));
		},
		onClearMessageClick: () => {
			dispatch(deleteMessages());
		},
	}
}

export default WrappedComponent =>  connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);