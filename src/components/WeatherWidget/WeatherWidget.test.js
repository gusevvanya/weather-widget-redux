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
      cities: [],
      currentWeather: '',
      onSearchSubmit: jest.fn(),
      onCityClick: jest.fn(),
      onDeleteCityClick: jest.fn(),
      onClearMessageClick: jest.fn(),
      currentCity1: '',
      messages: [],
    };
  });

  beforeEach(() => {
    jest.clearAllMocks();
    weatherWidgetShallow = Enzyme.mount(<WeatherWidget {...props} />)
  });

  it('renders correctly', () => {
    expect(weatherWidgetShallow.debug()).toMatchSnapshot();
  });
  it('render cities if the param "cities" recived', () => {
    console.log(weatherWidgetShallow.debug());
    weatherWidgetShallow.setProps({ cities: ['sdf'] });
    console.log(weatherWidgetShallow.debug());
  });
});
