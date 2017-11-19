import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './cities';
import {
  ADD_CITY,
  DELETE_CITY,
} from '../constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  // afterEach(() => {
  //   fetchMock.reset();
  //   fetchMock.restore();
  // })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    // fetchMock
    //   .getOnce('/todos', { body: { todos: ['do something'] }, headers: { 'content-type': 'application/json' } })


    // const expectedActions = [
    //   { type: ADD_CITY },
    //   { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } }
    // ];
    const store = mockStore({
      cities: [
        'Kiev',
        'aaa'
      ],
      currentWeather: 274.62,
      ui: {
        currentCity: '',
        messages: []
      }
    });
     console.log(store.getActions(), '1111111111');

    store.dispatch(actions.deleteCity('London'))
     console.log(store.getActions(), '2222222222');

    // return store.dispatch(actions.fetchCity('London')).catch(() => {
      
    //   console.log(store.getActions(), '1111111111');


    //   // expect(store.getActions()).toEqual(expectedActions);
    // })
  })
});