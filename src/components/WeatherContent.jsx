import React from 'react';
import PropTypes from 'prop-types';

const WeatherContent = ({ currentCity, weather }) => (
  <div className="weather">
    {currentCity}
    <br />
    {weather} &#176;F
  </div>
);

WeatherContent.propTypes = {
  currentCity: PropTypes.string.isRequired,
};

export default WeatherContent;
