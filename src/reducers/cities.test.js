import reducer from './cities';
import {
  ADD_CITY,
  DELETE_CITY,
} from '../constants';

describe('Сities reducers', () => {
  it('Should return the inital state', () => {
    expect(reducer(undefined, {})).toEqual(['London', 'Kiev']);
  });
  it('Should add the Kharkov to the state', () => {
    const reducerCall = reducer([], { type: ADD_CITY, city: 'Kharkov' });
    expect(reducerCall).toEqual(['Kharkov']);
  });
  it('Should delete the Kiev from the state', () => {
    const reducerCall = reducer(['London', 'Kiev'], { type: DELETE_CITY, city: 'Kiev' });
    expect(reducerCall).toEqual(['London']);
  });
});
