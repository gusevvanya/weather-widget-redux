import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './cities';
import {
  ADD_CITY,
  DELETE_CITY,
  ADD_MESSAGES,
  SET_WEATHER,
  SET_CURRENT_CITY,
} from '../constants';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Сities actions', () => {
  const store = mockStore({
    cities: [
      'Kiev',
    ],
    currentWeather: '26',
    ui: {
      currentCity: 'Kiev',
      messages: [],
    },
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
    store.clearActions();
  });

  it('Should create ADD_MESSAGES action if the city is absetn', () => {
    const expectedActions = [
      {
        type: ADD_MESSAGES,
        value: 'Сity can\'t be deleted!',
        messageType: 'error',
      },
    ];

    store.dispatch(actions.deleteCity('London'));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Should create ADD_MESSAGES, SET_WEATHER, SET_CURRENT_CITY, DELETE_CITY actions if delete current city', () => {
    const expectedActions = [
      { type: SET_WEATHER, weather: '' },
      { type: SET_CURRENT_CITY, city: '' },
      { type: ADD_MESSAGES, value: 'Сity was deleted', messageType: 'success' },
      { type: DELETE_CITY, city: 'Kiev' },
    ];

    store.dispatch(actions.deleteCity('Kiev'));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Should create SET_CURRENT_CITY, SET_WEATHER, ADD_CITY, ADD_MESSAGES actions if fetch new', () => {
    fetchMock.getOnce('*', { main: { temp: '66' } });

    const expectedActions = [
      { type: SET_CURRENT_CITY, city: 'London' },
      { type: SET_WEATHER, weather: '66' },
      { type: ADD_CITY, city: 'London' },
      { type: ADD_MESSAGES, value: 'City successfully added', messageType: 'success' },
    ];

    return store.dispatch(actions.fetchCity('London')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should create error ADD_MESSAGES actions if fetch returned 404', () => {
    fetchMock.getOnce('*', { status: 404 });

    const expectedActions = [
      { type: 'ADD_MESSAGES', value: 'City is undefined!', messageType: 'error' },
    ];

    return store.dispatch(actions.fetchCity('London')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
