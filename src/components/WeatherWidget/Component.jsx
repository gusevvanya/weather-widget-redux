import React from 'react';
import PropTypes from 'prop-types';

import SearchForm from '../SearchForm';
import CitiesList from '../CitiesList/CitiesList';
import WeatherContent from '../WeatherContent';
import MessageList from '../MessageList/MessageList';

const WeatherWidget = ({
  cities,
  currentWeather,
  onSearchSubmit,
  onCityClick,
  onDeleteCityClick,
  messages,
  onClearMessageClick,
  children,
  currentCity1,
}) => {
  const currentCity = currentCity1;

  return (
    <div className="weatherWidget">
      <SearchForm
        onSearchSubmit={onSearchSubmit}
      />
      <CitiesList
        cities={cities}
        currentCity={currentCity}
        onCityClick={onCityClick}
        onDeleteCityClick={onDeleteCityClick}
      />
      <WeatherContent
        weather={currentWeather}
        currentCity={currentCity}
      />

      <MessageList
        messages={messages}
        onClearMessageClick={onClearMessageClick}
      />
      {children}
    </div>
  );
};

WeatherWidget.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentWeather: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onDeleteCityClick: PropTypes.func.isRequired,
  onClearMessageClick: PropTypes.func.isRequired,
  currentCity1: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WeatherWidget;
