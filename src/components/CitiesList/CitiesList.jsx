import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import City from './City';

const CitiesList = ({
  cities,
  currentCity,
  onCityClick,
  onDeleteCityClick,
}) => {
  const citiesList = cities.map((city) => {
    let active = false;

    if (currentCity === city) {
      active = true;
    }

    return (
      <City
        key={city}
        name={city}
        className={classNames('city', { active })}
        onCityClick={onCityClick}
        onDeleteCityClick={onDeleteCityClick}
      />
    );
  });

  return (
    <div className="cities">
      {citiesList}
    </div>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onDeleteCityClick: PropTypes.func.isRequired,
};

export default CitiesList;
