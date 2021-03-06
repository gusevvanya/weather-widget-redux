import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CitiesList from './CitiesList';
import City from './City';

Enzyme.configure({ adapter: new Adapter() });

describe('CitiesList', () => {
  let props;
  let citiesListMount;
  let citiesListShallow;

  beforeAll(() => {
    props = {
      cities: ['London'],
      currentCity: 'London',
      onCityClick: jest.fn(),
      onDeleteCityClick: jest.fn(),
    };
  });

  beforeEach(() => {
    jest.clearAllMocks();
    citiesListMount = Enzyme.mount(<CitiesList {...props} />);
    citiesListShallow = Enzyme.shallow(<CitiesList {...props} />);
  });

  it('Should render', () => {
    expect(citiesListShallow.debug()).toMatchSnapshot();
  });

  it('Render City component if the param "cities" recived', () => {
    expect(citiesListMount.find(City).length).toBe(1);
  });

  it('Do not render City component if the param "cities" is not recived', () => {
    citiesListMount.setProps({ cities: [] });
    expect(citiesListMount.find(City).length).toBe(0);
  });
});
