import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WeatherWidget from './Component';

Enzyme.configure({ adapter: new Adapter() });

describe('WeatherWidget', () => {
  let props;
  let weatherWidgetShallow;

  beforeAll(() => {
    props = {
      cities: ['London', 'Kharkov'],
      currentWeather: '21.25',
      onSearchSubmit: jest.fn(),
      onCityClick: jest.fn(),
      onDeleteCityClick: jest.fn(),
      onClearMessageClick: jest.fn(),
      currentCity1: 'London',
      messages: [{ value: 'New massage', type: 'success' }],
    };
  });

  beforeEach(() => {
    jest.clearAllMocks();
    weatherWidgetShallow = Enzyme.mount(<WeatherWidget {...props} />)
  });

  it('renders correctly', () => {
    expect(weatherWidgetShallow.debug()).toMatchSnapshot();
  });
});
