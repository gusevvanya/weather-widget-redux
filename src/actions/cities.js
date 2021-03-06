/* global fetch:false */
import { isCityExist } from '../reducers/cities';
import setCurrentWeather from './currentWeather';
import { addMessage } from './ui/messages';
import setCurrentCity from './ui/currentCity';
import {
  ADD_CITY,
  DELETE_CITY,
} from '../constants';

const addCity = city => ({
  type: ADD_CITY,
  city,
});

const removeCity = city => ({
  type: DELETE_CITY,
  city,
});

export const deleteCity = city => (dispatch, getState) => {
  if (!isCityExist(getState(), city)) {
    dispatch(addMessage('Сity can\'t be deleted!', 'error'));
    return false;
  }
  if (getState().ui.currentCity === city) {
    dispatch(setCurrentWeather(''));
    dispatch(setCurrentCity(''));
  }
  dispatch(addMessage('Сity was deleted', 'success'));
  dispatch(removeCity(city));
};

export const fetchCity = city => (dispatch, getState) => {
  if (!city) return false;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c2a8d55ea1dba73a31e902ea7002b7c7`;

  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then((data) => {
      dispatch(setCurrentCity(city));
      dispatch(setCurrentWeather(data.main.temp));

      if (!isCityExist(getState(), city)) {
        dispatch(addCity(city));
        dispatch(addMessage('City successfully added', 'success'));
      }
    })
    .catch(() => {
      dispatch(addMessage('City is undefined!', 'error'));
    });
};
