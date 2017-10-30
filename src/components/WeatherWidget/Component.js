import React from 'react';

import SearchForm from '../SearchForm';
import CitiesList from '../CitiesList/CitiesList';
import WeatherContent from '../WeatherContent';
import MessageList from '../MessageList/MessageList';

const WeatherWidget = ({
  cities,
  currentCity,
  currentWeather,
  onSearchSubmit,
  onCityClick,
  onDeleteCityClick,
  messages,
  onClearMessageClick,
  children
}) => {
  return (
    <div className="weatherWidget">

      <SearchForm 
        onSearchSubmit={onSearchSubmit}
      />

      {cities && 
        <CitiesList 
          cities={cities} 
          currentCity={currentCity}
          onCityClick={onCityClick}
          onDeleteCityClick={onDeleteCityClick}
        />
      }

      {currentCity  && 
        <WeatherContent 
          weather={currentWeather}
          currentCity={currentCity}
        />
      }

      {messages &&
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
