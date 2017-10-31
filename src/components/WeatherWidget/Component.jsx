import React from 'react';

import SearchForm from '../SearchForm';
import CitiesList from '../CitiesList/CitiesList';
import WeatherContent from '../WeatherContent';
import MessageList from '../MessageList/MessageList';

const WeatherWidget = ({
  cities,
  // currentCity,
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
      {(cities.length !== 0) &&
        <CitiesList
          cities={cities}
          currentCity={currentCity}
          onCityClick={onCityClick}
          onDeleteCityClick={onDeleteCityClick}
        />
      }
      {(currentCity.length !== 0) &&
        <WeatherContent
          weather={currentWeather}
          currentCity={currentCity}
        />
      }

      {(messages.length !== 0) &&
        <MessageList
          messages={messages}
          onClearMessageClick={onClearMessageClick}
        />
      }
      {children}
    </div>
  );
};

export default WeatherWidget;
