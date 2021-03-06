import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WeatherContent from './WeatherContent';

Enzyme.configure({ adapter: new Adapter() });

describe('WeatherContent', () => {
  let props;
  let WeatherContentMount;
  let WeatherContentShallow;

  beforeAll(() => {
    props = {
      currentCity: 'London',
      weather: '23.43',
    };
  });

  beforeEach(() => {
    WeatherContentMount = Enzyme.mount(<WeatherContent {...props} />);
    WeatherContentShallow = Enzyme.shallow(<WeatherContent {...props} />);
  });

  it('Should render', () => {
    expect(WeatherContentShallow.debug()).toMatchSnapshot();
  });

  it('Render weather if the param "currentCity" recived', () => {
    expect(WeatherContentMount.find('.weather').length).toBe(1);
  });

  it('Don\'t render weather if the param "currentCity" is not recived', () => {
    WeatherContentMount.setProps({ currentCity: '' });
    expect(WeatherContentMount.find('.weather').length).toBe(0);
  });
});
