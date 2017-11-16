import React from 'react';
import PropTypes from 'prop-types';

const WeatherContent = ({ currentCity, weather }) => {
  if (currentCity.length === 0) return null;

  return (
    <div className="weather">
      {currentCity}
      <br />
      {weather} &#176;F
    </div>
  );
};

WeatherContent.propTypes = {
  currentCity: PropTypes.string.isRequired,
  weather: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default WeatherContent;
