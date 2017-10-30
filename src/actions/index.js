import * as citiesReduser from '../reducers/cities';

const addCity = (city) => ({
	type: 'ADD_CITY',
	city
});

export const deleteCity = (city) => {
	return (dispatch, getState) => {
		if(getState().currentCity === city) {			
			dispatch(setCurrentWeather(null));
			dispatch(setCurrentCity(null));
		}
		dispatch(addMessage('Сity was deleted', 'success'));
		dispatch({
			type: 'DELETE_CITY',
			city
		});
	};
};

const setCurrentWeather = (weather) => ({
	type: 'SET_WEATHER',
	weather
});

const setCurrentCity = (city) => ({
	type: 'SET_CURRENT_CITY',
	city
});

const addMessage = (value, type) => {
	return {
		type: 'ADD_MESSAGES',
		value,
		messageType: type
	};
};
export const deleteMessages = (city) => {	
	return {
		type: 'DELETE_MESSAGES',
	};
};

export const fetchCity = city => {
	return (dispatch, getState) => {
		if (!city) return;
		const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c2a8d55ea1dba73a31e902ea7002b7c7`;
	
		fetch(url)
			.then((response) => {
				if(response.ok) {
					return response.json();
				} else {
					throw new Error();
				}
			})
			.then((data) => {
				dispatch(setCurrentCity(city));
				dispatch(setCurrentWeather(data.main.temp));
				
				if (!citiesReduser.isCityExist(getState(), city)) {
					dispatch(addCity(city));
					dispatch(addMessage('City successfully added', 'success'));
				}
			})
			.catch((error) => { 
				 dispatch(addMessage('City is undefined!', 'error'));
			});
	};
};
